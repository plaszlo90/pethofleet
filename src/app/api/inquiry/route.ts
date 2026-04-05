import { NextRequest, NextResponse } from "next/server";
import { inquirySchema } from "@/types/inquiry";

export const dynamic = "force-dynamic";

// Simple in-memory rate limit: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Túl sok kérés. Kérjük próbálja újra 10 perc múlva." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Érvénytelen kérés." }, { status: 400 });
  }

  const result = inquirySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validációs hiba.", details: result.error.flatten() },
      { status: 422 }
    );
  }

  const data = result.data;

  // Send email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "info@example.com";

  if (resendKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Fleet Solution <noreply@pethofleet.com>",
        to: [toEmail],
        subject: `Új ajánlatkérés – ${data.type === "b2b" ? "Céges" : "Magánszemély"} – ${data.name}`,
        text: [
          `Típus: ${data.type === "b2b" ? "B2B (Céges)" : "B2C (Magánszemély)"}`,
          `Név: ${data.name}`,
          `E-mail: ${data.email}`,
          `Telefon: ${data.phone}`,
          data.company ? `Cég: ${data.company}` : null,
          `Üzenet:\n${data.message}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      // Auto-reply
      await resend.emails.send({
        from: "Pethő Fleet Solution <noreply@fleetsoltion.hu>",
        to: [data.email],
        subject: "Megkaptuk ajánlatkérését",
        text: `Kedves ${data.name}!\n\nKöszönjük megkeresését. Ajánlatkérését megkaptuk, és 24 munkaidős órán belül visszajelzünk.\n\nÜdvözlettel,\nPethő Fleet Solution`,
      });
    } catch (err) {
      console.error("Email sending failed:", err);
      // Don't fail the request if email fails — log and continue
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

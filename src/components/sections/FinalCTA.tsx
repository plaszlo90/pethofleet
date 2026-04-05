import Link from "next/link";
import { Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-20 bg-[var(--color-fleet-orange)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Készen áll a következő lépésre?
        </h2>
        <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
          Kérjen ingyenes, kötelezettségmentes ajánlatot — személyre szabott
          megoldást találunk Önnek.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-8 py-4 text-base bg-white text-[var(--color-fleet-orange)] hover:bg-white/90"
          >
            Ajánlatkérés online
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors px-8 py-4 text-base border-2 border-white/50 text-white hover:border-white hover:bg-white/10"
          >
            <Mail size={18} />
            Írjon emailt
          </a>
        </div>
      </div>
    </section>
  );
}

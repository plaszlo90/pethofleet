# Pethő Fleet Solution — Weboldal Projekt

## Mi ez a projekt?

A Pethő Fleet Solution weboldala. Professzionális flottakezelési és járműbérlési megoldásokat kínál vállalati (B2B) és magánszemély (B2C) ügyfelek számára.

## Tech Stack

- **Frontend:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4
- **Deploy:** Vercel (GitHub repo-ból)
- **Font:** Plus Jakarta Sans (next/font Google)
- **Email:** Resend (tranzakcionális e-mailek az ajánlatkérő formból)
- **Nyelv:** TypeScript strict mode

## Brand Design System

Fleet narancsos prémium paletta — tokenek definiálva a `src/app/globals.css`-ben:

```
fleet-orange:       #F97316   ← CTA gombok, fő akcentszín
fleet-orange-dark:  #EA6C0A   ← Hover állapot
fleet-orange-light: #FFF0E6   ← Narancsos háttér szekciókhoz
fleet-dark:         #111827   ← Heading, hero háttér, sötét szöveg
fleet-surface:      #1F2937   ← Sötét kártyák, dark szekciók
fleet-gray:         #F9FAFB   ← Világos szekció háttér
fleet-border:       #E5E7EB   ← Border elemek
text-primary:       #111827
text-secondary:     #6B7280
```

Kártya stílus: `rounded-2xl border border-[var(--color-fleet-border)] shadow-sm`
CTA gomb: `rounded-xl bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white font-semibold px-8 py-4`

## Mappastruktúra

```
project-fleet/
├── .claude/
│   ├── agents/          ← 14 agent (pethotravel-next-ből átvéve)
│   ├── skills/          ← 28 skill
│   ├── rules/           ← 10 rule + fleet-rules.md
│   └── settings.local.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← Root layout (Header, Footer, font, meta)
│   │   ├── page.tsx                ← Főoldal
│   │   ├── globals.css             ← Design tokenek + Tailwind
│   │   ├── robots.ts               ← robots.txt
│   │   ├── sitemap.ts              ← sitemap.xml
│   │   ├── szolgaltatasok/
│   │   │   └── page.tsx
│   │   ├── kapcsolat/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── inquiry/
│   │           └── route.ts        ← Ajánlatkérő form API (Resend + rate limit)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── B2BSection.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── forms/
│   │   │   └── InquiryForm.tsx     ← Zod validáció, fetch /api/inquiry
│   │   ├── seo/
│   │   │   └── JsonLd.tsx          ← LocalBusiness schema
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeader.tsx
│   │       └── FadeIn.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts            ← SITE adatok, NAV_LINKS
│   │   └── utils.ts                ← cn() helper
│   │
│   └── types/
│       └── inquiry.ts              ← Zod schema + InquiryData type
│
├── .env.example                    ← RESEND_API_KEY, CONTACT_EMAIL
├── CLAUDE.md                       ← ez a fájl
├── next.config.ts                  ← security headers, image config
├── tsconfig.json
└── package.json
```

## Fejlesztési szabályok

- `.claude/fleet-rules.md` — KÖTELEZŐ elolvasni fejlesztés előtt
- `.claude/rules/` — coding-style, patterns, security, git-workflow
- Magyar UI szövegek, angol változónevek és kommentek

## Teendők a deployment előtt

1. `src/lib/constants.ts`-ben valódi domain, email és telefon beállítása
2. `.env.local` létrehozása `.env.example` alapján
3. Vercel project létrehozása és env vars beállítása
4. GitHub repo létrehozása és push
5. Vercel GitHub integration bekapcsolása

## Workflow

1. **Tervezés:** planner agent (Opus)
2. **Implementáció:** Sonnet — komponensenként
3. **Review:** code-reviewer agent (KÖTELEZŐ minden kódváltozáshoz)
4. **Deploy:** Vercel ← GitHub push

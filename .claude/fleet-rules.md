# Pethő Fleet Solution — Projekt-specifikus Szabályok

## Kötelező konvenciók

- Magyar nyelvű UI szövegek, de angol változónevek, komponensnevek, kommentek
- Tailwind CSS utility-first — custom CSS csak ha Tailwind nem elég
- Komponensek: PascalCase (FleetCard.tsx), hookok: camelCase usePrefix (useInquiry.ts)
- Server Components az alapértelmezett — `'use client'` csak interaktív UI-nál
- API route-ok és dinamikus server-komponensek: `export const dynamic = 'force-dynamic'`

## Brand és Design Tokenek

Fleet narancsos prémium paletta — MINDIG a tokeneket használd hex helyett:

| Token | Érték | Mire való |
|-------|-------|-----------|
| `fleet-orange` | `#F97316` | CTA gombok, fő akcentszín |
| `fleet-orange-dark` | `#EA6C0A` | Hover állapot |
| `fleet-orange-light` | `#FFF0E6` | Narancsos háttér szekciókhoz |
| `fleet-dark` | `#111827` | Heading, hero háttér |
| `fleet-surface` | `#1F2937` | Sötét kártyák, dark szekciók |
| `fleet-gray` | `#F9FAFB` | Világos szekció háttér |
| `fleet-border` | `#E5E7EB` | Border elemek |
| `text-primary` | `#111827` | Fő szöveg |
| `text-secondary` | `#6B7280` | Másodlagos szöveg |

## SEO szabályok

- Minden oldalnak KÖTELEZŐ: egyedi `<title>`, `<meta name="description">`, canonical URL, OG tags
- H1: oldalanként PONTOSAN 1 darab, kulcsszót tartalmazó
- Szemantikus HTML: `<article>`, `<section>`, `<aside>`, `<nav>` — nem div-ek mindenütt
- Képek: MINDIG `next/image`, MINDIG `alt` tag (leíró, kulcsszavas, természetes)
- JSON-LD: minden oldalon BreadcrumbList + oldaltípus-specifikus schema
- Internal link: minden oldalról min. 2 link más releváns oldalra

## Képkezelés

- Hero képek: `priority={true}`, `sizes="100vw"`, `quality={85}`
- Kártya képek: `sizes="(max-width: 768px) 100vw, 33vw"`, `quality={80}`
- Formátum: automatikus WebP/AVIF a next/image révén

## Tartalom szabályok

- NE használj generikus AI szöveget — legyél konkrét: számok, ár, idő, helyszín
- Trust elemek MINDEN konverziós oldalon
- CTA MINDEN oldal alján minimum 1×
- B2B szekciók: cégek nevével, előnyökkel, ajánlatkérő CTA-val

## Form és API

- Zod validáció MINDEN form input-ra, frontend ÉS backend oldalon
- Rate limiting az inquiry API-ra (IP alapú, simple)
- Resend a transzakcionális emailekhez (cégnek + auto-reply ügyfélnek)
- SOHA ne client-side kódban tárold az API kulcsokat

## Git workflow

- Branch naming: `feature/oldal-neve` vagy `fix/hiba-leirasa`
- Commit format: `feat(oldal): leírás` vagy `fix(component): leírás`
- SOHA ne pusholj `.env.local` vagy bármilyen secret-et

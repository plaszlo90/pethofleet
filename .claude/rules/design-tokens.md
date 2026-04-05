# Design Token Usage Rule — Pethő Fleet Solution

All **new** or **modified** files must use Tailwind design tokens instead of hard-coded hex values.

| Hex | Token class | Mire való |
|-----|-------------|-----------|
| `#F97316` | `fleet-orange` | CTA gombok, fő akcentszín |
| `#EA6C0A` | `fleet-orange-dark` | Hover állapot |
| `#FFF0E6` | `fleet-orange-light` | Narancsos háttér |
| `#111827` | `fleet-dark` | Heading, hero háttér, sötét szöveg |
| `#1F2937` | `fleet-surface` | Sötét kártyák |
| `#F9FAFB` | `fleet-gray` | Világos szekció háttér |
| `#F3F4F6` | `fleet-gray-mid` | Közepes szürke háttér |
| `#E5E7EB` | `fleet-border` | Border elemek |
| `#111827` | `text-primary` | Fő szöveg |
| `#6B7280` | `text-secondary` | Másodlagos szöveg |
| `#22C55E` | `success` | Siker üzenetek |
| `#EF4444` | `error` | Hiba üzenetek |

Tokens are defined in `src/app/globals.css` under `@theme`.
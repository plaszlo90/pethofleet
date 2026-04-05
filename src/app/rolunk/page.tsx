import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rólunk",
  description:
    "Ismerjük meg a Pethő Fleet Solution történetét — hogyan nőtte ki magát a Pethő Travel Kft. és született meg egy új, flottakezelésre specializált vállalkozás.",
};

const milestones = [
  { year: "2017", text: "Pethő Travel Kft. megalapítása — reptéri transzfer szolgáltatással indul" },
  { year: "2019", text: "Az első saját járművek és az első vállalati ügyfelek" },
  { year: "2021", text: "Flotta bővítés — 10+ jármű, rendszeres B2B partnerkapcsolatok" },
  { year: "2023", text: "Pethő Fleet Solution megalapítása — önálló flottakezelési és bérlési divízió" },
  { year: "2025", text: "5 éves jubileum — 50+ jármű, 200+ elégedett ügyfél" },
];

const values = [
  "Megbízhatóság minden körülmény között",
  "Személyes kapcsolat minden ügyféllel",
  "Rugalmasság az igényekhez igazodva",
  "Átláthatóság az árakban és feltételekben",
  "Folyamatos fejlődés és minőség",
];

export default function RolunkPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-fleet-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[var(--color-fleet-orange)] text-sm font-semibold uppercase tracking-widest mb-4">
              A mi történetünk
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Egy szenvedély, ami vállalkozássá vált
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A Pethő Fleet Solution mögött egy egyszerű felismerés áll: ha az
              ember komolyan veszi, amit csinál, előbb-utóbb kinövi az eredeti
              kereteket.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <SectionHeader
                label="A kezdetek"
                title="Pethő László és a Pethő Travel"
              />
              <div className="mt-6 space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Pethő László 2017-ben alapította meg a{" "}
                  <strong className="text-[var(--color-fleet-dark)]">
                    Pethő Travel Kft.-t
                  </strong>{" "}
                  Kemecse székhellyel. Az elképzelés egyszerű volt: megbízható,
                  pontos és személyes reptéri transzfer szolgáltatás Kelet-
                  Magyarország és Budapest, Bécs, Pozsony repülőterei között.
                </p>
                <p>
                  Évről évre nőtt az ügyfélkör, nőtt a flotta, nőttek az
                  igények. A vállalati partnerek hamarosan nem csak alkalmi
                  transzfert, hanem rendszeres, hosszú távú járműhasználatot és
                  flottakezelést is igényeltek.
                </p>
                <p>
                  2023-ban, hat évnyi tapasztalattal a háta mögött, Pethő László
                  úgy döntött: itt az idő egy{" "}
                  <strong className="text-[var(--color-fleet-dark)]">
                    önálló flottakezelési vállalkozást
                  </strong>{" "}
                  indítani. Így született meg a{" "}
                  <strong className="text-[var(--color-fleet-dark)]">
                    Pethő Fleet Solution
                  </strong>
                  .
                </p>
                <p>
                  Ma a Pethő Fleet Solution és a Pethő Travel Kft. egymást
                  kiegészítve működik — az egyik a személyszállítás, a másik a
                  flottakezelés és bérlés terén nyújt professzionális megoldást
                  vállalatok és magánszemélyek számára.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/kapcsolat"
                  className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-7 py-3.5 text-base bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
                >
                  Vegyük fel a kapcsolatot
                </Link>
              </div>
            </FadeIn>

            {/* Values */}
            <FadeIn delay={150}>
              <div className="bg-[var(--color-fleet-gray)] rounded-2xl p-8 border border-[var(--color-fleet-border)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-fleet-orange)] mb-5">
                  Értékeink
                </p>
                <ul className="space-y-3">
                  {values.map((v) => (
                    <li key={v} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[var(--color-fleet-orange)] flex-shrink-0"
                      />
                      <span className="text-sm text-[var(--color-fleet-dark)] font-medium">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reference */}
              <div className="mt-6 bg-[var(--color-fleet-dark)] rounded-2xl p-8 border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                  Testvérvállalkozás
                </p>
                <p className="text-white font-semibold text-lg mb-2">
                  Pethő Travel Kft.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reptéri transzfer és személyszállítás Kelet-Magyarország és
                  Budapest, Bécs, Pozsony repülőterei között — 2017 óta.
                </p>
                <a
                  href="https://pethotravel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-[var(--color-fleet-orange)] hover:underline"
                >
                  pethotravel.com →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--color-fleet-gray)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Mérföldkövek"
            title="Az út idáig"
            center
            className="mb-14"
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--color-fleet-border)]" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 80}>
                  <div className="flex gap-6 items-start">
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-[var(--color-fleet-orange)] flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-[var(--color-fleet-orange)]">
                        {m.year}
                      </span>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm text-[var(--color-fleet-dark)] font-medium leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

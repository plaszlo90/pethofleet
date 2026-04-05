import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const benefits = [
  "Dedikált kapcsolattartó minden ügyfélhez",
  "Rugalmas szerződési feltételek 1 hónaptól",
  "Teljes körű adminisztráció és riporting",
  "Csereautó garancia meghibásodás esetén",
  "Kedvezményes árak 3+ jármű esetén",
  "Elektronikus számla és havi elszámolás",
];

export function B2BSection() {
  return (
    <section className="py-20 bg-[var(--color-fleet-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionHeader
              label="Céges ügyfeleknek"
              title="Flottakezelés, ami valóban megkönnyíti a munkát"
              description="Vállalata koncentráljon az üzletre — a flottát bízza ránk. Egyedi megállapodással, átlátható díjakkal."
              light
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--color-fleet-orange)] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/kapcsolat"
                className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-8 py-4 text-base bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
              >
                Céges ajánlatkérés
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-[var(--color-fleet-surface)] rounded-2xl p-8 border border-white/10">
              <p className="text-[var(--color-fleet-orange)] text-sm font-semibold uppercase tracking-widest mb-2">
                Gyors kalkulátor
              </p>
              <p className="text-2xl font-bold text-white mb-6">
                Mennyibe kerül a flottakezelés?
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Az ár függ a jármű típusától, a bérlési időtartamtól és a
                kiegészítő szolgáltatásoktól. Kérjen egyedi, ingyenes ajánlatot
                — 24 órán belül visszahívjuk.
              </p>
              <Link
                href="/kapcsolat"
                className="w-full inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-6 py-3 text-sm border-2 border-[var(--color-fleet-orange)] text-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange)] hover:text-white"
              >
                Ingyenes ajánlatkérés →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

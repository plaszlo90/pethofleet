import { Shield, Clock, Wrench, BarChart3, HeadphonesIcon, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: Shield,
    title: "Megbízható és biztonságos",
    description:
      "Minden járművünk rendszeresen karbantartott, biztosított és átvilágított. Ügyfelei adatai és flottájuk teljes biztonságban van.",
  },
  {
    icon: Clock,
    title: "Rugalmas bérlési feltételek",
    description:
      "Rövid- és hosszútávú bérlés egyaránt — naptól egész évig. Egyedi igényekre szabott ajánlatokkal.",
  },
  {
    icon: Wrench,
    title: "Teljes körű karbantartás",
    description:
      "Saját szervizháttérrel gondoskodunk a flotta állapotáról. Nincs meglepetés, nincs leállás.",
  },
  {
    icon: BarChart3,
    title: "Átlátható riporting",
    description:
      "Valós idejű adatok a flotta használatáról, fogyasztásáról és állapotáról — egy helyen.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedikált kapcsolattartó",
    description:
      "Minden céges ügyfélhez személyes account managert biztosítunk, aki ismeri az igényeket.",
  },
  {
    icon: Leaf,
    title: "Ökobarát lehetőségek",
    description:
      "Flottánkban hibrid és elektromos járművek is elérhetők a fenntarthatóságra törekvő vállalatok számára.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-[var(--color-fleet-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Miért minket válasszon?"
          title="6 ok, amiért ügyfeleink velünk maradnak"
          description="Nem csak járművet adunk — komplex megoldást nyújtunk, ami valóban megkönnyíti a cég életét."
          center
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-[var(--color-fleet-border)] p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-fleet-orange-light)] mb-4">
                    <Icon size={24} className="text-[var(--color-fleet-orange)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-fleet-dark)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

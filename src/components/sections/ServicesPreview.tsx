import Link from "next/link";
import { Building2, User, Package, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const services = [
  {
    icon: Building2,
    title: "Vállalati flottakezelés",
    description:
      "Teljes körű B2B flottamenedzsment: üzemeltetés, karbantartás, adminisztráció, riporting — minden egyben.",
    tag: "B2B",
  },
  {
    icon: User,
    title: "Személyes járműbérlés",
    description:
      "Prémium személygépkocsik bérlése rugalmas időtartamra. Személyes vagy üzleti célra egyaránt.",
    tag: "B2C / B2B",
  },
  {
    icon: Package,
    title: "Egyedi megoldások",
    description:
      "Különleges igényekre szabott flottacsomagok, hosszútávú szerződéssel és garantált rendelkezésre állással.",
    tag: "Egyedi",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Szolgáltatásaink"
          title="Átfogó megoldások flottára és bérlésre"
          description="Legyen szó 1 vagy 100 járműről — személyre szabott ajánlattal segítünk."
          center
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 100}>
                <div className="group rounded-2xl border border-[var(--color-fleet-border)] p-8 hover:border-[var(--color-fleet-orange)] hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-fleet-orange-light)]">
                      <Icon size={24} className="text-[var(--color-fleet-orange)]" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-fleet-gray)] text-[var(--color-text-secondary)]">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-fleet-dark)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/szolgaltatasok"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-fleet-orange)] group-hover:gap-3 transition-all"
                  >
                    Részletek <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

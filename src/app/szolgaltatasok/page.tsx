import Link from "next/link";
import {
  Building2,
  User,
  Package,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szolgáltatásaink",
  description:
    "Vállalati flottakezelés, prémium járműbérlés és egyedi logisztikai megoldások B2B és B2C ügyfelek számára.",
};

const services = [
  {
    id: "flottakezeles",
    icon: Building2,
    tag: "B2B",
    title: "Vállalati flottakezelés",
    description:
      "Teljes körű flottamenedzsment vállalatok számára — az üzemeltetéstől a karbantartásig, az adminisztrációtól a riportingig.",
    features: [
      "Dedikált flottamanager",
      "Valós idejű nyomkövetés",
      "Megelőző karbantartás",
      "Biztosítás intézése",
      "Havi riporting és analytics",
      "Csereautó garancia",
    ],
  },
  {
    id: "jarmuberles",
    icon: User,
    tag: "B2C / B2B",
    title: "Prémium járműbérlés",
    description:
      "Személygépkocsik bérlése rugalmas időtartamra — egy naptól több hónapig. Üzleti és privát célra egyaránt.",
    features: [
      "Széles járműválaszték",
      "Rugalmas bérlési idő",
      "Kiszállítás és elvitel",
      "Teljes biztosítás",
      "Nincs kaució rejtett feltételekkel",
      "Online foglalás",
    ],
  },
  {
    id: "egyedi",
    icon: Package,
    tag: "Egyedi",
    title: "Egyedi flottacsomagok",
    description:
      "Speciális igényekre szabott megoldások — nagyvállalati szerződéstől a szezonális flottabővítésig.",
    features: [
      "Egyedi szerződési feltételek",
      "Kedvezmény 3+ jármű esetén",
      "Vegyes flotta (benzin / hibrid / elektromos)",
      "Sofőrszolgálat kiegészítőként",
      "Sürgősségi rendelkezésre állás",
      "Havi elszámolás",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-fleet-gray)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Szolgáltatásaink"
            title="Komplex megoldások flottára és bérlésre"
            description="Minden ügyfélnek a saját igényeihez illő csomagot kínálunk — legyen az egy jármű vagy egész flotta."
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.id}>
                  <div
                    id={service.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-fleet-orange-light)]">
                          <Icon
                            size={20}
                            className="text-[var(--color-fleet-orange)]"
                          />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-fleet-gray)] text-[var(--color-text-secondary)]">
                          {service.tag}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-[var(--color-fleet-dark)] mb-4">
                        {service.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Link
                        href="/kapcsolat"
                        className="inline-flex items-center gap-2 font-semibold text-[var(--color-fleet-orange)] hover:gap-3 transition-all"
                      >
                        Ajánlatkérés <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="bg-[var(--color-fleet-gray)] rounded-2xl p-8 border border-[var(--color-fleet-border)]">
                        <p className="text-sm font-semibold text-[var(--color-fleet-dark)] mb-5">
                          Mit tartalmaz?
                        </p>
                        <ul className="flex flex-col gap-3">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle2
                                size={18}
                                className="text-[var(--color-fleet-orange)] flex-shrink-0"
                              />
                              <span className="text-sm text-[var(--color-text-secondary)]">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {i < services.length - 1 && (
                    <hr className="border-[var(--color-fleet-border)] mt-16" />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

import { InquiryForm } from "@/components/forms/InquiryForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/constants";
import { Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat és ajánlatkérés",
  description:
    "Kérjen ingyenes, kötelezettségmentes ajánlatot flottakezelési vagy járműbérlési igényéhez. 24 órán belül visszajelzünk.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Clock,
    label: "Elérhetőség",
    value: "Hétfőtől péntekig 8–18 óra",
    href: null,
  },
];

export default function KapcsolatPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[var(--color-fleet-gray)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Kapcsolat"
            title="Kérjen ingyenes ajánlatot"
            description="Töltse ki az alábbi űrlapot, és 24 órán belül személyre szabott ajánlattal keressük."
          />
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>

            {/* Elérhetőségek */}
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-fleet-dark)] mb-6">
                Közvetlen elérhetőségek
              </h2>
              <ul className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-fleet-orange-light)] flex-shrink-0">
                        <Icon
                          size={18}
                          className="text-[var(--color-fleet-orange)]"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-text-secondary)] font-medium uppercase tracking-wide">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-[var(--color-fleet-dark)] hover:text-[var(--color-fleet-orange)] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[var(--color-fleet-dark)]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 bg-[var(--color-fleet-gray)] rounded-2xl p-6 border border-[var(--color-fleet-border)]">
                <p className="text-sm font-semibold text-[var(--color-fleet-dark)] mb-2">
                  Gyors válasz garantált
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Minden megkeresésre 24 munkaidős órán belül válaszolunk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

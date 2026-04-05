import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

const references = [
  {
    company: "Pethő Travel Kft.",
    description: "Reptéri transzfer és személyszállítás",
    quote:
      "A Pethő Fleet Solution testvérvállalatunk — közös gyökerekből, azonos minőségi szemlélettel. Ügyfeleink igényeire szabott flottamegoldásokat kínálunk 2017 óta.",
    since: "2017 óta partner",
    initial: "PT",
  },
];

export function References() {
  return (
    <section className="py-20 bg-[var(--color-fleet-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Referenciáink"
          title="Akik megbíznak bennünk"
          description="Büszkék vagyunk partnereinkre és ügyfeleinkre, akik nap mint nap mellettünk választanak."
          center
          className="mb-14"
        />

        <div className="max-w-2xl mx-auto">
          {references.map((r, i) => (
            <FadeIn key={r.company} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-[var(--color-fleet-border)] p-8 shadow-sm">
                <div className="flex items-start gap-5 mb-6">
                  {/* Logo placeholder */}
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-fleet-dark)] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">{r.initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-fleet-dark)] text-lg">
                      {r.company}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {r.description}
                    </p>
                    <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-fleet-orange-light)] text-[var(--color-fleet-orange)]">
                      {r.since}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <Quote
                    size={20}
                    className="text-[var(--color-fleet-orange)] mb-2"
                  />
                  <p className="text-[var(--color-text-secondary)] leading-relaxed italic text-sm">
                    "{r.quote}"
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-[var(--color-text-secondary)]">
          Szeretné vállalata is szerepelni itt?{" "}
          <a href="/kapcsolat" className="text-[var(--color-fleet-orange)] font-medium hover:underline">
            Vegye fel velünk a kapcsolatot.
          </a>
        </p>
      </div>
    </section>
  );
}

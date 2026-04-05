import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: "50+", label: "Aktív jármű a flottában" },
  { value: "7+", label: "Év tapasztalat" },
  { value: "200+", label: "Elégedett ügyfél" },
  { value: "24/7", label: "Ügyfélszolgálat" },
];

export function TrustBar() {
  return (
    <section className="bg-[var(--color-fleet-orange)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/80 mt-1">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-fleet-dark)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-fleet-dark)] via-[var(--color-fleet-surface)] to-[var(--color-fleet-dark)] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="text-[var(--color-fleet-orange)] text-sm font-semibold uppercase tracking-widest mb-4">
            Pethő Fleet Solution
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Professzionális <br />
            <span className="text-[var(--color-fleet-orange)]">
              flottakezelés
            </span>{" "}
            és járműbérlés
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Vállalati flottamenedzsment és prémium járműbérlési megoldások
            egyéni és céges ügyfelek számára. Megbízható, rugalmas,
            professzionális.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-8 py-4 text-base bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
            >
              Ajánlatkérés — ingyenes
            </Link>
            <Link
              href="/szolgaltatasok"
              className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-8 py-4 text-base border-2 border-white/30 text-white hover:border-white hover:bg-white/10"
            >
              Szolgáltatásaink
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

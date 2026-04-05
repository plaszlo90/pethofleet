import Link from "next/link";
import Image from "next/image";

// Unsplash – fleet of cars, CC0 free to use
// Photo by Julien Moreau: https://unsplash.com/photos/Zu1nHHEUmZE
const HERO_IMAGE = "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1920&q=80";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-fleet-dark)] overflow-hidden min-h-[560px] md:min-h-[640px]">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="Pethő Fleet Solution – prémium flotta"
        fill
        className="object-cover object-center"
        priority
        quality={85}
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--color-fleet-dark)]/75" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="text-[var(--color-fleet-orange)] text-sm font-semibold uppercase tracking-widest mb-4">
            Pethő Fleet Solution — 5 éve megbízható partner
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

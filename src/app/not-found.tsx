import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-24 px-4">
      <div className="text-center max-w-lg">
        {/* 404 number */}
        <p className="text-8xl md:text-9xl font-bold text-[var(--color-fleet-orange)] leading-none mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-fleet-dark)] mb-4">
          Ez az oldal nem található
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-10 leading-relaxed">
          A keresett oldal nem létezik, vagy átköltözött. Nézzen körül a
          weboldalon, vagy lépjen kapcsolatba velünk.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-6 py-3 text-sm bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
          >
            Vissza a főoldalra
          </Link>
          <Link
            href="/kapcsolat"
            className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-6 py-3 text-sm border-2 border-[var(--color-fleet-border)] text-[var(--color-fleet-dark)] hover:border-[var(--color-fleet-dark)]"
          >
            Kapcsolat
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-fleet-orange)] hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

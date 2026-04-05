import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-fleet-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-3">
              Pethő{" "}
              <span className="text-[var(--color-fleet-orange)]">Fleet</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Navigáció
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Elérhetőség
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-fleet-surface)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.name}. Minden jog fenntartva.</p>
          <div className="flex gap-4">
            <Link href="/adatvedelmi-tajekoztato" className="hover:text-white transition-colors">
              Adatvédelmi tájékoztató
            </Link>
            <Link href="/aszf" className="hover:text-white transition-colors">
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

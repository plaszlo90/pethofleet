"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-fleet-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div style={{ width: 140, height: 44, overflow: "hidden", position: "relative", flexShrink: 0 }}>
              <Image
                src="/logo.jpg"
                alt={SITE.name}
                width={140}
                height={198}
                style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}
                priority
              />
            </div>
            {/* 5 éves badge */}
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-fleet-orange-light)] text-[var(--color-fleet-orange)]">
              ★ 5 éve a piacon
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-fleet-dark)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-4 py-2 text-sm bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
            >
              Ajánlatkérés
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[var(--color-fleet-dark)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-fleet-border)] bg-white px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[var(--color-fleet-dark)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kapcsolat"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center font-semibold rounded-xl transition-colors px-4 py-2 text-sm bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
          >
            Ajánlatkérés
          </Link>
        </div>
      )}
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Users, Briefcase, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Járműveink",
  description:
    "Ismerjük meg prémium flottánkat: Škoda Octavia, Ford Transit Custom, Volkswagen Passat és Škoda Superb.",
};

const vehicles = [
  {
    name: "Škoda Octavia",
    category: "Személyautó",
    tag: "Gazdaságos",
    tagColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-u6AsEEX0uJA?w=800&q=80",
    description:
      "Megbízható, takarékos és tágas — az Octavia ideális választás napi ingázáshoz, üzleti utakhoz és hosszabb transzferekhez egyaránt.",
    specs: [
      { icon: Users, label: "5 utas" },
      { icon: Briefcase, label: "Nagy csomagtér" },
      { icon: Star, label: "Automatikus / Manuális" },
    ],
    ideal: "Céges napi használat, reptéri transzfer, hosszú út",
  },
  {
    name: "Ford Transit Custom",
    category: "Kisteherautó / Busz",
    tag: "Csapat & Teher",
    tagColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-jU7f2AXuKnM?w=800&q=80",
    description:
      "A Ford Transit Custom a tökéletes megoldás csapatszállításra, rendezvényre, illetve kisebb áruszállítási feladatokra. Rugalmas és megbízható.",
    specs: [
      { icon: Users, label: "8–9 utas" },
      { icon: Briefcase, label: "XL rakodótér" },
      { icon: Star, label: "Manuális váltó" },
    ],
    ideal: "Csapatmozgatás, rendezvény, kisáruszállítás",
  },
  {
    name: "Volkswagen Passat",
    category: "Prémium Személyautó",
    tag: "Business",
    tagColor: "bg-slate-100 text-slate-700",
    image: "https://images.unsplash.com/photo-L9Mcwc6hmW8?w=800&q=80",
    description:
      "A Volkswagen Passat az üzleti élet klasszikusa. Elegáns megjelenés, kényelmes belső tér és kiváló menetdinamika — tárgyalókra, VIP transzferre.",
    specs: [
      { icon: Users, label: "5 utas" },
      { icon: Briefcase, label: "Spacious boot" },
      { icon: Star, label: "Automata váltó" },
    ],
    ideal: "Üzleti találkozók, VIP szállítás, B2B flotta",
  },
  {
    name: "Škoda Superb",
    category: "Prémium Limuzin",
    tag: "Prémium",
    tagColor: "bg-orange-100 text-orange-700",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80",
    description:
      "A Škoda Superb flottánk zászlóshajója. Luxus kivitel, panorámatető, masszázs ülések — amikor csak a legjobb elég. Prémium üzleti és VIP igényekre.",
    specs: [
      { icon: Users, label: "5 utas" },
      { icon: Briefcase, label: "Extra nagy csomagtér" },
      { icon: Star, label: "Automata, 4x4" },
    ],
    ideal: "VIP transzfer, igazgatói szállítás, különleges alkalmak",
  },
];

export default function JarmuveinkPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-fleet-gray)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Flottánk"
            title="Prémium járművek minden igényre"
            description="Gondosan válogatott flottánk garantálja, hogy minden utazás kényelmes, biztonságos és megbízható legyen."
          />
        </div>
      </section>

      {/* Vehicles grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {vehicles.map((v, i) => (
              <FadeIn key={v.name} delay={i * 100}>
                <div className="rounded-2xl border border-[var(--color-fleet-border)] overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative h-56 bg-[var(--color-fleet-gray)]">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${v.tagColor}`}>
                      {v.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wide mb-1">
                      {v.category}
                    </p>
                    <h2 className="text-xl font-bold text-[var(--color-fleet-dark)] mb-3">
                      {v.name}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                      {v.description}
                    </p>

                    {/* Specs */}
                    <div className="flex gap-4 mb-5 flex-wrap">
                      {v.specs.map((s) => {
                        const Icon = s.icon;
                        return (
                          <div key={s.label} className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                            <Icon size={14} className="text-[var(--color-fleet-orange)]" />
                            {s.label}
                          </div>
                        );
                      })}
                    </div>

                    {/* Ideal for */}
                    <div className="bg-[var(--color-fleet-gray)] rounded-xl px-4 py-3 mb-5">
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        <span className="font-semibold text-[var(--color-fleet-dark)]">Ideális: </span>
                        {v.ideal}
                      </p>
                    </div>

                    <Link
                      href="/kapcsolat"
                      className="inline-flex items-center justify-center w-full font-semibold rounded-xl transition-colors px-5 py-2.5 text-sm bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white"
                    >
                      Ajánlatkérés erre a járműre
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

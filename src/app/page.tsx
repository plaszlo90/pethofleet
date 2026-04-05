import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { References } from "@/components/sections/References";
import { B2BSection } from "@/components/sections/B2BSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Flottakezelés és járműbérlés`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Flottakezelés és járműbérlés`,
    description: SITE.description,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <WhyUs />
      <ServicesPreview />
      <References />
      <B2BSection />
      <FinalCTA />
    </main>
  );
}

export const SITE = {
  name: "Pethő Fleet Solution",
  shortName: "Fleet Solution",
  description:
    "Professzionális flottakezelési és járműbérlési megoldások vállalatok és magánszemélyek számára.",
  url: "https://pethofleet.com",
  email: "fleet@pethotravel.com",
  address: "4501 Kemecse, Móricz Zsigmond utca 76.",
  mapsUrl: "https://maps.google.com/?q=48.0688802,21.7999082",
  mapsEmbed: "https://maps.google.com/maps?q=48.0688802,21.7999082&hl=hu&z=17&output=embed",
  cegJegyzekSzam: "15-09-090722",
  adoSzam: "32146754-2-15",
  euAdoSzam: "HU32146754",
} as const;

export const BANKSZAMLAK = [
  { bank: "BinX", szam: "30400001-00000000-76439391" },
] as const;

export const NAV_LINKS = [
  { label: "Járműveink", href: "/jarmuveink" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Kapcsolat", href: "/kapcsolat" },
] as const;

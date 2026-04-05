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
  cegJegyzekSzam: "15-09-085413",
  adoSzam: "25977574-2-15",
  euAdoSzam: "HU25977574",
} as const;

export const BANKSZAMLAK = [
  { bank: "MBH Bank", szam: "10104459-36613800-01005007" },
  { bank: "K&H Bank", szam: "10404405-50526868-89811003" },
  { bank: "BinX", szam: "3040 0001 0000 0000 9388 5960" },
] as const;

export const NAV_LINKS = [
  { label: "Járműveink", href: "/jarmuveink" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Kapcsolat", href: "/kapcsolat" },
] as const;

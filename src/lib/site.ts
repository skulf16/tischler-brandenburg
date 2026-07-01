export const site = {
  name: "Fachverband Tischler Brandenburg",
  short: "Tischler Brandenburg",
  tagline: "Landesinnungsverband · Land Brandenburg",
  description:
    "Landesinnungsverband der Tischlerbetriebe im Land Brandenburg. Über 350 Handwerksunternehmen in 14 Innungen — eine Stimme für das Tischlerhandwerk.",
  phone: "0331 – 71 90 91",
  phoneHref: "tel:+49331719091",
  fax: "0331 – 71 90 92",
  email: "geschaeftsfuehrung@tischlerhandwerk-brandenburg.de",
  address: {
    street: "Hegelallee 44",
    city: "14467 Potsdam",
  },
} as const;

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "/verband", label: "Verband" },
  { href: "/vorteile", label: "Vorteile" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/nachwuchs", label: "Nachwuchs" },
  { href: "/seminare", label: "Seminare" },
  { href: "/projekte", label: "Projekte" },
  { href: "/news", label: "News" },
  { href: "/partner", label: "Partner" },
];

export const platforms: NavItem[] = [
  { href: "https://bb.tischler-schreiner-campus.de", label: "AZUBI-Campus" },
  { href: "https://meine-werbemittel.tischlerhandwerk-brandenburg.de", label: "Meine Werbemittel" },
  { href: "https://www.tischler-schreiner.de", label: "Tischlersuche" },
];

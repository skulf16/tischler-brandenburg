import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Starke Partner des Fachverbands Tischler Brandenburg — von Material über Software bis zur Absicherung.",
};

const partners = [
  "NESTRO Lufttechnik",
  "MB Brandschutztischlerei Beelitz",
  "Palette CAD",
  "ZEG Holz + Kunststoff",
  "UNI-ELECTRONIC",
  "Ampere",
  "Dr. Schmidt & Erdsiek",
  "REISSER Schraubentechnik",
  "Hesse",
  "PYTHA Lab",
  "ISOGON Fenstersysteme",
  "OS Datensysteme",
  "Münchener Verein",
  "Würth",
  "Nüßing",
  "LAYER-Großhandel",
  "CWS Workwear",
  "MEWA Textil-Service",
  "SIGNAL IDUNA",
  "Remmers",
];

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        crumb="Partner"
        label="Gemeinsam stark"
        title="Unsere Partner."
        lede="Starke Partner begleiten das Tischlerhandwerk in Brandenburg — von Material über Software bis zur Absicherung."
      />

      <section className="section">
        <Container>
          <ul className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <li
                key={p}
                className="flex min-h-[7rem] items-center justify-center bg-paper p-6 text-center text-sm font-medium text-ink-soft"
              >
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section border-t border-line">
        <Container className="max-w-2xl">
          <SectionHeading
            label="Sichtbar werden"
            title="Partner werden?"
            intro="Sie möchten das Tischlerhandwerk in Brandenburg unterstützen und sichtbar werden? Sprechen Sie mit der Geschäftsstelle — wir freuen uns auf Sie."
          />
          <div className="mt-8">
            <Button href="/kontakt" variant="primary" withArrow>
              Kontakt aufnehmen
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Werden Sie Teil der Gemeinschaft"
        title="Gemeinsame Sache machen — mit uns."
        primary={{ href: "/kontakt", label: "Mitglied werden" }}
        secondary={{ href: "/vorteile", label: "Vorteile entdecken" }}
      />
    </>
  );
}

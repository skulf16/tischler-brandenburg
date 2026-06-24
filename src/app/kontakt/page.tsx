import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { Mail, Phone, Pin } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Ihre Ansprechpartner in der Geschäftsstelle Potsdam des Fachverbands Tischler Brandenburg — für Mitgliedschaft, Schulungen und Beratung.",
};

const team = [
  {
    initials: "RN",
    name: "Rene Nowotny",
    role: "Leitung der Geschäftsführung",
    email: "geschaeftsfuehrung@tischlerhandwerk-brandenburg.de",
    phone: "0331 – 71 90 91",
    phoneHref: "tel:+49331719091",
  },
  {
    initials: "AL",
    name: "Andrea Liebke",
    role: "Sekretariat & Buchhaltung",
    email: "buchhaltung@tischlerhandwerk-brandenburg.de",
    phone: "0331 – 71 90 91",
    phoneHref: "tel:+49331719091",
  },
  {
    initials: "SL",
    name: "Sandra Lützen",
    role: "Fort- & Weiterbildung · Mitgliederverwaltung",
    email: "schulung@tischlerhandwerk-brandenburg.de",
    phone: "0331 – 70 44 79 45",
    phoneHref: "tel:+4933170447945",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        crumb="Kontakt"
        label="Geschäftsstelle Potsdam"
        title="Sprechen Sie mit uns."
        lede="Persönlich, erreichbar, am Puls des Handwerks — Ihre Ansprechpartner für Mitgliedschaft, Schulungen und Beratung."
      />

      <section className="section">
        <Container>
          <SectionHeading
            label="Ihre Ansprechpartner"
            title="Die Geschäftsstelle."
            intro="Drei Menschen, ein Anliegen: das Tischlerhandwerk in Brandenburg stark zu halten."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {team.map((p) => (
              <article key={p.name} className="bg-paper p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {p.initials}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.role}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent" />
                    <span className="truncate">{p.email}</span>
                  </a>
                  <a
                    href={p.phoneHref}
                    className="flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent" />
                    {p.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="label mb-4">Werden Sie Teil der Gemeinschaft</p>
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-ink md:text-4xl">
              Gemeinsame Sache machen — mit uns.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Sie führen einen Tischlerbetrieb in Brandenburg? Lernen Sie die Innung kennen und
              sichern Sie sich alle Vorteile der Gemeinschaft.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="mailto:geschaeftsfuehrung@tischlerhandwerk-brandenburg.de?subject=Mitgliedschaft%20Tischlerinnung%20Brandenburg"
                variant="primary"
                withArrow
              >
                Mitglied werden
              </Button>
              <Button href="https://www.tischler-schreiner.de" variant="outline">
                Tischler finden
              </Button>
            </div>
          </div>

          <div className="border border-line p-8 md:p-10">
            <h3 className="font-display text-xl font-medium text-ink">Geschäftsstelle Potsdam</h3>
            <address className="mt-6 space-y-4 text-sm not-italic text-ink-soft">
              <p className="flex items-start gap-3">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}
                </span>
              </p>
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-ink">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {site.phone}
              </a>
              <p className="flex items-center gap-3 text-ink-faint">
                <Phone className="h-4 w-4 shrink-0 text-accent/60" />
                Fax: {site.fax}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {site.email}
              </a>
            </address>
          </div>
        </Container>
      </section>
    </>
  );
}

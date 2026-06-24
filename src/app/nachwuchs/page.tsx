import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/button";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nachwuchs & Ausbildung",
  description:
    "AZUBI-Campus, Fort- und Weiterbildung und der Gestaltungswettbewerb „Die Gute Form“ — der Fachverband Tischler Brandenburg gibt Handwerk an die nächste Generation weiter.",
};

const feats = [
  {
    title: "AZUBI-Campus",
    text: "Digitale Lernplattform für Auszubildende im Tischler- & Schreinerhandwerk.",
    href: "https://bb.tischler-schreiner-campus.de",
  },
  {
    title: "Fort- & Weiterbildung",
    text: "Fachlehrgänge und Schulungen — laufend, praxisnah, anerkannt.",
    href: "/kontakt",
  },
  {
    title: "Die Gute Form",
    text: "Der Gestaltungswettbewerb für die besten Gesellenstücke der Region.",
    href: "/projekte",
  },
];

export default function NachwuchsPage() {
  return (
    <>
      <PageHeader
        crumb="Nachwuchs"
        label="Standard war gestern"
        title="Etwas für Individualisten."
        lede="Wer Holz bändigt, denkt in Möglichkeiten — nicht in Schablonen. Diese Haltung geben wir an die nächste Generation weiter."
      />

      <section className="section">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              label="Wissen weitergeben"
              title={<>Das Tischlerhandwerk lebt vom Nachwuchs.</>}
              intro="Mit Schulungen, einem digitalen Lern-Campus und Wettbewerben, die Können sichtbar machen, begleiten wir junge Tischlerinnen und Tischler — von der Ausbildung bis zum eigenen Meisterstück."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="https://bb.tischler-schreiner-campus.de" variant="primary" withArrow>
                Zum AZUBI-Campus
              </Button>
              <Button href="/kontakt" variant="outline">
                Schulungen & Weiterbildung
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/img/werkstatt-beratung.jpg"
              alt="Erfahrener Tischler und Auszubildende besprechen eine Konstruktionszeichnung in der Werkstatt"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="section border-t border-line">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {feats.map((f, i) => {
              const external = f.href.startsWith("http");
              return (
                <article key={f.title} className="flex flex-col bg-paper p-8 md:p-10">
                  <span className="font-display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">{f.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{f.text}</p>
                  {external ? (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-dark"
                    >
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={f.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-dark"
                    >
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Ausbilden mit Rückhalt"
        title="Gemeinsam für den Nachwuchs."
        primary={{ href: "/kontakt", label: "Mitglied werden" }}
        secondary={{ href: "/projekte", label: "Die Gute Form" }}
      />
    </>
  );
}

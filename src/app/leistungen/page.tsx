import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Lizenzprogramme, Zertifizierungen, Sachverständigenpool und Ausschreibungsdatenbanken — Marktchancen über den Fachverband Tischler Brandenburg.",
};

const leistungen = [
  { title: "Lizenzprogramme", text: "HKH-Systemtüren mit garantierten Eigenschaften — Rauch-, Schall-, Klima- und Brandschutz — sowie WK2-Fenster und handlaufhängende Treppen." },
  { title: "Zertifizierungen", text: "Unterstützung bei der normgerechten CE-Kennzeichnung für Fenster und Außentüren." },
  { title: "Sachverständigenpool", text: "Vereinfachter Zugriff auf einen handwerklich orientierten Pool von Sachverständigen." },
  { title: "Ausschreibungsdatenbanken", text: "Aufnahme in überregionale Ausschreibungsdatenbanken — neue Aufträge, neue Reichweite." },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        crumb="Leistungen"
        label="Marktchancen"
        title="Auch bei steigenden Qualitätsanforderungen bestehen."
        lede="Der Markt wird anspruchsvoller — bei Normen, Sicherheit und Nachweisen. Über den Verband sichern Sie sich Qualifikationen und Werkzeuge, die einzelne Betriebe selten allein erschließen."
      />

      <section className="section">
        <Container>
          <ul className="border-t border-line">
            {leistungen.map((l, i) => (
              <li
                key={l.title}
                className="grid gap-4 border-b border-line py-10 md:grid-cols-[auto_1fr_1.4fr] md:gap-12 md:py-12"
              >
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-medium leading-tight text-ink">
                  {l.title}
                </h2>
                <p className="text-lg leading-relaxed text-ink-soft">{l.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section border-t border-line">
        <Container>
          <figure>
            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src="/img/praezision-augenmass.jpg"
                alt="Junger Tischler prüft mit dem Augenmaß die Ebenheit eines gehobelten Holzbretts"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 border-t border-line pt-4 font-display text-lg text-ink">
              Qualität ist messbar — Präzision im Detail.
            </figcaption>
          </figure>
        </Container>
      </section>

      <CtaBand
        eyebrow="Mehr erreichen — gemeinsam"
        title="Wir beraten Sie zu Ihren Marktchancen."
        primary={{ href: "/kontakt", label: "Beratung anfragen" }}
        secondary={{ href: "/vorteile", label: "Alle Vorteile" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "News",
  description: "Aktuelles aus dem Fachverband Tischler Brandenburg.",
};

const news = [
  {
    date: "21. Juli 2025",
    tag: "Event",
    title: "Potsdam rockt!",
    text: "Ein Abend für die Gemeinschaft — mit der Nachwuchskünstlerin Leonie und dem Tischlerhandwerk im Mittelpunkt.",
  },
  {
    date: "15. Mai 2024",
    tag: "Fachtagung",
    title: "Mitteldeutsche Fensterfachtagung 2024",
    text: "Einladung zur Fachtagung rund um Fenster, Normen und Technik — Wissen aus erster Hand für Ihren Betrieb.",
  },
  {
    date: "09. August 2023",
    tag: "Wettbewerb",
    title: "Die Pokale sind eingetroffen",
    text: "Für die 27. Preisverleihung der besten Gesellenstücke in Brandenburg und Berlin — bereit für die Sieger.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        crumb="News"
        label="Aktuelles"
        title="News aus dem Verband."
        lede="Termine, Tagungen und Geschichten aus der Gemeinschaft — was das Tischlerhandwerk in Brandenburg bewegt."
      />

      <section className="section">
        <Container>
          <ul className="border-t border-line">
            {news.map((post) => (
              <li
                key={post.title}
                className="grid gap-4 border-b border-line py-10 md:grid-cols-[14rem_1fr] md:gap-12"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-label text-ink-faint">
                  <time>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span>{post.tag}</span>
                </div>
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-medium leading-tight text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">{post.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        eyebrow="Immer auf dem Laufenden"
        title="Nichts mehr verpassen."
        primary={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
        secondary={{ href: "/projekte", label: "Projekte ansehen" }}
      />
    </>
  );
}

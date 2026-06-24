import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Projekte — Die Gute Form",
  description:
    "Im Gestaltungswettbewerb „Die Gute Form“ zeigen die besten Gesellinnen und Gesellen, was im Tischlerhandwerk steckt.",
};

const years = [
  { no: "2024", meta: "Aktueller Jahrgang" },
  { no: "2023", meta: "Preisträger & Gesellenstücke" },
  { no: "2022", meta: "Rückblick" },
];

const gallery = [
  { src: "/img/slider1.jpg", caption: "Zinkenverbindung in Massivholz", tag: "Präzision" },
  { src: "/img/slider2.jpg", caption: "Möbel mit Charakter", tag: "Maßarbeit" },
  { src: "/img/slider3.jpg", caption: "An der Hobelbank", tag: "Tradition" },
];

export default function ProjektePage() {
  return (
    <>
      <PageHeader
        crumb="Projekte"
        label="Die Gute Form"
        title="Können, das ausgezeichnet wird."
        lede="Im Wettbewerb „Die Gute Form“ zeigen die besten Gesellinnen und Gesellen, was im Tischlerhandwerk steckt — handwerkliche Präzision trifft auf eigenständige Gestaltung."
      />

      <section className="section">
        <Container>
          <figure>
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/img/pokale.jpg"
                alt="Die gläsernen Pokale der Preisverleihung für die besten Gesellenstücke des Tischlerhandwerks"
                fill
                sizes="(max-width: 1024px) 100vw, 78rem"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 border-t border-line pt-4 font-display text-lg text-ink">
              Die Pokale der 27. Preisverleihung — Brandenburg & Berlin
            </figcaption>
          </figure>

          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {years.map((y) => (
              <div key={y.no} className="bg-paper p-8">
                <span className="font-display text-5xl font-normal text-ink">{y.no}</span>
                <p className="mt-4 text-sm uppercase tracking-label text-ink-faint">Die Gute Form</p>
                <p className="mt-1 text-[0.95rem] text-ink-soft">{y.meta}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-ink-soft">
            27. Preisverleihung der besten Gesellenstücke des Tischlerhandwerks für Brandenburg und
            Berlin — eine Tradition, die Nachwuchs feiert.
          </p>
        </Container>
      </section>

      <section className="section border-t border-line">
        <Container>
          <SectionHeading
            label="Einblicke"
            title="Handwerk, das man sieht."
            intro="Von der Schwalbenschwanz-Zinkung bis zur Hobelbank — ein Blick in die Werkstätten unserer Innungsbetriebe."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-4">
                  <span className="font-display text-lg text-ink">{shot.caption}</span>
                  <span className="text-xs uppercase tracking-label text-ink-faint">{shot.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Zeigen Sie, was Sie können"
        title="Teil der Gemeinschaft werden."
        primary={{ href: "/kontakt", label: "Mitglied werden" }}
        secondary={{ href: "/nachwuchs", label: "Nachwuchs & Ausbildung" }}
      />
    </>
  );
}

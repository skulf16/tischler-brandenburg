import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Verband",
  description:
    "Der Fachverband Tischler Brandenburg ist der Landesinnungsverband der Tischlerbetriebe im Land Brandenburg — über 350 Betriebe in 14 Innungen.",
};

const pillars = [
  {
    title: "Berufsausbildung",
    text: "Mitarbeit an der bundeseinheitlichen Regelung der Ausbildungsinhalte — über die Ausschüsse des Handwerks.",
  },
  {
    title: "Fachinformationen",
    text: "Berufsspezifische News aus Technik, Technologie und Recht — kompakt, bevor sie relevant werden.",
  },
  {
    title: "Betriebsberatung",
    text: "Vorbereitung und Durchführung von Fachlehrgängen — bei Bedarf in Zusammenarbeit mit der Industrie.",
  },
];

const facts = [
  { num: "350+", label: "Mitgliedsbetriebe im Land Brandenburg" },
  { num: "14", label: "Innungen als regionale Basis" },
  { num: "1", label: "Geschäftsstelle in Potsdam" },
  { num: "∞", label: "Generationen Handwerkstradition" },
];

export default function VerbandPage() {
  return (
    <>
      <PageHeader
        crumb="Verband"
        label="Wer wir sind"
        title="Der Verband."
        lede="Der Landesinnungsverband der Tischlerbetriebe im Land Brandenburg — eine starke Gemeinschaft aus über 350 Betrieben in 14 Innungen."
      />

      <section className="section">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              label="Gemeinsame Sache machen"
              title={<>Allein ist vieles schwer.<br />Als Gemeinschaft machbar.</>}
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Industrie, Bürokratie, immer neue Normen, fehlender Nachwuchs — vieles davon lässt
                sich als einzelner Betrieb kaum stemmen. Gemeinsam mit über 350 Kolleginnen und
                Kollegen schon.
              </p>
              <p>
                Der <strong className="font-medium text-ink">Fachverband Tischler Brandenburg</strong>{" "}
                ist der Landesinnungsverband der Tischlerbetriebe im Land Brandenburg. Zusammen mit dem
                Bundesverband schaffen wir bestmögliche Rahmenbedingungen für das Tischlerhandwerk von
                heute — und erhalten es für die Generationen von morgen.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[4/5]">
            <Image
              src="/img/tischlermeister-portrait.jpg"
              alt="Tischlermeister an seiner Werkbank in der Werkstatt"
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
            {pillars.map((p, i) => (
              <article key={p.title} className="bg-paper p-8 md:p-10">
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section border-t border-line">
        <Container>
          <SectionHeading
            label="Organisation"
            title="Eine klare Struktur."
            intro="Vom Vorstand über die Innungen bis zu den Fachausschüssen — getragen von Ehrenamt und Geschäftsstelle."
          />
          <dl className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-paper p-8">
                <dt className="font-display text-4xl font-normal text-ink">{f.num}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-soft">{f.label}</dd>
              </div>
            ))}
          </dl>
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

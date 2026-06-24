import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Vorteile",
  description:
    "Von der Beratung bis zum Werbemittel — gebündelte Leistungen, die für Mitglieder des Fachverbands Tischler Brandenburg selbstverständlich sind.",
};

const vorteile = [
  { title: "Betriebsberatung", text: "Persönliche Beratung in betriebswirtschaftlichen, rechtlichen und technischen Fragen — damit Sie sich aufs Handwerk konzentrieren können." },
  { title: "Berufsausbildung", text: "Mitgestaltung bundeseinheitlicher Ausbildungsinhalte und Begleitung Ihrer Azubis — von der ersten Stunde bis zum Gesellenstück." },
  { title: "Fachinformationen", text: "Aktuelle News aus Technik, Technologie und Recht — aufbereitet und eingeordnet für Ihren Betrieb." },
  { title: "Öffentlichkeitsarbeit", text: "Wir machen das Tischlerhandwerk sichtbar — mit Kampagnen, Presse und einem starken Markenzeichen." },
  { title: "Ihr Online-Auftritt", text: "Einheitlicher, moderner Internetauftritt unter dem Markenzeichen der Verbandsorganisation." },
  { title: "Tarifpolitik", text: "Eine starke Stimme bei Tarif- und arbeitsrechtlichen Themen — verhandelt im Sinne des Handwerks." },
  { title: "Kostenersparnis", text: "Rahmenverträge und Mitgliederkonditionen, die sich rechnen — z. B. 10 % Rabatt bei der Cyber-Risiken-Versicherung." },
  { title: "Marktchancen", text: "Lizenzen, Zertifizierungen und Ausschreibungsdatenbanken, mit denen Sie steigende Qualitätsanforderungen souverän erfüllen." },
  { title: "Meine Werbemittel", text: "Professionelle Werbemittel mit Ihrem Logo — fix und fertig über unsere Online-Plattform bestellt." },
];

export default function VorteilePage() {
  return (
    <>
      <PageHeader
        crumb="Vorteile"
        label="Ihre Mitgliedervorteile"
        title="Zehn gute Gründe."
        lede="Von der Beratung bis zum Werbemittel — gebündelte Leistungen, die einzeln teuer und mühsam wären, für Mitglieder aber selbstverständlich sind."
      />

      <section className="section">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {vorteile.map((v, i) => (
              <article key={v.title} className="bg-paper p-8 md:p-10">
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{v.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{v.text}</p>
              </article>
            ))}
          </div>

          <Link
            href="/kontakt"
            id="mitglieder"
            className="group mt-10 flex flex-col items-start justify-between gap-6 border border-line p-8 transition-colors hover:border-ink sm:flex-row sm:items-center md:p-10"
          >
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-medium text-ink">Nur für Mitglieder</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                Exklusiver Bereich mit Vorlagen, Verträgen und Fachwissen — geschützt und jederzeit
                abrufbar.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              Zugang anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Container>
      </section>

      <CtaBand
        eyebrow="Bereit für die Gemeinschaft?"
        title="Sichern Sie sich alle Vorteile."
        primary={{ href: "/kontakt", label: "Mitglied werden" }}
        secondary={{ href: "/leistungen", label: "Leistungen ansehen" }}
      />
    </>
  );
}

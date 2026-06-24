import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader crumb="Datenschutz" title="Datenschutzerklärung" />
      <section className="section">
        <Container className="max-w-2xl space-y-8 text-ink-soft">
          {/* TODO: Vollständige Datenschutzerklärung nach DSGVO ergänzen und rechtlich prüfen lassen. */}
          <p className="leading-relaxed">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Website wird statisch
            ausgeliefert; es werden keine personenbezogenen Daten ohne Ihre aktive Eingabe
            verarbeitet.
          </p>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">Verantwortliche Stelle</h2>
            <p className="mt-3 leading-relaxed">[Verantwortliche Stelle und Kontaktdaten ergänzen]</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">Ihre Rechte</h2>
            <p className="mt-3 leading-relaxed">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. [Details ergänzen.]
            </p>
          </div>
          <p className="text-sm text-ink-faint">
            Hinweis: Dieser Text ist ein Platzhalter und muss vor Veröffentlichung durch eine
            vollständige, rechtlich geprüfte Datenschutzerklärung ersetzt werden.
          </p>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader crumb="Impressum" title="Impressum" />
      <section className="section">
        <Container className="max-w-2xl space-y-8 text-ink-soft">
          {/* TODO: Pflichtangaben nach § 5 DDG / § 18 MStV vervollständigen und rechtlich prüfen lassen. */}
          <div>
            <h2 className="font-display text-xl font-medium text-ink">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3 leading-relaxed">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">Kontakt</h2>
            <p className="mt-3 leading-relaxed">
              Telefon: {site.phone}
              <br />
              Telefax: {site.fax}
              <br />
              E-Mail: {site.email}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">Vertretungsberechtigt</h2>
            <p className="mt-3 leading-relaxed">[Name der vertretungsberechtigten Person ergänzen]</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">Verantwortlich für den Inhalt</h2>
            <p className="mt-3 leading-relaxed">[Name und Anschrift gemäß § 18 Abs. 2 MStV ergänzen]</p>
          </div>
          <p className="text-sm text-ink-faint">
            Hinweis: Dieser Text ist ein Platzhalter und muss vor Veröffentlichung vervollständigt
            und rechtlich geprüft werden.
          </p>
        </Container>
      </section>
    </>
  );
}

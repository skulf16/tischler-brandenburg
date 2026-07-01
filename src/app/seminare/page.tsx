import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import {
  getSeminare,
  formatDatum,
  formatPreis,
  type Seminar,
} from "@/lib/seminare";

export const metadata: Metadata = {
  title: "Seminare & Weiterbildung — Tischler Brandenburg",
  description:
    "Aktuelle Seminare und Fortbildungen des Fachverbands Tischler Brandenburg.",
};

// Daten alle 10 Minuten neu aus der Kursboard-DB laden (schont die DB,
// hält die Anzeige aber aktuell genug für einen Seminarkalender).
export const revalidate = 600;

function Platzstatus({ frei, gesamt }: { frei: number; gesamt: number }) {
  if (frei <= 0) {
    return <span className="text-ink-faint">Ausgebucht</span>;
  }
  const knapp = frei <= Math.max(2, Math.round(gesamt * 0.2));
  return (
    <span className={knapp ? "text-accent-dark" : "text-ink-soft"}>
      {frei} {frei === 1 ? "Platz" : "Plätze"} frei
    </span>
  );
}

function SeminarKarte({ s }: { s: Seminar }) {
  return (
    <article className="flex flex-col bg-paper p-8">
      <div className="flex items-center gap-3 text-xs uppercase tracking-label text-ink-faint">
        <time>{formatDatum(s.beginn)}</time>
        {s.ort && (
          <>
            <span aria-hidden>·</span>
            <span>{s.ort}</span>
          </>
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-medium text-ink">{s.titel}</h3>

      {s.beschreibung && (
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {s.beschreibung}
        </p>
      )}

      <dl className="mt-6 space-y-1.5 text-sm">
        {s.zielgruppe && (
          <div className="flex gap-2">
            <dt className="text-ink-faint">Zielgruppe:</dt>
            <dd className="text-ink-soft">{s.zielgruppe}</dd>
          </div>
        )}
        <div className="flex gap-2">
          <dt className="text-ink-faint">Gebühr:</dt>
          <dd className="text-ink-soft">{formatPreis(s.preis)}</dd>
        </div>
        {s.anmeldeschluss && (
          <div className="flex gap-2">
            <dt className="text-ink-faint">Anmeldeschluss:</dt>
            <dd className="text-ink-soft">{formatDatum(s.anmeldeschluss)}</dd>
          </div>
        )}
      </dl>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="text-sm font-medium">
          <Platzstatus frei={s.plaetzeFrei} gesamt={s.plaetzeGesamt} />
        </span>
        <Button href={`/seminare/${s.id}`} variant="ghost" withArrow>
          Details
        </Button>
      </div>
    </article>
  );
}

export default async function SeminarePage() {
  const seminare = await getSeminare("tischler");

  return (
    <>
      <PageHeader
        crumb="Seminare"
        label="Weiterbildung"
        title="Seminare & Fortbildungen"
        lede="Fachwissen aus erster Hand — aktuelle Lehrgänge und Seminare für das Tischlerhandwerk in Brandenburg."
      />

      <section className="section">
        <Container>
          {seminare.length === 0 ? (
            <p className="text-lg text-ink-soft">
              Aktuell sind keine Seminare ausgeschrieben. Schauen Sie bald wieder
              vorbei.
            </p>
          ) : (
            <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {seminare.map((s) => (
                <SeminarKarte key={s.id} s={s} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

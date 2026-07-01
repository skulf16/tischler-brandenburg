import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { getSeminar, formatDatum, formatPreis } from "@/lib/seminare";
import { AnmeldeFormular } from "./anmelde-formular";

// Zur Laufzeit rendern, nicht beim Build (DB wird erst beim Aufruf gebraucht).
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const seminar = await getSeminar(Number(params.id)).catch(() => null);
  return { title: seminar ? `${seminar.titel} — Tischler Brandenburg` : "Seminar" };
}

export default async function SeminarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) notFound();

  const seminar = await getSeminar(id).catch(() => null);
  if (!seminar) notFound();

  const ausgebucht = seminar.plaetzeFrei <= 0;

  return (
    <>
      <PageHeader
        crumb="Seminar"
        label="Weiterbildung"
        title={seminar.titel}
        lede={`${formatDatum(seminar.beginn)}${seminar.ort ? ` · ${seminar.ort}` : ""}`}
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Beschreibung + Eckdaten */}
          <div>
            {seminar.beschreibung && (
              <p className="text-lg leading-relaxed text-ink-soft">
                {seminar.beschreibung}
              </p>
            )}

            <dl className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              <Eckdatum label="Termin" wert={formatDatum(seminar.beginn)} />
              {seminar.ort && <Eckdatum label="Ort" wert={seminar.ort} />}
              {seminar.zielgruppe && (
                <Eckdatum label="Zielgruppe" wert={seminar.zielgruppe} />
              )}
              <Eckdatum label="Gebühr" wert={formatPreis(seminar.preis)} />
              {seminar.anmeldeschluss && (
                <Eckdatum
                  label="Anmeldeschluss"
                  wert={formatDatum(seminar.anmeldeschluss)}
                />
              )}
              <Eckdatum
                label="Freie Plätze"
                wert={ausgebucht ? "Ausgebucht" : String(seminar.plaetzeFrei)}
              />
            </dl>
          </div>

          {/* Anmeldung */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="font-display text-2xl font-medium text-ink">
              Anmeldung
            </h2>
            <div className="mt-5">
              {ausgebucht ? (
                <p className="border border-line bg-paper p-6 text-ink-soft">
                  Dieses Seminar ist leider ausgebucht.
                </p>
              ) : (
                <AnmeldeFormular seminarId={seminar.id} />
              )}
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

function Eckdatum({ label, wert }: { label: string; wert: string }) {
  return (
    <div className="bg-paper p-5">
      <dt className="text-xs uppercase tracking-label text-ink-faint">{label}</dt>
      <dd className="mt-1 text-ink">{wert}</dd>
    </div>
  );
}

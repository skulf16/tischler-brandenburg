import type { RowDataPacket } from "mysql2";
import pool from "@/lib/db";

// Fachgewerke, wie sie in der Kursboard-DB (Spalte `gewerk`) hinterlegt sind.
export type Gewerk = "tischler" | "dachdecker";

// Eigener, sauberer Typ — entkoppelt die Website vom internen Kursboard-Schema.
// Ändert Kursboard später Spaltennamen, passen wir nur das SELECT unten an.
export type Seminar = {
  id: number;
  titel: string;
  beschreibung: string | null;
  beginn: string; // "YYYY-MM-DD"
  ende: string | null;
  ort: string | null;
  preis: number | null;
  plaetzeFrei: number;
  plaetzeGesamt: number;
  zielgruppe: string | null;
  anmeldeschluss: string | null;
};

interface SeminarRow extends RowDataPacket {
  id: number;
  titel: string;
  beschreibung: string | null;
  beginn: string;
  ende: string | null;
  ort: string | null;
  preis: string | null; // DECIMAL kommt als String
  plaetzeFrei: number;
  plaetzeGesamt: number;
  zielgruppe: string | null;
  anmeldeschluss: string | null;
}

/**
 * Liest die öffentlich sichtbaren, noch anstehenden Seminare eines Gewerks.
 * Nur `veroeffentlicht = 1` und `startdatum >= heute` — Entwürfe und
 * vergangene Termine bleiben außen vor.
 */
export async function getSeminare(gewerk: Gewerk): Promise<Seminar[]> {
  const [rows] = await pool.query<SeminarRow[]>(
    `SELECT
        kurs_id        AS id,
        bezeichnung    AS titel,
        beschreibung   AS beschreibung,
        startdatum     AS beginn,
        enddatum       AS ende,
        ort            AS ort,
        preis_euro     AS preis,
        plaetze_frei   AS plaetzeFrei,
        plaetze_gesamt AS plaetzeGesamt,
        zielgruppe     AS zielgruppe,
        anmeldeschluss AS anmeldeschluss
     FROM   seminare
     WHERE  gewerk = ?
       AND  veroeffentlicht = 1
       AND  startdatum >= CURDATE()
     ORDER BY startdatum ASC`,
    [gewerk],
  );

  return rows.map((r) => ({
    ...r,
    preis: r.preis === null ? null : Number(r.preis),
  }));
}

/**
 * Lädt ein einzelnes, öffentlich sichtbares Seminar anhand seiner ID.
 * Gibt null zurück, wenn es nicht existiert oder nicht veröffentlicht ist.
 */
export async function getSeminar(id: number): Promise<Seminar | null> {
  const [rows] = await pool.query<SeminarRow[]>(
    `SELECT
        kurs_id        AS id,
        bezeichnung    AS titel,
        beschreibung   AS beschreibung,
        startdatum     AS beginn,
        enddatum       AS ende,
        ort            AS ort,
        preis_euro     AS preis,
        plaetze_frei   AS plaetzeFrei,
        plaetze_gesamt AS plaetzeGesamt,
        zielgruppe     AS zielgruppe,
        anmeldeschluss AS anmeldeschluss
     FROM   seminare
     WHERE  kurs_id = ?
       AND  veroeffentlicht = 1
     LIMIT 1`,
    [id],
  );

  const row = rows[0];
  if (!row) return null;
  return { ...row, preis: row.preis === null ? null : Number(row.preis) };
}

const monat = [
  "Jan.", "Feb.", "März", "Apr.", "Mai", "Juni",
  "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez.",
];

/** "2026-09-15" -> "15. Sept. 2026" */
export function formatDatum(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${monat[m - 1]} ${y}`;
}

/** 450 -> "450 €" · null -> "auf Anfrage" */
export function formatPreis(preis: number | null): string {
  if (preis === null || preis === 0) return "auf Anfrage";
  return `${preis.toLocaleString("de-DE")} €`;
}

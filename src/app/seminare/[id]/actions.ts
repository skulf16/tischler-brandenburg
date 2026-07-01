"use server";

import { z } from "zod";
import pool from "@/lib/db";

// Rückmeldung an das Formular (Erfolg/Fehler + Text)
export type AnmeldeState = { ok: boolean; message: string };

// Eingaben streng validieren — niemals rohe Formulardaten in die DB
const Schema = z.object({
  seminarId: z.coerce.number().int().positive(),
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(150),
  firma: z.string().trim().max(200).optional(),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
});

export async function anmelden(
  _prev: AnmeldeState,
  formData: FormData,
): Promise<AnmeldeState> {
  const parsed = Schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0].message };
  }
  const { seminarId, name, firma, email } = parsed.data;

  // Name grob in Vor-/Nachname aufteilen (Kursboard-Schema erwartet beides)
  const teile = name.split(/\s+/);
  const vorname = teile.length > 1 ? teile.slice(0, -1).join(" ") : name;
  const nachname = teile.length > 1 ? teile[teile.length - 1] : "";

  try {
    // Test-Weg (Weg B): schreibt in unsere eigene Eingangs-Tabelle,
    // nicht direkt in Kursboards Produktiv-Tabellen.
    await pool.query(
      `INSERT INTO anmeldungen (kurs_id, vorname, nachname, email, betrieb, status)
       VALUES (?, ?, ?, ?, ?, 'neu')`,
      [seminarId, vorname, nachname, email, firma || null],
    );
    return {
      ok: true,
      message: "Vielen Dank! Ihre Anmeldung ist eingegangen.",
    };
  } catch {
    return {
      ok: false,
      message: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    };
  }
}

# Fachverband Tischler Brandenburg — Website

Neuaufbau der Website mit **Next.js (App Router) + React + TypeScript + Tailwind CSS**.
Helles, minimalistisches Editorial-Layout — bewusst aufgeräumt und generisch, damit es als
Vorlage für die Innungen dienen kann.

## Starten

> Voraussetzung: **Node.js ≥ 18.17** (empfohlen 20 LTS) und npm.

```bash
cd tischler-web
npm install
npm run dev      # Entwicklung auf http://localhost:3000
```

Produktion:

```bash
npm run build
npm run start
```

Falls bei `npm run start` die Bildoptimierung einen Fehler zu `sharp` meldet:
`npm install sharp`.

## Struktur

```
src/
  app/
    layout.tsx            Root-Layout (Schriften, Header, Footer, Metadaten)
    page.tsx              Startseite
    <route>/page.tsx      Verband, Vorteile, Leistungen, Nachwuchs,
                          Projekte, News, Partner, Kontakt, Impressum, Datenschutz
    globals.css           Tailwind + Basis-Stile
    icon.png              Favicon (= Logo)
  components/             Header, Footer, Button, Container, CtaBand, …
  lib/site.ts             zentrale Stammdaten (Name, Kontakt, Navigation)
public/img/               Bilder + Logo
```

## Design-Entscheidungen

- **Logo** wird unverändert als Markenkennung gezeigt (transparentes PNG, Originalproportionen,
  keine Rahmung/Beschneidung) — `src/components/site-header.tsx` / `site-footer.tsx`.
- **Entfernt** gegenüber der alten Seite: rotierendes Siegel, Schwalbenschwanz-Trenner
  („Häuser"), Holzmaserung-/Papier-Texturen, Schnörkel-/Script-Schrift — keine Verspieltheiten.
- **Akzentfarbe** `#E67900`, aus dem Logo entnommen (Tailwind: `accent`). Sonst Weiß + neutrale
  Grautöne und Haarlinien.
- **Schriften** via `next/font`: Inter (UI/Text) + Lora (Display) — selbst gehostet, kein
  externer Request zur Laufzeit.

## ⚠️ Vor dem Livegang

- **Bilder:** Aktuell sind die wasserzeichenfreien Bestandsfotos eingebunden
  (`slider1–3.jpg`, `pokale.jpg`). Für einen hochwertigen Referenzauftritt sollten professionell
  lizenzierte Fotos verwendet werden — einfach die Dateien in `public/img/` ersetzen (gleiche
  Namen → keine Codeänderung). Die früheren iStock-Vorschaubilder wurden wegen Wasserzeichen
  **nicht** übernommen.
- **Impressum & Datenschutz** sind Platzhalter und müssen rechtlich vervollständigt werden
  (`src/app/impressum`, `src/app/datenschutz`).
- **News/Projekte** verlinken bislang auf Übersichten ohne Detailseiten — bei Bedarf um
  dynamische Routen (`news/[slug]`) erweitern.

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { ArrowRight } from "@/components/icons";

const stats = [
  { num: "350+", label: "Mitgliedsbetriebe" },
  { num: "14", label: "Innungen im Land" },
  { num: "1", label: "starke Gemeinschaft" },
];

const leistungen = [
  {
    title: "Betriebsberatung",
    text: "Persönliche Beratung in betriebswirtschaftlichen, rechtlichen und technischen Fragen — damit Sie sich aufs Handwerk konzentrieren können.",
  },
  {
    title: "Berufsausbildung",
    text: "Mitgestaltung bundeseinheitlicher Ausbildungsinhalte und Begleitung Ihrer Auszubildenden — von der ersten Stunde bis zum Gesellenstück.",
  },
  {
    title: "Kostenersparnis",
    text: "Rahmenverträge und Mitgliederkonditionen, die sich rechnen — gebündelte Leistungen, die einzeln teuer und mühsam wären.",
  },
];

const gallery = [
  { src: "/img/slider1.jpg", caption: "Zinkenverbindung in Massivholz", tag: "Präzision" },
  { src: "/img/slider2.jpg", caption: "Möbel mit Charakter", tag: "Maßarbeit" },
  { src: "/img/slider3.jpg", caption: "An der Hobelbank", tag: "Tradition" },
];

const news = [
  { date: "21. Juli 2025", tag: "Event", title: "Potsdam rockt!", text: "Ein Abend für die Gemeinschaft — mit Nachwuchskünstlerin und dem Tischlerhandwerk im Mittelpunkt." },
  { date: "15. Mai 2024", tag: "Fachtagung", title: "Mitteldeutsche Fensterfachtagung 2024", text: "Wissen aus erster Hand rund um Fenster, Normen und Technik — für Ihren Betrieb." },
  { date: "09. August 2023", tag: "Wettbewerb", title: "Die Pokale sind eingetroffen", text: "Für die 27. Preisverleihung der besten Gesellenstücke in Brandenburg und Berlin." },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO — dark walnut anchor with workshop photo ---------- */}
      <section className="relative isolate overflow-hidden bg-walnut text-cream">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/slider1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-walnut-900/88 via-walnut-900/50 to-walnut-900/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut-900/70 via-transparent to-transparent" />
        </div>
        <Container className="py-28 md:py-40">
          <p className="mb-6 text-xs font-semibold uppercase tracking-label text-accent">
            In Holz gedacht · seit Generationen
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-normal leading-[1.02] tracking-tight md:text-7xl [text-shadow:0_2px_30px_rgba(20,14,9,0.6)]">
            Mehr als nur ein Handwerk.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/90 [text-shadow:0_1px_16px_rgba(20,14,9,0.55)]">
            Über 350 Tischlerbetriebe. 14 Innungen. Eine Stimme für das Tischlerhandwerk in
            Brandenburg — traditionsbewusst, gemeinschaftlich, zukunftsstark.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/kontakt" variant="primary" withArrow>
              Mitglied werden
            </Button>
            <Link
              href="/vorteile"
              className="inline-flex items-center justify-center border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream"
            >
              Vorteile entdecken
            </Link>
          </div>
        </Container>

        <div className="border-t border-cream/15">
          <Container className="grid grid-cols-1 divide-y divide-cream/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4 py-8 sm:justify-center">
                <span className="font-display text-4xl font-normal text-cream">{s.num}</span>
                <span className="text-sm uppercase tracking-label text-cream/60">{s.label}</span>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* ---------- MISSION — text + workshop photo ---------- */}
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
                Der{" "}
                <strong className="font-medium text-ink">Fachverband Tischler Brandenburg</strong> ist
                der Landesinnungsverband der Tischlerbetriebe im Land Brandenburg. Zusammen mit dem
                Bundesverband schaffen wir bestmögliche Rahmenbedingungen für das Tischlerhandwerk von
                heute.
              </p>
              <Link
                href="/verband"
                className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent-dark"
              >
                Mehr über den Verband <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[5/4]">
            <Image
              src="/img/slider2.jpg"
              alt="Maßgefertigtes Möbelstück aus heller Esche in der Tischlerwerkstatt"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* ---------- LEISTUNGEN / VORTEILE ---------- */}
      <section className="section border-t border-line">
        <Container>
          <SectionHeading
            label="Ihre Mitgliedervorteile"
            title="Gute Gründe, Teil der Innung zu sein."
            intro="Von der Beratung bis zum Werbemittel — gebündelte Leistungen, die einzeln teuer und mühsam wären, für Mitglieder aber selbstverständlich sind."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {leistungen.map((item, i) => (
              <article key={item.title} className="bg-paper p-8 md:p-10">
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/vorteile" variant="outline" withArrow>
              Alle Vorteile ansehen
            </Button>
          </div>
        </Container>
      </section>

      {/* ---------- GALERIE ---------- */}
      <section className="section border-t border-line">
        <Container>
          <SectionHeading label="Einblicke" title="Handwerk, das man sieht." />
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

      {/* ---------- NEWS ---------- */}
      <section className="section border-t border-line">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading label="Aktuelles" title="News aus dem Verband." />
            <Button href="/news" variant="ghost" withArrow>
              Alle News
            </Button>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {news.map((post) => (
              <article key={post.title} className="flex flex-col bg-paper p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-label text-ink-faint">
                  <span>{post.tag}</span>
                  <span aria-hidden>·</span>
                  <time>{post.date}</time>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">{post.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{post.text}</p>
                <Link
                  href="/news"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-dark"
                >
                  Weiterlesen <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- CTA ---------- */}
      <CtaBand
        eyebrow="Werden Sie Teil der Gemeinschaft"
        title="Gemeinsame Sache machen — mit uns."
        primary={{ href: "/kontakt", label: "Mitglied werden" }}
        secondary={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
      />
    </>
  );
}

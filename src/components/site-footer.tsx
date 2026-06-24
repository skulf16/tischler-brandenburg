import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { nav, platforms, site } from "@/lib/site";

const year = 2026;

export function SiteFooter() {
  return (
    <footer className="bg-walnut-900 text-cream/70">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} – Startseite`}>
            <Image src="/img/logo.png" alt="" width={142} height={126} className="h-10 w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-medium text-cream">Fachverband Tischler</span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-label text-cream/50">
                Brandenburg
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            Landesinnungsverband der Tischlerbetriebe im Land Brandenburg. Mehr als nur ein Handwerk.
          </p>
        </div>

        <FooterCol title="Verband" links={nav.slice(0, 4)} />

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-label text-cream/50">Plattformen</h4>
          <ul className="space-y-3 text-sm">
            {platforms.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-label text-cream/50">Kontakt</h4>
          <address className="space-y-1 text-sm not-italic text-cream/70">
            <p>{site.address.street}</p>
            <p>{site.address.city}</p>
            <p>
              <a href={site.phoneHref} className="transition-colors hover:text-cream">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                E-Mail schreiben
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 sm:flex-row">
          <span>
            © {year} {site.name}
          </span>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-cream">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-cream">
              Datenschutz
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-label text-cream/50">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-cream/70 transition-colors hover:text-cream">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

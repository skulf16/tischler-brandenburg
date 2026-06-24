import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export function CtaBand({
  eyebrow,
  title,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const isExternal = secondary?.href.startsWith("http");
  return (
    <section className="bg-walnut text-cream">
      <Container className="flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center md:py-24">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-label text-accent">{eyebrow}</p>
          <h2 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href={primary.href} variant="primary" withArrow>
            {primary.label}
          </Button>
          {secondary &&
            (isExternal ? (
              <a
                href={secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream"
              >
                {secondary.label}
              </a>
            ) : (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream"
              >
                {secondary.label}
              </Link>
            ))}
        </div>
      </Container>
    </section>
  );
}

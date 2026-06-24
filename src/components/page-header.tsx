import Link from "next/link";
import { Container } from "@/components/container";

export function PageHeader({
  label,
  title,
  lede,
  crumb,
}: {
  label?: string;
  title: string;
  lede?: string;
  crumb: string;
}) {
  return (
    <section className="bg-walnut text-cream">
      <Container className="py-20 md:py-28">
        <nav
          aria-label="Sie sind hier"
          className="mb-8 flex items-center gap-2 text-xs uppercase tracking-label text-cream/45"
        >
          <Link href="/" className="transition-colors hover:text-cream">
            Start
          </Link>
          <span aria-hidden>/</span>
          <span className="text-cream/80">{crumb}</span>
        </nav>
        {label && (
          <p className="mb-5 text-xs font-semibold uppercase tracking-label text-accent">
            {label}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-normal leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">{lede}</p>
        )}
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} – Startseite`}
          onClick={() => setOpen(false)}
        >
          {/* Brand identifier — shown exactly as supplied (transparent PNG, original proportions) */}
          <Image
            src="/img/logo.png"
            alt=""
            width={142}
            height={126}
            priority
            className="h-10 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-medium tracking-tight text-ink">
              Fachverband Tischler
            </span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-label text-ink-soft">
              Brandenburg
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.95rem] transition-colors hover:text-ink ${
                isActive(item.href) ? "font-medium text-ink" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/kontakt" variant="primary">
            Mitglied werden
          </Button>
        </nav>

        <button
          type="button"
          className="lg:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation (mobil)"
          className="border-t border-line bg-paper lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3 text-base ${
                  isActive(item.href) ? "font-medium text-ink" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/kontakt" variant="primary" className="mt-4">
              Mitglied werden
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}

import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent px-6 py-3 text-white hover:bg-accent-dark",
  outline: "border border-ink/25 px-6 py-3 text-ink hover:border-ink",
  ghost: "px-1 py-1 text-ink hover:text-accent-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

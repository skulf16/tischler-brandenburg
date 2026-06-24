import { type ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label && <p className="label mb-4">{label}</p>}
      <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

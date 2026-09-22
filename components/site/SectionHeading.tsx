import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

/** Consistent editorial section header: mono eyebrow, serif headline, muted lede. */
export function SectionHeading({ eyebrow, title, lede, className, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 lg:mb-20",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6",
          align === "center" && "justify-center"
        )}
      >
        <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
        {eyebrow}
        {align === "center" && (
          <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
        )}
      </p>
      <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
      )}
    </Reveal>
  );
}

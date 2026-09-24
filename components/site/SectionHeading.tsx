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

/** Consistent section header: pill eyebrow, bold sans headline, muted lede. */
export function SectionHeading({ eyebrow, title, lede, className, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 lg:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <p
        className={cn(
          "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        )}
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

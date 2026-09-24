import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Reveal } from "./Reveal";

const emerald = (a: number) => `hsla(158, 64%, 60%, ${a})`;

/** Shared header for inner pages: spotlight + animated grid, pill eyebrow, big headline. */
export function PageHero({
  id,
  eyebrow,
  title,
  lede,
  back,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  back?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="relative overflow-hidden">
      <Spotlight
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, ${emerald(0.12)} 0, ${emerald(0.03)} 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, ${emerald(0.08)} 0, ${emerald(0.02)} 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, ${emerald(0.05)} 0, ${emerald(0.02)} 80%, transparent 100%)`}
      />
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        className="absolute inset-x-0 -top-10 h-[130%] fill-emerald-400/20 stroke-white/[0.05] [mask-image:radial-gradient(560px_circle_at_center_35%,white,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 text-center sm:px-8 sm:pt-44 lg:pb-20">
        <Reveal>
          {back && (
            <Link
              href={back.href}
              className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              {back.label}
            </Link>
          )}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
              {eyebrow}
            </p>
          </div>
          <h1
            id={id}
            className="mx-auto mt-7 max-w-4xl font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          {lede && (
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

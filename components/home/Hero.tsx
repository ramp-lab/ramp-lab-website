import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { WordRotate } from "@/components/ui/word-rotate";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerLink } from "@/components/site/ShimmerLink";
import { ProductMock } from "@/components/work/ProductMock";
import { deliverables } from "@/components/home/Deliverables";

const builds = ["SaaS platforms", "AI products", "web apps", "internal tools", "mobile apps"];

const emerald = (a: number) => `hsla(158, 64%, 60%, ${a})`;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Spotlight
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, ${emerald(0.14)} 0, ${emerald(0.04)} 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, ${emerald(0.09)} 0, ${emerald(0.03)} 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, ${emerald(0.06)} 0, ${emerald(0.02)} 80%, transparent 100%)`}
      />
      <AnimatedGridPattern
        numSquares={28}
        maxOpacity={0.12}
        duration={3}
        className="absolute inset-x-0 -top-20 h-[140%] fill-emerald-400/20 stroke-white/[0.05] [mask-image:radial-gradient(640px_circle_at_center_30%,white,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 text-center sm:px-8 sm:pt-44 lg:pb-28">
        <Link
          href="/contact"
          className="group mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-accent/40 hover:text-foreground"
        >
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
            Custom software studio
          </span>
          <span className="hidden sm:inline">Accepting new projects</span>
          <span className="sm:hidden">Now booking</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <h1
          id="hero-heading"
          className="mx-auto mt-8 max-w-4xl font-display text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
        >
          We design and build your{" "}
          <WordRotate words={builds} duration={2200} className="text-glow pb-1" />
          <br className="hidden sm:block" /> and hand you everything.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          RampLab is a design and engineering team for founders and growing
          businesses. You bring the idea or the problem — we take it from first
          sketch to a live product your customers and team can use.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ShimmerLink href="/contact">
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ShimmerLink>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-base text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            View our work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What you walk away with
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
            {deliverables.map((item) => (
              <li
                key={item.short}
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2 text-sm text-foreground"
              >
                <Check aria-hidden="true" className="h-4 w-4 text-accent" />
                {item.short}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl text-left">
          <div
            aria-hidden="true"
            className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.18),transparent_65%)] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/80 p-2 shadow-[0_30px_120px_-30px_rgba(34,211,238,0.35)] backdrop-blur">
            <ProductMock
              variant="inventory-invoicing"
              figLabel="inventory & invoicing — a RampLab build"
              className="rounded-xl"
            />
            <BorderBeam size={120} duration={9} colorFrom="#34d399" colorTo="#22d3ee" />
          </div>
        </div>
      </div>
    </section>
  );
}

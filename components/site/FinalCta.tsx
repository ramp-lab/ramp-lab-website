import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Reveal } from "./Reveal";
import { ShimmerLink } from "./ShimmerLink";

interface FinalCtaProps {
  headline?: string;
  copy?: string;
}

/** Closing conversion block used on every page: glowing card with a travelling border beam. */
export function FinalCta({
  headline = "Tell us what you're building.",
  copy = "You don't need a perfectly defined specification. Tell us what you're trying to accomplish — we'll help turn the idea into a practical product plan.",
}: FinalCtaProps) {
  return (
    <section aria-labelledby="final-cta-heading" className="px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-16 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(52,211,153,0.18),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="bg-dotgrid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
          />
          <div className="relative">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
              Start a project
            </p>
            <h2
              id="final-cta-heading"
              className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              {headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerLink href="/contact">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ShimmerLink>
              <a
                href="mailto:musharaf@ramplab.me"
                className="inline-flex items-center justify-center px-2 py-3.5 font-mono text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 hover:text-foreground"
              >
                musharaf@ramplab.me
              </a>
            </div>
          </div>
          <BorderBeam size={160} duration={10} colorFrom="#34d399" colorTo="#22d3ee" />
          <BorderBeam size={160} duration={10} delay={5} colorFrom="#22d3ee" colorTo="#34d399" />
        </div>
      </Reveal>
    </section>
  );
}

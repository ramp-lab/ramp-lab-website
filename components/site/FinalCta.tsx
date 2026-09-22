import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

interface FinalCtaProps {
  headline?: string;
  copy?: string;
}

/** Strong, simple closing conversion block used on every page. */
export function FinalCta({
  headline = "Tell us what you're building.",
  copy = "You don't need a perfectly defined specification. Tell us what you're trying to accomplish — we'll help turn the idea into a practical product plan.",
}: FinalCtaProps) {
  return (
    <section aria-labelledby="final-cta-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
            Start a project
          </p>
          <h2
            id="final-cta-heading"
            className="mt-6 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {headline}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              className="group h-auto rounded-none px-7 py-3.5 text-base hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/contact">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <a
              href="mailto:musharaf@ramplab.me"
              className="inline-flex items-center justify-center px-2 py-3.5 font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
            >
              musharaf@ramplab.me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMock } from "@/components/work/ProductMock";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-40">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
            Product engineering studio
          </p>

          <h1
            id="hero-heading"
            className="mt-7 font-display text-[2.75rem] leading-[1.0] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Have an idea?
            <br />
            Let&rsquo;s turn it into{" "}
            <em className="text-accent">a real product.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            RampLab designs and builds MVPs, SaaS products, AI applications, and
            custom software for founders and businesses that need a technical
            team to ship.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            From product architecture and UX to engineering and deployment —
            we handle the entire build.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="group h-auto rounded-none px-7 py-3.5 text-base hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/contact">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group h-auto rounded-none px-7 py-3.5 text-base hover:border-accent hover:bg-transparent hover:text-accent"
            >
              <Link href="/work">
                View our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <p className="mt-10 border-t border-border pt-6 font-mono text-xs leading-relaxed text-muted-foreground">
            Recent work — GST invoicing desktop app · AI audit analytics · LMS
            platform ·{" "}
            <Link href="/work" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
              see all seven builds
            </Link>
          </p>
        </div>

        <div className="mt-12 lg:col-span-5 lg:mt-6">
          <ProductMock variant="inventory-invoicing" figLabel="fig. 01 — invoicing workspace" />
          <dl className="mt-4 grid grid-cols-3 gap-px border border-border bg-border font-mono text-[11px]">
            {[
              ["scope", "idea → production"],
              ["team", "design + engineering"],
              ["handoff", "you own the code"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background px-3 py-2.5">
                <dt className="uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

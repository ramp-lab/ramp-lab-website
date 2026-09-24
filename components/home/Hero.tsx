import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMock } from "@/components/work/ProductMock";
import { deliverables } from "@/components/home/Deliverables";

const builds = ["Web apps & SaaS", "AI products", "Desktop & mobile apps", "Internal tools"];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-40">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
            Custom software studio
          </p>

          <h1
            id="hero-heading"
            className="mt-7 font-display text-[2.75rem] leading-[1.0] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            We design and build your software
            <em className="text-accent"> — and hand you everything.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            RampLab is a design and engineering team for founders and growing
            businesses. You bring the idea or the problem; we take it from
            first sketch to a live product your customers and team can use.
          </p>

          <ul aria-label="What we build" className="mt-6 flex flex-wrap gap-2">
            {builds.map((item) => (
              <li
                key={item}
                className="border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>

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
              className="group h-auto rounded-none bg-transparent px-7 py-3.5 text-base hover:border-accent hover:bg-transparent hover:text-accent"
            >
              <Link href="/work">
                View our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:col-span-5 lg:mt-6">
          <ProductMock variant="inventory-invoicing" figLabel="fig. 01 — invoicing workspace" />
          <div className="mt-4 border border-border bg-background">
            <p className="border-b border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              What you walk away with
            </p>
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item.short} className="flex items-center gap-2.5 bg-background px-4 py-3 text-sm text-foreground">
                  <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                  {item.short}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { ProductMock } from "@/components/work/ProductMock";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products designed and built by RampLab — AI analytics, desktop software, LMS platforms, mobile apps, and marketing sites.",
  alternates: { canonical: "/work" },
};

const mockFor = (slug: string) =>
  slug as
    | "legal-intelligence"
    | "inventory-invoicing"
    | "proiq-academy"
    | "ats-checker"
    | "lyk-social"
    | "doctor-practice"
    | "agency-landing";

export default function WorkPage() {
  return (
    <>
      <section aria-labelledby="work-heading" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
              Work
            </p>
            <h1
              id="work-heading"
              className="mt-7 max-w-3xl font-display text-5xl leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Selected products built by RampLab.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Real software, engineered end to end — from architecture and UX to
              deployment. Each build below links to a case study with the problem,
              the approach, and the engineering behind it.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="All projects" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <ol className="divide-y divide-border border-y border-border">
            {projects.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={Math.min(i * 40, 200)}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid gap-6 py-9 sm:py-11 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-1">
                    <span className="font-mono text-xs text-muted-foreground">{project.index}</span>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {project.category}
                    </p>
                    <h2 className="mt-3 font-display text-3xl tracking-tight group-hover:text-accent sm:text-4xl">
                      {project.name}
                    </h2>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <ul aria-label="Technologies" className="flex flex-wrap gap-2 lg:pt-9">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-1 lg:pt-9 lg:text-right">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent">
                      Case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-14 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ProductMock variant="legal-intelligence" figLabel="fig. — anomaly review workspace" />
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl tracking-tight">A note on evidence</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We don&rsquo;t publish client names, testimonials, or metrics we
                can&rsquo;t verify. What you see here — the products, the problems
                they solve, and the engineering behind them — is the actual record
                of what this studio has built.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Full product walkthroughs and code architecture are shared on
                intro calls under NDA where required.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

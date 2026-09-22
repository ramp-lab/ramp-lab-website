import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How RampLab works: Discover, Design, Build, Launch — focused iterations with regular working releases, from idea to production.",
  alternates: { canonical: "/process" },
};

const phases = [
  {
    index: "01",
    title: "Discover",
    summary: "Understand the business, users, and product requirements.",
    happens: [
      "Working sessions to map goals, users, and constraints",
      "Requirements distilled into a buildable scope",
      "Honest feasibility calls on timeline and complexity",
    ],
    youGet: "A clear product scope and plan — no bloated spec documents.",
  },
  {
    index: "02",
    title: "Design",
    summary: "Define the product experience, architecture, and technical plan.",
    happens: [
      "UX flows and interface design for the core journeys",
      "System architecture: data model, APIs, infrastructure",
      "Technical decisions made explicit before production code",
    ],
    youGet: "A product you can see and a plan your future team could build from.",
  },
  {
    index: "03",
    title: "Build",
    summary: "Develop the product in focused iterations with regular working releases.",
    happens: [
      "Short iterations with working software you can click",
      "Regular demos and direct feedback loops",
      "Staging environments that mirror production",
    ],
    youGet: "A product that grows visibly week by week — never a black box.",
  },
  {
    index: "04",
    title: "Launch",
    summary: "Deploy, measure, fix, and continue improving the product.",
    happens: [
      "Production deployment with monitoring from day one",
      "Bug fixes and hardening after real user traffic",
      "Iteration based on what users actually do",
    ],
    youGet: "Live software — and a team that stays until it's stable.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section aria-labelledby="process-heading" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
              Process
            </p>
            <h1
              id="process-heading"
              className="mt-7 max-w-3xl font-display text-5xl leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Discover. Design. Build. Launch.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A simple way of working with no black boxes. You always know what&rsquo;s
              happening, what&rsquo;s next, and what you&rsquo;re paying for.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <ol className="border-t border-border">
          {phases.map((phase) => (
            <Reveal as="li" key={phase.index}>
              <article className="grid gap-8 border-b border-border py-12 lg:grid-cols-12 lg:py-16">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs text-muted-foreground">{phase.index}</p>
                  <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                    {phase.title}
                  </h2>
                  <p className="mt-4 font-medium leading-relaxed text-foreground/90">{phase.summary}</p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    What happens
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {phase.happens.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    What you get
                  </h3>
                  <p className="mt-4 leading-relaxed text-foreground/90">{phase.youGet}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      <FinalCta
        headline="Ready to start with Discover?"
        copy="Tell us what you're trying to accomplish. We'll map the fastest honest path from where you are to a product in users' hands."
      />
    </>
  );
}

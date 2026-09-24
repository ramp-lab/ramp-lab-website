import type { Metadata } from "next";
import { Check, Compass, Hammer, PenTool, Rocket } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
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
    icon: Compass,
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
    icon: PenTool,
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
    icon: Hammer,
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
    icon: Rocket,
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
      <PageHero
        id="process-heading"
        eyebrow="Process"
        title={<>Discover. Design. <span className="text-glow">Build. Launch.</span></>}
        lede="A simple way of working with no black boxes. You always know what's happening, what's next, and what you're paying for."
      />

      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 lg:pb-28">
        <ol className="relative space-y-4">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[2.75rem] top-8 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:block"
          />
          {phases.map((phase) => (
            <Reveal as="li" key={phase.index}>
              <article className="relative grid gap-6 rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-[0_0_24px_-4px_rgba(52,211,153,0.5)]">
                  <phase.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">Phase {phase.index}</p>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl">{phase.title}</h2>
                  <p className="mt-3 font-medium leading-relaxed text-foreground/90">{phase.summary}</p>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        What happens
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {phase.happens.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-accent/20 bg-accent/[0.05] p-5">
                      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">What you get</h3>
                      <p className="mt-3 leading-relaxed text-foreground/90">{phase.youGet}</p>
                    </div>
                  </div>
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

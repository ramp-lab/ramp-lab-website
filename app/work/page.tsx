import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { ProductMock } from "@/components/work/ProductMock";
import { PageHero } from "@/components/site/PageHero";
import { MagicCard } from "@/components/ui/magic-card";

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
      <PageHero
        id="work-heading"
        eyebrow="Work"
        title={<>Selected products <span className="text-glow">built by RampLab.</span></>}
        lede="Real software, engineered end to end — from architecture and UX to deployment. Each build below links to a case study with the problem, the approach, and the engineering behind it."
      />

      <section aria-label="All projects">
        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
          <ol className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={(i % 2) * 80} className="h-full">
                <Link href={`/work/${project.slug}`} className="group block h-full">
                  <MagicCard
                    gradientColor="rgba(52,211,153,0.08)"
                    gradientFrom="#34d399"
                    gradientTo="#22d3ee"
                    className="h-full rounded-2xl"
                  >
                    <article className="flex h-full flex-col p-3">
                      <div className="pointer-events-none h-56 overflow-hidden rounded-xl border border-white/[0.06] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
                        <ProductMock
                          variant={mockFor(project.slug)}
                          className="origin-top scale-[0.92] rounded-xl border-0 transition-transform duration-500 group-hover:scale-95"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                        <p className="inline-flex w-fit rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent">
                          {project.category}
                        </p>
                        <h2 className="mt-4 font-display text-2xl group-hover:text-accent sm:text-3xl">
                          {project.name}
                        </h2>
                        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.summary}</p>
                        <div className="mt-6 flex items-end justify-between gap-4">
                          <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
                            {project.stack.slice(0, 4).map((tech) => (
                              <li
                                key={tech}
                                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-colors group-hover:bg-accent">
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                            <span className="sr-only">Read case study</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </MagicCard>
                </Link>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-10">
            <div className="rounded-2xl border border-white/[0.08] bg-card/60 p-7 sm:p-10">
              <h2 className="font-display text-2xl">A note on evidence</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                We don&rsquo;t publish client names, testimonials, or metrics we
                can&rsquo;t verify. What you see here — the products, the problems
                they solve, and the engineering behind them — is the actual record
                of what this studio has built. Full product walkthroughs and code
                architecture are shared on intro calls under NDA where required.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

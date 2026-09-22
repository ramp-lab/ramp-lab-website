import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ProductMock } from "@/components/work/ProductMock";
import { cn } from "@/lib/utils";

const mockVariant = {
  "legal-intelligence": "legal-intelligence",
  "inventory-invoicing": "inventory-invoicing",
  "proiq-academy": "proiq-academy",
} as const;

/** Homepage: three featured builds as mini case studies. No invented metrics. */
export function SelectedWork() {
  return (
    <section aria-labelledby="work-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Selected work"
          title={<span id="work-heading">Proof, not promises.</span>}
          lede="Every project below is real software RampLab designed and built. Read what problem it solved, what we shipped, and how it was engineered — then judge for yourself."
        />

        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={project.slug}>
                <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
                    <ProductMock
                      variant={mockVariant[project.slug as keyof typeof mockVariant]}
                      figLabel={`fig. 0${i + 2} — ${project.name.toLowerCase()}`}
                    />
                  </div>
                  <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {project.index} — {project.category}
                    </p>
                    <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-5 leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">The problem — </span>
                      {project.problem}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">What we built — </span>
                      {project.built[0]}
                    </p>
                    <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 border-t border-border pt-8 lg:mt-20">
          <Link
            href="/work"
            className="group flex items-center justify-between gap-4 py-2"
          >
            <span className="font-display text-2xl tracking-tight sm:text-3xl">
              See all seven builds, with engineering detail
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:text-accent">
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

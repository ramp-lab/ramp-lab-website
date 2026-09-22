import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { ProductMock } from "@/components/work/ProductMock";

/** How each build was approached — grounded in the product facts, no invented timelines. */
const approachBySlug: Record<string, string> = {
  "legal-intelligence":
    "We started from the data, not the interface — modelling audit records first, then building detection and review workflows on top, with a human in the loop for every flagged finding.",
  "inventory-invoicing":
    "We encoded the GST rules as the foundation, designed the invoicing flow around daily high-volume use, and kept everything local-first so billing never depends on connectivity.",
  "proiq-academy":
    "We modelled courses, cohorts, and progress as one system, separated student, instructor, and admin roles early, and built administration workflows alongside the learning experience.",
  "ats-checker":
    "We designed around a tight feedback loop — every analysis result maps to an action the job seeker can take, with scoring that updates as the resume changes.",
  "lyk-social":
    "We shipped both platforms from one codebase, treated real-time interaction as core infrastructure rather than a feature, and designed engagement flows for speed.",
  "doctor-practice":
    "We mapped the clinic day first — appointments, records, prescriptions — then built role-aware workflows so clinical and administrative staff each get exactly what they need.",
  "agency-landing":
    "We treated performance as the design brief — static generation, a strict performance budget, and a visual identity that loads instantly on any device.",
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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };
  return {
    title: `${project.name} — Case study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section aria-labelledby={`case-${index}`} className="grid gap-6 border-t border-border py-12 sm:grid-cols-12 lg:py-16">
        <div className="sm:col-span-3">
          <p className="font-mono text-xs text-muted-foreground">{index}</p>
          <h2 id={`case-${index}`} className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="sm:col-span-9 lg:col-span-7 lg:col-start-5">{children}</div>
      </section>
    </Reveal>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <article>
        {/* header */}
        <header className="relative overflow-hidden">
          <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
            <Reveal>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                All work
              </Link>
              <p className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {project.index} — {project.category}
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <ul aria-label="Technologies" className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* 01 overview */}
          <CaseSection index="01" title="Overview">
            <p className="text-lg leading-relaxed text-foreground/90">{project.summary}</p>
          </CaseSection>

          {/* 02 problem */}
          <CaseSection index="02" title="The problem">
            <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
          </CaseSection>

          {/* 03 approach */}
          <CaseSection index="03" title="The approach">
            <p className="leading-relaxed text-muted-foreground">
              {approachBySlug[project.slug]}
            </p>
          </CaseSection>

          {/* 04 what we built */}
          <CaseSection index="04" title="What we built">
            <ul className="space-y-4">
              {project.built.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ProductMock
                variant={mockFor(project.slug)}
                figLabel={`fig. — ${project.name.toLowerCase()}`}
              />
              <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                Illustrative interface concept. Full product walkthroughs are shared on intro calls.
              </p>
            </div>
          </CaseSection>

          {/* 05 engineering */}
          <CaseSection index="05" title="Engineering">
            <ul className="space-y-4">
              {project.engineering.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          {/* 06 outcome — scope only, never invented metrics */}
          <CaseSection index="06" title="Outcome">
            <p className="leading-relaxed text-muted-foreground">
              Shipped as a working product, engineered end to end by RampLab —
              from architecture and UX through to deployment. Detailed results
              and references are shared directly with serious project inquiries.
            </p>
          </CaseSection>

          {/* prev / next */}
          <nav aria-label="More case studies" className="grid gap-px border border-border bg-border sm:grid-cols-2">
            <Link href={`/work/${prev.slug}`} className="group bg-background p-6 sm:p-8">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                Previous
              </p>
              <p className="mt-3 font-display text-xl tracking-tight group-hover:text-accent sm:text-2xl">
                {prev.name}
              </p>
            </Link>
            <Link href={`/work/${next.slug}`} className="group bg-background p-6 text-right sm:p-8">
              <p className="flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Next
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
              <p className="mt-3 font-display text-xl tracking-tight group-hover:text-accent sm:text-2xl">
                {next.name}
              </p>
            </Link>
          </nav>

          <div className="py-14 lg:py-20">
            <Button
              asChild
              variant="outline"
              className="group h-auto rounded-none px-7 py-3.5 text-base hover:border-accent hover:bg-transparent hover:text-accent"
            >
              <Link href="/contact">
                Building something similar? Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <FinalCta />
    </>
  );
}

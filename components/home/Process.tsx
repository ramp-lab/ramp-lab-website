import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    index: "01",
    title: "Discover",
    copy: "We learn the business, the users, and the constraints — then define the smallest product worth building.",
    detail: "Workshops · requirements · scope",
  },
  {
    index: "02",
    title: "Design",
    copy: "We define the product experience, the system architecture, and the technical plan before writing production code.",
    detail: "UX · UI · architecture",
  },
  {
    index: "03",
    title: "Build",
    copy: "We develop in focused iterations with regular working releases you can click, test, and react to.",
    detail: "Sprints · demos · staging",
  },
  {
    index: "04",
    title: "Launch",
    copy: "We deploy to production, monitor, fix, and keep improving the product with you after go-live.",
    detail: "Deploy · measure · iterate",
  },
];

/** Connected timeline: horizontal rail on desktop, vertical rail on mobile. */
export function Process() {
  return (
    <section aria-labelledby="process-heading" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Process"
          title={<span id="process-heading">Idea to production, in four steps.</span>}
          lede="A simple, legible way of working. You'll always know what's happening, what's next, and what you're paying for."
        />

        <ol className="relative grid gap-10 sm:gap-8 lg:grid-cols-4">
          {/* connector rail */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border lg:left-2 lg:right-2 lg:top-[7px] lg:bottom-auto lg:h-px lg:w-auto"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.index} delay={i * 80} className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-[15px] w-[15px] border border-accent bg-background lg:left-0"
              >
                <span className="absolute inset-[3px] bg-accent" />
              </span>
              <div className="pl-9 lg:pl-0 lg:pt-10">
                <p className="font-mono text-xs text-muted-foreground">{step.index}</p>
                <h3 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.copy}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/60">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
          >
            How each phase works in practice
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

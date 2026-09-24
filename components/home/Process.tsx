"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Hammer, PenTool, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const steps = [
  {
    index: "01",
    icon: Compass,
    title: "Discover",
    youGet: "A clear scope and build plan",
    copy: "We learn the business, the users, and the constraints — then define the smallest product worth building.",
  },
  {
    index: "02",
    icon: PenTool,
    title: "Design",
    youGet: "Clickable designs you can review",
    copy: "We define the product experience, the system architecture, and the technical plan before writing production code.",
  },
  {
    index: "03",
    icon: Hammer,
    title: "Build",
    youGet: "Working builds you can test as we go",
    copy: "We develop in focused iterations with regular working releases you can click, test, and react to.",
  },
  {
    index: "04",
    icon: Rocket,
    title: "Launch",
    youGet: "The live product, code, and handover",
    copy: "We deploy to production, monitor, fix, and keep improving the product with you after go-live.",
  },
];

/** Four steps joined by animated beams on desktop; a simple stacked list on mobile. */
export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <section aria-labelledby="process-heading" className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title={
            <span id="process-heading">
              Idea to production, <span className="text-glow">in four steps.</span>
            </span>
          }
          lede="Every step ends with something concrete in your hands, so you always know what's happening, what's next, and what you're paying for."
        />

        <div ref={containerRef} className="relative">
          <ol className="grid gap-4 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.index} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div
                      ref={nodeRefs[i]}
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-[0_0_24px_-4px_rgba(52,211,153,0.5)]"
                    >
                      <step.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{step.index}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{step.copy}</p>
                  <p className="mt-6 rounded-xl border border-accent/20 bg-accent/[0.06] px-4 py-3 text-sm text-foreground">
                    <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-accent">You get</span>
                    <span className="mt-1 block">{step.youGet}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          {[0, 1, 2].map((i) => (
            <AnimatedBeam
              key={i}
              containerRef={containerRef}
              fromRef={nodeRefs[i]}
              toRef={nodeRefs[i + 1]}
              duration={4}
              delay={i * 0.6}
              pathColor="#34d399"
              pathOpacity={0.15}
              gradientStartColor="#34d399"
              gradientStopColor="#22d3ee"
              startXOffset={24}
              endXOffset={-24}
              className="hidden lg:block"
            />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
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

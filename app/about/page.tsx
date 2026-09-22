import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "RampLab is a small product engineering studio — one team for architecture, UX, engineering, and deployment. Remote-first.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Software that ships beats software that's perfect",
    copy: "We scope to reach real users fast, then improve with evidence — not opinions argued in meeting rooms.",
  },
  {
    title: "You own everything",
    copy: "Clean, documented code in your repositories from day one. If you hire your own team later, they pick it up fast.",
  },
  {
    title: "Plain language, always",
    copy: "Technical decisions explained in business terms. You'll never need a translator to talk to your own build team.",
  },
  {
    title: "No borrowed credibility",
    copy: "We show our own work and say plainly what we don't know. If we're not the right team, we'll tell you.",
  },
];

const platforms = ["Web applications", "Desktop software", "iOS & Android", "AI systems", "Internal tools", "Marketing sites"];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
              About
            </p>
            <h1
              id="about-heading"
              className="mt-7 max-w-3xl font-display text-5xl leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl"
            >
              A small team that takes software personally.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              RampLab is a product engineering studio — designers and engineers
              working as one team from idea to production. Remote-first,
              founder-friendly, and allergic to bloated process.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <Reveal>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {platforms.map((platform) => (
              <p
                key={platform}
                className="bg-background px-6 py-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
              >
                <span aria-hidden="true" className="mr-2.5 inline-block h-1 w-1 bg-accent" />
                {platform}
              </p>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">
            Platforms above reflect shipped RampLab work —{" "}
            <Link href="/work" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
              see the builds
            </Link>
            .
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How we work</h2>
          </Reveal>
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 80} className="h-full">
                <article className="h-full bg-background p-7 sm:p-8">
                  <h3 className="text-xl font-medium tracking-tight">{principle.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{principle.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <div className="border border-border p-7 sm:p-10">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              {projects.length} builds. One standard: production-ready.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              From GST-compliant desktop billing to ML-driven audit analytics —
              every project in our portfolio was architected, designed, and
              engineered by this studio.
            </p>
            <Link
              href="/work"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
            >
              Browse the work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>

      <FinalCta />
    </>
  );
}

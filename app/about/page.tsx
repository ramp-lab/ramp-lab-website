import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/lib/projects";
import { PageHero } from "@/components/site/PageHero";
import { BorderBeam } from "@/components/ui/border-beam";

export const metadata: Metadata = {
  title: "About",
  description:
    "RampLab is a small custom software studio — one team for architecture, UX, engineering, and deployment. Remote-first.",
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
      <PageHero
        id="about-heading"
        eyebrow="About"
        title={<>A small team that takes <span className="text-glow">software personally.</span></>}
        lede="RampLab is a custom software studio — designers and engineers working as one team from idea to production. Remote-first, founder-friendly, and allergic to bloated process."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2.5">
            {platforms.map((platform) => (
              <p
                key={platform}
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2 text-sm text-foreground"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                {platform}
              </p>
            ))}
          </div>
          <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground">
            Platforms above reflect shipped RampLab work —{" "}
            <Link href="/work" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
              see the builds
            </Link>
            .
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          <Reveal>
            <h2 className="text-center font-display text-3xl sm:text-5xl">
              How we <span className="text-glow">work</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 80} className="h-full">
                <article className="h-full rounded-2xl border border-white/[0.08] bg-card/60 p-7 transition-colors hover:border-accent/30 sm:p-8">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl">{principle.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{principle.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-7 text-center sm:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(52,211,153,0.14),transparent_70%)]"
            />
            <BorderBeam size={140} duration={10} colorFrom="#34d399" colorTo="#22d3ee" />
            <h2 className="relative font-display text-3xl sm:text-4xl">
              {projects.length} builds. One standard: production-ready.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              From GST-compliant desktop billing to ML-driven audit analytics —
              every project in our portfolio was architected, designed, and
              engineered by this studio.
            </p>
            <Link
              href="/work"
              className="group relative mt-7 inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
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

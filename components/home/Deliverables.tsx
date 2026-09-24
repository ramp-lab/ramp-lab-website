import type { ReactNode } from "react";
import { Code2, LifeBuoy, PenTool, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

/**
 * What every client walks away with. Single source for the hero checklist,
 * the homepage section, and the services page — keep the three in sync by
 * editing only this list. No timelines or numbers we can't back up.
 */
export const deliverables = [
  {
    icon: Rocket,
    short: "Live, deployed product",
    title: "A live product",
    copy: "Your software running in production, on hosting and accounts you control — not a prototype, and not locked to our servers.",
  },
  {
    icon: Code2,
    short: "Full source code + IP",
    title: "The full source code",
    copy: "Every line in your own repository from day one. You own the code and the IP outright, so any team can pick it up later.",
  },
  {
    icon: PenTool,
    short: "UX/UI design files",
    title: "The design files",
    copy: "The screens, user flows, and design system behind the product — so future features look and work like they belong.",
  },
  {
    icon: LifeBuoy,
    short: "Docs, handover + support",
    title: "Docs, handover and support",
    copy: "Technical documentation, a walkthrough handover session with your team, and support after launch while real users settle in.",
  },
];

/* Decorative mini-visuals, one per deliverable. aria-hidden: the copy carries the meaning. */

function DeployLog() {
  const lines = [
    ["$", "deploy --production", "text-foreground/80"],
    ["✓", "build completed", "text-accent"],
    ["✓", "database migrated", "text-accent"],
    ["✓", "live at app.yourcompany.com", "text-cyan-300"],
  ];
  return (
    <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 font-mono text-[13px]">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
      </div>
      {lines.map(([mark, text, tone]) => (
        <p key={text} className={cn("leading-7", tone)}>
          <span className="mr-3 text-muted-foreground">{mark}</span>
          {text}
        </p>
      ))}
    </div>
  );
}

function RepoTree() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 font-mono text-[13px] leading-7 text-muted-foreground">
      <p className="text-foreground/85">your-org / your-product</p>
      <p>├── app/</p>
      <p>├── api/</p>
      <p>├── docs/</p>
      <p>
        └── <span className="text-accent">LICENSE — yours</span>
      </p>
    </div>
  );
}

function DesignFrames() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="space-y-1.5 rounded-lg border border-white/[0.08] bg-black/40 p-2">
          <div className={cn("h-8 rounded", i === 1 ? "bg-accent/30" : "bg-white/[0.07]")} />
          <div className="h-1.5 w-3/4 rounded bg-white/10" />
          <div className="h-1.5 w-1/2 rounded bg-white/[0.06]" />
        </div>
      ))}
    </div>
  );
}

function HandoverDoc() {
  const items = ["Architecture overview", "Deploy & environment guide", "Handover session", "Post-launch support"];
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <p
          key={item}
          className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-foreground/85"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {item}
        </p>
      ))}
    </div>
  );
}

const visuals: ReactNode[] = [<DeployLog key="d" />, <RepoTree key="r" />, <DesignFrames key="f" />, <HandoverDoc key="h" />];
const spans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

export function DeliverablesGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {deliverables.map((item, i) => (
        <Reveal key={item.title} delay={i * 70} className={cn("h-full", spans[i], (i === 0 || i === 3) && "sm:col-span-2")}>
          <MagicCard
            gradientColor="rgba(52,211,153,0.10)"
            gradientFrom="#34d399"
            gradientTo="#22d3ee"
            className="h-full rounded-2xl"
          >
            <article className="flex h-full flex-col gap-6 p-6 sm:p-7">
              <div aria-hidden="true">{visuals[i]}</div>
              <div className="mt-auto">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl">{item.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            </article>
          </MagicCard>
        </Reveal>
      ))}
    </div>
  );
}

export function Deliverables() {
  return (
    <section aria-labelledby="deliverables-heading" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="What you get"
          title={
            <span id="deliverables-heading">
              Everything you need to <span className="text-glow">own and run it.</span>
            </span>
          }
          lede="Every RampLab project ends with the same four things in your hands. No lock-in, no mystery code, no starting over when you grow."
        />
        <DeliverablesGrid />
      </div>
    </section>
  );
}

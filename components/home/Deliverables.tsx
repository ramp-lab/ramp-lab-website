import { Code2, LifeBuoy, PenTool, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
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

export function DeliverablesGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4", className)}>
      {deliverables.map((item, i) => (
        <Reveal key={item.title} delay={i * 70} className="h-full">
          <article className="flex h-full flex-col bg-background p-7">
            <item.icon aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl tracking-tight">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.copy}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Deliverables() {
  return (
    <section aria-labelledby="deliverables-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="What you get"
          title={<span id="deliverables-heading">Everything you need to own and run it.</span>}
          lede="Every RampLab project ends with the same four things in your hands. No lock-in, no mystery code, no starting over when you grow."
        />
        <DeliverablesGrid />
      </div>
    </section>
  );
}

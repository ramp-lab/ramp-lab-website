import { MessagesSquare, Users, Zap } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const reasons = [
  {
    title: "One team, start to finish",
    icon: Users,
    copy: "Product thinking, design, engineering, and deployment under one roof. Nothing gets lost between a designer, a contractor, and a dev shop — and when something breaks, there's exactly one team responsible.",
  },
  {
    title: "Direct communication",
    icon: MessagesSquare,
    copy: "You work directly with the people designing and building your product. No account managers relaying messages.",
  },
  {
    title: "Fast iteration",
    icon: Zap,
    copy: "We ship working software early, put it in front of users, and improve continuously — instead of disappearing for months.",
  },
];

export function WhyRampLab() {
  return (
    <section aria-labelledby="why-heading" className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="Why RampLab"
          title={
            <span id="why-heading">
              A team you&rsquo;d <span className="text-glow">trust with the build.</span>
            </span>
          }
          lede="Hiring software help is a trust decision. Here's concretely what changes when you build with us instead of a generic agency."
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={i * 80} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-7 transition-colors hover:border-accent/30">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100 md:opacity-0"
                />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <reason.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-6 font-display text-xl">{reason.title}</h3>
                <p className="relative mt-3 leading-relaxed text-muted-foreground">{reason.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

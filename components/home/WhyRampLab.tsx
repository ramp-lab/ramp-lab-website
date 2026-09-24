import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const reasons = [
  {
    title: "One team, start to finish",
    copy: "Product thinking, design, engineering, and deployment under one roof. Nothing gets lost between a designer, a contractor, and a dev shop — and when something breaks, there's exactly one team responsible.",
  },
  {
    title: "Direct communication",
    copy: "You work directly with the people designing and building your product. No account managers relaying messages.",
  },
  {
    title: "Fast iteration",
    copy: "We ship working software early, put it in front of users, and improve continuously — instead of disappearing for months.",
  },
];

export function WhyRampLab() {
  return (
    <section aria-labelledby="why-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why RampLab"
                title={<span id="why-heading">A team you'd trust with the build.</span>}
                lede="Hiring software help is a trust decision. Here's concretely what changes when you build with us instead of a generic agency."
                className="mb-0"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol className="divide-y divide-border border-y border-border">
              {reasons.map((reason, i) => (
                <Reveal as="li" key={reason.title} delay={i * 60}>
                  <div className="grid gap-2 py-7 sm:grid-cols-12 sm:gap-6">
                    <span aria-hidden="true" className="font-mono text-xs text-muted-foreground sm:col-span-2 sm:pt-1.5">
                      0{i + 1}
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="text-xl font-medium tracking-tight">{reason.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{reason.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

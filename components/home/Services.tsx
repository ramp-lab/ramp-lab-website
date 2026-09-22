import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const services = [
  {
    index: "01",
    title: "MVP Development",
    outcome:
      "Turn an idea into a working product that reaches real users — scoped to prove the concept, not to impress a demo room.",
    points: ["Product scoping & architecture", "UX & interface design", "Full build & deployment"],
  },
  {
    index: "02",
    title: "SaaS & Web Applications",
    outcome:
      "Production-ready applications, dashboards, and platforms your team can run a business on — with auth, payments, and data modelled properly.",
    points: ["Dashboards & platforms", "Auth, billing & roles", "APIs & integrations"],
  },
  {
    index: "03",
    title: "AI Products",
    outcome:
      "Turn AI capabilities into software people actually use — grounded workflows and agents wired into your data, not chatbot demos.",
    points: ["RAG systems & AI workflows", "Agents & automation", "Analysis & scoring pipelines"],
  },
  {
    index: "04",
    title: "Internal Tools",
    outcome:
      "Replace spreadsheets and manual processes with software designed around how your business actually operates.",
    points: ["Workflow automation", "Admin & ops tooling", "Data & reporting systems"],
  },
];

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title={<span id="services-heading">What we build.</span>}
          lede="Four ways to work with us. Each one is measured by the business outcome it produces — not by the frameworks involved."
        />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 80} className="h-full">
              <article className="flex h-full flex-col bg-background p-7 sm:p-9">
                <p className="font-mono text-xs text-muted-foreground">{service.index}</p>
                <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{service.outcome}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span aria-hidden="true" className="inline-block h-1 w-1 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

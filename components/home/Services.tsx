import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const services = [
  {
    index: "01",
    title: "MVP Development",
    who: "For founders with an idea",
    examples: "Customer-facing apps, marketplaces, booking tools, first versions of a startup.",
    proof: { name: "Resume ATS Checker", href: "/work/ats-checker" },
    outcome:
      "Turn an idea into a working product that reaches real users — scoped to prove the concept, not to impress a demo room.",
    points: ["Product scoping & architecture", "UX & interface design", "Full build & deployment"],
  },
  {
    index: "02",
    title: "SaaS & Web Applications",
    who: "For businesses selling software",
    examples: "Subscription products, customer portals, dashboards, learning platforms.",
    proof: { name: "ProIQ Academy LMS", href: "/work/proiq-academy" },
    outcome:
      "Production-ready applications, dashboards, and platforms your team can run a business on — with auth, payments, and data modelled properly.",
    points: ["Dashboards & platforms", "Auth, billing & roles", "APIs & integrations"],
  },
  {
    index: "03",
    title: "AI Products",
    who: "For teams adopting AI",
    examples: "Document analysis, AI assistants over your data, scoring and review workflows.",
    proof: { name: "Legal Intelligence & Audit Analytics", href: "/work/legal-intelligence" },
    outcome:
      "Turn AI capabilities into software people actually use — grounded workflows and agents wired into your data, not chatbot demos.",
    points: ["RAG systems & AI workflows", "Agents & automation", "Analysis & scoring pipelines"],
  },
  {
    index: "04",
    title: "Internal Tools",
    who: "For teams outgrowing spreadsheets",
    examples: "Billing and inventory systems, admin panels, reporting, desktop apps that work offline.",
    proof: { name: "Inventory & Invoice Management", href: "/work/inventory-invoicing" },
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
          lede="Whatever you need built, it's designed, engineered, and launched by the same team. Here's what that usually looks like."
        />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 80} className="h-full">
              <article className="flex h-full flex-col bg-background p-7 sm:p-9">
                <p className="flex items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
                  <span>{service.index}</span>
                  <span className="uppercase tracking-[0.14em] text-accent">{service.who}</span>
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{service.outcome}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  <span className="font-medium text-foreground">For example: </span>
                  {service.examples}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span aria-hidden="true" className="inline-block h-1 w-1 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.proof.href}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent"
                >
                  <span>
                    See a real build: <span className="text-foreground group-hover:text-accent">{service.proof.name}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight, Check, LayoutDashboard, Rocket, Sparkles, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { MagicCard } from "@/components/ui/magic-card";

const services = [
  {
    index: "01",
    title: "MVP Development",
    icon: Rocket,
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
    icon: LayoutDashboard,
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
    icon: Sparkles,
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
    icon: Workflow,
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
    <section aria-labelledby="services-heading" className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="What we build"
          title={
            <span id="services-heading">
              One team. <span className="text-glow">Four kinds of product.</span>
            </span>
          }
          lede="Whatever you need built, it's designed, engineered, and launched by the same team. Here's what that usually looks like."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 80} className="h-full">
              <MagicCard
                gradientColor="rgba(52,211,153,0.10)"
                gradientFrom="#34d399"
                gradientTo="#22d3ee"
                className="h-full rounded-2xl"
              >
                <article className="flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <service.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                      {service.who}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl sm:text-3xl">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.outcome}</p>
                  <p className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-foreground/85">
                    <span className="font-medium text-foreground">For example: </span>
                    {service.examples}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.proof.href}
                    className="group mt-7 inline-flex items-center gap-1.5 border-t border-white/[0.06] pt-5 text-sm text-muted-foreground hover:text-accent"
                  >
                    <span>
                      See a real build:{" "}
                      <span className="text-foreground group-hover:text-accent">{service.proof.name}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </MagicCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

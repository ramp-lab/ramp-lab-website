import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { MagicCard } from "@/components/ui/magic-card";
import { DeliverablesGrid } from "@/components/home/Deliverables";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MVP development, SaaS and web applications, AI products, and internal tools — designed and built end to end by RampLab.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    index: "01",
    title: "MVP Development",
    youGet: ["A launched first version real users can sign up to", "Code built to grow, not to throw away"],
    outcome: "Turn an idea into a working product that can reach real users.",
    copy: "We scope ruthlessly, design the core experience, and build the smallest product that proves your idea in the hands of users — architected so it can grow instead of being thrown away.",
    includes: ["Product scoping & roadmap", "UX & interface design", "Full-stack build", "Deployment & launch support"],
    proof: { label: "Related build", name: "Resume ATS Checker", href: "/work/ats-checker" },
  },
  {
    index: "02",
    title: "SaaS & Web Applications",
    youGet: ["A production app with accounts, roles, and billing", "Admin tools to run it day to day"],
    outcome: "Production-ready applications, dashboards, and platforms.",
    copy: "Multi-user products with real data, real permissions, and real uptime requirements. Auth, billing, roles, and integrations — engineered as one system, not bolted on later.",
    includes: ["Dashboards & platforms", "Authentication & role-based access", "Billing & subscriptions", "APIs & third-party integrations"],
    proof: { label: "Related build", name: "ProIQ Academy LMS", href: "/work/proiq-academy" },
  },
  {
    index: "03",
    title: "AI Products",
    youGet: ["AI features working on your own data, in production", "Review screens where people stay in control"],
    outcome: "AI capabilities turned into software people actually use.",
    copy: "RAG systems, analysis pipelines, and AI-powered workflows grounded in your data and deployed in production — with humans in the loop where judgment matters.",
    includes: ["RAG systems & AI workflows", "Analysis & scoring pipelines", "Agents & automation", "Human-in-the-loop review UX"],
    proof: { label: "Related build", name: "Legal Intelligence & Audit Analytics", href: "/work/legal-intelligence" },
  },
  {
    index: "04",
    title: "Internal Tools",
    youGet: ["A tool your team uses daily instead of spreadsheets", "Reports and data you can actually trust"],
    outcome: "Software designed around how your business actually operates.",
    copy: "Replace spreadsheets, manual processes, and fragmented workflows with purpose-built tools for operations, administration, and reporting.",
    includes: ["Workflow automation", "Admin & operations tooling", "Data & reporting systems", "Desktop & offline-capable apps"],
    proof: { label: "Related build", name: "Inventory & Invoice Management System", href: "/work/inventory-invoicing" },
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        id="services-heading"
        eyebrow="Services"
        title={<>What we <span className="text-glow">build.</span></>}
        lede="We design and build custom software end to end — and every project ends with the live product, the source code, the design files, and the docs in your hands. Each service below links to a real build."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="space-y-4">
          {services.map((service) => (
            <Reveal key={service.title}>
              <MagicCard
                gradientColor="rgba(52,211,153,0.08)"
                gradientFrom="#34d399"
                gradientTo="#22d3ee"
                className="rounded-2xl"
              >
              <article className="grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
                <div className="lg:col-span-5">
                  <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground">{service.index}</p>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 font-medium text-foreground">{service.outcome}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.copy}</p>
                </div>
                <div className="space-y-8 lg:col-span-4">
                  <div className="rounded-xl border border-accent/20 bg-accent/[0.05] p-5">
                  <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    What you get
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.youGet.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  </div>
                  <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    What&rsquo;s included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {service.proof.label}
                  </h3>
                  <Link
                    href={service.proof.href}
                    className="group mt-4 inline-flex items-start gap-1.5 font-display text-xl leading-snug hover:text-accent"
                  >
                    {service.proof.name}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
              </MagicCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <SectionHeading
            eyebrow="Every project, every service"
            title="What you walk away with."
            lede="Whichever service you start with, the project ends with these four things in your hands."
          />
          <DeliverablesGrid />
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <SectionHeading
            eyebrow="Not listed?"
            title="If it runs in production, we can probably build it."
            lede="Mobile apps, healthcare systems, marketing sites — our work spans platforms. Describe your problem and we'll tell you honestly whether we're the right team."
            className="mb-0"
          />
        </Reveal>
      </div>

      <FinalCta />
    </>
  );
}

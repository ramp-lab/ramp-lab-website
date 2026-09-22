import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionHeading } from "@/components/site/SectionHeading";

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
    outcome: "Turn an idea into a working product that can reach real users.",
    copy: "We scope ruthlessly, design the core experience, and build the smallest product that proves your idea in the hands of users — architected so it can grow instead of being thrown away.",
    includes: ["Product scoping & roadmap", "UX & interface design", "Full-stack build", "Deployment & launch support"],
    proof: { label: "Related build", name: "Resume ATS Checker", href: "/work/ats-checker" },
  },
  {
    index: "02",
    title: "SaaS & Web Applications",
    outcome: "Production-ready applications, dashboards, and platforms.",
    copy: "Multi-user products with real data, real permissions, and real uptime requirements. Auth, billing, roles, and integrations — engineered as one system, not bolted on later.",
    includes: ["Dashboards & platforms", "Authentication & role-based access", "Billing & subscriptions", "APIs & third-party integrations"],
    proof: { label: "Related build", name: "ProIQ Academy LMS", href: "/work/proiq-academy" },
  },
  {
    index: "03",
    title: "AI Products",
    outcome: "AI capabilities turned into software people actually use.",
    copy: "RAG systems, analysis pipelines, and AI-powered workflows grounded in your data and deployed in production — with humans in the loop where judgment matters.",
    includes: ["RAG systems & AI workflows", "Analysis & scoring pipelines", "Agents & automation", "Human-in-the-loop review UX"],
    proof: { label: "Related build", name: "Legal Intelligence & Audit Analytics", href: "/work/legal-intelligence" },
  },
  {
    index: "04",
    title: "Internal Tools",
    outcome: "Software designed around how your business actually operates.",
    copy: "Replace spreadsheets, manual processes, and fragmented workflows with purpose-built tools for operations, administration, and reporting.",
    includes: ["Workflow automation", "Admin & operations tooling", "Data & reporting systems", "Desktop & offline-capable apps"],
    proof: { label: "Related build", name: "Inventory & Invoice Management System", href: "/work/inventory-invoicing" },
  },
];

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="services-heading" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
              Services
            </p>
            <h1
              id="services-heading"
              className="mt-7 max-w-3xl font-display text-5xl leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl"
            >
              What we build.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every engagement is measured by the business outcome it produces.
              Each service below links to a real build that proves we can do it.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="space-y-px border-y border-border bg-border">
          {services.map((service) => (
            <Reveal key={service.title}>
              <article className="grid gap-8 bg-background p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
                <div className="lg:col-span-5">
                  <p className="font-mono text-xs text-muted-foreground">{service.index}</p>
                  <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 font-medium text-foreground">{service.outcome}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.copy}</p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    What&rsquo;s included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                        <span aria-hidden="true" className="inline-block h-1 w-1 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {service.proof.label}
                  </h3>
                  <Link
                    href={service.proof.href}
                    className="group mt-4 inline-flex items-start gap-1.5 font-display text-xl leading-snug tracking-tight hover:text-accent"
                  >
                    {service.proof.name}
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
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

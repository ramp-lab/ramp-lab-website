import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const audiences = [
  {
    title: "Founders",
    copy: "You have the idea but need a technical team to build it — from first architecture decisions to a product real users can touch.",
  },
  {
    title: "Growing businesses",
    copy: "Your processes have outgrown spreadsheets and manual workflows. You need software shaped around how you actually operate.",
  },
  {
    title: "Product teams",
    copy: "You need additional engineering capacity to ship faster — a team that can own a workstream, not just take tickets.",
  },
  {
    title: "Companies adopting AI",
    copy: "You want to turn AI capabilities into actual products and workflows — grounded in your data, deployed in production.",
  },
];

export function Audiences() {
  return (
    <section aria-labelledby="audience-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Who we work with"
          title={<span id="audience-heading">Built for people who need software to move.</span>}
        />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={(i % 2) * 80} className="h-full">
              <article className="h-full bg-background p-7 sm:p-9">
                <h3 className="font-display text-2xl tracking-tight">{audience.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{audience.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Not sure which one you are? That&rsquo;s fine —{" "}
            <a
              href="/contact"
              className="text-foreground underline decoration-border underline-offset-4 hover:text-accent"
            >
              describe what you&rsquo;re trying to accomplish
            </a>{" "}
            and we&rsquo;ll tell you honestly whether we&rsquo;re the right team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

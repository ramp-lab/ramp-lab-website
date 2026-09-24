import { Marquee } from "@/components/ui/marquee";
import { projects } from "@/lib/projects";

/** Every technology used across the real builds in lib/projects.ts — no borrowed logos. */
const stack = Array.from(new Set(projects.flatMap((p) => p.stack)));

export function TechMarquee() {
  return (
    <section aria-label="Technologies we ship with" className="border-y border-white/[0.06] bg-white/[0.015] py-8">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        The stack behind our shipped builds
      </p>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:0.75rem]">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-sm text-foreground/75"
            >
              {tech}
            </span>
          ))}
        </Marquee>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}

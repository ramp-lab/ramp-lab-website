import { ArrowUpRight, CalendarClock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { ShimmerLink } from "@/components/site/ShimmerLink";
import { MagicCard } from "@/components/ui/magic-card";

const CONTACT_EMAIL = "musharaf@ramplab.me";
const CALL_LINK = "https://cal.com/mushraf-parwej-kw55pq/inro-call";

export default function ContactPage() {
  return (
    <>
      <PageHero
        id="contact-heading"
        back={{ href: "/", label: "Home" }}
        eyebrow="Start a project"
        title={<>Tell us what <span className="text-glow">you&rsquo;re building.</span></>}
        lede="You don't need a perfectly defined specification. Pick whichever is easier — a short call, or a plain email — and we'll take it from there."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Discovery call */}
          <Reveal className="h-full">
            <MagicCard gradientColor="rgba(52,211,153,0.08)" gradientFrom="#34d399" gradientTo="#22d3ee" className="h-full rounded-2xl">
            <article className="flex h-full flex-col p-8 sm:p-10">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                <CalendarClock className="h-5 w-5 text-accent" />
              </span>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Option 1 — fastest
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Book a discovery call
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                A free 30-minute conversation. Walk us through the idea, we&rsquo;ll
                ask sharp questions, and you&rsquo;ll leave with an honest take on
                scope, approach, and whether we&rsquo;re the right team. No pitch
                decks needed.
              </p>
              <ShimmerLink href={CALL_LINK} external className="mt-8 self-start">
                Book a free intro call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </ShimmerLink>
            </article>
            </MagicCard>
          </Reveal>

          {/* Plain email */}
          <Reveal delay={100} className="h-full">
            <MagicCard gradientColor="rgba(52,211,153,0.08)" gradientFrom="#34d399" gradientTo="#22d3ee" className="h-full rounded-2xl">
            <article className="flex h-full flex-col p-8 sm:p-10">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </span>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Option 2 — in your own time
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Send a plain email
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Write to us directly. A few lines on each of these is plenty:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {[
                  "What you're building and who it's for",
                  "What you need help with",
                  "Rough budget and timeline, if you know them",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-6 font-mono text-sm text-foreground underline decoration-border underline-offset-4 hover:text-accent sm:text-base"
              >
                {CONTACT_EMAIL}
              </a>
              <Button
                asChild
                variant="outline"
                className="group mt-8 h-auto w-full rounded-full border-white/15 bg-transparent px-7 py-3.5 text-base hover:border-accent hover:bg-transparent hover:text-accent sm:w-auto sm:self-start"
              >
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  Compose email
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </article>
            </MagicCard>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-white/[0.08] bg-card/60 p-7 sm:p-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              What happens next
            </h2>
            <ol className="mt-5 grid gap-6 sm:grid-cols-3">
              {[
                ["01", "We reply within 24–48 hours", "With first questions or a call invite."],
                ["02", "A working session", "We dig into goals, users, and constraints."],
                ["03", "A practical product plan", "Honest scope, approach, and timeline."],
              ].map(([index, title, copy]) => (
                <li key={index} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <p className="font-mono text-xs text-accent">{index}</p>
                  <p className="mt-2 font-medium text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarClock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

const CONTACT_EMAIL = "musharaf@ramplab.me";
const CALL_LINK = "https://cal.com/mushraf-parwej-kw55pq/inro-call";

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
          <Reveal>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Home
            </Link>
            <p className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-accent" />
              Start a project
            </p>
            <h1
              id="contact-heading"
              className="mt-7 max-w-3xl font-display text-5xl leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Tell us what you&rsquo;re building.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              You don&rsquo;t need a perfectly defined specification. Pick whichever
              is easier — a short call, or a plain email — and we&rsquo;ll take it
              from there.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
          {/* Discovery call */}
          <Reveal className="h-full">
            <article className="flex h-full flex-col bg-background p-8 sm:p-10">
              <span className="inline-flex h-11 w-11 items-center justify-center border border-border">
                <CalendarClock className="h-5 w-5 text-accent" />
              </span>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Option 1 — fastest
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                Book a discovery call
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                A free 30-minute conversation. Walk us through the idea, we&rsquo;ll
                ask sharp questions, and you&rsquo;ll leave with an honest take on
                scope, approach, and whether we&rsquo;re the right team. No pitch
                decks needed.
              </p>
              <Button
                asChild
                className="group mt-8 h-auto w-full rounded-none px-7 py-4 text-base hover:bg-accent hover:text-accent-foreground sm:w-auto"
              >
                <a href={CALL_LINK} target="_blank" rel="noopener noreferrer">
                  Book a free intro call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </article>
          </Reveal>

          {/* Plain email */}
          <Reveal delay={100} className="h-full">
            <article className="flex h-full flex-col bg-background p-8 sm:p-10">
              <span className="inline-flex h-11 w-11 items-center justify-center border border-border">
                <Mail className="h-5 w-5 text-accent" />
              </span>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Option 2 — in your own time
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
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
                    <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 bg-accent" />
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
                className="group mt-8 h-auto w-full rounded-none px-7 py-4 text-base hover:border-accent hover:bg-transparent hover:text-accent sm:w-auto"
              >
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  Compose email
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="border border-border p-7 sm:p-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              What happens next
            </h2>
            <ol className="mt-5 grid gap-6 sm:grid-cols-3">
              {[
                ["01", "We reply within 24–48 hours", "With first questions or a call invite."],
                ["02", "A working session", "We dig into goals, users, and constraints."],
                ["03", "A practical product plan", "Honest scope, approach, and timeline."],
              ].map(([index, title, copy]) => (
                <li key={index}>
                  <p className="font-mono text-xs text-muted-foreground">{index}</p>
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

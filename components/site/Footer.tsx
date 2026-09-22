import Link from "next/link";
import { RampLabLogo } from "@/components/logo";

const studioLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Start a project", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="RampLab home" className="inline-block">
              <RampLabLogo variant="light" size="md" />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              A product engineering studio. We design and build MVPs, SaaS products,
              AI applications, and custom software for founders and growing businesses.
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Currently accepting new projects
            </p>
          </div>

          <nav aria-label="Studio" className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studio
            </h2>
            <ul className="mt-5 space-y-3">
              {studioLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:musharaf@ramplab.me"
                  className="text-foreground/80 underline decoration-border underline-offset-4 hover:text-accent"
                >
                  musharaf@ramplab.me
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ramp-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 underline decoration-border underline-offset-4 hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/mushraf-parwej-kw55pq/inro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 underline decoration-border underline-offset-4 hover:text-accent"
                >
                  Book an intro call
                </a>
              </li>
            </ul>
            <p className="mt-5 font-mono text-xs text-muted-foreground">Remote-first</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RampLab. All rights reserved.</p>
          <p>Product engineering studio</p>
        </div>
      </div>
    </footer>
  );
}

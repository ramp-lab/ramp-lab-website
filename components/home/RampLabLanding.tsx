"use client";

import { useCallback, useEffect, useRef } from "react";
import posthog from "posthog-js";
import { getCalApi } from "@calcom/embed-react";
import OverstoryStudioLanding, {
  type OvsCase,
  type OvsFaq,
  type OvsService,
  type OvsStep,
} from "@/components/ui/overstory-studio-landing";

/*
 * RampLab content for the Overstory landing design.
 * Content rules (the content rules this site has always followed): no invented clients, testimonials,
 * metrics or prices. So the design's logo row, stats, quotes and pricing
 * sections are switched off until we have real ones to show.
 */

const CAL_LINK = "mushraf-parwej-kw55pq/inro-call";
// Kept as a real link so it still works if the embed script fails to load.
const BOOKING_URL = `https://cal.com/${CAL_LINK}`;

// The site is this one scrolling page; every link scrolls to a section.
const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const services: OvsService[] = [
  {
    title: "MVP Development",
    art: "product",
    time: "For founders",
    text: "Turn an idea into a working product that reaches real users, scoped to prove the concept.",
    tags: ["Scoping & architecture", "UX & interface design", "Full build", "Deployment"],
  },
  {
    title: "SaaS & Web Apps",
    art: "site",
    time: "For software businesses",
    text: "Production-ready apps, dashboards and platforms, with auth, payments and data modelled properly.",
    tags: ["Dashboards", "Auth, billing & roles", "APIs", "Integrations"],
  },
  {
    title: "AI Products",
    art: "code",
    time: "For teams adopting AI",
    text: "Grounded AI workflows and agents wired into your data, built into software people actually use.",
    tags: ["RAG systems", "Agents & automation", "Analysis pipelines", "Scoring"],
  },
  {
    title: "Internal Tools",
    art: "system",
    time: "For teams outgrowing spreadsheets",
    text: "Replace spreadsheets and manual processes with software designed around how your business runs.",
    tags: ["Workflow automation", "Admin tooling", "Reporting", "Offline desktop apps"],
  },
  {
    title: "Mobile & Desktop",
    art: "brand",
    time: "iOS, Android, desktop",
    text: "Cross-platform apps from one codebase, and desktop software that keeps working offline.",
    tags: ["React Native", "Flutter", "Electron", "Local-first data"],
  },
];

const work: OvsCase[] = [
  {
    client: "Legal Intelligence",
    kind: "AI legal technology",
    title: "Audit analytics that surface compliance gaps and flag fraud risk.",
    metric: "ML",
    metricLabel: "anomaly detection over audit data",
    year: "Python · NestJS",
    mock: "dashboard",
    tint: ["#cfe3d8", "#86b49a"],
  },
  {
    client: "Inventory & Invoicing",
    kind: "Desktop application",
    title: "GST invoicing tied to real-time stock, working offline.",
    metric: "GST",
    metricLabel: "CGST, SGST and IGST computed automatically",
    year: "Electron · SQLite",
    mock: "doc",
    tint: ["#e9e2cf", "#c9a865"],
  },
  {
    client: "ProIQ Academy",
    kind: "EdTech platform",
    title: "One place to deliver courses and track every student's progress.",
    metric: "LMS",
    metricLabel: "students, instructors and admins in one system",
    year: "React · PostgreSQL",
    mock: "dashboard",
    tint: ["#d4e0ee", "#7d9cc4"],
  },
  {
    client: "LYK",
    kind: "Social discovery app",
    title: "Real-time discovery and interaction, on iOS and Android.",
    metric: "1",
    metricLabel: "codebase for both platforms",
    year: "React Native",
    mock: "mobile",
    tint: ["#e6d9e4", "#b48aa8"],
  },
];

const steps: OvsStep[] = [
  { name: "Seed", when: "Step 1", title: "Discover", text: "We learn the business, the users and the constraints. You get a clear scope and build plan." },
  { name: "Sapling", when: "Step 2", title: "Design", text: "Product experience, architecture and technical plan before production code. You get clickable designs to review." },
  { name: "Branch", when: "Step 3", title: "Build", text: "Focused iterations with regular working releases you can click, test and react to." },
  { name: "Canopy", when: "Step 4", title: "Launch", text: "We deploy to production, monitor, fix and keep improving with you. You get the live product, code and handover." },
];

const faq: OvsFaq[] = [
  { q: "What do I actually get at the end?", a: "A live product on hosting and accounts you control, the full source code and IP, the design files, and docs with a handover session plus support after launch." },
  { q: "Who owns the code?", a: "You do, from day one. Every line lives in your own repository, so any team can pick it up later." },
  { q: "What kinds of products do you build?", a: "MVPs, SaaS and web apps, AI products, internal tools, and mobile and desktop apps." },
  { q: "What is your stack?", a: "React, Next.js, TypeScript, NestJS, PostgreSQL, Python for data and ML, React Native and Flutter for mobile, Electron for desktop. We also work with what your team already runs." },
  { q: "Who will I be talking to?", a: "The people designing and building your product. No account managers relaying messages." },
  { q: "How do we start?", a: "Book a free intro call or send us an email. We'll talk through the idea and come back with a scope and plan." },
];

export function RampLabLanding() {
  // Booking opens Cal.com in a popup over the page instead of leaving the site.
  const calRef = useRef<Awaited<ReturnType<typeof getCalApi>> | null>(null);

  useEffect(() => {
    let alive = true;
    getCalApi()
      .then((cal) => {
        if (!alive) return;
        cal("ui", {
          cssVarsPerTheme: { light: { "cal-brand": "#3d6a12" }, dark: { "cal-brand": "#c4dc52" } },
          layout: "month_view",
        });
        cal("preload", { calLink: CAL_LINK, type: "modal" });
        cal("on", {
          action: "bookingSuccessfulV2",
          callback: () => {
            if (posthog.__loaded) posthog.capture("call_booked");
          },
        });
        calRef.current = cal;
      })
      .catch(() => {
        /* embed blocked or offline: buttons fall back to opening cal.com */
      });
    return () => {
      alive = false;
    };
  }, []);

  const openBooking = useCallback((from: string) => {
    if (posthog.__loaded) posthog.capture("book_call_clicked", { from });
    const cal = calRef.current;
    // Match the popup to the page: daylight or dusk (the nav's theme switch).
    const theme = document.querySelector(".ovs-root")?.getAttribute("data-scheme") === "dark" ? "dark" : "light";
    if (cal) cal("modal", { calLink: CAL_LINK, config: { layout: "month_view", theme } });
    else window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  }, []);

  // Plain links to the booking page (footer) open the popup too.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.getAttribute("href") !== BOOKING_URL || !calRef.current) return;
      e.preventDefault();
      openBooking("link");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openBooking]);

  // Old page URLs (/work, /about, ...) redirect to /#section (next.config.mjs).
  // Sections are marked with data-sec, not id, so scroll to them by hand.
  useEffect(() => {
    const sec = window.location.hash.slice(1);
    if (!/^[a-z]+$/.test(sec)) return;
    const t = window.setTimeout(() => {
      document.querySelector(`[data-sec="${sec}"]`)?.scrollIntoView({ block: "start" });
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <OverstoryStudioLanding
      brand="RampLab"
      theme="light"
      photo="/images/canopy.avif"
      logoSrc="/images/ramp-lab-logo.png"
      links={NAV_LINKS}
      status="Accepting new projects"
      hero={{
        lead: "We Design and Build",
        words: ["SaaS", "AI", "MVPs", "Apps"],
        tail: "For You.",
        cue: "Scroll to rise above the trees",
      }}
      logos={[]}
      manifesto={{
        kicker: "Above the canopy",
        text: "RampLab is a design and engineering team for founders and growing businesses. [team] You bring the idea or the problem, we take it from first sketch to a live product, [chart] and hand you everything: the code, the designs and the docs.",
      }}
      stats={null}
      services={{
        kicker: "What we build",
        title: "One team. Five kinds of product.",
        text: "Whatever you need built, it's designed, engineered and launched by the same team.",
        items: services,
      }}
      work={{ kicker: "Selected work", title: "Real builds, shipped.", items: work, next: "Your product, next" }}
      process={{ kicker: "How it works", title: "Idea to production, in four steps.", steps }}
      quotes={null}
      pricing={null}
      faq={{
        kicker: "Questions",
        title: "Things founders ask us first.",
        text: "Anything else, write to us. The people building your product answer every email.",
        items: faq,
      }}
      cta={{
        title: "Let's build something worth looking up at.",
        text: "Tell us what you're building. We'll come back with a scope, a plan and a way to start.",
        button: "Book an intro call",
      }}
      footer={{
        columns: [
          { title: "Studio", links: [{ label: "Work", href: "#work" }, { label: "Services", href: "#services" }, { label: "Process", href: "#process" }, { label: "About", href: "#about" }] },
          { title: "Start", links: [{ label: "Start a project", href: "#contact" }, { label: "Book an intro call", href: BOOKING_URL }, { label: "Questions", href: "#faq" }] },
          { title: "Elsewhere", links: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/ramp-lab" }] },
        ],
        city: "Remote-first",
        timeZone: "Asia/Kolkata",
        note: "Built by RampLab.",
      }}
      email="musharaf@ramplab.me"
      onBook={openBooking}
      onSubscribe={(email) => {
        // Footer "reach out to me" form. Lands in PostHog as an identified person.
        if (!posthog.__loaded) return false;
        posthog.identify(email, { email });
        posthog.capture("reach_out_requested", { email });
        return true;
      }}
    />
  );
}

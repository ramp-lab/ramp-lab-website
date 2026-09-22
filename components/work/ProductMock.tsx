import { cn } from "@/lib/utils";

/**
 * Stylised interface illustrations for RampLab projects.
 * These are original diagrams evoking each product's domain —
 * they are NOT screenshots. No real client UI is reproduced.
 */
export function ProductMock({
  variant,
  className,
  figLabel,
}: {
  variant:
    | "legal-intelligence"
    | "inventory-invoicing"
    | "proiq-academy"
    | "ats-checker"
    | "lyk-social"
    | "doctor-practice"
    | "agency-landing";
  className?: string;
  figLabel?: string;
}) {
  return (
    <figure
      aria-hidden="true"
      className={cn(
        "overflow-hidden border border-border bg-card",
        className
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-accent/70" />
        <span className="ml-3 hidden font-mono text-[11px] text-muted-foreground sm:block">
          {figLabel ?? "ramplab — production build"}
        </span>
      </div>
      <div className="p-4 sm:p-5">{renderVariant(variant)}</div>
    </figure>
  );
}

function Shell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Bar({ w, tone = "default" }: { w: string; tone?: "default" | "accent" | "faint" }) {
  return (
    <div
      className={cn(
        "h-2",
        tone === "accent" && "bg-accent/80",
        tone === "default" && "bg-foreground/25",
        tone === "faint" && "bg-foreground/10"
      )}
      style={{ width: w }}
    />
  );
}

function renderVariant(
  variant: "legal-intelligence" | "inventory-invoicing" | "proiq-academy" | "ats-checker" | "lyk-social" | "doctor-practice" | "agency-landing"
) {
  switch (variant) {
    case "legal-intelligence":
      return (
        <Shell label="audit findings — flagged anomalies">
          {[
            { id: "TXN-8841", tag: "duplicate vendor payment", level: "high", w: "92%" },
            { id: "TXN-7719", tag: "missing approval chain", level: "high", w: "78%" },
            { id: "TXN-6530", tag: "off-cycle journal entry", level: "medium", w: "54%" },
            { id: "TXN-5422", tag: "rounded-amount pattern", level: "low", w: "31%" },
          ].map((row) => (
            <div key={row.id} className="border border-border p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-foreground">{row.id}</span>
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.14em]",
                    row.level === "high" && "text-accent",
                    row.level !== "high" && "text-muted-foreground"
                  )}
                >
                  {row.level} risk
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{row.tag}</p>
              <div className="mt-2 h-1 bg-foreground/10">
                <div
                  className={cn("h-1", row.level === "high" ? "bg-accent/80" : "bg-foreground/30")}
                  style={{ width: row.w }}
                />
              </div>
            </div>
          ))}
        </Shell>
      );

    case "inventory-invoicing":
      return (
        <Shell label="INV-2026-0141 — intra-state · cgst + sgst">
          {[
            { item: "Bearing unit — 6204-ZZ", qty: "40 pcs", amt: "₹18,400" },
            { item: "Grease cartridge — EP2", qty: "120 pcs", amt: "₹9,600" },
            { item: "V-belt — B-section", qty: "25 pcs", amt: "₹6,250" },
          ].map((row) => (
            <div
              key={row.item}
              className="flex items-center justify-between gap-3 border border-border px-3 py-2.5"
            >
              <div>
                <p className="text-xs text-foreground">{row.item}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{row.qty} · in stock</p>
              </div>
              <span className="font-mono text-xs text-foreground">{row.amt}</span>
            </div>
          ))}
          <div className="space-y-1.5 border border-accent/40 bg-accent/[0.06] p-3 font-mono text-[11px]">
            <div className="flex justify-between text-muted-foreground"><span>CGST @ 9%</span><span>₹3,082</span></div>
            <div className="flex justify-between text-muted-foreground"><span>SGST @ 9%</span><span>₹3,082</span></div>
            <div className="flex justify-between text-foreground"><span>Total</span><span>₹40,414</span></div>
          </div>
        </Shell>
      );

    case "proiq-academy":
      return (
        <Shell label="cohort progress — web dev batch 04">
          {[
            { course: "React fundamentals", pct: "86%", done: "12/14 modules" },
            { course: "APIs & databases", pct: "64%", done: "9/14 modules" },
            { course: "Deployment & DevOps", pct: "38%", done: "5/13 modules" },
          ].map((row) => (
            <div key={row.course} className="border border-border p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-foreground">{row.course}</p>
                <span className="font-mono text-[11px] text-accent">{row.pct}</span>
              </div>
              <div className="mt-2 h-1.5 bg-foreground/10">
                <div className="h-1.5 bg-accent/80" style={{ width: row.pct }} />
              </div>
              <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">{row.done}</p>
            </div>
          ))}
        </Shell>
      );

    case "ats-checker":
      return (
        <Shell label="resume score — live analysis">
          <div className="flex items-center gap-4 border border-border p-4">
            <div className="font-display text-5xl text-accent">82</div>
            <div className="space-y-1.5">
              <Bar w="120px" tone="accent" />
              <Bar w="90px" />
              <Bar w="105px" tone="faint" />
            </div>
          </div>
          {[
            { k: "Keyword coverage", v: "Good — 18/22 matched" },
            { k: "Section completeness", v: "Missing: certifications" },
          ].map((row) => (
            <div key={row.k} className="border border-border px-3 py-2.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{row.k}</p>
              <p className="mt-1 text-xs text-foreground">{row.v}</p>
            </div>
          ))}
        </Shell>
      );

    case "lyk-social":
      return (
        <Shell label="discovery feed — realtime">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-3 border border-border p-3">
              <div className="h-8 w-8 shrink-0 rounded-full bg-foreground/15" />
              <div className="flex-1 space-y-1.5">
                <Bar w="45%" />
                <Bar w="85%" tone="faint" />
                <div className="flex gap-3 pt-1 font-mono text-[10px] text-muted-foreground">
                  <span>♥ 214</span><span>↻ 32</span><span className="text-accent">● live</span>
                </div>
              </div>
            </div>
          ))}
        </Shell>
      );

    case "doctor-practice":
      return (
        <Shell label="today's clinic — appointments">
          {[
            { t: "09:30", p: "Follow-up — hypertension review", s: "confirmed" },
            { t: "10:15", p: "New patient — intake + records", s: "checked in" },
            { t: "11:00", p: "Prescription renewal + labs", s: "confirmed" },
          ].map((row) => (
            <div key={row.t} className="flex items-center gap-3 border border-border px-3 py-2.5">
              <span className="font-mono text-xs text-accent">{row.t}</span>
              <p className="flex-1 text-xs text-foreground">{row.p}</p>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{row.s}</span>
            </div>
          ))}
        </Shell>
      );

    case "agency-landing":
      return (
        <Shell label="landing — above the fold">
          <div className="border border-border p-4">
            <Bar w="30%" tone="accent" />
            <div className="mt-3 space-y-1.5">
              <Bar w="90%" />
              <Bar w="70%" />
            </div>
            <div className="mt-4 flex gap-2">
              <div className="bg-foreground px-4 py-1.5 font-mono text-[10px] text-background">Get started</div>
              <div className="border border-border px-4 py-1.5 font-mono text-[10px] text-muted-foreground">View work</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["LCP 0.9s", "CLS 0.01", "INP 42ms"].map((m) => (
              <div key={m} className="border border-border px-2 py-2 text-center font-mono text-[10px] text-accent">
                {m}
              </div>
            ))}
          </div>
        </Shell>
      );
  }
}

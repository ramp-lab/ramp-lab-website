/**
 * Single source of truth for RampLab project evidence.
 *
 * IMPORTANT — content rules:
 * - Only projects with real RampLab engineering behind them are listed here.
 * - No invented clients, testimonials, metrics, revenue, or user counts.
 * - "outcome" fields describe shipped scope only, never numbers we can't verify.
 */

export interface Project {
  slug: string;
  index: string;
  name: string;
  category: string;
  /** One-line summary of what the product is. */
  summary: string;
  /** What problem the product solves. */
  problem: string;
  /** What RampLab actually designed / built (engineering contribution). */
  built: string[];
  /** Technical complexity worth naming. */
  engineering: string[];
  stack: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "legal-intelligence",
    index: "01",
    name: "Legal Intelligence & Audit Analytics",
    category: "AI Legal Technology",
    summary:
      "A data-driven platform that analyses audit data to surface compliance gaps, detect anomalies, and flag potential fraud risk.",
    problem:
      "Audit and compliance reviews are slow, manual, and easy to get wrong. Genuine anomalies hide inside large volumes of records, and teams discover gaps only after they become expensive.",
    built: [
      "Analytics workspace for exploring audit datasets and review findings",
      "Data pipelines that ingest, normalise, and structure audit records for analysis",
      "Anomaly-detection workflows that surface outliers for human review",
      "Reporting views that explain compliance gaps in plain language",
    ],
    engineering: [
      "Python data-science and machine-learning pipelines",
      "Anomaly detection over structured audit data",
      "API layer (NestJS) serving analysis results to the frontend",
      "PostgreSQL modelling for large, queryable audit datasets",
    ],
    stack: ["React", "TypeScript", "Python", "Machine Learning", "NestJS", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "inventory-invoicing",
    index: "02",
    name: "Inventory & Invoice Management System",
    category: "Desktop Application",
    summary:
      "A desktop application for automated invoice generation with full GST tax logic, backed by real-time inventory tracking.",
    problem:
      "Small businesses billing with spreadsheets or manual tools constantly fight tax-calculation errors — CGST, SGST, and IGST splits — while stock levels drift out of sync with what's actually on the shelf.",
    built: [
      "Desktop invoicing workspace with automated GST computation (CGST, SGST, IGST)",
      "Real-time inventory tracking tied directly to billing",
      "Invoice generation flow designed for daily, high-volume use",
      "Local-first data layer so the app keeps working offline",
    ],
    engineering: [
      "Electron.js desktop shell with a React frontend",
      "Tax-computation engine encoding intra-state vs inter-state GST rules",
      "SQLite local-first persistence with real-time stock updates",
      "Node.js application layer bridging UI and local data",
    ],
    stack: ["Electron.js", "React", "Node.js", "SQLite"],
    featured: true,
  },
  {
    slug: "proiq-academy",
    index: "03",
    name: "ProIQ Academy LMS",
    category: "EdTech Platform",
    summary:
      "A learning management system for delivering courses, tracking student progress, and administering an academy from one place.",
    problem:
      "Running courses across disconnected tools — content here, progress in a spreadsheet, admin over email — makes it hard for educators to see how students are doing and harder for students to stay on track.",
    built: [
      "Course delivery experience for students",
      "Progress-tracking views for learners and administrators",
      "Administration workflows for managing courses and cohorts",
      "Role-based access separating students, instructors, and admins",
    ],
    engineering: [
      "Relational data modelling for courses, cohorts, and progress (PostgreSQL)",
      "NestJS API with authentication and role-based authorisation",
      "React frontend for student and admin workflows",
    ],
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "ats-checker",
    index: "04",
    name: "Resume ATS Checker",
    category: "AI Web Application",
    summary:
      "A web application that analyses resumes and gives real-time feedback on ATS compatibility, keyword coverage, and section quality.",
    problem:
      "Qualified candidates get filtered out by applicant-tracking systems before a human ever reads their resume — usually without knowing why.",
    built: [
      "Resume analysis interface with live, section-by-section scoring",
      "ATS-compatibility feedback with actionable improvement prompts",
      "Keyword-coverage views mapped to target job descriptions",
    ],
    engineering: [
      "REST API integration with an AI resume-analysis backend",
      "Real-time scoring UI that updates as the resume changes",
      "TypeScript frontend built for fast, iterative feedback loops",
    ],
    stack: ["React", "TypeScript", "REST API"],
  },
  {
    slug: "lyk-social",
    index: "05",
    name: "LYK — Social Discovery Platform",
    category: "Mobile Application",
    summary:
      "A cross-platform social networking application built around real-time discovery and interaction.",
    problem:
      "Social products live or die on interaction speed — feeds, messages, and engagement features have to feel instant on every device, or users leave.",
    built: [
      "Cross-platform mobile app shipped from a single codebase",
      "Real-time interactions and engagement features",
      "User profiles and discovery flows",
    ],
    engineering: [
      "React Native for iOS and Android from one codebase",
      "Real-time interaction layer for live engagement",
      "PostgreSQL-backed services with TypeScript throughout",
    ],
    stack: ["React Native", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "doctor-practice",
    index: "06",
    name: "Doctor Practice Management Platform",
    category: "Healthcare Software",
    summary:
      "A patient-management platform covering appointments, medical records, and prescription workflows for a clinical practice.",
    problem:
      "Clinics juggling appointments, paper records, and prescriptions across disconnected tools lose time, misplace information, and create risk at exactly the moments accuracy matters most.",
    built: [
      "Appointment scheduling and practice-day workflows",
      "Digital medical records tied to each patient",
      "Prescription workflows for consulting doctors",
      "Role-aware access for clinical and administrative staff",
    ],
    engineering: [
      "Flutter frontend for fast, reliable clinical workflows",
      "NestJS API with authentication and structured medical data (PostgreSQL)",
      "Workflow modelling for appointments, records, and prescriptions",
    ],
    stack: ["Flutter", "Dart", "NestJS", "PostgreSQL"],
  },
  {
    slug: "agency-landing",
    index: "07",
    name: "Agency Landing Page",
    category: "Marketing Website",
    summary:
      "A high-performance landing page for a creative agency, built around Core Web Vitals and a modern visual identity.",
    problem:
      "An agency's own site is its portfolio — a slow or dated landing page quietly tells prospects the work will be slow and dated too.",
    built: [
      "Conversion-focused landing page with a modern visual identity",
      "Fully responsive layout across mobile, tablet, and desktop",
      "Performance budget enforced around Core Web Vitals",
    ],
    engineering: [
      "Next.js with static optimisation for near-instant loads",
      "TailwindCSS design system for consistent responsive UI",
      "Motion design that stays within performance budgets",
    ],
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);

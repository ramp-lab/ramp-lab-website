import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell RampLab what you're building — MVPs, SaaS products, AI applications, and custom software. Get a practical product plan.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import { RampLabLanding } from "@/components/home/RampLabLanding";

export const metadata: Metadata = {
  title: "RampLab — Custom Software Studio",
  description:
    "RampLab designs and builds custom software — web apps, SaaS, AI products, desktop and mobile apps — and hands you the live product, the source code, the designs and the docs.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <RampLabLanding />;
}

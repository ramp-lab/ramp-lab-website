import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Deliverables } from "@/components/home/Deliverables";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { WhyRampLab } from "@/components/home/WhyRampLab";
import { Process } from "@/components/home/Process";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "RampLab — Custom Software Studio",
  description:
    "RampLab designs and builds custom software — web apps, SaaS, AI products, desktop and mobile apps — and hands you the live product, the source code, the designs and the docs.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Deliverables />
      <Services />
      <SelectedWork />
      <Process />
      <WhyRampLab />
      <FinalCta />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { WhyRampLab } from "@/components/home/WhyRampLab";
import { Process } from "@/components/home/Process";
import { Audiences } from "@/components/home/Audiences";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "RampLab — Product Engineering Studio",
  description:
    "RampLab designs and builds MVPs, SaaS products, AI applications and custom software for founders and growing businesses.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <WhyRampLab />
      <Process />
      <Audiences />
      <FinalCta />
    </>
  );
}

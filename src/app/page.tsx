import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "NexSphere Global Advisors LLP | Outsourced Accounting, Payroll & Tax Services USA & India",
  description:
    "NexSphere Global Advisors LLP — trusted outsourced accounting, payroll processing & return filing, US taxation compliance, Virtual CFO advisory, and GST & Indian tax services. Serving CPA firms and businesses across the US and India.",
  alternates: { canonical: "https://www.thenexsphereglobal.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServiceGrid />
      <BlogPreview />
      <CTASection />
    </>
  );
}

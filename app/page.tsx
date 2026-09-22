import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { WhyCareMedBridge } from "@/components/home/WhyCareMedBridge";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = pageMetadata({
  title: "CareMedBridge | RCM and Medical Billing for U.S. Practices",
  description:
    "CareMedBridge helps U.S. healthcare practices reduce claim denials, manage aging AR, improve billing accuracy, and streamline revenue cycle operations.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust / value strip — overlaps hero */}
      <TrustStrip />

      {/* 3. Services overview — all 12 services */}
      <ServicesShowcase />

      {/* 4. Why CareMedBridge */}
      <WhyCareMedBridge />

      {/* 5. How it works — 6-step revenue-cycle timeline */}
      <HowItWorks />

      {/* 6. Specialties */}
      <SpecialtiesSection />

      {/* 7. Problem → Solution */}
      <ProblemSolution />

      {/* 8. Operational improvement highlights */}
      <TestimonialsSection />

      {/* 9. FAQ preview */}
      <FAQPreview />

      {/* 10. Final CTA */}
      <CTASection
        heading="Get Your Free RCM Assessment"
        subheading="Tell us about your practice and current billing challenges. We will review the revenue-cycle issues that are slowing collections and discuss a practical path forward."
        primaryCta={{ label: "Request a Free RCM Assessment", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />

      {/* 11. Footer is rendered globally in the root layout */}
    </>
  );
}

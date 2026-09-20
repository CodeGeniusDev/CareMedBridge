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
  title: "CareMedBridge | Healthcare Billing Services",
  description:
    "End-to-end medical billing, coding, and revenue cycle management for physicians and healthcare practices across the USA.",
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

      {/* 8. Testimonials (clearly-marked placeholders) */}
      <TestimonialsSection />

      {/* 9. FAQ preview */}
      <FAQPreview />

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready to Simplify Your Healthcare Billing?"
        subheading="Talk to a CareMedBridge specialist today. We'll review your current billing setup and show you exactly how we can help — no obligation."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />

      {/* 11. Footer is rendered globally in the root layout */}
    </>
  );
}

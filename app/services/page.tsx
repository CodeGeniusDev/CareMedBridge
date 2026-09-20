import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { Stagger } from "@/components/anim/Stagger";
import { featuredServices, services } from "@/lib/data/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Medical Billing & Revenue Cycle Services",
  description:
    "Explore CareMedBridge's healthcare billing services: medical billing, coding, revenue cycle management, eligibility verification, claim submission, denial management, AR recovery, credentialing, prior authorization, and more for USA practices.",
  path: "/services",
  keywords: [
    "medical billing services USA",
    "healthcare billing services",
    "revenue cycle management services",
    "medical coding services",
    "denial management services",
    "medical credentialing services",
    "prior authorization services",
  ],
});

export default function ServicesPage() {
  const remainingServices = services.filter(
    (service) => !service.featured,
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        breadcrumbItems={[{ label: "Services" }]}
        badge="Our Services"
        heading="End-to-End Revenue Cycle Solutions"
        accentWord="Revenue Cycle"
        subheading="From eligibility verification to AR recovery, CareMedBridge handles every aspect of your revenue cycle — so your practice gets paid faster and keeps more of what it earns."
        ctas={[
          { label: "Request a Consultation", href: "/contact" },
          { label: "See How We Price", href: "/pricing", variant: "outline" },
        ]}
      />

      {/* Featured services */}
      <section className="section-pad">
        <Container>
          <SectionHeading
            badge="Core Services"
            heading="The foundation of your revenue cycle"
            accentWord="foundation"
            subheading="Most practices start here — the four services that carry the heaviest load in day-to-day billing."
            className="mb-12"
          />
          <Stagger
            className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
            stagger={0.08}
          >
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} large />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* All services */}
      <section className="section-pad bg-[var(--color-soft)] border-y border-[var(--color-border)]">
        <Container>
          <SectionHeading
            badge="Full Catalog"
            heading="Every service your practice needs"
            accentWord="service"
            subheading="Twelve specialized services that work standalone — or as one connected revenue cycle."
            className="mb-12"
          />
          <Stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            stagger={0.04}
          >
            {remainingServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="section-pad">
        <Container>
          <Stagger
            className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto"
            stagger={0.08}
          >
            <Link
              href="/specialties"
              className="group card-base card-lift p-7 flex flex-col gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-teal)]">
                By Specialty
              </span>
              <h3 className="text-lg font-bold text-[var(--color-navy)] leading-snug">
                Billing tuned to your medical specialty
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                Coding rules, modifiers, and payer expectations differ by specialty. See how we bill for yours.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)] group-hover:gap-2.5 transition-[gap] duration-[var(--duration-fast)]">
                Explore specialties
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/faq"
              className="group card-base card-lift p-7 flex flex-col gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-teal)]">
                Common Questions
              </span>
              <h3 className="text-lg font-bold text-[var(--color-navy)] leading-snug">
                What practices ask before outsourcing billing
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                Onboarding, turnaround, reporting, pricing models — straight answers in our FAQ.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)] group-hover:gap-2.5 transition-[gap] duration-[var(--duration-fast)]">
                Read the FAQ
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecialtyCard } from "@/components/ui/SpecialtyCard";
import { CTASection } from "@/components/ui/CTASection";
import { Stagger } from "@/components/anim/Stagger";
import { specialties } from "@/lib/data/specialties";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Medical Billing by Specialty",
  description:
    "CareMedBridge provides specialized medical billing and revenue cycle management for 18 medical specialties — including cardiology, orthopedics, pediatrics, neurology, mental health, physical therapy, and primary care — for practices across the USA.",
  path: "/specialties",
  keywords: [
    "medical billing services for physicians",
    "medical billing services for clinics",
    "medical billing services USA",
    "healthcare revenue cycle management",
    "specialty medical billing",
  ],
});

export default function SpecialtiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Specialties", path: "/specialties" },
        ])}
      />
      <PageHero
        breadcrumbItems={[{ label: "Specialties" }]}
        badge="Medical Specialties"
        heading="Billing Expertise Across Every Specialty"
        accentWord="Specialty"
        subheading="Specialty-specific billing demands deep knowledge of unique coding requirements, payer rules, and documentation standards. Our teams bring that knowledge to 18 medical specialties."
        ctas={[
          { label: "Request a Consultation", href: "/contact" },
          { label: "View All Services", href: "/services", variant: "outline" },
        ]}
      />

      {/* Specialties grid */}
      <section className="section-pad">
        <Container>
          <SectionHeading
            badge="18 Specialties"
            heading="Find your specialty"
            accentWord="specialty"
            subheading="Each specialty page covers its billing nuances, the services that support it, and the questions its practices ask most."
            className="mb-12"
          />
          <Stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            stagger={0.04}
          >
            {specialties.map((specialty, index) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} index={index} />
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection
        heading="Don't See Your Specialty Listed?"
        subheading="We support a wide range of healthcare specialties and multispecialty groups. Contact us to discuss your practice's specific billing needs."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}

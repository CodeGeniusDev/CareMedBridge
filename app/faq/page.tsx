import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FAQTopicFilter } from "@/components/faq/FAQTopicFilter";
import { Reveal } from "@/components/anim/Reveal";
import { faqs } from "@/lib/data/faqs";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about outsourced medical billing, medical coding, denied claims, revenue cycle management, credentialing, turnaround times, specialties, onboarding, reporting, and pricing.",
  path: "/faq",
  keywords: [
    "medical billing outsourcing FAQ",
    "outsourced medical billing questions",
    "medical billing company",
    "revenue cycle management services",
    "medical billing pricing",
  ],
});

const coveredTopics = [
  "Outsourced medical billing",
  "Medical coding",
  "Denied claims",
  "Revenue cycle management",
  "Credentialing",
  "Claims turnaround",
  "Specialties",
  "Onboarding",
  "Reporting",
  "Pricing",
];

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        breadcrumbItems={[{ label: "FAQ" }]}
        badge="FAQ"
        heading="Answers, before you even ask"
        accentWord="Answers"
        subheading="Everything practices want to know before partnering with a medical billing company, from onboarding and turnaround to reporting and pricing."
        ctas={[
          { label: "Ask a Question", href: "/contact" },
          { label: "Request a Quote", href: "/pricing", variant: "outline" },
        ]}
      />

      {/* Topic coverage */}
      <section className="border-b border-[var(--color-border)] bg-white">
        <Container className="py-8">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-4">
              Ten topics, straight answers
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {coveredTopics.map((topic) => (
                <li
                  key={topic}
                  className="px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-pill)] bg-[var(--color-soft)] text-[var(--color-teal)] border border-[var(--color-border)]"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Filterable FAQ accordion */}
      <section className="section-pad">
        <Container>
          <SectionHeading
            badge="Browse by Topic"
            heading="Frequently asked questions"
            accentWord="questions"
            className="mb-12"
          />
          <FAQTopicFilter faqs={faqs} />
        </Container>
      </section>

      <CTASection
        heading="Still Have Questions?"
        subheading="Our billing specialists are happy to answer anything about our services, process, or pricing. Reach out and we will talk through options with no obligation."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}

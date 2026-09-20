import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms governing use of the CareMedBridge website, including its content, forms, and intellectual property.",
  path: "/terms",
});

const sections = [
  {
    heading: "Use of this website",
    body: "This website provides general information about CareMedBridge's healthcare billing services and a way to request a consultation or quote. Using this site does not create a billing or professional services agreement — engagements begin only after a written agreement is signed by both parties.",
  },
  {
    heading: "Informational content",
    body: "Articles and page content on this site are provided for general informational purposes. They are not billing, legal, or compliance advice for your specific situation, and they should not replace guidance tailored to your practice.",
  },
  {
    heading: "Intellectual property",
    body: "All content on this website — text, design, branding, and graphics — belongs to CareMedBridge and may not be reproduced without written permission.",
  },
  {
    heading: "Form submissions",
    body: "Submitting a form on this website represents that the information you provide is accurate and that you're authorized to share it. We use submitted information only to respond to your request, as described in our Privacy Policy.",
  },
  {
    heading: "Changes to these terms",
    body: "These terms may be updated as the site evolves. The version posted on this page applies to your use of the site.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "Terms of Service" }]}
        badge="Legal"
        heading="Terms of Service"
        accentWord="Terms"
        subheading="The terms that govern your use of the CareMedBridge website."
      />
      <section className="section-pad">
        <Container narrow>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-10">
              Last updated: January 2025
            </p>
          </Reveal>
          <Stagger className="flex flex-col gap-10" stagger={0.05}>
            {sections.map((section, index) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2>
                  {index + 1}. {section.heading}
                </h2>
                <p className="text-base">{section.body}</p>
              </div>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-12 text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-8">
              These terms are a working draft for a website under active
              development and should be reviewed by legal counsel before formal
              publication. Questions can be directed through our{" "}
              <a
                href="/contact"
                className="font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-[var(--duration-fast)]"
              >
                contact page
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

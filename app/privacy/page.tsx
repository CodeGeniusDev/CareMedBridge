import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CareMedBridge handles information submitted through this website, including consultation and contact form data.",
  path: "/privacy",
});

const sections = [
  {
    heading: "Information we collect",
    body: "When you submit a consultation or contact form on this website, we collect the information you provide directly: your name, practice name, contact details, and any details you share about your billing needs. We also collect standard technical information (such as browser type and pages visited) to keep the site secure and functional.",
  },
  {
    heading: "How we use your information",
    body: "We use submitted information solely to respond to your inquiry, prepare a quote, and evaluate whether our services fit your practice. We do not sell your information, and we do not use it for unrelated marketing.",
  },
  {
    heading: "How we protect information",
    body: "Form submissions are handled through our secure database provider with access limited to team members who need it to respond to you. We retain inquiry information only as long as needed for the purpose it was provided.",
  },
  {
    heading: "Please do not submit patient information",
    body: "This website is intended for practice administrators and providers to discuss billing services. It is not a channel for patient data. Please do not include patient names, dates of birth, insurance member IDs, medical record numbers, or any other protected health information (PHI) in form submissions, emails, or phone messages.",
  },
  {
    heading: "Your choices",
    body: "You may ask us at any time what information we hold about you, request corrections, or ask us to delete your inquiry data. Use the contact details on this page to reach us.",
  },
  {
    heading: "Updates to this policy",
    body: "This policy may be updated as our services evolve. Material changes will be reflected on this page with an updated revision date.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbItems={[{ label: "Privacy Policy" }]}
        badge="Legal"
        heading="Privacy Policy"
        accentWord="Privacy"
        subheading="How we handle information submitted through the CareMedBridge website."
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
              This is a working policy for a website under active development and
              should be reviewed by legal counsel before formal publication.
              Questions about privacy can be directed through our{" "}
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

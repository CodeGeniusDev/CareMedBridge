import type { Metadata } from "next";
import {
  CheckCircle,
  Compass,
  Eye,
  Globe,
  HeartHandshake,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about CareMedBridge — a USA-focused healthcare billing and revenue cycle management company helping physicians, practices, and clinics maximize revenue with transparent, specialty-aware billing services.",
  path: "/about",
  keywords: [
    "medical billing company",
    "medical billing outsourcing",
    "healthcare billing services",
    "medical billing services USA",
    "healthcare revenue cycle management",
  ],
});

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description:
      "Precision in every code and claim we submit, minimizing denials and protecting your revenue.",
  },
  {
    icon: Users,
    title: "Practice-Centered",
    description:
      "We act as an extension of your team, learning the nuances of your specialty and workflow.",
  },
  {
    icon: Globe,
    title: "USA-Focused",
    description:
      "Deep working knowledge of US payer requirements, coding updates, and insurance landscapes.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Reporting",
    description:
      "Clear, regular reporting on billing performance so you always know where your revenue stands.",
  },
];

const outsourceReasons = [
  {
    icon: HeartHandshake,
    title: "A full team, not a hire",
    description:
      "Recruiting, training, and retaining billing staff is hard. Outsourcing gives your practice an entire experienced billing department for less than the cost of building one.",
  },
  {
    icon: Target,
    title: "Specialized expertise",
    description:
      "Payer rules, coding updates, and documentation requirements change constantly. A dedicated billing company stays current so your practice doesn't have to.",
  },
  {
    icon: TrendingUp,
    title: "Healthier cash flow",
    description:
      "Faster, cleaner claims and disciplined follow-up shorten the payment cycle — practices typically collect more of what they earn, sooner.",
  },
  {
    icon: Users,
    title: "Focus on patients",
    description:
      "Every hour your staff spends fighting denials is an hour away from patient care. Outsourced billing hands the paperwork back to the specialists.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        breadcrumbItems={[{ label: "About" }]}
        badge="About CareMedBridge"
        heading="Your Billing Partner. Your Growth Engine."
        accentWord="Growth"
        subheading="CareMedBridge is a USA-focused healthcare billing company helping physicians, private practices, clinics, and hospitals optimize their revenue cycle and reduce administrative burden."
        ctas={[
          { label: "Request a Consultation", href: "/contact" },
          { label: "Explore Our Services", href: "/services", variant: "outline" },
        ]}
      />

      {/* Mission & Vision */}
      <section className="section-pad">
        <Container>
          <Stagger
            className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto"
            stagger={0.1}
          >
            <div className="card-base card-lift p-7 md:p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h2>Our Mission</h2>
              <p className="text-base">
                To give every practice we serve a billing operation that is accurate,
                transparent, and accountable — one that treats your revenue with the same
                care you give your patients, and proves it with clear reporting.
              </p>
            </div>
            <div className="card-base card-lift p-7 md:p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2>Our Vision</h2>
              <p className="text-base">
                A healthcare system where no practice loses revenue to preventable billing
                errors — where providers of every size can compete on care, not on
                back-office capacity.
              </p>
            </div>
          </Stagger>
        </Container>
      </section>

      {/* Company story */}
      <section className="section-pad bg-[var(--color-soft)] border-y border-[var(--color-border)]">
        <Container narrow>
          <SectionHeading
            badge="Who We Are"
            heading="Built for the business side of medicine"
            accentWord="business"
            className="mb-10"
          />
          <Reveal>
            <div className="flex flex-col gap-6 text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              <p>
                CareMedBridge was created to serve the evolving needs of modern healthcare
                providers. We work with practices of all sizes — from solo physicians to
                multi-specialty groups — delivering revenue cycle solutions tailored to each
                practice&apos;s workflow, specialty, and growth plans.
              </p>
              <p>
                Our team of billing specialists, coding professionals, and credentialing
                experts focuses exclusively on healthcare. We track payer policy changes,
                coding updates, and documentation requirements as they happen, so the
                practices we serve are never caught off guard by a rule change.
              </p>
              <p>
                We believe the best billing partner is one that operates transparently,
                communicates proactively, and treats your revenue as seriously as you do.
                That is the standard we hold ourselves to on every claim, every denial, and
                every report.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach / values */}
      <section className="section-pad">
        <Container>
          <SectionHeading
            badge="Our Approach"
            heading="How we work"
            accentWord="work"
            subheading="The principles that guide every decision we make on your practice's behalf."
            className="mb-12"
          />
          <Stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            stagger={0.05}
          >
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-base card-lift p-6 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--color-navy)] leading-snug">
                  {title}
                </h3>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Why practices choose outsourced billing (navy) */}
      <section className="section-pad bg-[var(--color-navy)]">
        <Container>
          <SectionHeading
            badge="Why Outsource"
            heading="Why practices choose outsourced billing"
            accentWord="outsourced"
            subheading="The shift to medical billing outsourcing isn't about giving up control — it's about gaining capability."
            className="mb-12"
            eyebrowClassName="text-[var(--color-accent)]"
            headingClassName="text-white"
            subheadingClassName="text-white/65"
          />
          <Stagger
            className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto"
            stagger={0.06}
          >
            {outsourceReasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.06] p-6 md:p-7 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-[var(--radius-btn)] bg-[var(--color-teal)]/20 text-[var(--color-accent)] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-white/65 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection
        heading="Let's Build Your Billing Advantage"
        subheading="Tell us about your practice and we'll show you exactly where CareMedBridge can strengthen your revenue cycle."
      />
    </>
  );
}

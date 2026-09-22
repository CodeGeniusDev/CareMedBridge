import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Check,
  ClipboardList,
  FileStack,
  PieChart,
  Stethoscope,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { cn } from "@/lib/utils";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Pricing & Custom Quotes",
  description:
    "CareMedBridge pricing is built around your practice: specialty, size, provider count, billing volume, and the services you need. Request a custom quote for medical billing and revenue cycle management services.",
  path: "/pricing",
  keywords: [
    "medical billing pricing",
    "medical billing company for small practices",
    "medical billing outsourcing cost",
    "revenue cycle management pricing",
    "medical billing services USA",
  ],
});

const quoteFactors = [
  {
    icon: Stethoscope,
    title: "Specialty",
    description:
      "Coding complexity, modifier usage, and payer mix vary by specialty, and a cardiology group's billing looks nothing like a therapy practice's.",
  },
  {
    icon: Building2,
    title: "Practice size",
    description:
      "A solo provider, a small group, and a multi-location clinic each need a different level of support and staffing from us.",
  },
  {
    icon: ClipboardList,
    title: "Provider count",
    description:
      "More providers means more claims, more credentialing, and more follow-up, and your quote reflects the real workload.",
  },
  {
    icon: FileStack,
    title: "Billing volume",
    description:
      "Monthly claim counts and appointment volume drive the hours your billing requires, so they're a core pricing input.",
  },
  {
    icon: Workflow,
    title: "Services required",
    description:
      "Full revenue cycle management, standalone denial management, and credentialing only; you pay for what you actually use.",
  },
  {
    icon: PieChart,
    title: "Current AR position",
    description:
      "Practices coming to us with significant AR backlog may need recovery work up front, which we scope separately.",
  },
];

const pricingModels = [
  {
    name: "Percentage of collections",
    description:
      "Our fee scales with what we actually collect for you, so we're incentivized to maximize your revenue, not just process claims.",
  },
  {
    name: "Flat fee",
    description:
      "A predictable per-provider or monthly fee for practices that want stable, budgetable billing costs.",
  },
  {
    name: "Hybrid",
    description:
      "A base fee for core services plus a performance component for denial management or AR recovery work.",
  },
];

const plans = [
  {
    id: "starter",
    name: "Essential Billing",
    description: "Core billing services for solo practitioners and small practices.",
    features: [
      "Medical billing & claim submission",
      "Payment posting",
      "Patient statement generation",
      "Monthly performance reports",
      "Dedicated billing specialist",
      "Email & phone support",
    ],
    cta: "Request a Quote",
    featured: false,
  },
  {
    id: "growth",
    name: "Full Revenue Cycle",
    description: "Comprehensive RCM for growing practices seeking complete billing support.",
    features: [
      "Everything in Essential Billing",
      "Medical coding (ICD-10, CPT, HCPCS)",
      "Insurance eligibility verification",
      "Prior authorization management",
      "Denial management & appeals",
      "AR recovery follow-up",
      "Credentialing support",
    ],
    cta: "Request a Quote",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise RCM",
    description: "Full-suite solutions for multi-specialty groups and hospital systems.",
    features: [
      "Everything in Full Revenue Cycle",
      "Dedicated account manager",
      "Front office management",
      "Virtual assistance",
      "Custom reporting & analytics",
      "Provider onboarding support",
      "Priority response SLA",
    ],
    cta: "Request a Quote",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        breadcrumbItems={[{ label: "Pricing" }]}
        badge="Pricing"
        heading="Pricing built around your practice"
        accentWord="your practice"
        subheading="There is no honest one-size-fits-all rate for medical billing. Your quote is built from your specialty, practice size, provider count, billing volume, and the services you need, so you only pay for what moves your revenue."
        ctas={[
          { label: "Request a Quote", href: "/contact" },
          { label: "Explore Services", href: "/services", variant: "outline" },
        ]}
      />

      {/* What affects your quote */}
      <section className="section-pad">
        <Container>
          <SectionHeading
            badge="How We Quote"
            heading="What goes into your price"
            accentWord="price"
            subheading="Six factors shape every custom quote we send. Understanding them helps you compare billing partners on value, not just cost."
            className="mb-12"
          />
          <Stagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            stagger={0.05}
          >
            {quoteFactors.map(({ icon: Icon, title, description }) => (
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

      {/* Pricing models */}
      <section className="section-pad bg-[var(--color-soft)] border-y border-[var(--color-border)]">
        <Container>
          <SectionHeading
            badge="Pricing Models"
            heading="Ways to structure the engagement"
            accentWord="structure"
            subheading="Most practices fit one of three models, and we'll recommend the one that aligns best with your volume and goals."
            className="mb-12"
          />
          <Stagger
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            stagger={0.07}
          >
            {pricingModels.map((model) => (
              <div key={model.name} className="card-base card-lift p-7 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-[var(--color-navy)] leading-snug">
                  {model.name}
                </h3>
                <p className="text-sm">{model.description}</p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Engagement tiers */}
      <section className="section-pad">
        <Container>
          <SectionHeading
            badge="Engagement Tiers"
            heading="Scopes that scale with you"
            accentWord="scale"
            subheading="Every tier is custom-quoted, and the scope below shows what's typically included, not a fixed rate."
            className="mb-14"
          />
          <Stagger
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
            stagger={0.08}
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "card-base p-8 flex flex-col gap-6 relative",
                  plan.featured &&
                  "border-[var(--color-teal)] shadow-[var(--shadow-card-hover)] ring-1 ring-[var(--color-teal)]/30"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-[var(--color-teal)] text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <h3>{plan.name}</h3>
                  <p className="text-sm">{plan.description}</p>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-3xl font-bold text-[var(--color-navy)]">
                    Custom
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">
                    Custom-quoted for your practice
                  </span>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[var(--color-text)]"
                    >
                      <Check className="w-4 h-4 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </Stagger>

          <Reveal>
            <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
              All pricing is customized to your practice.{" "}
              <Link
                href="/faq"
                className="font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-[var(--duration-fast)]"
              >
                Read common pricing questions
              </Link>{" "}
              or request a detailed, no-obligation quote.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Quote request — same reusable ConsultationForm as /contact */}
      <section className="section-pad bg-[var(--color-navy)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="flex flex-col gap-6 lg:pt-8">
              <p className="eyebrow text-[var(--color-accent)]">Get Your Custom Quote</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight">
                Pricing shaped to your <em className="accent-serif text-[var(--color-accent)]">practice</em>
              </h2>
              <p className="text-white/70 leading-relaxed max-w-md text-base md:text-lg">
                Tell us about your specialty, provider count, and billing volume, and we will
                respond with a detailed, no-obligation quote built around your numbers.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Response within one business day",
                  "Transparent scope with no hidden fees",
                  "Built around your specialty and volume",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent)]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Reveal y={24} delay={0.1}>
              <ConsultationForm compact />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

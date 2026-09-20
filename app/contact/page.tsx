import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Reveal } from "@/components/anim/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Request a free consultation with CareMedBridge. Our medical billing specialists are ready to discuss your practice's revenue cycle needs.",
  path: "/contact",
  keywords: [
    "medical billing consultation",
    "medical billing company",
    "revenue cycle management services",
    "request billing quote",
  ],
});

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@caremedbridge.com",
    href: "mailto:info@caremedbridge.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Medical Plaza, Suite 400\nNew York, NY 10001",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 9 AM – 6 PM EST",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        breadcrumbItems={[{ label: "Contact" }]}
        badge="Get in Touch"
        heading="Request a Free Consultation"
        accentWord="Consultation"
        subheading="Tell us about your practice and billing needs. A CareMedBridge specialist will reach out within one business day."
      />

      {/* Contact Layout */}
      <section className="section-pad bg-[var(--color-canvas)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar: Contact Info */}
            <div className="flex flex-col gap-8">
              <Reveal className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-[var(--color-navy)]">Contact Information</h2>
                <p className="text-sm text-[var(--color-muted)]">
                  Reach out directly or use the form to submit your consultation request.
                </p>
              </Reveal>

              <ul className="flex flex-col gap-5">
                {contactDetails.map(({ icon: Icon, label, value, href }, index) => (
                  <li key={label}>
                    <Reveal y={14} delay={Math.min(index * 0.05, 0.2)}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                            {label}
                          </span>
                          {href ? (
                            <a
                              href={href}
                              className="text-sm text-[var(--color-navy)] hover:text-[var(--color-teal)] transition-colors font-medium"
                            >
                              {value}
                            </a>
                          ) : (
                            <span className="text-sm text-[var(--color-navy)] font-medium whitespace-pre-line">
                              {value}
                            </span>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <Reveal>
                <div className="p-4 rounded-[var(--radius-btn)] bg-[var(--color-soft)] border border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    <strong className="text-[var(--color-navy)]">Response time:</strong> We respond
                    to all consultation requests within one business day.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal y={20} delay={0.1}>
                <ConsultationForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

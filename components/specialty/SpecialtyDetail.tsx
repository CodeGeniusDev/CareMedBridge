import {
  Calculator,
  ClipboardList,
  FileText,
  ShieldCheck,
} from "lucide-react";
import type { Service, Specialty } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQItem } from "@/components/ui/FAQItem";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";

const considerationIcons = [FileText, ShieldCheck, ClipboardList, Calculator];

/**
 * Full content stack for a specialty detail page: overview, billing
 * considerations, the CareMedBridge services most relevant to the
 * specialty, and specialty-specific FAQs.
 */
export function SpecialtyDetail({
  specialty,
  relevantServices = [],
}: {
  specialty: Specialty;
  relevantServices?: Service[];
}) {
  const { detail } = specialty;

  return (
    <>
      {/* ── Overview ──────────────────────────────────────────────── */}
      <section className="section-pad">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              align="left"
              badge="Specialty Overview"
              heading={`${specialty.title} billing, in focus`}
              accentWord={specialty.title}
              className="mb-8"
            />
            <Reveal>
              <div className="flex flex-col gap-5">
                {detail.overview.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Billing considerations ────────────────────────────────── */}
      <section className="section-pad bg-[var(--color-soft)] border-y border-[var(--color-border)]">
        <Container>
          <SectionHeading
            badge="What Makes It Different"
            heading="Billing considerations for this specialty"
            accentWord="considerations"
            subheading={`The details that separate clean ${specialty.title.toLowerCase()} claims from denials and underpayments.`}
            className="mb-12"
          />
          <Stagger
            className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto"
            stagger={0.06}
          >
            {detail.considerations.map((consideration, index) => {
              const Icon = considerationIcons[index % considerationIcons.length];
              return (
                <div key={consideration.title} className="card-base card-lift p-6 md:p-7 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-navy)] leading-snug">
                    {consideration.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                    {consideration.description}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ── Relevant services ─────────────────────────────────────── */}
      {relevantServices.length > 0 && (
        <section className="section-pad">
          <Container>
            <SectionHeading
              badge="How We Support You"
              heading="Services that power this specialty"
              accentWord="services"
              subheading="The CareMedBridge capabilities most often paired with this specialty's billing needs."
              className="mb-12"
            />
            <Stagger
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
              stagger={0.05}
            >
              {relevantServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      {/* ── FAQs ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-[var(--color-soft)] border-t border-[var(--color-border)]">
        <Container>
          <SectionHeading
            badge="FAQs"
            heading={`${specialty.title} billing questions`}
            accentWord="questions"
            subheading="What practices in this specialty ask before partnering with us."
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {detail.faqs.map((faq, index) => (
              <Reveal key={faq.question} y={14} delay={Math.min(index * 0.05, 0.25)}>
                <FAQItem faq={faq} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

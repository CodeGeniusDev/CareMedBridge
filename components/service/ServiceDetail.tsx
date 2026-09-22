import {
  AlertTriangle,
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock,
  FileWarning,
  Handshake,
  LineChart,
  SearchCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQItem } from "@/components/ui/FAQItem";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";

const challengeIcons = [AlertTriangle, Clock, FileWarning, CircleDollarSign];
const helpIcons = [Handshake, SearchCheck, LineChart, Users];

const sectionLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Key Challenges", href: "#challenges" },
  { label: "How We Help", href: "#approach" },
  { label: "Workflow", href: "#workflow" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQs", href: "#faqs" },
];

/**
 * Full content stack for a service detail page. Composed by
 * app/services/[slug]/page.tsx between the PageHero and the site-wide
 * CTASection. All sections carry stable anchor ids for the overview nav.
 */
export function ServiceDetail({
  service,
  relatedServices = [],
}: {
  service: Service;
  relatedServices?: Service[];
}) {
  const { detail } = service;

  return (
    <>
      {/* ── Overview with anchor navigation ─────────────────────────── */}
      <section id="overview" className="section-pad scroll-mt-24">
        <Container>
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
            <div className="max-w-3xl">
              <SectionHeading
                align="left"
                badge="Service Overview"
                heading={`What ${service.title} involves`}
                accentWord={service.title}
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

            <aside className="hidden lg:block sticky top-28">
              <div className="card-base p-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-teal)] mb-4">
                  On this page
                </p>
                <nav aria-label="Section navigation">
                  <ul className="flex flex-col gap-2.5">
                    {sectionLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-teal)] transition-colors duration-[var(--duration-fast)]"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--color-border)] group-hover:text-[var(--color-teal)] group-hover:translate-x-0.5 transition-[transform,color] duration-[var(--duration-fast)]" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                  <a
                    href={`/contact?service=${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors duration-[var(--duration-fast)]"
                  >
                    Request a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Key challenges ──────────────────────────────────────────── */}
      <section
        id="challenges"
        className="section-pad scroll-mt-24 bg-[var(--color-soft)] border-y border-[var(--color-border)]"
      >
        <Container>
          <SectionHeading
            badge="Key Challenges"
            heading="The problems practices run into"
            accentWord="problems"
            subheading={`Common revenue roadblocks our ${service.title.toLowerCase()} team resolves for practices every day.`}
            className="mb-12"
          />
          <Stagger
            className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto"
            stagger={0.06}
          >
            {detail.challenges.map((challenge, index) => {
              const Icon = challengeIcons[index % challengeIcons.length];
              return (
                <div key={challenge.title} className="card-base card-lift p-6 md:p-7 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-navy)] leading-snug">
                    {challenge.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ── How CareMedBridge helps (navy contrast) ─────────────────── */}
      <section id="approach" className="section-pad scroll-mt-24 bg-[var(--color-navy)]">
        <Container>
          <SectionHeading
            badge="Our Approach"
            heading="How CareMedBridge helps"
            accentWord="CareMedBridge"
            subheading="A dedicated team, transparent process, and measurable outcomes, not a black box."
            className="mb-12"
            eyebrowClassName="text-[var(--color-accent)]"
            headingClassName="text-white"
            subheadingClassName="text-white/65"
          />
          <Stagger
            className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto"
            stagger={0.06}
          >
            {detail.howWeHelp.map((item, index) => {
              const Icon = helpIcons[index % helpIcons.length];
              return (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.06] p-6 md:p-7 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-[var(--radius-btn)] bg-[var(--color-teal)]/20 text-[var(--color-accent)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ── Workflow ────────────────────────────────────────────────── */}
      <section id="workflow" className="section-pad scroll-mt-24">
        <Container>
          <SectionHeading
            badge="Workflow"
            heading="How the process works"
            accentWord="process"
            subheading="A clear, repeatable workflow, so you always know what happens next and who owns it."
            className="mb-14"
          />
          <ol className="relative max-w-3xl mx-auto flex flex-col gap-10">
            <span
              aria-hidden
              className="absolute left-[1.4rem] top-3 bottom-3 w-px bg-[var(--color-border)]"
            />
            {detail.workflow.map((step, index) => (
              <li key={step.title} className="relative flex gap-6">
                <span
                  className={cn(
                    "relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center",
                    "bg-[var(--color-teal)] text-white font-bold text-sm",
                    "shadow-[var(--shadow-btn)] ring-4 ring-[var(--color-canvas)]"
                  )}
                >
                  {index + 1}
                </span>
                <Reveal className="flex-1" y={16} delay={Math.min(index * 0.05, 0.25)}>
                  <div className="card-base p-6">
                    <h3 className="text-base md:text-lg font-bold text-[var(--color-navy)] leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section
        id="benefits"
        className="section-pad scroll-mt-24 bg-[var(--color-soft)] border-y border-[var(--color-border)]"
      >
        <Container>
          <SectionHeading
            badge="Benefits"
            heading="What your practice gains"
            accentWord="gains"
            subheading="The outcomes practices see when this service runs on a disciplined, transparent process."
            className="mb-12"
          />
          <Stagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            stagger={0.05}
          >
            {detail.benefits.map((benefit, index) => (
              <div key={index} className="card-base card-lift p-6 flex items-start gap-3.5">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)] flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </span>
                <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────── */}
      <section id="faqs" className="section-pad scroll-mt-24">
        <Container>
          <SectionHeading
            badge="FAQs"
            heading={`${service.title} questions, answered`}
            accentWord="answered"
            subheading="Straight answers to the questions practices ask us most about this service."
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

      {/* ── Related services ──────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section className="section-pad bg-[var(--color-soft)] border-t border-[var(--color-border)]">
          <Container>
            <SectionHeading
              badge="Explore More"
              heading="Related services"
              accentWord="services"
              subheading="Most practices pair this service with a few others across the revenue cycle."
              className="mb-12"
            />
            <Stagger
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
              stagger={0.06}
            >
              {relatedServices.map((related, index) => (
                <ServiceCard key={related.id} service={related} index={index} />
              ))}
            </Stagger>
          </Container>
        </section>
      )}
    </>
  );
}

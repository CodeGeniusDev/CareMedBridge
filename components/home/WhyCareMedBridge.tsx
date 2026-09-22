import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Workflow,
  FileCheck2,
  HeartPulse,
  MessageSquareText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/anim/Reveal";

const pillars = [
  {
    icon: ClipboardList,
    title: "Reduce administrative workload",
    description:
      "We take day-to-day billing tasks off your team's plate, from data entry and verification to follow-ups and statements.",
  },
  {
    icon: Workflow,
    title: "Improve billing workflow",
    description:
      "Standardized, efficient processes keep claims moving through every stage without bottlenecks or backlogs.",
  },
  {
    icon: FileCheck2,
    title: "Strengthen claim management",
    description:
      "Clean claims, systematic tracking, and timely follow-up at every stage of the revenue cycle.",
  },
  {
    icon: HeartPulse,
    title: "Help practices focus on patients",
    description:
      "Less time on paperwork means more time for what matters most: your patients and your practice.",
  },
  {
    icon: MessageSquareText,
    title: "Clear communication & reporting",
    description:
      "Regular updates, transparent reporting, and a dedicated point of contact keep you informed at all times.",
  },
];

/**
 * Why CareMedBridge — asymmetric split: sticky narrative panel on the left,
 * connected value pillars on the right. No invented performance numbers.
 */
export function WhyCareMedBridge() {
  return (
    <section className="section-pad-lg bg-[var(--color-soft)]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left narrative — sticky on desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal className="flex flex-col items-start gap-5">
              <p className="eyebrow">Why CareMedBridge</p>
              <h2>
                A billing partner that works like part of{" "}
                <em className="accent-serif">your team</em>
              </h2>
              <p className="max-w-md text-base leading-relaxed md:text-lg">
                We don&apos;t just process claims; we take ownership of your revenue cycle
                operations, so your staff can breathe and your practice can grow.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href="/contact" className="btn btn-primary">
                  Request a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="btn btn-outline">
                  More About Us
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right pillars with connecting hairline */}
          <div className="lg:col-span-7">
            <ol className="relative flex flex-col gap-4">
              <span
                aria-hidden
                className="absolute bottom-8 left-[27px] top-6 hidden w-px bg-[var(--color-border)] sm:block"
              />
              {pillars.map((pillar, i) => (
                <li key={pillar.title}>
                  <Reveal y={16} delay={Math.min(i * 0.06, 0.3)}>
                    <div className="card-base card-lift relative flex items-start gap-5 bg-white p-5 md:p-6">
                      <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-[var(--color-soft)] text-[var(--color-teal)]">
                        <pillar.icon className="h-6 w-6" />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-base font-semibold leading-snug md:text-lg">
                          {pillar.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

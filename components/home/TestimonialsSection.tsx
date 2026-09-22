import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";

const improvementAreas = [
  {
    title: "Cleaner claim flow",
    description: "Reducing miscoding, missing documentation, and avoidable rejections before claims leave the practice.",
  },
  {
    title: "Better AR visibility",
    description: "Tracking aging balances, unpaid claims, and payer follow-up with a clearer view of what needs attention.",
  },
  {
    title: "Fewer avoidable denials",
    description: "Addressing root causes early so billing teams spend less time chasing preventable rework.",
  },
  {
    title: "More time for patient care",
    description: "Taking administrative burden off the front office and clinical staff so they can focus on service delivery.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-pad-lg bg-[var(--color-canvas)]">
      <Container>
        <SectionHeading
          badge="What We Aim to Improve"
          heading="A more controlled billing process keeps revenue on track"
          subheading="The goal is not just faster claims. It is cleaner workflows, stronger visibility, and fewer preventable revenue losses."
        />

        <Stagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
          {improvementAreas.map((item) => (
            <Reveal key={item.title} y={12}>
              <div className="card-base card-lift flex h-full flex-col gap-3 p-6">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)] text-base font-bold">
                  {item.title.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-[var(--color-navy)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

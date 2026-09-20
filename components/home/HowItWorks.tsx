import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/anim/Reveal";
import { processSteps } from "@/lib/data/process";

/**
 * How It Works — six-step revenue-cycle timeline.
 * Desktop: horizontal band with a connecting hairline.
 * Mobile: vertical timeline with a left rail.
 */
export function HowItWorks() {
  return (
    <section className="section-pad-lg bg-[var(--color-navy)]">
      <Container>
        <SectionHeading
          badge="How It Works"
          heading="Your Revenue Cycle, Managed End to End"
          subheading="A clear, disciplined workflow takes every claim from verification through payment — with denials and AR worked at every stage."
          eyebrowClassName="text-[var(--color-accent)]"
          headingClassName="text-white"
          subheadingClassName="text-white/65"
        />

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <span
              aria-hidden
              className="absolute left-[8%] right-[8%] top-8 h-px bg-white/15"
            />
            <ol className="relative grid grid-cols-6 gap-6">
              {processSteps.map((step, i) => (
                <li key={step.number} className="flex flex-col items-center text-center">
                  <Reveal y={20} delay={i * 0.08}>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06]">
                      <step.icon className="h-6 w-6 text-[var(--color-accent)]" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-[var(--color-navy)]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-sm font-semibold leading-snug text-white">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[170px] text-xs leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="mt-12 lg:hidden">
          <ol className="relative flex flex-col gap-5">
            <span
              aria-hidden
              className="absolute bottom-8 left-[31px] top-8 w-px bg-white/15"
            />
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative flex items-start gap-5">
                <Reveal y={16} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="flex items-start gap-5">
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06]">
                      <step.icon className="h-6 w-6 text-[var(--color-accent)]" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-[var(--color-navy)]">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

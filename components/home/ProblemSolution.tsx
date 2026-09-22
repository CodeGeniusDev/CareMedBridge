import { CircleAlert, ArrowRight, CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/anim/Reveal";

const pairs = [
  {
    problem: "Billing workload overwhelming your staff",
    solution: "End-to-end billing operations handled for you, from charge capture to patient statements.",
  },
  {
    problem: "Claims sitting in delays and backlog",
    solution: "Systematic submission and follow-up keeps every claim moving toward payment.",
  },
  {
    problem: "Denials eating into your revenue",
    solution: "Root-cause analysis, corrections, and timely appeals recover what's rightfully yours.",
  },
  {
    problem: "Aging AR piling up unresolved",
    solution: "Prioritized, persistent follow-up on outstanding balances, with the oldest and highest-dollar claims handled first.",
  },
  {
    problem: "Administrative burden pulling focus from care",
    solution: "Virtual assistance and front-office support that give your team its time back.",
  },
  {
    problem: "Revenue-cycle complexity across payers",
    solution: "One accountable partner across the full RCM lifecycle, from credentialing to reporting.",
  },
];

/**
 * Problem → Solution mapping. Each row contrasts a common practice pain point
 * with the CareMedBridge answer, joined by an arrow. No performance claims —
 * operational outcomes only.
 */
export function ProblemSolution() {
  return (
    <section className="section-pad-lg bg-[var(--color-soft)]">
      <Container>
        <SectionHeading
          badge="The CareMedBridge Difference"
          heading="Billing Problems We Take Off Your Plate"
          subheading="If any of these sound familiar, you're exactly who we built CareMedBridge for."
          accentWord="Off Your Plate"
        />

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4">
          {pairs.map((pair, i) => (
            <Reveal key={pair.problem} y={16} delay={Math.min(i * 0.05, 0.25)}>
              <div className="group grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
                {/* Problem */}
                <div className="flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 md:p-6">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-slate-100 text-slate-500">
                    <CircleAlert className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      The Challenge
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-[var(--color-text)] md:text-base">
                      {pair.problem}
                    </p>
                  </div>
                </div>

                {/* Connector arrow */}
                <div className="hidden items-center justify-center lg:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-teal)] text-white shadow-[var(--shadow-btn)] transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="-my-1 flex justify-center lg:hidden">
                  <span className="flex h-8 w-8 rotate-90 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--color-teal)]/30 bg-white p-5 shadow-[var(--shadow-card)] md:p-6">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)]">
                    <CircleCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]">
                      Our Approach
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-[var(--color-navy)] md:text-base">
                      {pair.solution}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Send,
  Landmark,
  CircleDollarSign,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";

/* ── Small building blocks ───────────────────────────────────────────────── */

function StatusPill({ tone, children }: { tone: "teal" | "amber" | "navy"; children: React.ReactNode }) {
  const tones = {
    teal: "bg-teal-50 text-[var(--color-teal)] border-teal-200/70",
    amber: "bg-amber-50 text-amber-700 border-amber-200/70",
    navy: "bg-slate-100 text-[var(--color-navy)] border-slate-200/80",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* ── Product visual: revenue-cycle dashboard mock ────────────────────────── */

function DashboardMock() {
  const steps = [
    { icon: ShieldCheck, label: "Eligibility", state: "done" },
    { icon: FileCheck2, label: "Coding", state: "done" },
    { icon: Send, label: "Submission", state: "active" },
    { icon: CircleDollarSign, label: "Payment", state: "pending" },
  ] as const;

  const remits = [
    { payer: "Commercial Payer", tag: "Paid", tone: "teal" as const },
    { payer: "Medicare", tag: "Verified", tone: "navy" as const },
    { payer: "Denied Claim", tag: "Appealed", tone: "amber" as const },
  ];

  return (
    <div className="relative w-full">
      <div className="card-base overflow-hidden shadow-[var(--shadow-lift)]">
        {/* Window header */}
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-white px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="ml-3 text-xs font-semibold text-[var(--color-navy)]">
            Revenue Cycle Dashboard
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-semibold text-[var(--color-accent)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Live
          </span>
        </div>

        <div className="flex flex-col gap-5 bg-white p-5 sm:p-6">
          {/* Claim lifecycle tracker */}
          <div className="grid grid-cols-4 gap-2">
            {steps.map((step) => (
              <div
                key={step.label}
                className={`flex flex-col items-center gap-2 rounded-[var(--radius-btn)] border px-2 py-3 text-center ${step.state === "active"
                    ? "border-[var(--color-teal)]/40 bg-white shadow-[var(--shadow-card)]"
                    : "border-[var(--color-border)] bg-white"
                  }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step.state === "done"
                      ? "bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                      : step.state === "active"
                        ? "bg-[var(--color-teal)] text-white"
                        : "bg-slate-100 text-[var(--color-muted)]"
                    }`}
                >
                  {step.state === "done" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                </span>
                <span
                  className={`text-[10px] font-semibold leading-none sm:text-[11px] ${step.state === "pending" ? "text-[var(--color-muted)]" : "text-[var(--color-navy)]"
                    }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Abstract cash-flow trend (no fabricated figures) */}
          <div className="rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[var(--color-navy)]">
                Cash-Flow Trend
              </span>
              <span className="text-[10px]">Monthly view</span>
            </div>
            <svg viewBox="0 0 400 110" className="h-20 w-full sm:h-24" aria-hidden>
              <path
                d="M0 88 C 40 80, 62 58, 100 64 S 158 42, 200 46 S 272 22, 316 30 S 376 10, 400 14 L400 110 L0 110 Z"
                fill="#14B8A6"
                fillOpacity="0.1"
              />
              <path
                d="M0 88 C 40 80, 62 58, 100 64 S 158 42, 200 46 S 272 22, 316 30 S 376 10, 400 14"
                fill="none"
                stroke="#0E7490"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Remittance status rows */}
          <div className="flex flex-col gap-2">
            {remits.map((r) => (
              <div
                key={r.payer}
                className="flex items-center justify-between rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white px-4 py-2.5"
              >
                <span className="flex items-center gap-2.5 text-xs font-medium text-[var(--color-text)]">
                  <Landmark className="h-3.5 w-3.5 text-[var(--color-muted)]" />
                  {r.payer}
                </span>
                <StatusPill tone={r.tone}>{r.tag}</StatusPill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="bg-[var(--color-canvas)]">
      <Container className="pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Narrative column */}
          <Stagger className="flex flex-col items-start gap-6" stagger={0.09} y={22}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] shadow-[var(--shadow-card)]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              healthcare billing services
            </span>
            <h1>
              Healthcare billing services{" "}
              <em className="accent-serif">built around your practice</em>
            </h1>
            <p className="max-w-xl text-base leading-relaxed md:text-lg">
              CareMedBridge helps healthcare providers simplify billing, manage claims, improve
              revenue-cycle operations, and reduce administrative workload so you can focus on
              patient care.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Request a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Explore Our Services
              </Link>
            </div>
            <p className="text-sm">
              HIPAA-conscious workflows · US-based billing team · Transparent reporting
            </p>
          </Stagger>

          {/* Visual column */}
          <Reveal y={28} delay={0.15} duration={0.8}>
            <DashboardMock />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

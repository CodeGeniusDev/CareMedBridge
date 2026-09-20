import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecialtyCard } from "@/components/ui/SpecialtyCard";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { specialties } from "@/lib/data/specialties";

/**
 * Homepage specialties grid — presented as offerings we support,
 * never as established-client claims. 8 tiles + navy CTA tile.
 */
export function SpecialtiesSection() {
  const featured = specialties.slice(0, 8);

  return (
    <section className="section-pad-lg bg-[var(--color-canvas)]">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            badge="Medical Specialties"
            heading="Specialty-Specific Billing Expertise"
            subheading="Every specialty has its own coding rules, payer policies, and documentation standards. We speak your specialty's billing language."
            className="max-w-2xl"
          />
          <Reveal y={14} className="flex-shrink-0">
            <Link href="/specialties" className="btn btn-outline">
              View All Specialties
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.04}
        >
          {featured.map((specialty) => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}

          {/* Navy CTA tile */}
          <Link
            href="/specialties"
            className="group flex h-full min-h-[88px] items-center justify-between gap-3 rounded-[var(--radius-card)] bg-[var(--color-navy)] px-5 py-4 transition-colors duration-200 hover:bg-[var(--color-navy-dark)]"
          >
            <div>
              <p className="text-sm font-semibold leading-snug text-white">
                {specialties.length} specialties,
                <br />
                one workflow.
              </p>
              <p className="mt-1 text-xs text-white/55">Yours isn&apos;t listed? Ask us.</p>
            </div>
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </Link>
        </Stagger>
      </Container>
    </section>
  );
}

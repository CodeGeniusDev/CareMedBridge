import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Stagger } from "@/components/anim/Stagger";
import { services } from "@/lib/data/services";

/**
 * Homepage services overview — all 12 services in an intentional rhythm:
 * two featured large cards, compact cards, and a navy CTA tile.
 */
export function ServicesShowcase() {
  const featured = services.find((s) => s.id === "medical-billing")!;
  const rcm = services.find((s) => s.id === "rcm")!;
  const compact = services.filter((s) => s.id !== "medical-billing" && s.id !== "rcm");

  return (
    <section className="section-pad-lg bg-[var(--color-canvas)]">
      <Container>
        <SectionHeading
          badge="What We Do"
          heading="Full-Spectrum Billing Services"
          subheading="From eligibility verification to AR recovery, every service is designed to keep your revenue cycle moving without adding to your team's workload."
          accentWord="Billing Services"
        />

        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.05}
        >
          {/* Featured large cards */}
          <ServiceCard service={featured} large className="sm:col-span-2" />
          <ServiceCard service={rcm} large className="sm:col-span-2" />

          {/* Compact cards — all 10 remaining services */}
          {compact.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* CTA tile closes the grid rhythm */}
          <Link
            href="/services"
            className="group flex h-full min-h-[220px] flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-navy)] p-6 transition-colors duration-200 hover:bg-[var(--color-navy-dark)]"
          >
            <div>
              <h3 className="text-lg font-semibold leading-snug text-white">
                Every service, one partner.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Explore all 12 services in detail and build the right package for your practice.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Stagger>
      </Container>
    </section>
  );
}

import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/anim/Reveal";
import { Stagger } from "@/components/anim/Stagger";
import { testimonials } from "@/lib/data/testimonials";

/**
 * Testimonials — UI preview only. Every quote is clearly-marked placeholder
 * content (see lib/data/testimonials.ts); never present as real customers.
 */
export function TestimonialsSection() {
  return (
    <section className="section-pad-lg bg-[var(--color-canvas)]">
      <Container>
        <SectionHeading
          badge="Client Voices"
          heading="What Practices Say About Working With Us"
          subheading="Here's how a partnership with CareMedBridge feels day to day."
        />

        {/* Clearly-marked placeholder notice */}
        <Reveal y={12} className="mt-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-700">
            <Info className="h-3.5 w-3.5 flex-shrink-0" />
            Sample placeholders for design preview — replace with real client testimonials
          </p>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.08}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

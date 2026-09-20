import { Headset, Stethoscope, Workflow, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/anim/Reveal";

const trustItems = [
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "A responsive billing team that's with you at every step.",
  },
  {
    icon: Stethoscope,
    title: "Specialty-Focused Solutions",
    description: "Billing tailored to the coding nuances of your specialty.",
  },
  {
    icon: Workflow,
    title: "Streamlined Billing Operations",
    description: "Efficient processes from eligibility through payment posting.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Clear, regular insight into your billing performance.",
  },
];

/**
 * Trust / value strip — hairline-divided card that overlaps the hero's
 * bottom edge to create layered depth. No invented statistics.
 */
export function TrustStrip() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16">
      <Container>
        <h2 className="sr-only">Why practices choose CareMedBridge</h2>
        <Reveal y={24}>
          <div className="card-base overflow-hidden">
            <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white p-6 md:p-7">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-soft)] text-[var(--color-teal)]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-snug text-[var(--color-navy)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

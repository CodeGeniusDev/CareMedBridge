import { ArrowRight, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/anim/Reveal";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  variant?: "navy" | "teal" | "soft";
}

/**
 * Closing call-to-action band. Solid background (no decorative effects);
 * on dark bands the primary action inverts to a white button.
 */
export function CTASection({
  heading = "Ready to Optimize Your Revenue Cycle?",
  subheading = "Schedule a free consultation with our billing specialists and discover how CareMedBridge can help your practice collect more, faster.",
  primaryCta = { label: "Request a Consultation", href: "/contact" },
  secondaryCta = { label: "View Our Services", href: "/services" },
  className,
  variant = "navy",
}: CTASectionProps) {
  const isDark = variant !== "soft";

  return (
    <section
      className={cn(
        "section-pad",
        variant === "navy" && "bg-[var(--color-navy)]",
        variant === "teal" && "bg-[var(--color-teal)]",
        variant === "soft" && "bg-[var(--color-soft)]",
        className
      )}
    >
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full",
              isDark ? "bg-white/10" : "bg-white shadow-[var(--shadow-card)]"
            )}
          >
            <CalendarCheck className="h-6 w-6 text-[var(--color-accent)]" />
          </div>

          <div className="flex max-w-3xl flex-col gap-3">
            <h2 className={cn(isDark && "text-white")}>{heading}</h2>
            <p className={cn("text-base md:text-lg", isDark && "text-white/70")}>{subheading}</p>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button
              href={primaryCta.href}
              size="lg"
              variant={variant === "soft" ? "primary" : "outline"}
              className={cn(
                variant !== "soft" &&
                  "border-white text-white hover:border-white hover:bg-white hover:text-[var(--color-navy)]"
              )}
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={secondaryCta.href}
              size="lg"
              variant="ghost"
              className={cn(isDark && "text-white/75 hover:bg-white/10 hover:text-white")}
            >
              {secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

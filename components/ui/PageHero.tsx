import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/anim/Reveal";

interface PageHeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

interface PageHeroProps {
  breadcrumbItems: BreadcrumbItem[];
  badge?: string;
  heading: string;
  /** Phrase within the heading rendered with the editorial serif accent */
  accentWord?: string;
  subheading?: string;
  ctas?: PageHeroCta[];
  /** Optional right-column visual (icon card, stat chip, etc.) */
  visual?: React.ReactNode;
  className?: string;
}

/**
 * Inner-page hero: soft section background with hairline border, breadcrumb
 * trail, eyebrow label, serif-accented H1, muted sub-copy, and dual CTA row.
 * Solid colors only — no glows, no gradient text. Pass `visual` to fill the
 * right column on large screens.
 */
export function PageHero({
  breadcrumbItems,
  badge,
  heading,
  accentWord,
  subheading,
  ctas,
  visual,
  className,
}: PageHeroProps) {
  const accentIndex = accentWord ? heading.indexOf(accentWord) : -1;
  const accent = accentWord && accentIndex > -1 ? accentWord : null;
  const before = accent ? heading.slice(0, accentIndex) : heading;
  const after = accent ? heading.slice(accentIndex + accent.length) : null;

  return (
    <section
      className={cn(
        "bg-[var(--color-soft)] border-b border-[var(--color-border)]",
        className
      )}
    >
      <Container className="pt-8 pb-14 md:pt-10 md:pb-20">
        <Breadcrumb items={breadcrumbItems} />

        <div
          className={cn(
            "mt-8 md:mt-10 grid gap-10 items-center",
            visual ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-1 max-w-3xl"
          )}
        >
          <Reveal className="flex flex-col items-start gap-5" y={18}>
            {badge && <p className="eyebrow">{badge}</p>}
            <h1>
              {before}
              {accent && <em className="accent-serif">{accent}</em>}
              {after}
            </h1>
            {subheading && (
              <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
                {subheading}
              </p>
            )}
            {ctas && ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href + cta.label}
                    href={cta.href}
                    variant={cta.variant ?? "primary"}
                    size="lg"
                  >
                    {cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            )}
          </Reveal>

          {visual && (
            <Reveal y={24} delay={0.15} duration={0.8}>
              {visual}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

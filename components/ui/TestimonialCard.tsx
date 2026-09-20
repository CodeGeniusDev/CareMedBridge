import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** Accepted for call-site convenience; entrance motion is handled by the parent Stagger. */
  index?: number;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <figure className={cn("card-base card-lift flex h-full flex-col gap-5 p-7", className)}>
      <Quote aria-hidden className="h-6 w-6 text-[var(--color-accent)]" />
      <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-text)]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
        <span
          aria-hidden
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-semibold text-white"
        >
          {initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-[var(--color-navy)]">
            {testimonial.author}
          </span>
          <span className="block text-xs text-[var(--color-muted)]">
            {testimonial.role} · {testimonial.practice}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

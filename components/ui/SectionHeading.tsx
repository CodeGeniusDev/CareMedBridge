import * as React from "react";
import { cn } from "@/lib/utils";
import type { SectionHeadingAlign } from "@/types";

interface SectionHeadingProps {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: SectionHeadingAlign;
  className?: string;
  headingClassName?: string;
  subheadingClassName?: string;
  eyebrowClassName?: string;
  as?: "h1" | "h2" | "h3";
  /** Phrase to set in the editorial serif accent within the heading */
  accentWord?: string;
}

/**
 * Section heading: small-caps eyebrow → heading → subheading. The badge is a
 * plain text label (no pill), and one phrase can be accented with the serif
 * italic. Rendered by safe string-splitting — no raw HTML injection.
 */
export function SectionHeading({
  badge,
  heading,
  subheading,
  align = "center",
  className,
  headingClassName,
  subheadingClassName,
  eyebrowClassName,
  as: Tag = "h2",
  accentWord,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  const accentIndex = accentWord ? heading.indexOf(accentWord) : -1;
  const accent = accentWord && accentIndex > -1 ? accentWord : null;
  const before = accent ? heading.slice(0, accentIndex) : heading;
  const after = accent ? heading.slice(accentIndex + accent.length) : null;

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {badge && <p className={cn("eyebrow", eyebrowClassName)}>{badge}</p>}
      <Tag className={headingClassName}>
        {before}
        {accent && <em className="accent-serif">{accent}</em>}
        {after}
      </Tag>
      {subheading && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            subheadingClassName
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

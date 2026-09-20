"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface FAQItemProps {
  faq: Pick<FAQ, "question" | "answer">;
  /** Accepted for call-site convenience; entrance motion is handled by the parent Stagger. */
  index?: number;
  className?: string;
}

/**
 * Accordion row. The answer panel animates with the CSS grid-rows technique
 * (0fr → 1fr) — no JS measurement, no layout thrash, interruptible.
 */
export function FAQItem({ faq, className }: FAQItemProps) {
  const [open, setOpen] = React.useState(false);
  const panelId = `faq-panel-${React.useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div className={cn("card-base overflow-hidden", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left md:p-6",
          "bg-white transition-colors duration-150 hover:bg-[var(--color-soft)]",
          open && "bg-[var(--color-soft)]"
        )}
      >
        <span className="text-sm font-semibold leading-snug text-[var(--color-navy)] md:text-base">
          {faq.question}
        </span>
        <ChevronDown
          aria-hidden
          className={cn(
            "h-5 w-5 flex-shrink-0 text-[var(--color-teal)]",
            "transition-transform duration-200 [transition-timing-function:var(--ease-out)]",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--color-border)] bg-white px-5 pb-5 md:px-6 md:pb-6">
            <p className="pt-4 text-sm leading-relaxed md:text-base">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

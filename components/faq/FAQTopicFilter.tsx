"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";
import { FAQItem } from "@/components/ui/FAQItem";

const ALL_TOPICS = "All Topics";

/**
 * Category-filtered FAQ accordion for the /faq page.
 * Client-side filtering keeps every question in the DOM for SEO while
 * letting visitors narrow by topic instantly. Switching topics remounts
 * the list with a short fade so the swap never feels like a glitch.
 */
export function FAQTopicFilter({ faqs }: { faqs: FAQ[] }) {
  const categories = [
    ALL_TOPICS,
    ...Array.from(new Set(faqs.map((faq) => faq.category).filter(Boolean))),
  ] as string[];

  const [active, setActive] = useState<string>(ALL_TOPICS);

  const visible =
    active === ALL_TOPICS ? faqs : faqs.filter((faq) => faq.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div
        role="group"
        aria-label="Filter FAQs by topic"
        className="flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={cn(
                "min-h-10 px-4 py-2 rounded-[var(--radius-pill)] text-sm font-semibold",
                "border transition-colors duration-[var(--duration-fast)] cursor-pointer",
                selected
                  ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)] shadow-[var(--shadow-btn)]"
                  : "bg-white text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="max-w-3xl mx-auto w-full flex flex-col gap-4 animate-fade-in"
      >
        {visible.map((faq, index) => (
          <FAQItem key={faq.id} faq={faq} index={index} />
        ))}
      </div>
    </div>
  );
}

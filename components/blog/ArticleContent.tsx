import * as React from "react";
import { Check } from "lucide-react";
import type { ContentBlock } from "@/types";

/**
 * Renders a blog article's ContentBlock[] as clean, readable prose.
 * Headings render as h2 so each article keeps one h1 (the page title).
 */
export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="text-xl md:text-2xl font-bold text-[var(--color-navy)] tracking-tight pt-4"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="flex flex-col gap-3">
              {(block.items ?? []).map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)] flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-base md:text-lg text-[var(--color-text)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

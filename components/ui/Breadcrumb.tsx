import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Accessible breadcrumb trail for inner pages.
 * Rendered inside a <nav aria-label="Breadcrumb"> with an ordered list.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1 -my-1.5 py-1.5 text-[var(--color-muted)] hover:text-[var(--color-teal)] transition-colors duration-[var(--duration-fast)]"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight
                className="w-3.5 h-3.5 text-[var(--color-border)]"
                aria-hidden
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="inline-block -my-1.5 py-1.5 text-[var(--color-muted)] hover:text-[var(--color-teal)] transition-colors duration-[var(--duration-fast)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="font-medium text-[var(--color-navy)]"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

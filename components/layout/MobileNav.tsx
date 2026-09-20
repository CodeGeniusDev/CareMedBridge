"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { navLinks, ctaLink } from "@/lib/data/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [render, setRender] = useState(open);
  const [shown, setShown] = useState(open);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Mount before showing, unmount after hiding — both directions animate.
  // All setState lives inside rAF/timeout callbacks: mount on one frame, slide
  // in on the next, so the transition always has a painted start state.
  useEffect(() => {
    if (open) {
      let showRaf = 0;
      const mountRaf = requestAnimationFrame(() => {
        setRender(true);
        showRaf = requestAnimationFrame(() => setShown(true));
      });
      return () => {
        cancelAnimationFrame(mountRaf);
        cancelAnimationFrame(showRaf);
      };
    }
    const hideTimer = setTimeout(() => setShown(false), 0);
    const unmountTimer = setTimeout(() => setRender(false), 300);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [open]);

  // Escape to close, lock body scroll while open, move focus into the drawer
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  function toggle(label: string) {
    setExpanded((prev) => (prev === label ? null : label));
  }

  if (!render) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-[var(--color-navy)]/40",
          "transition-opacity duration-200 [transition-timing-function:var(--ease-out)]",
          shown ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Drawer */}
      <nav
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col overflow-y-auto",
          "border-l border-[var(--color-border)] bg-white",
          "transition-transform duration-300 [transition-timing-function:var(--ease-drawer)]",
          shown ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
          <Link
            href="/"
            onClick={onClose}
            className="font-display text-lg font-semibold tracking-tight text-[var(--color-navy)]"
          >
            CareMed<span className="text-[var(--color-teal)]">Bridge</span>
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 -mr-1.5 cursor-pointer items-center justify-center rounded-lg text-[var(--color-muted)] transition-colors hover:bg-[var(--color-soft)] hover:text-[var(--color-navy)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="flex flex-1 flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const hasChildren = link.children && link.children.length > 0;
            const isExpanded = expanded === link.label;

            return (
              <li key={link.href}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggle(link.label)}
                      aria-expanded={isExpanded}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium",
                        "transition-colors duration-150",
                        isExpanded
                          ? "font-semibold text-[var(--color-navy)]"
                          : "text-[var(--color-text)] hover:bg-[var(--color-soft)]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)]",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out)]"
                      style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <ul className="flex flex-col gap-0.5 pb-1 pl-4 pt-1">
                          {link.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block rounded-lg px-4 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-soft)] hover:text-[var(--color-navy)]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150",
                      isActive
                        ? "bg-[var(--color-soft)] font-semibold text-[var(--color-navy)]"
                        : "text-[var(--color-text)] hover:bg-[var(--color-soft)]"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="border-t border-[var(--color-border)] px-6 py-6">
          <Link href={ctaLink.href} onClick={onClose} className="btn btn-primary w-full">
            {ctaLink.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </>
  );
}

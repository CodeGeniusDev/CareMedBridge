"use client";

import * as React from "react";
import { gsap } from "./gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Gap between each child's entrance, in seconds */
  stagger?: number;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
};

/**
 * Container that staggers its direct DOM children into view when the
 * container enters the viewport. Children must render real elements.
 */
export function Stagger({
  children,
  className,
  stagger = 0.06,
  y = 18,
  delay = 0,
  duration = 0.65,
  start = "top 85%",
}: StaggerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (reduceMotion || !el || el.children.length === 0) return;
    // Hidden responsive variants (display:none) have no layout box — skip
    // the trigger instead of measuring a zero rect.
    if (el.getClientRects().length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(el.children),
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, once: true },
        }
      );
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, stagger, y, delay, duration, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

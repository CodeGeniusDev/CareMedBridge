"use client";

import * as React from "react";
import { gsap } from "./gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel in px — subtle by default */
  y?: number;
  /** Extra delay in seconds before this element starts */
  delay?: number;
  duration?: number;
  /** ScrollTrigger start position */
  start?: string;
};

/**
 * Scroll reveal: fade + slight upward drift, fired once when the element
 * enters the viewport. The initial hidden state is applied in JS (never in
 * CSS), so SSR HTML and no-JS browsers always render visible content.
 */
export function Reveal({
  children,
  className,
  y = 20,
  delay = 0,
  duration = 0.7,
  start = "top 85%",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (reduceMotion || !el) return;
    // Elements inside `display:none` responsive variants (e.g. the hidden
    // desktop/mobile timelines) have no layout box. Skip the trigger — they
    // render visible — instead of creating one that measures a zero rect.
    if (el.getClientRects().length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, once: true },
        }
      );
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion, y, delay, duration, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

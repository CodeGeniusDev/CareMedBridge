"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Returns true when the user has scrolled past the given threshold (px).
 * Used by the Navbar to switch from transparent to filled.
 * A ref tracks the last value so the scroll handler only calls setState when
 * the boolean actually flips — the navbar never re-renders mid-scroll.
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);
  const lastRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > threshold;
      if (next === lastRef.current) return;
      lastRef.current = next;
      setScrolled(next);
    };
    onScroll(); // initialise immediately
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

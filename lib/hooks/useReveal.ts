"use client";

import { useEffect, useRef } from "react";

/**
 * Adds the "visible" class to the target element when it enters the viewport.
 * Pairs with the CSS classes: .reveal, .reveal.visible (defined in globals.css).
 * Respects prefers-reduced-motion — if set, elements are immediately visible.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, skip animation entirely
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

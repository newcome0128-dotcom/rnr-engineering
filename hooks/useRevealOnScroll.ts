"use client";

import { useEffect, useRef } from "react";

export default function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce) {
      el.classList.add("show");
      el.querySelectorAll<HTMLElement>("[data-stagger]").forEach((child) => {
        child.classList.add("show");
      });
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        el.classList.add("show");

        // Stagger children (cards)
        const kids = Array.from(el.querySelectorAll<HTMLElement>("[data-stagger]"));
        kids.forEach((k, i) => {
          k.style.transitionDelay = `${i * 70}ms`;
          k.classList.add("show");
        });

        obs.disconnect();
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

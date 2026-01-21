"use client";

import { useEffect } from "react";

export default function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}

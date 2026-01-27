"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type IconCard = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function IconCardGrid({ items }: { items: IconCard[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const descRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const close = () => setOpenId(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id)); // hard-lock: only one can be open
  };

  // Scroll opened card to center
  useEffect(() => {
    if (!openId) return;
    const el = cardRefs.current[openId];
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, [openId]);

  // Click outside closes
  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (!openId) return;
      const grid = gridRef.current;
      if (!grid) return;

      const t = e.target as Node;
      if (!grid.contains(t)) close();
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [openId]);

  // ESC closes (keyboard accessibility)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Smooth height animation (max-height) for descriptions
  useEffect(() => {
    items.forEach((item) => {
      const isOpen = openId === item.id;
      const el = descRefs.current[item.id];
      if (!el) return;

      // set maxHeight to animate
      if (isOpen) {
        const target = el.scrollHeight;
        el.style.maxHeight = `${target}px`;
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [openId, items]);

  return (
    <div ref={gridRef} className="supplies-grid">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <article
            key={item.id}
            ref={(el) => {
              cardRefs.current[item.id] = el;
            }}
            className={`supply-card icon-card ${isOpen ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="icon-card-btn"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <div className={`supply-icon icon-badge ${isOpen ? "open" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="56px"
                  className="icon-img"
                  loading="lazy"
                />
              </div>

              <div className="supply-body">
                <h3>{item.title}</h3>

                {/* animated description wrapper */}
                <div
                  ref={(el) => {
                    descRefs.current[item.id] = el;
                  }}
                  className="icon-desc-wrap"
                >
                  <p className="icon-desc-text">{item.description}</p>
                </div>

                <span className="icon-hint" aria-hidden="true">
                  {isOpen ? "View less" : "View details"}
                </span>
              </div>
            </button>
          </article>
        );
      })}
    </div>
  );
}

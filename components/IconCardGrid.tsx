"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type IconCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: string; // ✅ optional extra text for "Learn more"
};

export default function IconCardGrid({
  items,
  expandable = false,
}: {
  items: IconCard[];
  expandable?: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
const cardRefs = useRef<Record<string, HTMLElement | null>>({});


  // Close when clicking outside
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!openId) return;
      const card = cardRefs.current[openId];
      if (!card) return;
      if (!card.contains(e.target as Node)) setOpenId(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openId]);

  // Keyboard ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const hasDetails = useMemo(
    () => expandable && items.some((x) => (x.details ?? "").trim().length > 0),
    [expandable, items]
  );

  return (
    <div className="supplies-grid">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
<article
  key={item.id}
  className={`supply-card ${hasDetails ? "service-card" : ""} ${isOpen ? "open" : ""}`}
  ref={(el) => {
    cardRefs.current[item.id] = el;
  }}
  tabIndex={hasDetails ? 0 : -1}
  onKeyDown={(e) => {
    if (!hasDetails) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenId(isOpen ? null : item.id);
    }
  }}
>
            <div className="card-head">
              <div className="supply-icon">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="56px"
                  className="icon-img"
                />
              </div>

              <div className="supply-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {/* Learn more button only for Services */}
                {hasDetails && (
                  <button
                    type="button"
                    className="learn-more"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "View less" : "Learn more"}
                  </button>
                )}
              </div>
            </div>

            {/* Expandable details */}
            {hasDetails && (
              <div className={`card-expand ${isOpen ? "show" : ""}`}>
                <div className="card-expand-inner">
                  <p>{item.details}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

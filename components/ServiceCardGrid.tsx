"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  image: string; // your 3D icon webp path
  details?: string; // optional longer text
};

export default function ServiceCardGrid({
  items,
  ctaLabel = "Learn More",
}: {
  items: ServiceCard[];
  ctaLabel?: string;
}) {
  const [open, setOpen] = useState<ServiceCard | null>(null);

  const safeItems = useMemo(() => items ?? [], [items]);

  return (
    <>
      <div className="service-ui-grid">
        {safeItems.map((item) => (
          <article className="service-ui-card" key={item.id}>
            <div className="service-ui-top">
              <div className="service-ui-icon">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="72px"
                  className="service-ui-icon-img"
                  loading="lazy"
                />
              </div>

              <div className="service-ui-head">
                <h4 className="service-ui-title">{item.title}</h4>
                <p className="service-ui-desc">{item.description}</p>
              </div>
            </div>

            <div className="service-ui-actions">
              <button
                type="button"
                className="service-ui-cta"
                onClick={() => setOpen(item)}
                aria-label={`${ctaLabel}: ${item.title}`}
              >
                {ctaLabel}
                <span className="service-ui-arrow" aria-hidden="true">
                  →
                </span>
              </button>

              <a className="service-ui-ghost" href="#contact">
                Get a Quote
              </a>
            </div>

            <div className="service-ui-hoverHint" aria-hidden="true">
              View details
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="service-ui-modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${open.title} details`}
          onMouseDown={(e) => {
            // close if clicking overlay
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <div className="service-ui-modal">
            <div className="service-ui-modalHeader">
              <div className="service-ui-modalTitleWrap">
                <div className="service-ui-modalIcon">
                  <Image
                    src={open.image}
                    alt=""
                    fill
                    sizes="48px"
                    className="service-ui-icon-img"
                  />
                </div>
                <div>
                  <div className="service-ui-modalTitle">{open.title}</div>
                  <div className="service-ui-modalSub">{open.description}</div>
                </div>
              </div>

              <button
                type="button"
                className="service-ui-close"
                onClick={() => setOpen(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="service-ui-modalBody">
              <p style={{ margin: 0 }}>
                {open.details ??
                  "We provide professional planning and execution with safety-first implementation, quality workmanship, and clean turnover. Send us your requirements and we’ll prepare a scope and quote."}
              </p>
            </div>

            <div className="service-ui-modalActions">
              <a className="btn-primary" href="#contact" onClick={() => setOpen(null)}>
                Request Quote
              </a>
              <button className="btn-secondary" type="button" onClick={() => setOpen(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

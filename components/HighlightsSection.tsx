"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function HighlightsSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section id="highlights" ref={ref} className="reveal highlights">
      <div className="section-header">
        <span className="kicker">Why clients choose us</span>
        <h2 style={{ marginTop: 12 }}>What Sets Us Apart</h2>
        <p>Professional execution built on safety, quality, and clean delivery.</p>
      </div>

      <div className="highlights-grid">
        <article className="highlight-card">
          <div className="highlight-title">Safety-first execution</div>
          <p className="highlight-desc">
            Compliance-focused work practices, proper site control, and disciplined implementation.
          </p>
        </article>

        <article className="highlight-card">
          <div className="highlight-title">End-to-end support</div>
          <p className="highlight-desc">
            Services + supplies in one place—fewer vendors, faster timeline, clearer coordination.
          </p>
        </article>

        <article className="highlight-card">
          <div className="highlight-title">Quality workmanship</div>
          <p className="highlight-desc">
            Clean finishing, durable materials, and proper standards for long-term performance.
          </p>
        </article>

        <article className="highlight-card">
          <div className="highlight-title">Responsive team</div>
          <p className="highlight-desc">
            Clear communication, quick site response, and professional documentation when needed.
          </p>
        </article>
      </div>
    </section>
  );
}

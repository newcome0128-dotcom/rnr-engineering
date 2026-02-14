"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

const HIGHLIGHTS = [
  { title: "Safety & Compliance", desc: "Site-ready execution with safety-first discipline." },
  { title: "Quality Workmanship", desc: "Clean installs, proper testing, durable results." },
  { title: "Fast Coordination", desc: "Clear scheduling and responsive updates on-site." },
  { title: "Services + Supplies", desc: "One contractor for execution and materials sourcing." },
];

export default function HighlightsSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="reveal highlights" aria-labelledby="highlights-title">
      <div className="container">
        <div className="section-header">
          <span className="kicker">What sets us apart</span>
          <h2 id="highlights-title">Service Highlights</h2>
          <p>Professional execution, disciplined coordination, and reliable delivery.</p>
        </div>

        <div className="highlights-grid">
          {HIGHLIGHTS.map((h) => (
            <article className="highlight-card" key={h.title}>
              <h3 className="highlight-title">{h.title}</h3>
              <p className="highlight-desc">{h.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

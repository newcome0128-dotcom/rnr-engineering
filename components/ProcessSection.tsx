"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

const steps = [
  { n: "01", title: "Consultation", desc: "We assess your requirements, site conditions, and schedule." },
  { n: "02", title: "Planning", desc: "We align scope, materials, manpower, timeline, and safety approach." },
  { n: "03", title: "Execution", desc: "We deliver clean workmanship with disciplined coordination and QA checks." },
  { n: "04", title: "Turnover", desc: "We complete testing, final punch list, and proper handover documentation." },
];

export default function ProcessSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section id="process" ref={ref} className="reveal process">
      <div className="section-header">
        <span className="kicker">How we work</span>
        <h2 style={{ marginTop: 12 }}>Our Delivery Process</h2>
        <p>Simple, structured, and professional—from planning to turnover.</p>
      </div>

      <div className="process-grid">
        {steps.map((s) => (
          <article key={s.n} className="process-card">
            <div className="process-top">
              <div className="process-num">{s.n}</div>
              <div className="process-title">{s.title}</div>
            </div>
            <p className="process-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

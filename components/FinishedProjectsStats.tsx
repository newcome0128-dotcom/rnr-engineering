"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

type Stat = { label: string; value: string };

const STATS: Stat[] = [
  { label: "Finished Projects", value: "120+" },
  { label: "Sites Served", value: "50+" },
  { label: "Years Experience", value: "2+" },
  { label: "Repeat Clients", value: "30+" },
  { label: "On-time Delivery", value: "95%" },
];

export default function FinishedProjectsStats() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="reveal stats-section" aria-label="Finished projects statistics">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Track record</span>
          <h2>Finished Projects</h2>
          <p>Real output delivered for commercial, industrial, and residential clients.</p>
        </div>

        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

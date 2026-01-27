"use client";

import { useEffect, useMemo, useState } from "react";
import type { FinishedProjectStat } from "@/data/finishedProjects";

export default function FinishedProjectsStats({ items }: { items: FinishedProjectStat[] }) {
  const [show, setShow] = useState(false);

  // pop-up animation when scrolled into view (simple + Lighthouse friendly)
  useEffect(() => {
    const el = document.getElementById("finished-stats");
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="finished-stats" className={`stats-wrap ${show ? "show" : ""}`}>
      <div className="stats-grid">
        {items.map((s) => (
          <div key={s.id} className="stat-card">
            <div className="stat-number">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

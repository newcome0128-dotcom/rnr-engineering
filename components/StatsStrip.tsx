"use client";

export default function StatsStrip() {
  const stats = [
    { value: "Safety-First", label: "Compliance-driven execution" },
    { value: "End-to-End", label: "Services + supplies in one" },
    { value: "Clean Finish", label: "Professional turnover standards" },
    { value: "Fast Response", label: "Quick site support & quotes" },
  ];

  return (
    <section className="stats-strip" aria-label="Company highlights">
      <div className="stats-inner">
        {stats.map((s) => (
          <div className="stat" key={s.value}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

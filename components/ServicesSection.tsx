"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import IconCardGrid from "@/components/IconCardGrid";
import { serviceGroups } from "@/data/services";

export default function ServicesSection() {
  const ref = useRevealOnScroll<HTMLElement>(); // ✅ NO SPACE

  return (
    <section id="services" ref={ref} className="reveal">
      <div className="section-header">
        <h2>Services</h2>
        <p>Engineering solutions delivered with quality workmanship.</p>
      </div>

      {serviceGroups.map((group) => (
        <div key={group.id} style={{ marginBottom: 50 }}>
          <div className="service-group-header">
            <h3>{group.title}</h3>
            <p>{group.subtitle}</p>
          </div>

          {/* expandable version */}
          <IconCardGrid items={group.items} expandable />
        </div>
      ))}
    </section>
  );
}

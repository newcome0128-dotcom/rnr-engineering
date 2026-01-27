"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import IconCardGrid from "@/components/IconCardGrid";
import { supplies } from "@/data/supplies";

export default function SuppliesSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section id="supplies" ref={ref} className="supplies reveal-pop">
      <div className="section-header">
        <h2>Supplies</h2>
        <p>
          Quality materials and industrial components to support construction,
          HVAC, electrical, and facility requirements.
        </p>
      </div>

      <IconCardGrid items={supplies} />
    </section>
  );
}

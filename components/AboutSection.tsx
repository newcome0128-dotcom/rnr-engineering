"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function AboutSection() {
  const ref = useRevealOnScroll<HTMLElement>();


  return (
    <section id="about" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Who we are</span>
          <h2 style={{ marginTop: 12 }}>About RNR Engineering Services</h2>
          <p>
            We deliver reliable engineering services and supplies for commercial,
            industrial, and residential projects—focused on safety, quality, and
            clean execution.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3 style={{ marginBottom: 10 }}>Built for real-world execution</h3>
            <p>
              From design and construction to HVAC, controls, FDAS, and structured
              cabling, we support your project from planning to turnover with
              disciplined coordination and clean workmanship.
            </p>

            <div className="about-points">
              <div className="about-point">
                <span className="dot" />
                <div>
                  <strong>Safety-first delivery</strong>
                  <p style={{ marginTop: 4 }}>
                    Compliance-focused work practices and proper site execution.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="dot" />
                <div>
                  <strong>End-to-end support</strong>
                  <p style={{ marginTop: 4 }}>
                    Services + supplies in one place—faster timelines and fewer vendors.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="dot" />
                <div>
                  <strong>Clean, professional results</strong>
                  <p style={{ marginTop: 4 }}>
                    Quality workmanship with attention to details and durability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="about-mini">
              <div className="num">Civil</div>
              <div className="label">Construction & fit-out works</div>
            </div>
            <div className="about-mini">
              <div className="num">Mechanical</div>
              <div className="label">HVAC, pumps, fabrication</div>
            </div>
            <div className="about-mini">
              <div className="num">Electrical</div>
              <div className="label">FDAS, CCTV, control systems</div>
            </div>
            <div className="about-mini">
              <div className="num">Supplies</div>
              <div className="label">Materials, components, tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

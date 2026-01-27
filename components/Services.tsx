export default function Services() {
  return (
    <section id="services" className="services scroll-reveal">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>
          Core engineering services delivered with quality, compliance,
          and technical expertise.
        </p>
      </div>

      {/* ================= CIVIL WORKS ================= */}
      <div className="service-group-header">
        <h3>Civil Works</h3>
        <p>
          Professional civil works delivering durable, well-engineered
          structures with reliable execution and quality workmanship.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <i className="fas fa-pencil-ruler" />
          <h4>Architectural Design</h4>
          <p>Creative and functional architectural design solutions.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-building" />
          <h4>Building Construction</h4>
          <p>High-quality construction for durable structures.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-city" />
          <h4>Commercial</h4>
          <p>Construction solutions for business facilities.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-home" />
          <h4>Residential</h4>
          <p>Reliable construction services for homes.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-tools" />
          <h4>Renovation</h4>
          <p>Professional upgrades and space improvements.</p>
        </div>
      </div>

      {/* ================= MECHANICAL WORKS ================= */}
      <div className="service-group-header">
        <h3>Mechanical Works</h3>
        <p>
          Comprehensive mechanical installation, repair, and preventive
          maintenance for industrial and commercial systems.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <i className="fas fa-snowflake" />
          <h4>Airconditioning Services</h4>
          <p>Installation and maintenance of AC systems.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-fan" />
          <h4>AHU / PMS</h4>
          <p>Preventive maintenance for AHU systems.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-water" />
          <h4>Motor Pump Repair</h4>
          <p>Professional motor and pump servicing.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-industry" />
          <h4>Fabrication / Welding</h4>
          <p>Custom metal fabrication and welding.</p>
        </div>
      </div>

      {/* ================= ELECTRICAL WORKS ================= */}
      <div className="service-group-header">
        <h3>Electrical Works</h3>
        <p>
          Professional electrical systems installation and maintenance
          compliant with safety and industry standards.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <i className="fas fa-fire" />
          <h4>FDAS – Motor Control</h4>
          <p>Integrated fire alarm and motor control.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-video" />
          <h4>CCTV Installation</h4>
          <p>Smart surveillance solutions.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-solar-panel" />
          <h4>Solar Panel Installation</h4>
          <p>Clean and efficient solar systems.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-sliders-h" />
          <h4>Instrumentation &amp; Control</h4>
          <p>Advanced control and automation.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-satellite-dish" />
          <h4>Telecommunications</h4>
          <p>
            Structured cabling &amp; network infrastructure for
            reliable connectivity.
          </p>
        </div>
      </div>
    </section>
  );
}

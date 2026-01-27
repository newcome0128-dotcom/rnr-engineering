export default function WhyChooseUs() {
  return (
    <section className="why" aria-label="Why choose us">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Why RNR</span>
          <h2 style={{ marginTop: 12 }}>Reliable engineering & construction partner</h2>
          <p>
            We focus on safety compliance, clean workmanship, and consistent delivery
            for residential, commercial, and industrial clients.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <h3 style={{ marginBottom: 10 }}>What you can expect</h3>

            <div className="why-points">
              <div className="why-point">
                <span className="dot" />
                <div>
                  <strong>Safety & compliance</strong>
                  <p style={{ marginTop: 4 }}>
                    Proper standards, disciplined site execution, and dependable documentation.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span className="dot" />
                <div>
                  <strong>Clear coordination</strong>
                  <p style={{ marginTop: 4 }}>
                    We keep schedules and scope aligned to avoid delays and surprises.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span className="dot" />
                <div>
                  <strong>Quality workmanship</strong>
                  <p style={{ marginTop: 4 }}>
                    Clean installation, correct materials, and durable output you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid" aria-label="Company stats">
            <div className="stat">
              <div className="num">Fast</div>
              <div className="label">Response & quotation</div>
            </div>
            <div className="stat">
              <div className="num">End-to-End</div>
              <div className="label">Works + supplies</div>
            </div>
            <div className="stat">
              <div className="num">On-Site</div>
              <div className="label">Actual assessment</div>
            </div>
            <div className="stat">
              <div className="num">Pro</div>
              <div className="label">Tools & workmanship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

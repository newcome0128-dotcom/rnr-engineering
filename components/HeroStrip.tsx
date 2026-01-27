export default function HeroStrip() {
  return (
    <div className="hero-strip">
      <div className="hero-strip-inner">
        <div>
          <h1>RNR Engineering Services</h1>
          <p>Civil • Mechanical • Electrical • General Supplies</p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn-primary" href="#services">Services</a>
          <a className="btn-secondary" href="#contact">Get a Quote</a>
        </div>
      </div>
    </div>
  );
}

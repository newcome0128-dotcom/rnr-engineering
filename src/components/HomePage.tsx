export default function HomePage() {
  return (
    <main>
      {/<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RNR Engineering Services | General Contractor & Supplies</title>
  <meta name="description" content="RNR Engineering Services provides professional construction, engineering, and general supply solutions.">

  <link rel="icon" type="image/png" href="https://i.ibb.co/vvwTnvzk/rnr-logo.png">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- NAVIGATION -->
  <header classNameName="navbar">
    <div className="nav-container">
      <img src="/images/LOGO.png" alt="RNR Engineering Services Logo" className="logo"> />
      <nav>
        <a href="#hero" className="nav-link">Home</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#supplies" className="nav-link">Supplies</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact Us</a>
        <a href="#about" className="nav-link">About Us</a>
        <button id="themeToggle"><i class="fas fa-moon"></i></button>
      </nav>
    </div>
  </header>

  <!-- HERO -->
  <section id="hero" className="hero scroll-reveal">
    <div className="hero-content">
      <img src="/images/LOGO.png" alt="RNR Engineering Services Logo" style="width:140px;margin-bottom:20px;"> />
      <h1>RNR Engineering Services</h1>
      <p>Engineering Excellence. Reliable Construction. Trusted Supplies.</p>
      <a href="#contact" className="btn-primary">Get a Quote</a>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" className="services scroll-reveal">
    <div className="section-header">
      <h2>Our Services</h2>
      <p>Comprehensive engineering and construction solutions under one roof.</p>
    </div>

    <!-- CIVIL WORKS -->
    <h3 className="service-group-title">Civil Works</h3>
    <div className="service-grid">
      <div className="service-card"><i className="fas fa-drafting-compass"></i>
        <h4>Design & Build</h4>
        <p>End-to-end project delivery from concept to completion.</p>
      </div>
      <div className="service-card"><i className="fas fa-pencil-ruler"></i>
        <h4>Architectural Design</h4>
        <p>Creative and functional architectural design solutions.</p>
      </div>
      <div className="service-card"><i className="fas fa-building"></i>
        <h4>Building Construction</h4>
        <p>High-quality construction for durable structures.</p>
      </div>
      <div className="service-card"><i className="fas fa-city"></i>
        <h4>Commercial</h4>
        <p>Construction solutions for business facilities.</p>
      </div>
      <div className="service-card"><i className="fas fa-home"></i>
        <h4>Residential</h4>
        <p>Reliable construction services for homes.</p>
      </div>
      <div className="service-card"><i className="fas fa-tools"></i>
        <h4>Renovation</h4>
        <p>Professional upgrades and space improvements.</p>
      </div>
    </div>

    <!-- MECHANICAL WORKS -->
    <h3 className="service-group-title">Mechanical Works</h3>
    <div className="service-grid">
      <div className="service-card"><i className="fas fa-cogs"></i>
        <h4>Mechanical Works</h4>
        <p>Reliable mechanical solutions for industrial use.</p>
      </div>
      <div className="service-card"><i className="fas fa-snowflake"></i>
        <h4>Airconditioning Services</h4>
        <p>Installation and maintenance of AC systems.</p>
      </div>
      <div className="service-card"><i className="fas fa-fan"></i>
        <h4>AHU / PMS</h4>
        <p>Preventive maintenance for AHU systems.</p>
      </div>
      <div className="service-card"><i className="fas fa-water"></i>
        <h4>Motor Pump Repair</h4>
        <p>Professional motor and pump servicing.</p>
      </div>
      <div className="service-card"><i className="fas fa-industry"></i>
        <h4>Fabrication / Welding</h4>
        <p>Custom metal fabrication and welding.</p>
      </div>
    </div>

    <!-- ELECTRICAL WORKS -->
    <h3 className="service-group-title">Electrical Works</h3>
    <div className="service-grid">
      <div className="service-card"><i className="fas fa-bolt"></i>
        <h4>Electrical Works</h4>
        <p>Professional electrical services.</p>
      </div>
      <div className="service-card"><i className="fas fa-fire"></i>
        <h4>FDAS – Motor Control</h4>
        <p>Integrated fire alarm and motor control.</p>
      </div>
      <div className="service-card"><i className="fas fa-video"></i>
        <h4>CCTV Installation</h4>
        <p>Smart surveillance solutions.</p>
      </div>
      <div className="service-card"><i className="fas fa-solar-panel"></i>
        <h4>Solar Panel Installation</h4>
        <p>Clean and efficient solar systems.</p>
      </div>
      <div className="service-card"><i className="fas fa-sliders-h"></i>
        <h4>Instrumentation & Control</h4>
        <p>Advanced control and automation.</p>
      </div>
      <div className="service-card"><i className="fas fa-satellite-dish"></i>
        <h4>Telecommunications</h4>
        <p>Structured cabling & network infrastructure for reliable connectivity.</p>
      </div>
    </div>
  </section>

  <!-- SUPPLIES -->
  <section id="supplies" className="supplies scroll-reveal">
    <div className="section-header">
      <h2>Supplies</h2>
      <p>Reliable sourcing of construction and industrial materials.</p>
    </div>
    <div className="service-grid">
      <div className="service-card light-card"><i className="fas fa-boxes-stacked"></i>
        <h3>Construction Materials</h3>
        <p>Quality hardware materials for construction and maintenance needs.</p>
      </div>
      <div className="service-card light-card"><i className="fas fa-bolt"></i>
        <h3>Electrical & Mechanical</h3>
        <p>Complete electrical and mechanical components from trusted brands.</p>
      </div>
      <div className="service-card light-card"><i className="fas fa-helmet-safety"></i>
        <h3>Engineering Supplies</h3>
        <p>Reliable tools and materials for engineering applications.</p>
      </div>
      <div className="service-card light-card"><i className="fas fa-solar-panel"></i>
        <h3>Solar Panels</h3>
        <p>High-quality solar panels for energy solutions.</p>
      </div>
      <div className="service-card light-card"><i className="fas fa-helmet-safety"></i>
        <h3>Office Supplies</h3>
        <p>Essential office materials for daily operations.</p>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" className="projects scroll-reveal">
    <h2>Our Projects</h2>
    <div id="projectGrid" className="project-grid"></div>
  </section>

  <!-- MODAL -->
  <div id="projectModal" className="modal-backdrop" hidden>
    <div className="modal">
      <button className="close-btn">&times;</button>
      <h3 id="modalTitle"></h3>
      <p id="modalDesc"></p>
      <div id="modalGallery" className="modal-gallery"></div>
    </div>
  </div>

  <!-- ABOUT US -->
  <section id="about" className="about scroll-reveal">
    <div className="section-header">
      <h2>About Us</h2>
      <p>RNR ENGINEERING SERVICES, established in 2024, delivers the highest standards in electrical, civil, and mechanical projects with reliable supply services. Our vision is to provide exceptional results for clients and build satisfying careers for our people.</p>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" className="contact-section scroll-reveal">
    <h2>Let’s Build Together</h2>
    <p>Contact RNR Engineering Services today.</p>
    <form id="contactForm">
      <input type="email" name="email" placeholder="Your email" required>
      <textarea name="message" placeholder="Your message" required></textarea>
      <button type="submit">Send Message</button>
      <p id="contactStatus" role="status"></p>
    </form>
  </section>

  <script src="script.js"></script>
</body>

</html>/}
    </main>
  );
}

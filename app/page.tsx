import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import SuppliesSection from "@/components/SuppliesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <Navbar />

      {/* HOME / HERO */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>RNR Engineering Services and Supplies</h1>
          <p>
            Civil, Mechanical, Electrical Works & General Supplies — delivered
            with safety, quality, and professionalism.
          </p>

          {/* ✅ Clean only (no “Need a quote today”, no “Chat on Viber”) */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a className="btn-secondary" href="#services">
              Our Services
            </a>
            <a className="btn-secondary" href="#projects">
              View Projects
            </a>
            <a className="btn-secondary" href="#contact">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <AboutSection />
      <HighlightsSection />
      <ServicesSection />
      <ProcessSection />
      <SuppliesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />


    </>
  );
}

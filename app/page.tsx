import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SuppliesSection from "@/components/SuppliesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import HighlightsSection from "@/components/HighlightsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactStrip from "@/components/ContactStrip";
import StickyContactBar from "@/components/StickyContactBar";
export default function Page() {
  return (
    <>
      <Navbar />

      {/* HOME / HERO */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>RNR Engineering Services</h1>
          <p>
            Civil, Mechanical, Electrical Works & General Supplies — delivered
            with safety, quality, and professionalism.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a className="btn-primary" href="#services">
              Our Services
            </a>
            <a className="btn-secondary" href="#contact">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* ✅ CTA strip right after hero */}
      <ContactStrip />

      <AboutSection />

      {/* ✅ What sets us apart */}
      <HighlightsSection />

      <ServicesSection />

      {/* ✅ Process section */}
      <ProcessSection />

      <SuppliesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      {/* ✅ Mobile sticky contact bar */}
      <StickyContactBar />
    </>
  );
}

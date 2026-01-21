"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${solid ? "navbar-solid" : "navbar-transparent"}`}>
      <div className="nav-container">
        <img src="/favicon.png" alt="RNR Logo" className="logo" />
        <nav>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

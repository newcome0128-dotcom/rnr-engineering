"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "supplies", label: "Supplies" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    document.body.classList.toggle("dark", shouldBeDark);
  }, []);

  // Close mobile panel on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close mobile panel when clicking any link
  const goTo = (id: string) => {
    setMobileOpen(false);
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Highlight current section on scroll (lightweight)
  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.05, 0.1, 0.2] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <a href="#home" className="brand" onClick={(e) => (e.preventDefault(), goTo("home"))}>
            <div className="logo-wrap">
              <Image
                src="/images/logo.png"
                alt="RNR Engineering Services"
                fill
                priority
                className="logo-img"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop" aria-label="Primary navigation">
            {LINKS.map((l) => (
              <a
                key={l.id}
                className={`nav-link ${activeId === l.id ? "active" : ""}`}
                href={`#${l.id}`}
                onClick={(e) => (e.preventDefault(), goTo(l.id))}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <button
              className="hamburger"
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>

            <button
              id="themeToggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={isDark}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? "☀️" : "🌓"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`} role="dialog" aria-label="Mobile menu">
        {LINKS.map((l) => (
          <a
            key={l.id}
            className="mobile-link"
            href={`#${l.id}`}
            onClick={(e) => (e.preventDefault(), goTo(l.id))}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

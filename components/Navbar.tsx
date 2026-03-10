"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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

  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];

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
      <nav className="navbar">
        <div className="nav-container">
          <Link
            href="#home"
            className="brand"
            aria-label="RNR Engineering Services home"
            onClick={(e) => {
              e.preventDefault();
              goTo("home");
            }}
          >
            {/* ✅ MUST MATCH CSS .logoBox */}
            <span className="logoBox" aria-hidden="true">
<Image
  src="/logo.png"
  width={100}
  height={50}
  priority
/>
            </span>

            <span className="brandText">RNR Engineering</span>
          </Link>

          <div className="nav-actions">
            <nav className="nav-desktop" aria-label="Primary navigation">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  className={`nav-link ${activeId === l.id ? "active" : ""}`}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(l.id);
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

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
      </nav>

      <div
        className={`mobile-panel ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-label="Mobile menu"
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            className="mobile-link"
            href={`#${l.id}`}
            onClick={(e) => {
              e.preventDefault();
              goTo(l.id);
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
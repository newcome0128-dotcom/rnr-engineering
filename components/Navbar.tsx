"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : false;
    setDark(isDark);
    document.body.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    setDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <header className="navbar">
      <div className="nav-container">
        <img src="/images/LOGO.png" alt="RNR Engineering Services Logo" className="logo" />
        <nav>
          <a href="#hero" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#supplies" className="nav-link">Supplies</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <a href="#about" className="nav-link">About Us</a>

          <button
            type="button"
            id="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <i className={dark ? "fas fa-sun" : "fas fa-moon"} />
          </button>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useMemo, useState } from "react";
import { projects as ALL, type Project, type ProjectCategory } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

type Filter = "all" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);

  // Scroll reveal hook
  useRevealOnScroll();

  const filtered = useMemo(() => {
    if (filter === "all") return ALL;
    return ALL.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="projects scroll-reveal">
      <h2>Our Projects</h2>

      <div className="filter-bar" role="tablist" aria-label="Project filters">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("construction")}
          className={filter === "construction" ? "active" : ""}
        >
          Construction
        </button>
        <button
          type="button"
          onClick={() => setFilter("supplies")}
          className={filter === "supplies" ? "active" : ""}
        >
          Supplies
        </button>
      </div>

      <div className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setActive} />
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

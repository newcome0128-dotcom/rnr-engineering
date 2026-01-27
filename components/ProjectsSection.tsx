import Projects from "@/components/Projects";
import FinishedProjectsStats from "@/components/FinishedProjectsStats";
import { finishedProjectStats } from "@/data/finishedProjects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected works and installations. Tap a project to view photos.</p>
      </div>

      {/* ✅ Finished projects numbers only */}
      <FinishedProjectsStats items={finishedProjectStats} />

      <Projects />
    </section>
  );
}

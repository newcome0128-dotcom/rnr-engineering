import Projects from "@/components/Projects";
import FinishedProjectsStats from "@/components/FinishedProjectsStats";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
             </div>

      <FinishedProjectsStats />
      <Projects />
    </section>
  );
}

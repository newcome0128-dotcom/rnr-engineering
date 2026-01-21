import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const cover = project.images?.[0] || "/images/hero-bg.jpg";

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onOpen(project)}
      aria-label={`Open project: ${project.title}`}
    >
      <img src={cover} alt={project.title} loading="lazy" />
      <div className="project-overlay">
        <h4>{project.title}</h4>
      </div>
    </button>
  );
}

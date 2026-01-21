"use client";

import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
      onMouseDown={onClose}
    >
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button
          ref={closeBtnRef}
          className="close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
        >
          &times;
        </button>

        <h3 id="modalTitle">{project.title}</h3>
        <p id="modalDesc">{project.description}</p>

        <div className="modal-gallery">
          {project.images.map((src, idx) => (
            <img
              key={`${project.id}-${idx}`}
              src={src}
              alt={`${project.title} image ${idx + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

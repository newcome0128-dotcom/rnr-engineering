"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects as ALL } from "@/data/projects";
import { BLUR_DATA_URL } from "@/lib/imagePlaceholders";

type ZoomMode = 1 | 2;

export default function Projects() {
  // Lightbox state
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState<ZoomMode>(1);

  // for swipe
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeProject = useMemo(
    () => (activeProjectId ? ALL.find((p) => p.id === activeProjectId) : null),
    [activeProjectId]
  );

  const images = activeProject?.images ?? [];
  const title = activeProject?.title ?? "";
  const description = activeProject?.description ?? "";
  const activeSrc = images.length ? images[(idx + images.length) % images.length] : "/images/hero-bg.jpg";

  const isOpen = !!activeProject;

  const open = (projectId: string) => {
    setActiveProjectId(projectId);
    setIdx(0);
    setZoom(1);
  };

  const close = () => {
    setActiveProjectId(null);
    setIdx(0);
    setZoom(1);
  };

  const prev = () => {
    if (!images.length) return;
    setZoom(1);
    setIdx((v) => (v - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!images.length) return;
    setZoom(1);
    setIdx((v) => (v + 1) % images.length);
  };

  // Close on ESC + Arrow navigation
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Swipe handlers (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    // ignore mostly-vertical swipes
    if (Math.abs(dy) > Math.abs(dx)) return;

    // threshold
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  const requestQuoteHref = useMemo(() => {
    const msg = `Hi RNR Engineering Services, I'd like to request a quote for the project: ${title}.`;
    return `#contact?project=${encodeURIComponent(title)}&message=${encodeURIComponent(msg)}`;
  }, [title]);

  return (
    <section id="projects" className="projects scroll-reveal">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected works and installations.</p>
      </div>

      {/* GRID (JCVA-like clean tile layout) */}
      <div className="projects-tiles">
        {ALL.map((p) => {
          const cover = p.images?.[0] ?? "/images/hero-bg.jpg";
          return (
            <button
              key={p.id}
              type="button"
              className="project-tile"
              onClick={() => open(p.id)}
              aria-label={`Open project ${p.title}`}
            >
              <Image
                src={cover}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="tile-overlay">
                <div className="tile-title">{p.title}</div>
                {/* hover-only subtitle */}
                <div className="tile-subtitle">View photos</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* LIGHTBOX MODAL */}
      {isOpen && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={`Project gallery: ${title}`}>
          <button className="lb-backdrop" type="button" onClick={close} aria-label="Close gallery" />

          <div className="lb-panel">
            <div className="lb-top">
              <div className="lb-heading">
                <div className="lb-title">{title}</div>
                <div className="lb-count">{images.length ? `${idx + 1} / ${images.length}` : ""}</div>
              </div>

              <div className="lb-actions">
                <button
                  type="button"
                  className="lb-btn"
                  onClick={() => setZoom((z) => (z === 1 ? 2 : 1))}
                  aria-label={zoom === 1 ? "Zoom in" : "Zoom out"}
                  title={zoom === 1 ? "Zoom in" : "Zoom out"}
                >
                  {zoom === 1 ? "＋" : "－"}
                </button>

                <button type="button" className="lb-btn" onClick={close} aria-label="Close" title="Close (Esc)">
                  ✕
                </button>
              </div>
            </div>

            <div
              className={`lb-stage ${zoom === 2 ? "zoomed" : ""}`}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <button type="button" className="lb-arrow prev" onClick={prev} aria-label="Previous image">
                ‹
              </button>

              <div className="lb-imageWrap">
                <Image
                  src={activeSrc}
                  alt={`${title} image ${idx + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: zoom === 2 ? "cover" : "contain" }}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  priority
                />
              </div>

              <button type="button" className="lb-arrow next" onClick={next} aria-label="Next image">
                ›
              </button>
            </div>

            <div className="lb-bottom">
              <p className="lb-desc">{description}</p>

              <div className="lb-ctaRow">
                <a
                  className="lb-ctaPrimary"
                  href={requestQuoteHref}
                  onClick={() => {
                    // close modal then go to contact smoothly
                    close();
                    setTimeout(() => {
                      const el = document.getElementById("contact");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 60);
                  }}
                >
                  Request Quote for this project
                </a>

                <button type="button" className="lb-ctaGhost" onClick={close}>
                  View less
                </button>
              </div>

              <p className="lb-hint">Tip: Swipe on mobile • Use ← → keys • Esc to close</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

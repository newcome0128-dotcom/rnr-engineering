"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects as ALL } from "@/data/projects";
import { BLUR_DATA_URL } from "@/lib/imagePlaceholders";

export default function Projects() {
  // Lightbox state
  const [openId, setOpenId] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);

  // Slideshow
  const [isPlaying, setIsPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isHoveringStage, setIsHoveringStage] = useState(false);

  // Zoom
  const [isZoomed, setIsZoomed] = useState(false);

  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeProject = useMemo(() => {
    return openId ? ALL.find((p) => p.id === openId) : null;
  }, [openId]);

  const images = activeProject?.images ?? [];
  const title = activeProject?.title ?? "";
  const subtitle = activeProject?.subtitle ?? "";
  const description = activeProject?.description ?? "";

  const activeSrc = images[idx] ?? images[0];
  const countLabel = images.length > 1 ? `${idx + 1}/${images.length}` : "";

  const quoteProject = () => {
    // store project title for your ContactSection (optional to use)
    try {
      localStorage.setItem("quoteProject", title);
    } catch {}
  };

  function openLightbox(projectId: string) {
    setOpenId(projectId);
    setIdx(0);
    setIsPlaying(false);
    setIsZoomed(false);

    // lock scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    setTimeout(() => dialogRef.current?.focus(), 30);
  }

  function closeLightbox() {
    setOpenId(null);
    setIsPlaying(false);
    setIsZoomed(false);

    // unlock scroll
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function next() {
    if (images.length <= 1) return;
    setIdx((v) => (v + 1) % images.length);
  }

  function prev() {
    if (images.length <= 1) return;
    setIdx((v) => (v - 1 + images.length) % images.length);
  }

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  // keyboard controls
  useEffect(() => {
    if (!openId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIsPlaying(false);
        setIsZoomed(false);
        prev();
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIsPlaying(false);
        setIsZoomed(false);
        next();
      }

      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        if (!reduceMotion) setIsPlaying((v) => !v);
      }

      if (e.key.toLowerCase() === "z") {
        e.preventDefault();
        setIsZoomed((v) => !v);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId, images.length, reduceMotion]);

  // slideshow autoplay
  useEffect(() => {
    if (!openId) return;
    if (!isPlaying) return;
    if (reduceMotion) return;
    if (isHoveringStage) return;
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setIsZoomed(false);
      next();
    }, 3200);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId, isPlaying, reduceMotion, isHoveringStage, images.length]);

  // close if click backdrop
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  // Swipe handlers (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const sx = touchStartX.current;
    const sy = touchStartY.current;
    if (sx == null || sy == null) return;

    const ex = e.changedTouches[0].clientX;
    const ey = e.changedTouches[0].clientY;

    const dx = ex - sx;
    const dy = ey - sy;

    // if user scrolls vertically, ignore swipe
    if (Math.abs(dy) > Math.abs(dx)) return;

    const SWIPE_THRESHOLD = 50; // px
    if (dx > SWIPE_THRESHOLD) {
      setIsPlaying(false);
      setIsZoomed(false);
      prev();
    } else if (dx < -SWIPE_THRESHOLD) {
      setIsPlaying(false);
      setIsZoomed(false);
      next();
    }
  };

  return (
    <>
      {/* GRID */}
      <div className="project-grid">
        {ALL.map((p) => {
          const cover = p.images?.[0];

          return (
            <button
              key={p.id}
              type="button"
              className="project-card"
              onClick={() => openLightbox(p.id)}
              aria-label={`Open ${p.title} gallery`}
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

              <div className="project-overlay">
                <h4 className="project-title">{p.title}</h4>
                {!!p.subtitle && <p className="project-subtitle">{p.subtitle}</p>}
              </div>
            </button>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      {openId && activeProject && (
        <div className="lightbox" role="dialog" aria-modal="true" onMouseDown={onBackdropClick}>
          <div className="lightbox-inner" tabIndex={-1} ref={dialogRef}>
            {/* Top bar */}
            <div className="lightbox-top">
              <div className="lightbox-meta">
                <div className="lightbox-title">{title}</div>
                {!!subtitle && <div className="lightbox-subtitle">{subtitle}</div>}
              </div>

              <div className="lightbox-actions">
                {images.length > 1 && (
                  <button
                    type="button"
                    className="lb-btn"
                    onClick={() => setIsPlaying((v) => !v)}
                    disabled={reduceMotion}
                    title={reduceMotion ? "Disabled (Reduce Motion enabled)" : isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                )}

                <button
                  type="button"
                  className="lb-btn"
                  onClick={() => setIsZoomed((v) => !v)}
                  title={isZoomed ? "Zoom out (Z)" : "Zoom in (Z)"}
                >
                  {isZoomed ? "Zoom out" : "Zoom in"}
                </button>

                <button type="button" className="lb-btn" onClick={closeLightbox} aria-label="Close">
                  ✕
                </button>
              </div>
            </div>

            {/* Stage */}
            <div
              className={`lightbox-stage ${isZoomed ? "zoomed" : ""}`}
              onMouseEnter={() => setIsHoveringStage(true)}
              onMouseLeave={() => setIsHoveringStage(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={activeSrc}
                alt={`${title} image ${idx + 1}`}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                priority
              />

              {images.length > 1 && <div className="lightbox-counter">{countLabel}</div>}

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="lb-arrow prev"
                    onClick={() => {
                      setIsPlaying(false);
                      setIsZoomed(false);
                      prev();
                    }}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="lb-arrow next"
                    onClick={() => {
                      setIsPlaying(false);
                      setIsZoomed(false);
                      next();
                    }}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Bottom */}
            <div className="lightbox-bottom">
              <div className="lightbox-bottom-row">
                <p className="lightbox-desc">{description}</p>

                {/* ✅ Quote button INSIDE lightbox */}
                <a
                  className="lb-quote"
                  href="#contact"
                  onClick={() => {
                    quoteProject();
                    closeLightbox();
                  }}
                >
                  Request Quote for this project
                </a>
              </div>

              {images.length > 1 && (
                <div className="lightbox-thumbs" aria-label="Thumbnails">
                  {images.map((src, tIdx) => (
                    <button
                      key={`${openId}-t-${tIdx}`}
                      type="button"
                      className={`lb-thumb ${tIdx === idx ? "active" : ""}`}
                      onClick={() => {
                        setIsPlaying(false);
                        setIsZoomed(false);
                        setIdx(tIdx);
                      }}
                      aria-label={`View image ${tIdx + 1}`}
                    >
                      <Image src={src} alt="thumbnail" width={92} height={62} placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                    </button>
                  ))}
                </div>
              )}

              {images.length > 1 && (
                <div className="lightbox-tip">
                  Swipe left/right on mobile • ← → keys • Space Play/Pause • Z Zoom • Esc Close
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

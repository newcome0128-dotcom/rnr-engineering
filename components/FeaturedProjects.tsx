"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { BLUR_DATA_URL } from "@/lib/imagePlaceholders";

export default function FeaturedProjects() {
  // Pick your best 3 (you can change IDs anytime)
  const picks = ["residential-01", "electricalworks-01", "mechanicalworks-01"];

  const featured = picks
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="featured" aria-label="Featured projects">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Highlights</span>
          <h2 style={{ marginTop: 12 }}>Featured projects</h2>
          <p>Quick preview of selected works. View the full gallery below.</p>
        </div>

        <div className="featured-grid">
          {featured.map((p) => {
            const cover = p!.images?.[0] ?? "/images/backgrounds/site-bg.webp";
            return (
              <div className="featured-card" key={p!.id}>
                <div className="featured-media">
                  <Image
                    src={cover}
                    alt={p!.title}
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
                <div className="featured-body">
                  <h3>{p!.title}</h3>
                  <p>{p!.description}</p>
                  <div style={{ marginTop: 10 }}>
                    <a className="btn-primary" href="#projects">View gallery</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

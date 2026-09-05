import { useEffect, useState } from "react";

function ProjectVisual({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const imageCount = project.images?.length ?? 0;

  useEffect(() => {
    if (imageCount < 2) return undefined;

    const autoAdvance = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % imageCount);
    }, 5000);

    return () => window.clearInterval(autoAdvance);
  }, [imageCount]);

  if (imageCount) {
    const currentImage = project.images[activeImage];

    return (
      <figure className={`project-visual project-gallery visual-${project.id}`}>
        <div className="window-bar" aria-hidden="true">
          <span /><span /><span />
          <b>{project.id === "helpdesk" ? "AI Helpdesk" : "Restaurant POS"}</b>
        </div>

        <div className="gallery-stage">
          <a
            href={currentImage.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size image: ${currentImage.label}`}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              loading="lazy"
              decoding="async"
            />
          </a>

          <button
            className="gallery-arrow gallery-arrow-previous"
            type="button"
            onClick={() =>
              setActiveImage((current) => (current - 1 + imageCount) % imageCount)
            }
            aria-label={`Show previous ${project.title} screenshot`}
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <button
            className="gallery-arrow gallery-arrow-next"
            type="button"
            onClick={() =>
              setActiveImage((current) => (current + 1) % imageCount)
            }
            aria-label={`Show next ${project.title} screenshot`}
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>

        <figcaption className="gallery-footer">
          <span>{currentImage.label}</span>
          <div
            className="gallery-dots"
            aria-label={`${project.title} screenshots`}
          >
            {project.images.map((image, index) => (
              <button
                className={index === activeImage ? "is-active" : ""}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show screenshot ${index + 1}: ${image.label}`}
                aria-current={index === activeImage ? "true" : undefined}
                key={image.src}
              />
            ))}
          </div>
          <span>
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(imageCount).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
    );
  }

  if (project.id === "tracker") {
    return (
      <div className="project-visual visual-tracker" aria-hidden="true">
        <div className="window-bar"><span /><span /><span /><b>projects / overview</b></div>
        <div className="tracker-top"><i>Search projects</i><strong>+ New</strong></div>
        <div className="tracker-layout">
          <div className="metric"><small>Projects</small><b>Active</b><i /></div>
          <div className="metric"><small>Due dates</small><b>Upcoming</b><i /></div>
          <div className="project-rows"><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-pos" aria-hidden="true">
      <div className="window-bar"><span /><span /><span /><b>register / order</b></div>
      <div className="pos-layout">
        <div className="product-grid"><i /><i /><i /><i /><i /><i /></div>
        <div className="order-panel">
          <small>Current order</small>
          <div><span>Order item</span><b>01</b></div>
          <div><span>Order item</span><b>02</b></div>
          <i />
          <strong>Process payment</strong>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span>Project {project.number}</span>
        <span>{project.date}</span>
      </div>

      <div className="project-grid">
        <div className="project-copy">
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          {project.roadmap ? (
            <p className="roadmap"><span>Roadmap</span>{project.roadmap.replace("Planned next: ", "")}</p>
          ) : null}
        </div>

        <ProjectVisual project={project} />
      </div>

      <div className="tech-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  );
}

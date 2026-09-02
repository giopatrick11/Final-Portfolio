function ProjectVisual({ type }) {
  if (type === "helpdesk") {
    return (
      <div className="project-visual visual-helpdesk" aria-hidden="true">
        <div className="window-bar"><span /><span /><span /><b>support / tickets</b></div>
        <div className="helpdesk-layout">
          <div className="visual-sidebar">
            <i className="is-active" /><i /><i /><i />
          </div>
          <div className="ticket-list">
            <div className="ticket-line"><span>New ticket</span><em>High</em></div>
            <div className="ticket-line"><span>AI triage</span><em>Ready</em></div>
            <div className="ticket-line"><span>Assigned</span><em>Open</em></div>
          </div>
          <div className="ai-panel">
            <small>AI summary</small>
            <i /><i /><i className="short" />
            <strong>Classified</strong>
          </div>
        </div>
      </div>
    );
  }

  if (type === "tracker") {
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

        <ProjectVisual type={project.id} />
      </div>

      <div className="tech-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  );
}

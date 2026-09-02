import Header from "./Header.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import {
  certificates,
  education,
  experience,
  projects,
  skillGroups,
} from "../data/portfolio.js";

const links = {
  email: "mailto:giopatrick11@gmail.com",
  github: "https://github.com/giopatrick11",
  linkedin: "https://linkedin.com/in/giocimeni",
  resume: "/Gio-Patrick-Cimeni-Resume.pdf",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Full-stack developer · Pasig, Philippines</p>
            <h1>I build reliable software for real-world workflows.</h1>
            <p className="hero-summary">
              I’m Gio Patrick Cimeni, a software developer focused on full-stack
              web applications, clear interfaces, and maintainable backend systems.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">View selected work <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">Contact me <span aria-hidden="true">→</span></a>
            </div>
            <div className="availability">
              <span className="status-dot" aria-hidden="true" />
              Open to software development internships and full-stack opportunities
            </div>
          </div>

          <div className="profile-frame" aria-label="Profile image placeholder">
            <div className="profile-placeholder">
              <span className="profile-initials">GC</span>
              <span className="profile-label">Profile photo</span>
            </div>
            <div className="profile-meta">
              <span>Full-stack developer</span>
              <span>2026</span>
            </div>
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="section-shell">
            <SectionHeading
              eyebrow="About"
              title="Thoughtful interfaces. Dependable systems."
              description="A practical approach to software shaped by real operational workflows."
            />

            <div className="about-grid">
              <div className="about-copy">
                <p className="about-lead">
                  I’m an Information Technology student and full-stack developer
                  building applications across the interface, API, and database layers.
                </p>
                <p>
                  My recent work includes clinic operations, project tracking,
                  restaurant point-of-sale, and AI-assisted support systems. I care
                  about making complex workflows clear for users while keeping the
                  code behind them structured and maintainable.
                </p>
                <a className="text-link" href={links.resume} target="_blank" rel="noreferrer">
                  View latest resume <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="focus-grid" aria-label="Development focus areas">
                <div className="focus-card">
                  <span>01</span>
                  <h3>Full-stack systems</h3>
                  <p>Connected experiences across frontend, backend, APIs, and data.</p>
                </div>
                <div className="focus-card">
                  <span>02</span>
                  <h3>Workflow-first UX</h3>
                  <p>Interfaces designed around the tasks people need to complete.</p>
                </div>
                <div className="focus-card">
                  <span>03</span>
                  <h3>Database design</h3>
                  <p>Structured, reliable data models for operational applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="experience">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Experience"
              title="Building software for operational workflows."
              description="Hands-on development across clinical operations, transaction systems, and role-based applications."
              light
            />

            <article className="experience-card">
              <div className="experience-meta">
                <p>{experience.period}</p>
                <span>{experience.stack.join(" · ")}</span>
              </div>
              <div className="experience-body">
                <p className="experience-company">{experience.company}</p>
                <h3>{experience.role}</h3>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Selected work"
              title="Systems built around real use cases."
              description="Current projects from support automation, project operations, and restaurant transactions."
            />

            <div className="project-list">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Skills"
              title="A practical full-stack toolkit."
              description="Technologies used across coursework, professional work, and current projects."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-education" id="education">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Education"
              title="Database-focused IT foundation."
              description="Formal study supported by academic recognition and focused technical training."
            />

            <div className="education-grid">
              <article className="education-card">
                <div className="education-topline">
                  <span>{education.period}</span>
                  <span>{education.expected}</span>
                </div>
                <p className="education-school">{education.school}</p>
                <h3>{education.degree}</h3>

                <div className="education-details">
                  <div>
                    <span>Current GPA</span>
                    <strong>{education.gpa}</strong>
                  </div>
                  <div>
                    <span>Academic honors</span>
                    <p>{education.honors.join(" · ")}</p>
                  </div>
                </div>

                <div className="thesis-note">
                  <span>Undergraduate thesis · Ongoing</span>
                  <p>{education.thesis}</p>
                </div>
              </article>

              <div className="certificate-list">
                <p className="certificate-label">Certificates</p>
                {certificates.map((certificate) => (
                  <article className="certificate-card" key={certificate.title}>
                    <span>{certificate.issuer}</span>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-shell contact-grid">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2>Let’s build something useful.</h2>
              <p>
                I’m open to software development internships and full-stack
                opportunities. If my work fits what your team is building, I’d
                be glad to connect.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-light" href={links.email}>Send an email <span aria-hidden="true">↗</span></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={links.resume} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand brand-footer" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">GC</span>
            <span className="brand-name">Gio Patrick Cimeni</span>
          </a>
          <p>Full-stack developer · Pasig, Philippines</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}

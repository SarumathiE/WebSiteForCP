import { OUR_PROJECTS } from "../data/ourProjects.js";

export default function OurProjects() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header-centered">
          <div className="section-label">What We Deliver</div>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-sub">
            From mobile solutions to enterprise systems, we deliver innovative projects that drive business growth.
          </p>
        </div>
        <div className="projects-grid">
          {OUR_PROJECTS.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
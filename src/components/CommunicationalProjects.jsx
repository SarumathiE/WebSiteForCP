import { COMMUNICATIONAL_PROJECTS } from "../data/communicationalProjects";

export default function CommunicationalProjects() {
  return (
    <section className="section comm-bg">
      <div className="section-inner">
        <div className="section-header-centered">
          <div className="section-label">Our Expertise</div>
          <h2 className="section-title">Communicational Projects</h2>
          <p className="section-sub">
            Comprehensive automation solutions across multiple domains, designed for maximum efficiency and reliability.
          </p>
        </div>
        <div className="comm-grid">
          {COMMUNICATIONAL_PROJECTS.map((item) => (
            <div key={item.title} className="comm-card">
              <h3>{item.title}</h3>
              <ul>
                {item.solutions.map((sol) => (
                  <li key={sol}>{sol}</li>
                ))}
              </ul>
              <div className="code-badge">
                {item.codes.map((code, i) => (
                  <span key={i}>{code}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
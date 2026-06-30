import { PROJECT_SHOWCASE } from "../data/projectShowcase.js";

export default function ProjectShowcase() {
  return (
    <section className="section showcase-bg">
      <div className="section-inner">
        <div className="showcase-header">
          <div>
            <div className="section-label">Project Portfolio</div>
            <h2 className="section-title">Our Projects Showcase</h2>
            <p className="section-sub">Explore our diverse portfolio of automation and technology solutions.</p>
          </div>
          <a href="#" className="showcase-archive">View All Projects ↗</a>
        </div>
        <div className="showcase-grid">
          {PROJECT_SHOWCASE.map((s) => (
            <div key={s.title} className="showcase-card">
              <div className="showcase-img">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="showcase-body">
                <div className="showcase-meta">
                  <span className="showcase-category">{s.category}</span>
                  <span className="showcase-year">· {s.year}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
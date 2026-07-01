import { Link } from "react-router-dom";
import { IMAGES } from "../utils/images.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Est. 2024 · Innovation Hub
          </div>
          <h1>
            Engineering the<br />
            <span>Future of<br />Automation</span>
          </h1>
          <p className="hero-desc">
            Pioneering automation solutions through advanced technology integration. We build the infrastructure that defines tomorrow's industrial landscape.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              Explore Projects <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={IMAGES.hero} alt="Modern IT workspace" />
          <div className="hero-visual-glow" />
        </div>
      </div>
    </section>
  );
}
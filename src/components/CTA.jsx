import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-card glass-effect">
          <div className="cta-glow"></div>
          <div className="cta-glow-2"></div>
          <div className="cta-content">
            <div className="cta-eyebrow">Ready to Build the Future?</div>
            <h2>Let's create something extraordinary</h2>
            <p>
              Let's discuss how CodePage can accelerate your automation vision into a market-leading reality.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-glass-primary">Start a Project</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
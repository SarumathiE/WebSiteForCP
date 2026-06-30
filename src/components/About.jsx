import { PRIMARY_LIGHT } from "../styles/theme.js";
import { IMAGES } from "../utils/images.js";

export default function About() {
  return (
    <section className="section about-bg">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">We Are <span style={{ color: PRIMARY_LIGHT }}>CodePage</span></h2>
            <p>
              At CodePage, we're focused on the boundaries of possibility. By seamlessly 
              converging the realms of automation and cutting-edge technology, we're paving 
              the way for a new era of innovation.
            </p>
            <p>
              Our efforts are aimed at bringing about significant positive changes and 
              driving transformation in this field. Our expertise spans diverse domains, 
              and we're committed to delivering results that are not only efficient, but 
              also sustainable.
            </p>
            <p>
              We're committed to building a better future for everyone, and we're excited 
              to share our journey with you.
            </p>
          </div>
          <div className="about-image">
            <img src={IMAGES.about} alt="CodePage engineering team" />
          </div>
        </div>
      </div>
    </section>
  );
}
import { FOOTER_LINKS } from "../data/footerLinks.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">CodePage<span>.</span></div>
            <p>
              Building the infrastructure that defines tomorrow. 
              We engineer automation solutions through advanced 
              technology integration and robust systems.
            </p>
            <div className="footer-location">
              <span>📍</span> Chennai, India
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2024 CodePage Engineering. All rights reserved.</p>
          <ul className="footer-legal">
            {["Privacy Policy", "Terms of Service", "Security", "Status"].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
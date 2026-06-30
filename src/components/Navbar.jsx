import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../data/navLinks.js";

export default function Navbar({ scrolled, isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const getPath = (link) => {
    if (link === "Home") return "/";
    return `/${link.toLowerCase()}`;
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <NavLink to="/" className="nav-logo">CodePage<span>.</span></NavLink>
          
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <NavLink 
                  to={getPath(l)} 
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {l}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDark ? "☀️" : "🌙"}
            </button>
            <NavLink to="/contact" className="nav-cta">Get Started</NavLink>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <NavLink 
            key={l} 
            to={getPath(l)} 
            className={({ isActive }) => isActive ? "active" : ""}
            onClick={closeMenu}
          >
            {l}
          </NavLink>
        ))}
        <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>Get Started</NavLink>
      </div>
    </>
  );
}
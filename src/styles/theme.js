export const PRIMARY = "#7C3AED";
export const PRIMARY_LIGHT = "#A78BFA";
export const PRIMARY_DARK = "#5B21B6";
export const SECONDARY = "#06B6D4";

// Light theme colors
export const LIGHT_BG = "#F8F8FF";
export const LIGHT_BG_CARD = "#FFFFFF";
export const LIGHT_BG_CARD2 = "#F0F0F8";
export const LIGHT_TEXT_PRIMARY = "#0A0A0F";
export const LIGHT_TEXT_SECONDARY = "#4A4A60";
export const LIGHT_TEXT_MUTED = "#9090A8";
export const LIGHT_BORDER = "#E0E0EA";

// Dark theme colors
export const DARK_BG = "#0A0A0F";
export const DARK_BG_CARD = "#111118";
export const DARK_BG_CARD2 = "#16161F";
export const DARK_TEXT_PRIMARY = "#F8F8FF";
export const DARK_TEXT_SECONDARY = "#A0A0B8";
export const DARK_TEXT_MUTED = "#606078";
export const DARK_BORDER = "#1E1E2E";

export const getStyles = (isDark) => `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  *, *::before, *::after { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }

  :root {
    --primary: ${PRIMARY};
    --primary-light: ${PRIMARY_LIGHT};
    --primary-dark: ${PRIMARY_DARK};
    --secondary: ${SECONDARY};
    --bg-dark: ${isDark ? DARK_BG : LIGHT_BG};
    --bg-card: ${isDark ? DARK_BG_CARD : LIGHT_BG_CARD};
    --bg-card2: ${isDark ? DARK_BG_CARD2 : LIGHT_BG_CARD2};
    --text-primary: ${isDark ? DARK_TEXT_PRIMARY : LIGHT_TEXT_PRIMARY};
    --text-secondary: ${isDark ? DARK_TEXT_SECONDARY : LIGHT_TEXT_SECONDARY};
    --text-muted: ${isDark ? DARK_TEXT_MUTED : LIGHT_TEXT_MUTED};
    --border: ${isDark ? DARK_BORDER : LIGHT_BORDER};
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --shadow: ${isDark ? '0 4px 32px rgba(0,0,0,0.4)' : '0 4px 32px rgba(0,0,0,0.08)'};
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background: var(--bg-dark); 
    color: var(--text-primary); 
    font-family: 'Poppins', sans-serif;
    transition: background 0.3s ease, color 0.3s ease; 
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app { 
    min-height: 100vh; 
    background: var(--bg-dark); 
    overflow-x: hidden; 
    transition: background 0.3s ease; 
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* ── NAV ── */
  .nav {
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    z-index: 100;
    padding: 0 2rem;
    transition: all 0.3s ease;
    height: 72px;
  }

  .nav.scrolled {
    background: ${isDark ? 'rgba(10,10,15,0.85)' : 'rgba(248,248,255,0.92)'};
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid ${isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.1)'};
    box-shadow: var(--shadow);
  }

  .nav-inner {
    max-width: 1200px; 
    margin: 0 auto;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    height: 100%;
  }

  .nav-logo { 
    font-family: 'Poppins', sans-serif; 
    font-size: 1.2rem; 
    font-weight: 700; 
    color: var(--text-primary); 
    letter-spacing: -0.02em; 
    text-decoration: none; 
    transition: color 0.3s;
  }

  .nav-logo span { 
    color: var(--primary-light); 
  }

  .nav-links { 
    display: flex; 
    align-items: center; 
    gap: 2rem; 
    list-style: none; 
  }

  .nav-links a { 
    color: var(--text-secondary); 
    text-decoration: none; 
    font-size: 0.9rem; 
    font-weight: 500; 
    transition: color 0.2s; 
    position: relative;
  }

  .nav-links a:hover { 
    color: var(--text-primary); 
  }

  .nav-links a.active { 
    color: var(--primary-light); 
  }

  .nav-links a.active::after { 
    content: ''; 
    position: absolute; 
    bottom: -4px; 
    left: 0; 
    right: 0; 
    height: 2px; 
    background: var(--primary-light); 
    border-radius: 2px; 
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 5px;
    z-index: 101;
  }

  .hamburger span {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .mobile-nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg-dark);
    z-index: 99;
    padding: 80px 2rem 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .mobile-nav.open {
    display: flex;
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav a {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .mobile-nav a:hover,
  .mobile-nav a.active {
    color: var(--primary-light);
  }

  .mobile-nav .nav-cta {
    margin-top: 1rem;
  }
  
  .nav-actions { 
    display: flex; 
    align-items: center; 
    gap: 1rem; 
  }
  
  .theme-toggle {
    background: var(--bg-card2); 
    color: var(--text-secondary);
    border: 1px solid var(--border); 
    cursor: pointer;
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex; 
    align-items: center; 
    justify-content: center;
  }

  .theme-toggle:hover { 
    border-color: var(--primary-light); 
    transform: rotate(20deg);
    background: rgba(124,58,237,0.1);
  }
  
  .nav-cta {
    background: var(--primary); 
    color: #fff; 
    border: none; 
    cursor: pointer;
    padding: 0.55rem 1.3rem; 
    border-radius: 8px; 
    font-size: 0.875rem; 
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .nav-cta:hover { 
    background: var(--primary-dark); 
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(124,58,237,0.3);
  }

  /* ── HERO ── */
  .hero {
    
    display: flex; 
    align-items: center;
    padding: 100px 2rem 80px;
    position: relative; 
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute; 
    top: -200px; 
    right: -100px;
    width: 700px; 
    height: 700px;
    background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute; 
    bottom: -200px; 
    left: -100px;
    width: 500px; 
    height: 500px;
    background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-inner { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 4rem; 
    align-items: center; 
    width: 100%; 
    position: relative;
    z-index: 1;
  }

  .hero-badge {
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem;
    background: rgba(124,58,237,0.12); 
    border: 1px solid rgba(124,58,237,0.25);
    border-radius: 999px; 
    padding: 0.3rem 0.9rem; 
    margin-bottom: 1.5rem;
    font-size: 0.75rem; 
    font-weight: 600; 
    color: var(--primary-light); 
    letter-spacing: 0.08em; 
    text-transform: uppercase;
  }

  .hero-badge-dot { 
    width: 6px; 
    height: 6px; 
    background: var(--primary-light); 
    border-radius: 50%; 
    animation: pulse 2s infinite; 
  }

  @keyframes pulse { 
    0%,100%{opacity:1; transform: scale(1)} 
    50%{opacity:0.4; transform: scale(0.8)} 
  }

  .hero h1 { 
    font-family: 'Poppins', sans-serif; 
    font-size: clamp(2.4rem, 5vw, 3.6rem); 
    font-weight: 800; 
    line-height: 1.1; 
    letter-spacing: -0.03em; 
    margin-bottom: 1.25rem; 
  }

  .hero h1 span { 
    color: var(--primary-light); 
  }

  .hero-desc { 
    font-size: 1.05rem; 
    color: var(--text-secondary); 
    line-height: 1.75; 
    margin-bottom: 2rem; 
    max-width: 480px; 
  }

  .hero-actions { 
    display: flex; 
    align-items: center; 
    gap: 1rem; 
    flex-wrap: wrap; 
  }

  .btn-primary {
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem;
    background: var(--primary); 
    color: #fff; 
    border: none; 
    cursor: pointer;
    padding: 0.75rem 1.6rem; 
    border-radius: 10px; 
    font-size: 0.95rem; 
    font-weight: 600;
    transition: all 0.3s ease; 
    text-decoration: none;
  }

  .btn-primary:hover { 
    background: var(--primary-dark); 
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124,58,237,0.35);
  }

  .btn-ghost {
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem;
    background: transparent; 
    color: var(--text-secondary); 
    border: 1px solid var(--border);
    cursor: pointer; 
    padding: 0.75rem 1.6rem; 
    border-radius: 10px; 
    font-size: 0.95rem; 
    font-weight: 500;
    transition: all 0.3s ease; 
    text-decoration: none;
  }

  .btn-ghost:hover { 
    border-color: var(--primary-light); 
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  .hero-visual {
    position: relative; 
    border-radius: 20px; 
    overflow: hidden;
    aspect-ratio: 4/3;
    border: 1px solid rgba(124,58,237,0.2);
    box-shadow: 0 0 80px rgba(124,58,237,0.1);
    width: 100%;
    background: var(--bg-card);
  }

  .hero-visual img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block; 
  }

  .hero-visual-glow {
    position: absolute; 
    inset: 0;
    background: linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  /* ── SECTION COMMON ── */
  .section { 
    padding: 23px 2rem; 
  }

  .section-inner { 
    max-width: 1200px; 
    margin: 0 auto; 
  }

  .section-label { 
    font-size: 0.75rem; 
    font-weight: 700; 
    letter-spacing: 0.1em; 
    text-transform: uppercase; 
    color: var(--primary-light); 
    margin-bottom: 0.75rem; 
  }

  .section-title { 
    font-family: 'Poppins', sans-serif; 
    font-size: clamp(1.8rem, 3vw, 2.4rem); 
    font-weight: 700; 
    letter-spacing: -0.02em; 
    margin-bottom: 0.75rem; 
  }

  .section-sub { 
    font-size: 1rem; 
    color: var(--text-secondary); 
    max-width: 520px; 
    line-height: 1.7; 
  }

  .section-header-centered { 
    text-align: center; 
    margin-bottom: 2rem; 
  }

  .section-header-centered .section-sub { 
    margin: 0 auto; 
  }

  /* ── ABOUT PAGE STYLES ── */
  .about-hero {
    padding: 100px 2rem 30px;
    position: relative;
    overflow: hidden;
    background: var(--bg-dark);
  }

  .about-hero::before {
    content: '';
    position: absolute;
    top: -300px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .about-hero-content {
    position: relative;
    z-index: 1;
  }

  .about-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(124,58,237,0.12);
    border: 1px solid rgba(124,58,237,0.25);
    border-radius: 999px;
    padding: 0.35rem 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--primary-light);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .about-badge-dot {
    width: 8px;
    height: 8px;
    background: var(--primary-light);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .about-hero-content h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.8rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
    color: var(--text-primary);
  }

  .about-hero-content h1 span {
    color: var(--primary-light);
  }

  .about-hero-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 520px;
    margin-bottom: 2rem;
  }

  .about-stats {
    display: flex;
    gap: 3rem;
    margin-top: 1rem;
  }

  .about-stat {
    display: flex;
    flex-direction: column;
  }

  .stat-number {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-light);
  }

  .stat-label {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: 0.2rem;
  }

  .about-hero-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    border: 1px solid rgba(124,58,237,0.2);
  }

  .about-hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .about-hero-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  .about-experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: #fff;
    padding: 1.25rem 1.5rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(124,58,237,0.3);
  }

  .about-experience-badge span {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
  }

  .about-experience-badge p {
    font-size: 0.7rem;
    margin: 0;
    opacity: 0.9;
    font-weight: 500;
  }

  .about-intro {
    padding: 60px 2rem;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }

  .intro-content p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .intro-image {
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    aspect-ratio: 4/3;
  }

  .intro-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .about-components {
    padding: 80px 2rem;
    background: var(--bg-dark);
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .component-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .component-card:hover {
    border-color: rgba(124,58,237,0.35);
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(124,58,237,0.08);
  }

  .component-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .component-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .component-card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
  }

  .component-number {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-light);
    opacity: 0.4;
    margin-bottom: 0.25rem;
  }

  .component-card .component-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
    display: block;
  }

  .about-case-studies {
    padding: 80px 2rem;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .case-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .case-card {
    background: var(--bg-card2);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .case-card:hover {
    border-color: rgba(124,58,237,0.3);
    transform: translateY(-4px);
  }

  .case-image {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .case-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .case-tag {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--primary);
    color: #fff;
    padding: 0.25rem 0.8rem;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .case-content {
    padding: 1.5rem;
  }

  .case-content h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .case-content p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .case-meta {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .case-meta span {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .about-future {
    padding: 80px 2rem;
    background: var(--bg-dark);
  }

  .future-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }

  .future-content p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .future-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .future-tags span {
    background: rgba(124,58,237,0.1);
    border: 1px solid rgba(124,58,237,0.2);
    color: var(--primary-light);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .future-image {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    aspect-ratio: 4/3;
    border: 1px solid var(--border);
  }

  .future-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .future-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
    display: flex;
    align-items: flex-end;
    padding: 2rem;
  }

  .future-quote {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    font-style: italic;
  }

  .about-conclusion {
    padding: 60px 2rem;
  }

  .conclusion-card {
    max-width: 800px;
    margin: 0 auto;
    background: linear-gradient(135deg, #4C1D95 0%, #6D28D9 40%, #7C3AED 100%);
    border-radius: var(--radius-xl);
    padding: 4rem 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .conclusion-card::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    border-radius: 50%;
  }

  .conclusion-card::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
    border-radius: 50%;
  }

  .conclusion-card h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .conclusion-card h2 span {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: rgba(255,255,255,0.3);
  }

  .conclusion-card p {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.8);
    max-width: 500px;
    margin: 0 auto 2rem;
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }

  .conclusion-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  .conclusion-actions .btn-white {
    background: #fff;
    color: var(--primary-dark);
    padding: 0.85rem 2rem;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .conclusion-actions .btn-white:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  }

  .conclusion-actions .btn-outline-white {
    background: rgba(255,255,255,0.1);
    color: #fff;
    padding: 0.85rem 2rem;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    border: 1px solid rgba(255,255,255,0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .conclusion-actions .btn-outline-white:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-3px);
  }

  .about-importance {
    padding: 60px 2rem;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .importance-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .importance-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.8;
    text-align: center;
  }

  /* ── ABOUT US ── */
  .about-bg { 
    background: var(--bg-card); 
    border-top: 1px solid var(--border); 
    border-bottom: 1px solid var(--border); 
  }

  .about-grid { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 4rem; 
    align-items: center; 
  }

  .about-content p { 
    color: var(--text-secondary); 
    font-size: 1rem; 
    line-height: 1.8; 
    margin-bottom: 1.5rem; 
  }

  .about-content p:last-child {
    margin-bottom: 0;
  }

  .about-image { 
    border-radius: var(--radius-lg); 
    overflow: hidden; 
    border: 1px solid var(--border); 
    aspect-ratio: 4/3; 
    width: 100%; 
    background: var(--bg-dark);
  }

  .about-image img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block; 
  }

  /* ── COMMUNICATIONAL PROJECTS ── */
  .comm-bg { 
    background: var(--bg-card2); 
    border-top: 1px solid var(--border); 
    border-bottom: 1px solid var(--border); 
  }

  .comm-grid { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 1.5rem; 
  }

  .comm-card {
    background: var(--bg-card); 
    border: 1px solid var(--border);
    border-radius: var(--radius-lg); 
    padding: 1.75rem;
    transition: all 0.3s ease;
  }

  .comm-card:hover { 
    border-color: rgba(124,58,237,0.35); 
    transform: translateY(-4px);
  }

  .comm-card h3 { 
    font-family: 'Poppins', sans-serif; 
    font-size: 1rem; 
    font-weight: 600; 
    color: var(--primary-light); 
    margin-bottom: 1rem; 
  }

  .comm-card ul { 
    list-style: none; 
    display: flex; 
    flex-wrap: wrap; 
    gap: 0.4rem; 
  }

  .comm-card ul li { 
    font-size: 0.7rem; 
    font-weight: 600; 
    letter-spacing: 0.05em; 
    text-transform: uppercase;
    color: var(--text-secondary); 
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border); 
    border-radius: 4px; 
    padding: 0.25rem 0.6rem;
  }

  .comm-card .code-badge {
    margin-top: 1rem; 
    padding-top: 1rem; 
    border-top: 1px solid var(--border);
    display: flex; 
    gap: 0.5rem; 
    flex-wrap: wrap;
  }

  .comm-card .code-badge span {
    font-size: 0.65rem; 
    font-weight: 700; 
    letter-spacing: 0.1em; 
    text-transform: uppercase;
    color: var(--primary-light); 
    background: rgba(124,58,237,0.1);
    border: 1px solid rgba(124,58,237,0.2); 
    border-radius: 4px; 
    padding: 0.2rem 0.5rem;
  }

  /* ── OUR PROJECTS ── */
  .projects-grid { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 1.5rem; 
    margin-bottom: 0; 
  }

  .project-card {
    background: var(--bg-card); 
    border: 1px solid var(--border);
    border-radius: var(--radius-lg); 
    padding: 1.5rem;
    transition: all 0.3s ease; 
    text-align: center;
  }

  .project-card:hover { 
    border-color: rgba(124,58,237,0.35); 
    transform: translateY(-4px);
  }

  .project-icon { 
    font-size: 2rem; 
    margin-bottom: 0.75rem; 
    display: block;
  }

  .project-card h4 { 
    font-family: 'Poppins', sans-serif; 
    font-size: 0.95rem; 
    font-weight: 600; 
    margin-bottom: 0.25rem; 
  }

  .project-card p { 
    font-size: 0.8rem; 
    color: var(--text-muted); 
  }

  /* ── PROJECT SHOWCASE ── */
  .showcase-bg { 
    background: var(--bg-card); 
    border-top: 1px solid var(--border); 
    border-bottom: 1px solid var(--border); 
  }

  .showcase-header { 
    display: flex; 
    align-items: flex-end; 
    justify-content: space-between; 
    margin-bottom: 2rem; 
  }

  .showcase-archive { 
    font-size: 0.8rem; 
    font-weight: 700; 
    letter-spacing: 0.08em; 
    text-transform: uppercase; 
    color: var(--primary-light); 
    text-decoration: none; 
    display: flex; 
    align-items: center; 
    gap: 0.4rem; 
    transition: all 0.3s ease; 
  }

  .showcase-archive:hover { 
    gap: 0.7rem; 
  }

  .showcase-grid { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 1.5rem; 
  }

  .showcase-card {
    background: var(--bg-card2); 
    border: 1px solid var(--border);
    border-radius: var(--radius-lg); 
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .showcase-card:hover { 
    border-color: rgba(124,58,237,0.3); 
    transform: translateY(-4px);
  }

  .showcase-img { 
    aspect-ratio: 4/3; 
    overflow: hidden; 
    position: relative; 
    width: 100%;
    background: var(--bg-dark);
  }

  .showcase-img img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: transform 0.4s ease;
    display: block;
  }

  .showcase-card:hover .showcase-img img { 
    transform: scale(1.05); 
  }

  .showcase-body { 
    padding: 1.25rem; 
  }

  .showcase-meta { 
    display: flex; 
    align-items: center; 
    gap: 0.5rem; 
    margin-bottom: 0.6rem; 
    flex-wrap: wrap; 
  }

  .showcase-category { 
    font-size: 0.68rem; 
    font-weight: 700; 
    letter-spacing: 0.1em; 
    text-transform: uppercase; 
    color: var(--primary-light); 
  }

  .showcase-year { 
    font-size: 0.68rem; 
    color: var(--text-muted); 
  }

  .showcase-body h3 { 
    font-family: 'Poppins', sans-serif; 
    font-size: 1rem; 
    font-weight: 600; 
    margin-bottom: 0.4rem; 
  }

  .showcase-body p { 
    font-size: 0.83rem; 
    color: var(--text-secondary); 
    line-height: 1.6; 
  }

  /* ── CTA WITH GLASS EFFECT ── */
  .cta-section { 
    padding: 23px 2rem; 
  }

  .cta-inner { 
    max-width: 1200px; 
    margin: 0 auto; 
  }

  .cta-card {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    border-radius: var(--radius-xl);
    padding: 4rem 3.5rem;
    overflow: hidden;
    background: rgba(124, 58, 237, 0.06);
    border: 1px solid rgba(124, 58, 237, 0.12);
    box-shadow: 
      0 8px 32px rgba(124, 58, 237, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    text-align: center;
  }

  /* Glass effect with purple tint */
  .glass-effect {
    background: rgba(124, 58, 237, 0.06);
    border: 1px solid rgba(124, 58, 237, 0.12);
    box-shadow: 
      0 8px 32px rgba(124, 58, 237, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .cta-glow {
    position: absolute;
    top: -80px;
    right: -80px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: ctaGlow 6s ease-in-out infinite;
  }

  .cta-glow-2 {
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: ctaGlow 8s ease-in-out infinite reverse;
  }

  @keyframes ctaGlow {
    0%, 100% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(1.1) translate(20px, -20px); }
  }

  .cta-content {
    position: relative;
    z-index: 2;
  }

  .cta-eyebrow { 
    display: inline-block;
    font-size: 0.75rem; 
    font-weight: 700; 
    letter-spacing: 0.1em; 
    text-transform: uppercase; 
    color: rgba(124, 58, 237, 0.8);
    background: rgba(124, 58, 237, 0.12);
    padding: 0.3rem 1.2rem;
    border-radius: 20px;
    border: 1px solid rgba(124, 58, 237, 0.15);
    margin-bottom: 1rem; 
    position: relative;
    z-index: 1;
  }

  .cta-content h2 { 
    font-family: 'Poppins', sans-serif; 
    font-size: clamp(1.8rem, 3vw, 2.4rem); 
    font-weight: 700; 
    color: var(--text-primary); 
    margin-bottom: 1rem; 
    letter-spacing: -0.02em; 
    position: relative;
    z-index: 1;
  }

  .cta-content p { 
    font-size: 1rem; 
    color: var(--text-secondary); 
    max-width: 480px; 
    margin: 0 auto 2rem; 
    line-height: 1.7; 
    position: relative;
    z-index: 1;
  }

  .cta-actions { 
    display: flex; 
    justify-content: center; 
    gap: 1rem; 
    flex-wrap: wrap; 
    position: relative; 
    z-index: 1; 
  }

  .btn-glass-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 2rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.25);
  }

  .btn-glass-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(124, 58, 237, 0.35);
  }

  /* ── FOOTER ── */
  .footer {
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    padding: 2.5rem 2rem 2rem;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 1.5rem;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .footer-logo {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--text-primary);
  }

  .footer-logo span { 
    color: var(--primary-light); 
  }

  .footer-brand p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 320px;
  }

  .footer-location {
    font-size: 0.85rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .footer-location span { 
    font-size: 1.1rem; 
  }

  .footer-col h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
    letter-spacing: 0.02em;
  }

  .footer-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer-col ul a {
    font-size: 0.85rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-col ul a:hover {
    color: var(--primary-light);
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-copy {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .footer-legal {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .footer-legal a {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-legal a:hover {
    color: var(--text-secondary);
  }

  /* ── PAGE HERO ── */
  .page-hero {
    padding: 120px 2rem 60px;
    background: var(--bg-dark);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .page-hero::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .page-hero-inner {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .page-hero h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }

  .page-hero h1 span {
    color: var(--primary-light);
  }

  .page-hero p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto;
  }

  /* ── CAREERS PAGE ── */
  .careers-section {
    padding: 60px 2rem 80px;
  }

  .careers-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .career-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .career-card:hover {
    border-color: rgba(124,58,237,0.35);
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(124,58,237,0.08);
  }

  .career-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .career-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .career-card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .career-location {
    display: block;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .career-apply {
    display: inline-block;
    color: var(--primary-light);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .career-apply:hover {
    color: var(--primary-dark);
    transform: translateX(5px);
  }

  /* ── CONTACT PAGE ── */
  .contact-section {
    padding: 60px 2rem 80px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .contact-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .contact-icon {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .contact-item h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .contact-item p {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .contact-form {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2.5rem;
  }

  .contact-form h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    background: var(--bg-dark);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    transition: border-color 0.3s ease;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-light);
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: var(--text-muted);
  }

  .contact-form .btn-primary {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .case-grid { grid-template-columns: 1fr 1fr; }
    .careers-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .about-hero-inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .intro-grid { grid-template-columns: 1fr; gap: 2rem; }
    .future-grid { grid-template-columns: 1fr; gap: 2rem; }
    .about-stats { gap: 2rem; }
    .about-experience-badge { bottom: -15px; right: -10px; padding: 1rem 1.25rem; }
    .about-experience-badge span { font-size: 1.5rem; }
    .components-grid { grid-template-columns: 1fr 1fr; }
    .case-grid { grid-template-columns: 1fr 1fr; }
    .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    .page-hero { padding: 100px 1.5rem 50px; }
  }

  @media (max-width: 768px) {
    .case-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .about-hero { padding: 80px 1rem 40px; }
    .about-hero-content h1 { font-size: 2rem; }
    .about-stats { flex-direction: column; gap: 1rem; }
    .stat-number { font-size: 1.5rem; }
    .components-grid { grid-template-columns: 1fr; }
    .about-experience-badge { bottom: -10px; right: 10px; padding: 0.8rem 1rem; }
    .about-experience-badge span { font-size: 1.2rem; }
    .about-experience-badge p { font-size: 0.6rem; }
    .conclusion-card { padding: 2rem 1.25rem; }
    .conclusion-card h2 { font-size: 1.5rem; }
    .conclusion-card p { font-size: 0.9rem; }
    .conclusion-actions { flex-direction: column; align-items: center; }
    .future-quote { font-size: 1rem; }
    .case-content { padding: 1.25rem; }
    .case-content h3 { font-size: 1rem; }
    .case-meta span { font-size: 0.75rem; }
    .about-importance { padding: 40px 1rem; }
    .importance-content p { font-size: 0.95rem; }
    .component-number { font-size: 1.2rem; }
    .careers-grid { grid-template-columns: 1fr; }
    .contact-form { padding: 1.5rem; }
    .page-hero { padding: 80px 1rem 40px; }
    .page-hero h1 { font-size: 2rem; }
    .page-hero p { font-size: 0.95rem; }
  }

  @media (max-width: 480px) {
    .about-hero { padding: 60px 0.8rem 30px; }
    .about-hero-content h1 { font-size: 1.6rem; }
    .about-hero-content p { font-size: 0.85rem; }
    .about-badge { font-size: 0.6rem; padding: 0.2rem 0.6rem; }
    .component-card { padding: 1.5rem; }
    .component-card h3 { font-size: 1rem; }
    .future-tags span { font-size: 0.65rem; padding: 0.2rem 0.6rem; }
    .conclusion-card h2 { font-size: 1.2rem; }
    .conclusion-card p { font-size: 0.8rem; }
    .conclusion-actions .btn-white,
    .conclusion-actions .btn-outline-white { padding: 0.6rem 1.2rem; font-size: 0.8rem; }
    .case-tag { font-size: 0.6rem; padding: 0.15rem 0.6rem; }
    .page-hero { padding: 70px 0.8rem 30px; }
    .page-hero h1 { font-size: 1.6rem; }
    .career-card { padding: 1.5rem; }
    .contact-form { padding: 1rem; }
    .contact-form h3 { font-size: 1.1rem; }
    .contact-item { gap: 0.8rem; }
    .contact-icon { width: 40px; height: 40px; font-size: 1.2rem; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .showcase-grid { grid-template-columns: repeat(2, 1fr); }
    .comm-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .hero-inner, .about-grid { 
      grid-template-columns: 1fr; 
      gap: 2.5rem; 
    }
    .projects-grid { grid-template-columns: 1fr 1fr; }
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .footer-top {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .footer-brand { grid-column: 1 / -1; }
    .footer-brand p { max-width: 100%; }
    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
    .footer-legal {
      flex-wrap: wrap;
      justify-content: center;
    }
    .cta-card { padding: 2.5rem 2rem; }
    .showcase-header { 
      flex-direction: column; 
      gap: 1rem; 
      align-items: flex-start; 
    }
    .hero-visual { aspect-ratio: 16/9; }
    .about-image { aspect-ratio: 16/9; }
    .section { padding: 23px 1.5rem; }
    .hero { padding: 100px 1.5rem 60px; }
  }

  @media (max-width: 768px) {
    .showcase-grid { grid-template-columns: 1fr 1fr; }
    .comm-grid { grid-template-columns: 1fr 1fr; }
    .projects-grid { grid-template-columns: 1fr 1fr; }
    .section { padding: 23px 1.5rem; }
    .hero { padding: 90px 1.5rem 50px; }
    .section-header-centered { margin-bottom: 1.5rem; }
    .cta-card { padding: 2rem 1.5rem; }
  }

  @media (max-width: 600px) {
    .section { padding: 23px 1rem; }
    .hero { padding: 80px 1rem 40px; }
    .comm-grid { grid-template-columns: 1fr; }
    .projects-grid { grid-template-columns: 1fr; }
    .showcase-grid { grid-template-columns: 1fr; }
    .showcase-img { aspect-ratio: 16/9; }
    .hero-visual { aspect-ratio: 16/9; }
    .about-image { aspect-ratio: 16/9; }
    .cta-card { padding: 1.5rem 1.25rem; }
    .cta-card h2 { font-size: 1.5rem; }
    .cta-section { padding: 23px 1rem; }
    .about-grid { gap: 1.5rem; }
    .hero-inner { gap: 1.5rem; }
    .showcase-header { margin-bottom: 1.5rem; }
    .showcase-body { padding: 1rem; }
    .comm-card { padding: 1.25rem; }
    .project-card { padding: 1.25rem; }
    .footer { padding: 1.5rem 1rem 1.5rem; }
    .footer-top { 
      grid-template-columns: 1fr;
      gap: 1.5rem; 
      padding-bottom: 1.5rem; 
    }
    .hero h1 { font-size: 2.2rem; }
    .hero-desc { font-size: 0.95rem; }
    .section-title { font-size: 1.6rem; }
    .hero-badge { font-size: 0.65rem; padding: 0.2rem 0.7rem; }
    .hero-actions { gap: 0.5rem; }
    .btn-primary, .btn-ghost { padding: 0.6rem 1.2rem; font-size: 0.85rem; }
    .nav { padding: 0 1rem; height: 70px; }
    .nav-logo { font-size: 1.1rem; }
    .nav-cta { padding: 0.4rem 1rem; font-size: 0.8rem; }
    .theme-toggle { width: 38px; height: 38px; font-size: 1rem; }
  }

  @media (max-width: 480px) {
    .showcase-img { aspect-ratio: 4/3; }
    .showcase-body h3 { font-size: 0.9rem; }
    .showcase-body p { font-size: 0.78rem; }
    .showcase-category { font-size: 0.6rem; }
    .showcase-year { font-size: 0.6rem; }
    .hero h1 { font-size: 1.8rem; margin-bottom: 0.8rem; }
    .hero-desc { font-size: 0.85rem; margin-bottom: 1.5rem; }
    .section-title { font-size: 1.4rem; }
    .section-label { font-size: 0.65rem; }
    .section-sub { font-size: 0.85rem; }
    .nav { padding: 0 0.8rem; height: 65px; }
    .nav-logo { font-size: 1rem; }
    .nav-cta { padding: 0.35rem 0.8rem; font-size: 0.75rem; }
    .theme-toggle { width: 34px; height: 34px; font-size: 0.9rem; }
    .section { padding: 23px 0.8rem; }
    .hero { padding: 70px 0.8rem 30px; }
    .cta-card { padding: 1.25rem 1rem; }
    .cta-card h2 { font-size: 1.3rem; }
    .cta-card p { font-size: 0.85rem; margin-bottom: 1.5rem; }
    .btn-white { padding: 0.6rem 1.2rem; font-size: 0.85rem; }
    .btn-outline-white { padding: 0.6rem 1.2rem; font-size: 0.85rem; }
    .cta-section { padding: 23px 0.8rem; }
    .cta-eyebrow { font-size: 0.65rem; }
    .hero-badge { font-size: 0.55rem; padding: 0.15rem 0.5rem; margin-bottom: 0.8rem; }
    .comm-card h3 { font-size: 0.9rem; }
    .comm-card ul li { font-size: 0.6rem; padding: 0.15rem 0.4rem; }
    .project-card h4 { font-size: 0.85rem; }
    .project-card p { font-size: 0.75rem; }
    .project-icon { font-size: 1.8rem; margin-bottom: 0.5rem; }
    .footer-logo { font-size: 1.1rem; }
    .footer-brand p { font-size: 0.8rem; }
    .footer-col h4 { font-size: 0.8rem; }
    .footer-col ul a { font-size: 0.8rem; }
    .footer-copy { font-size: 0.7rem; }
    .footer-legal a { font-size: 0.7rem; }
    .footer-location { font-size: 0.75rem; }
    .showcase-archive { font-size: 0.7rem; }
  }
`;
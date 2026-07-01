import { useEffect } from "react";
import { PRIMARY_LIGHT } from "../styles/theme.js";
import { IMAGES } from "../utils/images.js";
import "../components/About.css";

export default function AboutPage() {
  useEffect(() => {
    document.querySelector('.about-hero-content')?.classList.add('page-loaded');
  }, []);

  return (
    <>
            {/* ── HERO SECTION ── */}
      <section className="about-hero">
        <div className="about-hero-bg-glow"></div>
        <div className="about-hero-inner">
          <div className="about-hero-content">
            <div className="about-badge">
              <span className="about-badge-dot" />
              About CodePage
            </div>
            <h1 className="about-hero-title">
              About Us <span>Revolution</span>
            </h1>
            <p className="about-hero-desc typewriter">
              Build the future of automation with a team that's redefining what's 
              possible. Your next big opportunity starts here.
            </p>
            <div className="about-hero-actions">
              <a href="#journey" className="btn-primary-hero">
                <span>Explore Our Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="about-hero-visual">
            {/* Animated Orbs - Reduced */}
            <div className="about-hero-orb"></div>
            <div className="about-hero-orb-2"></div>
            <div className="about-hero-orb-3"></div>

            {/* Animated Tech/Computer with Logos - Reduced Size */}
            <div className="about-hero-illustration">
              <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Orbital rings - Smaller */}
                <ellipse cx="225" cy="225" rx="200" ry="75" stroke="#7C3AED" strokeOpacity="0.06" strokeWidth="1.5" transform="rotate(-30 225 225)"/>
                <ellipse cx="225" cy="225" rx="200" ry="75" stroke="#7C3AED" strokeOpacity="0.06" strokeWidth="1.5" transform="rotate(30 225 225)"/>
                <ellipse cx="225" cy="225" rx="200" ry="75" stroke="#7C3AED" strokeOpacity="0.04" strokeWidth="1.5" transform="rotate(90 225 225)"/>
                
                {/* Laptop/Computer Screen - Smaller */}
                <rect x="135" y="115" width="180" height="135" rx="12" stroke="#7C3AED" strokeWidth="2.5" fill="rgba(124,58,237,0.04)"/>
                
                {/* Screen glow */}
                <rect x="148" y="128" width="154" height="105" rx="6" fill="#7C3AED" fillOpacity="0.04"/>
                
                {/* Screen lines - code/data */}
                <line x1="160" y1="145" x2="235" y2="145" stroke="#7C3AED" strokeOpacity="0.25" strokeWidth="2"/>
                <line x1="160" y1="162" x2="280" y2="162" stroke="#7C3AED" strokeOpacity="0.18" strokeWidth="2"/>
                <line x1="160" y1="179" x2="220" y2="179" stroke="#7C3AED" strokeOpacity="0.22" strokeWidth="2"/>
                <line x1="160" y1="196" x2="255" y2="196" stroke="#7C3AED" strokeOpacity="0.15" strokeWidth="2"/>
                <line x1="160" y1="213" x2="205" y2="213" stroke="#7C3AED" strokeOpacity="0.2" strokeWidth="2"/>
                
                {/* Cursor blink - Smaller */}
                <rect x="235" y="213" width="3" height="14" fill="#7C3AED" fillOpacity="0.6">
                  <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
                </rect>
                
                {/* Code brackets on screen */}
                <text x="160" y="141" fill="#7C3AED" opacity="0.3" fontSize="9" fontFamily="monospace">{'<'}</text>
                <text x="297" y="141" fill="#7C3AED" opacity="0.3" fontSize="9" fontFamily="monospace">{'>'}</text>
                
                {/* Laptop base/keyboard - Smaller */}
                <rect x="150" y="250" width="150" height="10" rx="3" stroke="#7C3AED" strokeWidth="2" fill="rgba(124,58,237,0.02)"/>
                
                {/* Keyboard keys - Smaller */}
                {[
                  165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275
                ].map((x, i) => (
                  <rect key={i} x={x} y="252" width="7" height="5" rx="1" fill="#7C3AED" fillOpacity="0.12"/>
                ))}
                
                {/* ── ANIMATED LOGOS SURROUNDING COMPUTER (Reduced Size) ── */}
                
                {/* Logo 1 - Top Left - NovaCorp */}
                <g>
                  <circle cx="100" cy="140" r="30" fill="rgba(124,58,237,0.06)" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.2"/>
                  <text x="82" y="146" fill="#7C3AED" opacity="0.7" fontSize="10" fontWeight="700" fontFamily="sans-serif">NovaCorp</text>
                  <circle cx="100" cy="140" r="4" fill="#7C3AED" fillOpacity="0.3">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Logo 2 - Top Right - Synthetica */}
                <g>
                  <circle cx="350" cy="140" r="30" fill="rgba(6,182,212,0.06)" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.2"/>
                  <text x="329" y="146" fill="#06B6D4" opacity="0.7" fontSize="9" fontWeight="700" fontFamily="sans-serif">Synthetica</text>
                  <circle cx="350" cy="140" r="4" fill="#06B6D4" fillOpacity="0.3">
                    <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Logo 3 - Left Middle - OrbitSys */}
                <g>
                  <circle cx="85" cy="235" r="28" fill="rgba(124,58,237,0.05)" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.15"/>
                  <text x="68" y="240" fill="#7C3AED" opacity="0.6" fontSize="9" fontWeight="700" fontFamily="sans-serif">OrbitSys</text>
                  <circle cx="85" cy="235" r="3" fill="#7C3AED" fillOpacity="0.25">
                    <animate attributeName="r" values="2.5;5;2.5" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Logo 4 - Right Middle - DataMesh */}
                <g>
                  <circle cx="365" cy="235" r="28" fill="rgba(6,182,212,0.05)" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.15"/>
                  <text x="347" y="240" fill="#06B6D4" opacity="0.6" fontSize="9" fontWeight="700" fontFamily="sans-serif">DataMesh</text>
                  <circle cx="365" cy="235" r="3" fill="#06B6D4" fillOpacity="0.25">
                    <animate attributeName="r" values="2.5;5;2.5" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.15;0.4;0.15" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Logo 5 - Bottom Left - QuantumIO */}
                <g>
                  <circle cx="110" cy="315" r="26" fill="rgba(124,58,237,0.04)" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.12"/>
                  <text x="93" y="320" fill="#7C3AED" opacity="0.5" fontSize="8" fontWeight="700" fontFamily="sans-serif">QuantumIO</text>
                  <circle cx="110" cy="315" r="3" fill="#7C3AED" fillOpacity="0.2">
                    <animate attributeName="r" values="2.5;5;2.5" dur="2.8s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.1;0.35;0.1" dur="2.8s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Logo 6 - Bottom Right - NeuraLink */}
                <g>
                  <circle cx="340" cy="315" r="26" fill="rgba(6,182,212,0.04)" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.12"/>
                  <text x="324" y="320" fill="#06B6D4" opacity="0.5" fontSize="8" fontWeight="700" fontFamily="sans-serif">NeuraLink</text>
                  <circle cx="340" cy="315" r="3" fill="#06B6D4" fillOpacity="0.2">
                    <animate attributeName="r" values="2.5;5;2.5" dur="3.2s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.1;0.35;0.1" dur="3.2s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Logo 7 - Top Center - CodePage (Main Brand - Smaller) */}
                <g>
                  <circle cx="225" cy="55" r="34" fill="rgba(124,58,237,0.08)" stroke="#7C3AED" strokeWidth="2" strokeOpacity="0.3"/>
                  <text x="197" y="62" fill="#7C3AED" opacity="0.8" fontSize="12" fontWeight="800" fontFamily="sans-serif">CodePage</text>
                  <circle cx="225" cy="55" r="5" fill="#7C3AED" fillOpacity="0.4">
                    <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Connection lines from laptop to logos - Smaller */}
                <line x1="135" y1="170" x2="105" y2="160" stroke="#7C3AED" strokeOpacity="0.08" strokeWidth="1"/>
                <line x1="315" y1="170" x2="340" y2="160" stroke="#7C3AED" strokeOpacity="0.08" strokeWidth="1"/>
                <line x1="135" y1="200" x2="95" y2="225" stroke="#7C3AED" strokeOpacity="0.06" strokeWidth="1"/>
                <line x1="315" y1="200" x2="355" y2="225" stroke="#7C3AED" strokeOpacity="0.06" strokeWidth="1"/>
                <line x1="225" y1="115" x2="225" y2="89" stroke="#7C3AED" strokeOpacity="0.1" strokeWidth="1"/>
                <line x1="165" y1="250" x2="120" y2="305" stroke="#7C3AED" strokeOpacity="0.06" strokeWidth="1"/>
                <line x1="285" y1="250" x2="330" y2="305" stroke="#7C3AED" strokeOpacity="0.06" strokeWidth="1"/>
                
                {/* Animated dots on connection lines */}
                <circle cx="120" cy="165" r="2.5" fill="#7C3AED" fillOpacity="0.25">
                  <animate attributeName="cx" values="120;110;120" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="fill-opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="330" cy="165" r="2.5" fill="#06B6D4" fillOpacity="0.25">
                  <animate attributeName="cx" values="330;340;330" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill-opacity" values="0.1;0.4;0.1" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="115" cy="212" r="2" fill="#7C3AED" fillOpacity="0.2">
                  <animate attributeName="cx" values="115;100;115" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="fill-opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="335" cy="212" r="2" fill="#06B6D4" fillOpacity="0.2">
                  <animate attributeName="cx" values="335;350;335" dur="4.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill-opacity" values="0.1;0.3;0.1" dur="4.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="225" cy="102" r="2.5" fill="#7C3AED" fillOpacity="0.25">
                  <animate attributeName="cy" values="102;94;102" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill-opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      
      {/* ── Stats Bar ── */}
      <div className="about-stats-bar">
        <div className="about-stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="about-stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
        <div className="about-stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Expert Team</span>
        </div>
        <div className="about-stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Years of Excellence</span>
        </div>
      </div>

      {/* ── Company / Building Banner ── */}
      <section className="about-building-banner">
        <img src={IMAGES.company} alt="CodePage Headquarters" className="building-bg" />
        <div className="building-overlay">
          <div className="section-label">Who We Are</div>
          <h2>
            Building the <span style={{ color: PRIMARY_LIGHT }}>Future of Automation</span>
          </h2>
          <p>
            At CodePage, we converge automation and cutting-edge technology, paving the way for
            a new era of innovation — delivering results that are efficient and sustainable.
          </p>
        </div>
      </section>

      {/* ── Mission · Vision · What · Why ── */}
      <section className="about-pillars">
        <div className="section-inner">
          <div className="pillars-grid">
            <div className="pillar-card animate-card-1">
              <div className="pillar-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver cutting-edge automation solutions that empower businesses to achieve
                operational excellence through intelligent design.
              </p>
            </div>
            <div className="pillar-card animate-card-2">
              <div className="pillar-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be a global leader in automation, recognized for innovation, quality, and
                lasting impact on the industrial landscape.
              </p>
            </div>
            <div className="pillar-card animate-card-3">
              <div className="pillar-icon">⚙️</div>
              <h3>What We Do</h3>
              <p>
                We design, develop, and deploy intelligent systems across industries with
                precision and passion, specializing in AI-driven robotics.
              </p>
            </div>
            <div className="pillar-card animate-card-4">
              <div className="pillar-icon">💡</div>
              <h3>Why We Exist</h3>
              <p>
                To solve complex challenges and build a smarter, sustainable future through
                ethical and advanced engineering practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="about-journey" id="journey">
        <div className="section-inner">
          <div className="section-header-centered animate-fade-in">
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">
              A Decade of <span style={{ color: PRIMARY_LIGHT }}>Progress</span>
            </h2>
          </div>
          <div className="journey-timeline">
            {[
              { year: "2014", title: "The Beginning", desc: "Founded with a vision to transform essential experiences through content." },
              { year: "2016", title: "Innovation First", desc: "Launched new ideas for emerging businesses worldwide." },
              { year: "2018", title: "Expanding Horizons", desc: "Achieved unparalleled scale and expanded into new global segments." },
              { year: "2021", title: "Global Footprint", desc: "Established presence across Europe and Asia markets." },
              { year: "2024+", title: "Future Forward", desc: "Pioneering AI solutions for smart cities and next-gen infrastructure." },
            ].map((item, i) => (
              <div className={`journey-item animate-card-${i + 1}`} key={item.year}>
                <div className="journey-dot">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="journey-year">{item.year}</div>
                <div className="journey-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="section-inner">
          <div className="section-header-centered animate-fade-in">
            <div className="section-label">Leadership</div>
            <h2 className="section-title">
              The Minds Behind <span style={{ color: PRIMARY_LIGHT }}>The Mission</span>
            </h2>
          </div>
          <div className="team-grid">
            {[
              { img: IMAGES.team1, name: "Manish Sharma", role: "Chief Executive Officer", desc: "20+ years of experience in industrial automation and strategic leadership." },
              { img: IMAGES.team2, name: "Rhea Verma", role: "Chief Technology Officer", desc: "Expert in IoT, AI, and scalable automation systems for global enterprises." },
              { img: IMAGES.team3, name: "Arjun Mehta", role: "Head of Operations", desc: "Specializes in process optimization and operational excellence across supply chains." },
              { img: IMAGES.team4, name: "Karan Rao", role: "Head of Innovation", desc: "Driving product innovation and next-gen engineering solutions for future tech stacks." },
            ].map((member, i) => (
              <div className={`team-card animate-card-${i + 1}`} key={member.name}>
                <div className="team-image">
                  <img src={member.img} alt={member.name} />
                  <div className="team-image-overlay" />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="team-title">{member.role}</p>
                  <p className="team-desc">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="about-technologies">
        <div className="section-inner">
          <div className="section-header-centered animate-fade-in">
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">
              The Futuristic <span style={{ color: PRIMARY_LIGHT }}>Technologies</span>
            </h2>
            <p className="section-sub">
              We invest in capabilities that aren't just cutting-edge today — they're the 
              foundations of what every serious enterprise will run on tomorrow.
            </p>
          </div>
          
          <div className="tech-grid">
            {[
              { icon: "🧠", title: "Machine Learning", desc: "Self-learning models that adapt to your unique data landscape." },
              { icon: "🔗", title: "Neural Networks", desc: "Deep learning architectures for complex pattern recognition." },
              { icon: "⚡", title: "Edge Computing", desc: "Compute at the source — no cloud latency, full control." },
              { icon: "🔒", title: "Blockchain", desc: "Decentralized security and transparency for enterprise systems." },
              { icon: "💠", title: "Quantum-Ready", desc: "Prepared for the next generation of computational power." },
              { icon: "📶", title: "5G Integration", desc: "Ultra-fast connectivity for real-time industrial applications." },
              { icon: "🔄", title: "Digital Twins", desc: "Virtual replicas for simulation, testing, and optimization." },
              { icon: "📡", title: "IoT Systems", desc: "Connected devices and sensors for smart industrial operations." },
            ].map((tech, i) => (
              <div className={`tech-card animate-card-${(i % 4) + 1}`} key={tech.title}>
                <div className="tech-card-icon">{tech.icon}</div>
                <h4>{tech.title}</h4>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="tech-showcase">
            <div className="tech-showcase-item">
              <div className="tech-showcase-image">
                <img src={IMAGES.tech1} alt="Technology showcase" />
              </div>
              <div className="tech-showcase-image">
                <img src={IMAGES.tech2} alt="Technology showcase" />
              </div>
            </div>
            <div className="tech-showcase-text">
              <h3>Built for the <span style={{ color: PRIMARY_LIGHT }}>Future</span></h3>
              <p>
                Our technology stack is carefully curated to solve the most complex 
                challenges in automation, AI, and industrial systems. We combine 
                cutting-edge tools with deep domain expertise to deliver solutions 
                that are both innovative and reliable.
              </p>
              <div className="tech-showcase-badge">
                <span>🚀 50+ Technologies</span>
                <span>⚡ 24/7 Support</span>
                <span>🔒 Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
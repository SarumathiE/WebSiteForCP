import { useEffect } from "react";
import "../components/Careers.css";

export default function Careers() {
  useEffect(() => {
    document.querySelector('.careers-hero-content')?.classList.add('page-loaded');
  }, []);

  // Smooth scroll to CTA section
  const scrollToCTA = (e) => {
    e.preventDefault();
    const element = document.getElementById('careers-cta');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      const section = document.querySelector('.careers-cta');
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Smooth scroll to openings section
  const scrollToOpenings = (e) => {
    e.preventDefault();
    const element = document.getElementById('openings');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      const section = document.querySelector('.careers-openings');
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="careers-hero">
        <div className="careers-hero-bg"></div>
        <div className="careers-hero-inner">
          <div className="careers-hero-content">
            <div className="careers-hero-badge">
              <span className="careers-hero-dot" />
              We're Hiring
            </div>
            <h1 className="careers-hero-title">
              Join the <span>Revolution</span>
            </h1>
            <p className="careers-hero-desc typewriter">
              Build the future of automation with a team that's redefining what's 
              possible. Your next big opportunity starts here.
            </p>
            <div className="careers-hero-actions">
              <button onClick={scrollToOpenings} className="btn-primary-careers">
                <span>Explore Roles</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <a href="#culture" className="btn-ghost-careers">Our Culture</a>
            </div>
            <div className="careers-hero-trust">
              <span>Trusted by</span>
              <div className="careers-hero-logos">
                <span>NovaCorp</span>
                <span>Synthetica</span>
                <span>OrbitSys</span>
                <span>DataMesh</span>
              </div>
            </div>
          </div>
          <div className="careers-hero-visual">
            <div className="careers-hero-orb"></div>
            <div className="careers-hero-orb-2"></div>
            <div className="careers-hero-orb-3"></div>
            <div className="careers-hero-stats-float">
              <div className="careers-float-item">
                <span className="careers-float-number">50+</span>
                <span className="careers-float-label">Team Members</span>
              </div>
              <div className="careers-float-item">
                <span className="careers-float-number">10+</span>
                <span className="careers-float-label">Years of Innovation</span>
              </div>
              <div className="careers-float-item">
                <span className="careers-float-number">98%</span>
                <span className="careers-float-label">Satisfaction</span>
              </div>
            </div>
            <div className="careers-hero-illustration">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="#7C3AED" strokeOpacity="0.1" strokeWidth="2"/>
                <circle cx="200" cy="200" r="130" stroke="#7C3AED" strokeOpacity="0.15" strokeWidth="2"/>
                <circle cx="200" cy="200" r="80" stroke="#7C3AED" strokeOpacity="0.2" strokeWidth="2"/>
                <circle cx="200" cy="200" r="40" fill="#7C3AED" fillOpacity="0.1" stroke="#7C3AED" strokeWidth="2"/>
                <path d="M200 80 L220 160 L300 180 L240 230 L260 310 L200 270 L140 310 L160 230 L100 180 L180 160 L200 80Z" fill="#7C3AED" fillOpacity="0.15" stroke="#7C3AED" strokeWidth="2"/>
                <circle cx="200" cy="200" r="12" fill="#7C3AED" fillOpacity="0.4"/>
                <circle cx="160" cy="160" r="6" fill="#7C3AED" fillOpacity="0.3"/>
                <circle cx="240" cy="160" r="6" fill="#7C3AED" fillOpacity="0.3"/>
                <circle cx="200" cy="240" r="6" fill="#7C3AED" fillOpacity="0.3"/>
                <circle cx="140" cy="220" r="4" fill="#7C3AED" fillOpacity="0.2"/>
                <circle cx="260" cy="220" r="4" fill="#7C3AED" fillOpacity="0.2"/>
                <circle cx="180" cy="120" r="4" fill="#7C3AED" fillOpacity="0.2"/>
                <circle cx="220" cy="120" r="4" fill="#7C3AED" fillOpacity="0.2"/>
                <circle cx="120" cy="180" r="3" fill="#7C3AED" fillOpacity="0.15"/>
                <circle cx="280" cy="180" r="3" fill="#7C3AED" fillOpacity="0.15"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US ── */}
      <section className="careers-why" id="culture">
        <div className="section-inner">
          <div className="careers-why-header">
            <span className="careers-why-label">Why CodePage</span>
            <h2>More Than a Job — <span>It's a Mission</span></h2>
            <p>We believe in creating an environment where innovation thrives and careers flourish.</p>
          </div>
          <div className="careers-why-grid">
            <div className="careers-why-card card-1">
              <div className="careers-why-icon">🚀</div>
              <h3>Innovation First</h3>
              <p>Work on cutting-edge projects that push the boundaries of technology and automation.</p>
              <span className="careers-why-tag">Cutting Edge</span>
            </div>
            <div className="careers-why-card card-2">
              <div className="careers-why-icon">📚</div>
              <h3>Learning & Growth</h3>
              <p>Continuous learning opportunities, certifications, and professional development programs.</p>
              <span className="careers-why-tag">Grow With Us</span>
            </div>
            <div className="careers-why-card card-3">
              <div className="careers-why-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Work on projects that impact industries across the globe and make a real difference.</p>
              <span className="careers-why-tag">Worldwide</span>
            </div>
            <div className="careers-why-card card-4">
              <div className="careers-why-icon">🤝</div>
              <h3>Collaborative Culture</h3>
              <p>Join a diverse, inclusive team where your ideas are valued and collaboration is key.</p>
              <span className="careers-why-tag">Team First</span>
            </div>
            <div className="careers-why-card card-5">
              <div className="careers-why-icon">🏠</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working hours, remote options, and a healthy work-life balance culture.</p>
              <span className="careers-why-tag">Flexible</span>
            </div>
            <div className="careers-why-card card-6">
              <div className="careers-why-icon">🏥</div>
              <h3>Benefits Package</h3>
              <p>Comprehensive health insurance, retirement plans, and employee wellness programs.</p>
              <span className="careers-why-tag">Wellness</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPENINGS ── */}
      <section className="careers-openings" id="openings">
        <div className="section-inner">
          <div className="careers-openings-header">
            <span className="careers-openings-label">Current Openings</span>
            <h2>Find Your <span>Perfect Role</span></h2>
            <p>Join us in building smarter systems for tomorrow.</p>
          </div>

          <div className="careers-openings-stats">
            <div className="careers-opening-stat">
              <span className="careers-opening-stat-number">9</span>
              <span className="careers-opening-stat-label">Open Positions</span>
            </div>
            <div className="careers-opening-stat">
              <span className="careers-opening-stat-number">4</span>
              <span className="careers-opening-stat-label">Departments</span>
            </div>
            <div className="careers-opening-stat">
              <span className="careers-opening-stat-number">1</span>
              <span className="careers-opening-stat-label">Location</span>
            </div>
          </div>

          <div className="careers-openings-grid">
            {[
              { 
                icon: "💻", 
                title: "Full Stack Developer", 
                dept: "Engineering",
                type: "Full Time",
                desc: "Build scalable web applications with React, Node.js, and cloud technologies.",
                location: "Chennai, India"
              },
              { 
                icon: "🤖", 
                title: "AI/ML Engineer", 
                dept: "AI/ML",
                type: "Full Time",
                desc: "Develop intelligent automation solutions using machine learning and AI.",
                location: "Chennai, India"
              },
              { 
                icon: "⚡", 
                title: "PLC Automation Engineer", 
                dept: "Engineering",
                type: "Full Time",
                desc: "Design and implement industrial automation systems for manufacturing.",
                location: "Chennai, India"
              },
              { 
                icon: "☁️", 
                title: "Cloud Architect", 
                dept: "Cloud",
                type: "Full Time",
                desc: "Design and manage cloud infrastructure for enterprise solutions.",
                location: "Chennai, India"
              },
              { 
                icon: "📊", 
                title: "Data Analyst", 
                dept: "Data",
                type: "Full Time",
                desc: "Transform industrial data into actionable insights and reports.",
                location: "Chennai, India"
              },
              { 
                icon: "🔒", 
                title: "Cybersecurity Specialist", 
                dept: "Engineering",
                type: "Full Time",
                desc: "Ensure security and compliance for industrial automation systems.",
                location: "Chennai, India"
              },
              { 
                icon: "🎨", 
                title: "UX/UI Designer", 
                dept: "Design",
                type: "Full Time",
                desc: "Design intuitive interfaces for industrial automation platforms.",
                location: "Chennai, India"
              },
              { 
                icon: "📱", 
                title: "Mobile Developer", 
                dept: "Engineering",
                type: "Full Time",
                desc: "Build mobile applications for industrial IoT and automation solutions.",
                location: "Chennai, India"
              },
              { 
                icon: "🔧", 
                title: "DevOps Engineer", 
                dept: "Cloud",
                type: "Full Time",
                desc: "Automate deployment pipelines and manage cloud infrastructure.",
                location: "Chennai, India"
              },
            ].map((job, i) => (
              <div key={i} className="careers-opening-card">
                <div className="careers-opening-card-top">
                  <div className="careers-opening-icon">{job.icon}</div>
                  <span className="careers-opening-type">{job.type}</span>
                </div>
                <h3>{job.title}</h3>
                <div className="careers-opening-meta">
                  <span className="careers-opening-dept">{job.dept}</span>
                  <span className="careers-opening-location">📍 {job.location}</span>
                </div>
                <p>{job.desc}</p>
                <button onClick={scrollToCTA} className="careers-opening-apply">
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="careers-process">
        <div className="section-inner">
          <div className="careers-process-header">
            <span className="careers-process-label">How We Hire</span>
            <h2>Your Journey <span>to CodePage</span></h2>
            <p>A transparent, straightforward hiring process designed to find the best talent.</p>
          </div>
          <div className="careers-process-flow">
            <div className="careers-process-step">
              <div className="careers-process-step-number">01</div>
              <div className="careers-process-step-content">
                <h4>Apply Online</h4>
                <p>Submit your application through our careers portal with your resume and cover letter.</p>
              </div>
              <div className="careers-process-step-line"></div>
            </div>
            <div className="careers-process-step">
              <div className="careers-process-step-number">02</div>
              <div className="careers-process-step-content">
                <h4>Initial Screening</h4>
                <p>Our HR team will review your application and schedule a brief introductory call.</p>
              </div>
              <div className="careers-process-step-line"></div>
            </div>
            <div className="careers-process-step">
              <div className="careers-process-step-number">03</div>
              <div className="careers-process-step-content">
                <h4>Technical Interview</h4>
                <p>Showcase your skills in a technical interview with our engineering team.</p>
              </div>
              <div className="careers-process-step-line"></div>
            </div>
            <div className="careers-process-step">
              <div className="careers-process-step-number">04</div>
              <div className="careers-process-step-content">
                <h4>Final Round</h4>
                <p>Meet with leadership to discuss your vision, goals, and how you can contribute.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS & BENEFITS ── */}
      <section className="careers-perks">
        <div className="section-inner">
          <div className="careers-perks-header">
            <span className="careers-perks-label">Perks & Benefits</span>
            <h2>We've Got You <span>Covered</span></h2>
            <p>Everything you need to thrive — both professionally and personally.</p>
          </div>
          <div className="careers-perks-grid">
            <div className="careers-perks-item perks-item-1">
              <div className="careers-perks-icon">🏥</div>
              <div className="careers-perks-info">
                <h4>Health Insurance</h4>
                <p>Comprehensive health coverage for you and your family.</p>
              </div>
              <span className="careers-perks-badge">Premium</span>
            </div>
            <div className="careers-perks-item perks-item-2">
              <div className="careers-perks-icon">💰</div>
              <div className="careers-perks-info">
                <h4>Competitive Salary</h4>
                <p>Above-market compensation packages with annual reviews.</p>
              </div>
              <span className="careers-perks-badge">Top Tier</span>
            </div>
            <div className="careers-perks-item perks-item-3">
              <div className="careers-perks-icon">🏖️</div>
              <div className="careers-perks-info">
                <h4>Paid Time Off</h4>
                <p>Generous vacation days and flexible leave policies.</p>
              </div>
              <span className="careers-perks-badge">Unlimited</span>
            </div>
            <div className="careers-perks-item perks-item-4">
              <div className="careers-perks-icon">📈</div>
              <div className="careers-perks-info">
                <h4>Stock Options</h4>
                <p>Equity packages that grow with the company's success.</p>
              </div>
              <span className="careers-perks-badge">Equity</span>
            </div>
            <div className="careers-perks-item perks-item-5">
              <div className="careers-perks-icon">🎓</div>
              <div className="careers-perks-info">
                <h4>Learning Budget</h4>
                <p>Annual budget for courses, conferences, and certifications.</p>
              </div>
              <span className="careers-perks-badge">₹50K/yr</span>
            </div>
            <div className="careers-perks-item perks-item-6">
              <div className="careers-perks-icon">🏠</div>
              <div className="careers-perks-info">
                <h4>Remote Work</h4>
                <p>Flexible remote work options with home office setup support.</p>
              </div>
              <span className="careers-perks-badge">Flexible</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="careers-cta" id="careers-cta">
        <div className="section-inner">
          <div className="careers-cta-card glass-effect">
            <div className="careers-cta-glow"></div>
            <div className="careers-cta-glow-2"></div>
            <div className="careers-cta-content">
              <span className="careers-cta-badge">Join Us</span>
              <h2>Ready to <span>Make an Impact?</span></h2>
              <p>Join us in building the future of automation. Your journey starts here.</p>
              <div className="careers-cta-actions">
                <button onClick={scrollToOpenings} className="btn-glass-primary">View Openings</button>
                <a href="#" className="btn-glass-secondary">Contact HR</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
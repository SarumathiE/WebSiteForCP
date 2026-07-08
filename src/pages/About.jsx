import { useState, useEffect } from "react";
import { PRIMARY_LIGHT } from "../styles/theme.js";
import { IMAGES } from "../utils/images.js";
import { api, getImageUrl } from "../utils/api";
import "../pages/About.css";

export default function AboutPage() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    projects: 0,
    satisfaction: 98,
    team: 0,
    years: 10
  });

  useEffect(() => {
    document.querySelector('.about-hero-content')?.classList.add('page-loaded');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // ✅ Fetch leadership from database (via API)
      let teamData = [];
      try {
        const response = await api.getTeam();
        console.log('📥 Raw API Response:', response);
        
        if (Array.isArray(response)) {
          teamData = response;
        } else {
          teamData = [];
        }
        
        console.log('📥 Leadership from database:', teamData);
      } catch (e) {
        console.warn('Could not fetch leadership:', e);
        teamData = [];
      }

      // Fetch projects for stats
      let projects = [];
      try {
        const projectsResponse = await api.getProjects();
        if (Array.isArray(projectsResponse)) {
          projects = projectsResponse;
        } else {
          projects = [];
        }
      } catch (e) {
        console.warn('Could not fetch projects:', e);
        projects = [];
      }
      
      // Update stats
      setStats({
        projects: projects.length || 0,
        satisfaction: 98,
        team: teamData.length || 0,
        years: 10
      });

      setTeam(teamData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching about data:', error);
      setError('Failed to load about page data');
      setLoading(false);
    }
  };

  // ✅ Fallback team data (if database has no data)
  const fallbackTeam = [
    { 
      id: 1,
      name: "Manish Sharma", 
      role: "Chief Executive Officer", 
      bio: "20+ years of experience in industrial automation and strategic leadership.",
      image: IMAGES.team1 
    },
    { 
      id: 2,
      name: "Rhea Verma", 
      role: "Chief Technology Officer", 
      bio: "Expert in IoT, AI, and scalable automation systems for global enterprises.",
      image: IMAGES.team2 
    },
    { 
      id: 3,
      name: "Arjun Mehta", 
      role: "Head of Operations", 
      bio: "Specializes in process optimization and operational excellence across supply chains.",
      image: IMAGES.team3 
    },
    { 
      id: 4,
      name: "Karan Rao", 
      role: "Head of Innovation", 
      bio: "Driving product innovation and next-gen engineering solutions for future tech stacks.",
      image: IMAGES.team4 
    }
  ];

  // ✅ Display team from database, or fallback
  const displayTeam = team.length > 0 ? team : fallbackTeam;

  if (loading) {
    return (
      <div className="about-loading">
        <div className="loading-spinner"></div>
        <p>Loading about page...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-error">
        <div className="error-icon">⚠️</div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchData} className="retry-btn">Try Again</button>
      </div>
    );
  }

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="about-hero">
        <div className="about-hero-bg-glow"></div>
        <div className="about-hero-inner" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div className="about-hero-content" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="about-badge" style={{ justifyContent: 'center' }}>
              <span className="about-badge-dot" />
              About CodePage
            </div>
            <h1 className="about-hero-title">
              About Us <span>Revolution</span>
            </h1>
            <p className="about-hero-desc typewriter" style={{ textAlign: 'center' }}>
              Build the future of automation with a team that's redefining what's 
              possible. Your next big opportunity starts here.
            </p>
            <div className="about-hero-actions" style={{ justifyContent: 'center' }}>
              <a href="#journey" className="btn-primary-hero">
                <span>Explore Our Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="about-stats-bar">
        <div className="about-stat-item">
          <span className="stat-number">{stats.projects}+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="about-stat-item">
          <span className="stat-number">{stats.satisfaction}%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
        <div className="about-stat-item">
          <span className="stat-number">{stats.team}+</span>
          <span className="stat-label">Expert Team</span>
        </div>
        <div className="about-stat-item">
          <span className="stat-number">{stats.years}+</span>
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

      {/* ── LEADERSHIP TEAM (From Database) ── */}
      <section className="about-team">
        <div className="section-inner">
          <div className="section-header-centered animate-fade-in">
            <div className="section-label">Leadership</div>
            <h2 className="section-title">
              The Minds Behind <span style={{ color: PRIMARY_LIGHT }}>The Mission</span>
            </h2>
            <p className="section-sub" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              Meet the visionary leaders driving CodePage's mission to revolutionize 
              automation and technology across the globe.
            </p>
          </div>
          <div className="team-grid">
            {displayTeam.map((member, index) => {
              // Get data from API or fallback
              const name = member.name || member.FullName || member.fullName || 'Team Member';
              const role = member.role || member.Position || member.position || 'Team Member';
              const bio = member.bio || member.Bio || member.description || 'Team member at CodePage';
              
              // Get image from API or use fallback
              let imageUrl = member.imageUrl || member.fullImageUrl || member.image;
              
              // If no image URL, use the getImageUrl helper
              if (!imageUrl) {
                imageUrl = getImageUrl(member.image || member.ImageUrl || member.imageUrl || member.img);
              }
              
              // If still no image, use fallback
              if (!imageUrl) {
                imageUrl = IMAGES.team1;
              }

              const key = member.id || member.MemberID || member._id || index;

              console.log(`👤 Team Member ${index + 1}:`, {
                name,
                role,
                bio,
                imageUrl,
                rawData: member
              });

              return (
                <div className={`team-card animate-card-${(index % 4) + 1}`} key={key}>
                  <div className="team-image">
                    <img 
                      src={imageUrl} 
                      alt={name || 'Team Member'} 
                      onError={(e) => {
                        // Fallback to default image if loading fails
                        e.target.onerror = null;
                        e.target.src = IMAGES.team1;
                        console.warn(`Failed to load image for ${name}, using fallback`);
                      }}
                      loading="lazy"
                    />
                    <div className="team-image-overlay" />
                  </div>
                  <div className="team-info" style={{ textAlign: 'center' }}>
                    <h4>{name || 'Team Member'}</h4>
                    <p className="team-title">{role || 'Team Member'}</p>
                    <p className="team-desc">{bio || 'Team member at CodePage'}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Show database status */}
          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
            {team.length > 0 ? (
              <span>✅ Showing {team.length} team members from database</span>
            ) : (
              <span>ℹ️ Showing fallback team data (no database entries found)</span>
            )}
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
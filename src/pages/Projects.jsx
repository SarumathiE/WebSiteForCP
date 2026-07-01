import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Projects.css";

export default function Projects() {
  useEffect(() => {
    document.querySelector('.projects-hero-content')?.classList.add('page-loaded');
  }, []);

  // All 8 projects with correct IDs (1-8) matching dummyProjects
  const allProjects = [
    { 
      id: 1, 
      icon: "🏭", 
      title: "Smart Factory Automation", 
      desc: "End-to-end automation solution for a Fortune 500 manufacturing plant, increasing productivity by 45%.",
      category: "Industrial Automation",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 2, 
      icon: "🤖", 
      title: "Predictive Maintenance AI", 
      desc: "AI-powered predictive maintenance system that reduced equipment downtime by 60%.",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 3, 
      icon: "☁️", 
      title: "Enterprise Cloud Migration", 
      desc: "Seamless migration of legacy systems to cloud infrastructure with zero downtime.",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 4, 
      icon: "📊", 
      title: "AI Robotics Platform", 
      desc: "Intelligent robotic systems for manufacturing and logistics operations.",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 5, 
      icon: "🔗", 
      title: "Industrial IoT Platform", 
      desc: "Connected device management and monitoring for smart industrial operations.",
      category: "IoT & Edge",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 6, 
      icon: "⚡", 
      title: "Edge Computing Solution", 
      desc: "Low-latency processing for real-time industrial applications.",
      category: "IoT & Edge",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 7, 
      icon: "📱", 
      title: "Mobile Field Operations", 
      desc: "Cross-platform mobile solutions for field operations and remote asset management.",
      category: "Mobile Solutions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center"
    },
    { 
      id: 8, 
      icon: "🔒", 
      title: "Industrial Cybersecurity", 
      desc: "Enterprise-grade security solutions for industrial control systems.",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
    }
  ];

  // Featured Projects (IDs 1, 2, 3)
  const featuredProjects = [
    {
      id: 1,
      category: "Industrial Automation",
      title: "Smart Factory Automation",
      desc: "End-to-end automation solution for a Fortune 500 manufacturing plant, increasing productivity by 45%.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop&crop=center",
      tags: ["PLC", "IoT", "Edge Computing"],
      results: "45% Productivity Increase",
      icon: "🏭"
    },
    {
      id: 2,
      category: "AI & Machine Learning",
      title: "Predictive Maintenance AI",
      desc: "AI-powered predictive maintenance system that reduced equipment downtime by 60%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tags: ["AI", "ML", "Analytics"],
      results: "60% Downtime Reduction",
      icon: "🤖"
    },
    {
      id: 3,
      category: "Cloud Solutions",
      title: "Enterprise Cloud Migration",
      desc: "Seamless migration of legacy systems to cloud infrastructure with zero downtime.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
      tags: ["AWS", "Azure", "DevOps"],
      results: "99.99% Uptime",
      icon: "☁️"
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="projects-hero">
        <div className="projects-hero-bg"></div>
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-inner">
          <div className="projects-hero-content">
            <div className="projects-hero-badge">
              <span className="projects-hero-dot" />
              Our Portfolio
            </div>
            <h1 className="projects-hero-title">
              Engineering <span>Excellence</span>
            </h1>
            <p className="projects-hero-desc typewriter">
              Discover our diverse portfolio of automation and technology solutions 
              that are transforming industries and driving innovation across the globe.
            </p>
            <div className="projects-hero-stats">
              <div className="projects-hero-stat">
                <span className="projects-stat-number">500+</span>
                <span className="projects-stat-label">Projects Delivered</span>
              </div>
              <div className="projects-hero-stat">
                <span className="projects-stat-number">98%</span>
                <span className="projects-stat-label">Success Rate</span>
              </div>
              <div className="projects-hero-stat">
                <span className="projects-stat-number">50+</span>
                <span className="projects-stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="projects-stats-counter">
        <div className="section-inner">
          <div className="projects-counter-grid">
            <div className="projects-counter-item">
              <span className="projects-counter-number">15+</span>
              <span className="projects-counter-label">Countries Served</span>
            </div>
            <div className="projects-counter-item">
              <span className="projects-counter-number">200+</span>
              <span className="projects-counter-label">Team Members</span>
            </div>
            <div className="projects-counter-item">
              <span className="projects-counter-number">10+</span>
              <span className="projects-counter-label">Years of Innovation</span>
            </div>
            <div className="projects-counter-item">
              <span className="projects-counter-number">100%</span>
              <span className="projects-counter-label">Client Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories / Tabs */}
      <section className="projects-categories">
        <div className="section-inner">
          <div className="projects-categories-header">
            <span className="projects-categories-label">Browse By Category</span>
            <div className="projects-tabs">
              <button className="projects-tab active">All</button>
              <button className="projects-tab">Industrial Automation</button>
              <button className="projects-tab">AI & Machine Learning</button>
              <button className="projects-tab">Cloud Solutions</button>
              <button className="projects-tab">IoT & Edge</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-featured">
        <div className="section-inner">
          <div className="projects-featured-header">
            <span className="projects-featured-label">Featured Projects</span>
            <h2>Our <span>Latest Work</span></h2>
            <p>Explore our most recent and impactful projects across various industries.</p>
          </div>

          <div className="projects-featured-grid">
            {featuredProjects.map((project, i) => (
              <div key={project.id} className={`projects-featured-card animate-card-${i + 1}`}>
                <div className="projects-featured-image">
                  <img src={project.image} alt={project.title} />
                  <span className="projects-featured-category">{project.category}</span>
                  <div className="projects-featured-image-overlay">
                    <span className="projects-featured-icon">{project.icon}</span>
                  </div>
                </div>
                <div className="projects-featured-body">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="projects-featured-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects-featured-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="projects-featured-result">
                    <span>📊</span>
                    <span>{project.results}</span>
                  </div>
                  <Link to={`/projects/${project.id}`} className="projects-featured-link">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid - 8 Projects */}
      <section className="projects-grid-section">
        <div className="section-inner">
          <div className="projects-grid-header">
            <span className="projects-grid-label">All Projects</span>
            <h2>Our <span>Projects</span></h2>
            <p>Explore our complete portfolio of automation and technology solutions.</p>
          </div>

          <div className="projects-grid-all">
            {allProjects.map((project, i) => (
              <div key={project.id} className={`projects-grid-card animate-card-${(i % 4) + 1}`}>
                <div className="projects-grid-image">
                  <img src={project.image} alt={project.title} />
                  <div className="projects-grid-overlay">
                    <span className="projects-grid-icon">{project.icon}</span>
                  </div>
                </div>
                <div className="projects-grid-body">
                  <span className="projects-grid-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <Link to={`/projects/${project.id}`} className="projects-grid-link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="projects-case-studies">
        <div className="section-inner">
          <div className="projects-case-header">
            <span className="projects-case-label">Case Studies</span>
            <h2>Success <span>Stories</span></h2>
            <p>Real-world examples of how we've helped businesses transform.</p>
          </div>

          <div className="projects-case-grid">
            <div className={`projects-case-card animate-card-1`}>
              <div className="projects-case-number">01</div>
              <div className="projects-case-icon">🏗️</div>
              <h3>Smart Manufacturing</h3>
              <p>
                Implemented end-to-end automation for a leading automotive manufacturer, 
                resulting in 35% cost reduction and 40% faster production cycles.
              </p>
              <div className="projects-case-meta">
                <span>🏭 Manufacturing</span>
                <span>📈 35% Cost Reduction</span>
              </div>
              <a href="#" className="projects-case-link">Read Case Study →</a>
            </div>
            <div className={`projects-case-card animate-card-2`}>
              <div className="projects-case-number">02</div>
              <div className="projects-case-icon">📊</div>
              <h3>AI-Powered Analytics</h3>
              <p>
                Developed a real-time analytics platform for a global logistics company, 
                improving supply chain visibility and reducing delivery delays by 25%.
              </p>
              <div className="projects-case-meta">
                <span>📦 Logistics</span>
                <span>📉 25% Delivery Improvement</span>
              </div>
              <a href="#" className="projects-case-link">Read Case Study →</a>
            </div>
            <div className={`projects-case-card animate-card-3`}>
              <div className="projects-case-number">03</div>
              <div className="projects-case-icon">☁️</div>
              <h3>Cloud Migration</h3>
              <p>
                Led a complete cloud migration for a retail giant, enabling seamless 
                scalability and reducing infrastructure costs by 30%.
              </p>
              <div className="projects-case-meta">
                <span>🛍️ Retail</span>
                <span>💰 30% Cost Savings</span>
              </div>
              <a href="#" className="projects-case-link">Read Case Study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="projects-industry">
        <div className="section-inner">
          <div className="projects-industry-header">
            <span className="projects-industry-label">Industry Solutions</span>
            <h2>Our <span>Expertise</span></h2>
            <p>Industry-specific solutions tailored to your unique needs.</p>
          </div>

          <div className="projects-industry-grid">
            <div className="projects-industry-card animate-card-1">
              <div className="projects-industry-icon">⚙️</div>
              <h3>Manufacturing</h3>
              <p>Automation, robotics, and smart factory solutions for modern manufacturing.</p>
              <ul className="projects-industry-list">
                <li>PLC & SCADA Systems</li>
                <li>Robotic Automation</li>
                <li>Quality Control Systems</li>
              </ul>
            </div>
            <div className="projects-industry-card animate-card-2">
              <div className="projects-industry-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>AI-powered diagnostics, patient monitoring, and healthcare automation.</p>
              <ul className="projects-industry-list">
                <li>Medical Imaging AI</li>
                <li>Patient Monitoring</li>
                <li>Healthcare Analytics</li>
              </ul>
            </div>
            <div className="projects-industry-card animate-card-3">
              <div className="projects-industry-icon">🏗️</div>
              <h3>Construction</h3>
              <p>Smart site monitoring, equipment tracking, and project management.</p>
              <ul className="projects-industry-list">
                <li>Site Monitoring Systems</li>
                <li>Equipment Tracking</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="projects-industry-card animate-card-4">
              <div className="projects-industry-icon">🛒</div>
              <h3>Retail</h3>
              <p>Inventory management, customer analytics, and e-commerce solutions.</p>
              <ul className="projects-industry-list">
                <li>Inventory Optimization</li>
                <li>Customer Analytics</li>
                <li>E-Commerce Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="projects-testimonials">
        <div className="section-inner">
          <div className="projects-testimonials-header">
            <span className="projects-testimonials-label">Client Testimonials</span>
            <h2>What Our <span>Clients Say</span></h2>
            <p>Feedback from the organizations we've partnered with.</p>
          </div>

          <div className="projects-testimonials-grid">
            <div className="projects-testimonial animate-card-1">
              <div className="projects-testimonial-quote">"</div>
              <p>
                CodePage transformed our manufacturing operations. Their automation 
                solutions increased our productivity by 45% and reduced downtime 
                significantly.
              </p>
              <div className="projects-testimonial-author">
                <div className="projects-testimonial-avatar">JD</div>
                <div>
                  <h4>John Doe</h4>
                  <span>Operations Director, TechCorp</span>
                </div>
              </div>
            </div>
            <div className="projects-testimonial animate-card-2">
              <div className="projects-testimonial-quote">"</div>
              <p>
                The AI-powered analytics platform they developed for us revolutionized 
                our supply chain management. We've seen a 25% improvement in delivery 
                times.
              </p>
              <div className="projects-testimonial-author">
                <div className="projects-testimonial-avatar">JR</div>
                <div>
                  <h4>Jane Roe</h4>
                  <span>Supply Chain Head, LogiCo</span>
                </div>
              </div>
            </div>
            <div className="projects-testimonial animate-card-3">
              <div className="projects-testimonial-quote">"</div>
              <p>
                Their cloud migration expertise was exceptional. Zero downtime and 
                30% cost savings - exactly what we needed for our enterprise 
                transformation.
              </p>
              <div className="projects-testimonial-author">
                <div className="projects-testimonial-avatar">MS</div>
                <div>
                  <h4>Mike Smith</h4>
                  <span>CTO, RetailGiant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
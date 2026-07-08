import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import "../pages/Projects.css";

// ── IMAGE URL HELPER ──
const getImageUrl = (imagePath) => {
  if (!imagePath) return '/images/default-project.jpg';
  
  // If it's already a full URL
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's a data URL (base64)
  if (imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // If it's a relative path from uploads
  if (imagePath.startsWith('/uploads/')) {
    return `http://localhost:5000${imagePath}`;
  }
  
  if (imagePath.startsWith('uploads/')) {
    return `http://localhost:5000/${imagePath}`;
  }
  
  // If it's just a filename
  if (!imagePath.includes('/')) {
    return `http://localhost:5000/uploads/${imagePath}`;
  }
  
  // If it's a relative path
  return `http://localhost:5000/${imagePath}`;
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState(['all']);

  useEffect(() => {
    document.querySelector('.projects-hero-content')?.classList.add('page-loaded');
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const [allProjects, featured] = await Promise.all([
        api.getProjects(),
        api.getFeaturedProjects()
      ]);
      
      // ✅ Ensure both are arrays
      const projectsArray = Array.isArray(allProjects) ? allProjects : [];
      const featuredArray = Array.isArray(featured) ? featured : [];
      
      // Process projects to ensure consistent field names
      const processedProjects = projectsArray.map(p => ({
        ...p,
        id: p.ProjectID || p.id,
        title: p.Title || p.title || '',
        category: p.Category || p.category || '',
        description: p.Description || p.description || '',
        client: p.Client || p.client || '',
        imageUrl: p.ImageUrl || p.imageUrl || '',
        results: p.Results || p.results || '',
        technologies: p.Technologies || p.technologies || ''
      }));
      
      const processedFeatured = featuredArray.map(p => ({
        ...p,
        id: p.ProjectID || p.id,
        title: p.Title || p.title || '',
        category: p.Category || p.category || '',
        description: p.Description || p.description || '',
        client: p.Client || p.client || '',
        imageUrl: p.ImageUrl || p.imageUrl || '',
        results: p.Results || p.results || '',
        technologies: p.Technologies || p.technologies || ''
      }));
      
      setProjects(processedProjects);
      setFeaturedProjects(processedFeatured.length > 0 ? processedFeatured : processedProjects.slice(0, 3));
      
      // Extract unique categories
      const uniqueCategories = ['all', ...new Set(processedProjects.map(p => p.category).filter(Boolean))];
      setCategories(uniqueCategories);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Hero Stats
  const stats = {
    total: projects.length,
    clients: new Set(projects.map(p => p.client).filter(Boolean)).size,
    categories: new Set(projects.map(p => p.category).filter(Boolean)).size
  };

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero Section ── */}
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
                <span className="projects-stat-number">{stats.total}+</span>
                <span className="projects-stat-label">Projects</span>
              </div>
              <div className="projects-hero-stat">
                <span className="projects-stat-number">{stats.clients}+</span>
                <span className="projects-stat-label">Happy Clients</span>
              </div>
              <div className="projects-hero-stat">
                <span className="projects-stat-number">{stats.categories}</span>
                <span className="projects-stat-label">Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter Section ── */}
      <section className="projects-stats-counter">
        <div className="section-inner">
          <div className="projects-counter-grid">
            <div className="projects-counter-item">
              <span className="projects-counter-number">{projects.length}</span>
              <span className="projects-counter-label">Total Projects</span>
            </div>
            <div className="projects-counter-item">
              <span className="projects-counter-number">{featuredProjects.length}</span>
              <span className="projects-counter-label">Featured Projects</span>
            </div>
            <div className="projects-counter-item">
              <span className="projects-counter-number">{new Set(projects.map(p => p.category).filter(Boolean)).size}</span>
              <span className="projects-counter-label">Categories</span>
            </div>
            <div className="projects-counter-item">
              <span className="projects-counter-number">{new Set(projects.map(p => p.client).filter(Boolean)).size}+</span>
              <span className="projects-counter-label">Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Categories / Tabs ── */}
      <section className="projects-categories">
        <div className="section-inner">
          <div className="projects-categories-header">
            <span className="projects-categories-label">Browse By Category</span>
            <div className="projects-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`projects-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="projects-featured">
        <div className="section-inner">
          <div className="projects-featured-header">
            <span className="projects-featured-label">Featured Projects</span>
            <h2>Our <span>Latest Work</span></h2>
            <p>Explore our most recent and impactful projects across various industries.</p>
          </div>

          <div className="projects-featured-grid">
            {featuredProjects.slice(0, 3).map((project, i) => {
              const imageUrl = getImageUrl(project.imageUrl);
              console.log(`🖼️ Featured Project ${i+1}:`, { 
                title: project.title, 
                imageUrl: project.imageUrl,
                fullUrl: imageUrl
              });
              
              return (
                <div key={project.id || i} className={`projects-featured-card animate-card-${i + 1}`}>
                  <div className="projects-featured-image">
                    <img 
                      src={imageUrl} 
                      alt={project.title || 'Project'} 
                      onError={(e) => {
                        console.error(`Failed to load image: ${imageUrl}`);
                        e.target.onerror = null;
                        e.target.src = '/images/default-project.jpg';
                      }}
                    />
                    <span className="projects-featured-category">{project.category || 'Project'}</span>
                    <div className="projects-featured-image-overlay">
                      <span className="projects-featured-icon">📁</span>
                    </div>
                  </div>
                  <div className="projects-featured-body">
                    <h3>{project.title || 'Untitled'}</h3>
                    <p>{project.description ? project.description.substring(0, 100) + '...' : 'No description available.'}</p>
                    <div className="projects-featured-tags">
                      {project.technologies ? 
                        (typeof project.technologies === 'string' 
                          ? project.technologies.split(',').slice(0, 3) 
                          : project.technologies.slice(0, 3)
                        ).map((tag) => (
                          <span key={tag} className="projects-featured-tag">{tag.trim()}</span>
                        )) : 
                        <span className="projects-featured-tag">Technology</span>
                      }
                    </div>
                    <div className="projects-featured-result">
                      <span>📊</span>
                      <span>{project.results || 'Completed'}</span>
                    </div>
                    <Link to={`/projects/${project.id}`} className="projects-featured-link">
                      View Project →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {featuredProjects.length === 0 && (
            <div className="no-featured">
              <p>No featured projects available.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── All Projects Grid ── */}
      <section className="projects-grid-section">
        <div className="section-inner">
          <div className="projects-grid-header">
            <span className="projects-grid-label">All Projects</span>
            <h2>Our <span>Projects</span></h2>
            <p>Explore our complete portfolio of automation and technology solutions.</p>
          </div>

          <div className="projects-grid-all">
            {filteredProjects.map((project, i) => {
              const imageUrl = getImageUrl(project.imageUrl);
              
              return (
                <div key={project.id || i} className={`projects-grid-card animate-card-${(i % 4) + 1}`}>
                  <div className="projects-grid-image">
                    <img 
                      src={imageUrl} 
                      alt={project.title || 'Project'} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/default-project.jpg';
                      }}
                    />
                    <div className="projects-grid-overlay">
                      <span className="projects-grid-icon">📁</span>
                    </div>
                  </div>
                  <div className="projects-grid-body">
                    <span className="projects-grid-category">{project.category || 'General'}</span>
                    <h3>{project.title || 'Untitled'}</h3>
                    <p>{project.description ? project.description.substring(0, 80) + '...' : 'No description available.'}</p>
                    <Link to={`/projects/${project.id}`} className="projects-grid-link">
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>{selectedCategory === 'all' ? 'No projects available.' : `No projects found in "${selectedCategory}" category.`}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Case Studies ── */}
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

      {/* ── Industry Solutions ── */}
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

      {/* ── Testimonials ── */}
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
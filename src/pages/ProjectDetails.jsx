import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../utils/api';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getProjectById(id);
      
      if (data) {
        setProject(data);
        // Set active image to 0 when project changes
        setActiveImage(0);
      } else {
        setError('Project not found');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching project:', error);
      setError('Failed to load project details');
      setLoading(false);
    }
  };

  // Get images array - handle different possible formats
  const getImages = () => {
    if (!project) return [];
    
    // If project has Images array
    if (project.Images && Array.isArray(project.Images) && project.Images.length > 0) {
      return project.Images;
    }
    
    // If project has Gallery array
    if (project.Gallery && Array.isArray(project.Gallery) && project.Gallery.length > 0) {
      return project.Gallery;
    }
    
    // If project has single image
    if (project.ImageUrl) {
      return [project.ImageUrl];
    }
    
    // Default fallback
    return ['/images/default-project.jpg'];
  };

  const images = getImages();

  // Get technologies - handle different formats
  const getTechnologies = () => {
    if (!project) return [];
    
    if (project.Technologies && typeof project.Technologies === 'string') {
      return project.Technologies.split(',').map(t => t.trim()).filter(Boolean);
    }
    
    if (project.Technologies && Array.isArray(project.Technologies)) {
      return project.Technologies;
    }
    
    return [];
  };

  const technologies = getTechnologies();

  // Loading State
  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="loading-spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  // Error State
  if (error || !project) {
    return (
      <div className="project-details-error">
        <div className="error-icon">🔍</div>
        <h2>Project Not Found</h2>
        <p>{error || 'The project you are looking for does not exist.'}</p>
        <Link to="/projects" className="btn-back">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      {/* ── Hero Section ── */}
      <section className="project-details-hero">
        <div className="project-details-hero-bg">
          <img 
            src={project.ImageUrl || '/images/default-project.jpg'} 
            alt={project.Title || 'Project'} 
          />
        </div>
        <div className="project-details-hero-overlay"></div>
        <div className="project-details-hero-inner">
          <span className="project-details-category">{project.Category || 'Project'}</span>
          <h1>{project.Title || 'Untitled Project'}</h1>
          <div className="project-details-meta">
            <span>📅 {project.Duration || 'N/A'}</span>
            <span>👤 {project.Client || 'N/A'}</span>
            <span>📊 {project.Results || 'Completed'}</span>
          </div>
        </div>
      </section>

      {/* ── Back Button ── */}
      <div className="project-details-back-wrapper">
        <div className="section-inner">
          <Link to="/projects" className="project-details-back">
            <svg className="project-details-back-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="project-details-content">
        <div className="section-inner">
          <div className="project-details-grid">
            
            {/* ── Main Content ── */}
            <div className="project-details-main">
              <h2>Project Overview</h2>
              <p>
                {project.Description || 
                 project.FullDescription || 
                 'No description available for this project.'}
              </p>

              {project.Challenges && (
                <>
                  <h3>⚡ Challenges</h3>
                  <p>{project.Challenges}</p>
                </>
              )}

              {project.Solutions && (
                <>
                  <h3>💡 Solutions</h3>
                  <p>{project.Solutions}</p>
                </>
              )}

              {project.Results && project.Results !== 'Completed' && (
                <>
                  <h3>📈 Results</h3>
                  <p>{project.Results}</p>
                </>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="project-details-sidebar">
              <div className="project-details-card">
                <h4>📋 Project Info</h4>
                <ul>
                  <li>
                    <span>Client</span>
                    <span>{project.Client || 'N/A'}</span>
                  </li>
                  <li>
                    <span>Duration</span>
                    <span>{project.Duration || 'N/A'}</span>
                  </li>
                  <li>
                    <span>Category</span>
                    <span>{project.Category || 'N/A'}</span>
                  </li>
                  <li>
                    <span>Status</span>
                    <span className="status-value">{project.Status || 'Active'}</span>
                  </li>
                  {project.StartDate && (
                    <li>
                      <span>Start Date</span>
                      <span>{new Date(project.StartDate).toLocaleDateString()}</span>
                    </li>
                  )}
                  {project.EndDate && (
                    <li>
                      <span>End Date</span>
                      <span>{new Date(project.EndDate).toLocaleDateString()}</span>
                    </li>
                  )}
                  {project.Budget && (
                    <li>
                      <span>Budget</span>
                      <span>${Number(project.Budget).toLocaleString()}</span>
                    </li>
                  )}
                  <li>
                    <span>Results</span>
                    <span className="result-value">{project.Results || 'Completed'}</span>
                  </li>
                </ul>
              </div>

              {technologies.length > 0 && (
                <div className="project-details-card">
                  <h4>🛠️ Technologies</h4>
                  <div className="project-details-tags">
                    {technologies.map((tech) => (
                      <span key={tech} className="project-details-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.Tags && project.Tags.length > 0 && (
                <div className="project-details-card">
                  <h4>🏷️ Tags</h4>
                  <div className="project-details-tags">
                    {project.Tags.map((tag) => (
                      <span key={tag} className="project-details-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              <Link to="/contact" className="project-details-cta-btn">
                Start a Similar Project →
              </Link>
            </aside>
          </div>

          {/* ── Image Gallery ── */}
          {images.length > 0 && (
            <div className="project-details-gallery">
              <h2>📸 Project Gallery</h2>
              <div className="project-details-gallery-grid">
                <div className="project-details-gallery-main">
                  <img 
                    src={images[activeImage] || '/images/default-project.jpg'} 
                    alt={project.Title || 'Project'} 
                  />
                </div>
                <div className="project-details-gallery-thumbs">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      className={`project-details-thumb ${activeImage === index ? 'active' : ''}`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={img || '/images/default-project.jpg'} 
                        alt={`Project ${index + 1}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
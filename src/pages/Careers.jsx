import { useState, useEffect } from "react";
import { api, applyForJob } from "../utils/api";
import "../pages/Careers.css";

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null,
    resumeName: ''
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      const data = await api.getCareers();
      setCareers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching careers:', error);
      setLoading(false);
    }
  };

  // Smooth scroll functions
  const scrollToCTA = (e) => {
    e.preventDefault();
    const element = document.getElementById('careers-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToOpenings = (e) => {
    e.preventDefault();
    const element = document.getElementById('openings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ── OPEN APPLICATION MODAL ──
  const openApplicationModal = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
    document.body.style.overflow = 'hidden';
  };

  // ── CLOSE APPLICATION MODAL ──
  const closeApplicationModal = () => {
    setShowApplicationModal(false);
    setSelectedJob(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      resume: null,
      resumeName: ''
    });
    document.body.style.overflow = 'auto';
  };

  // ── HANDLE FORM CHANGE ──
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ── HANDLE RESUME UPLOAD ──
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        resume: file,
        resumeName: file.name
      }));
    }
  };

  // ── REMOVE RESUME ──
  const removeResume = () => {
    setFormData(prev => ({
      ...prev,
      resume: null,
      resumeName: ''
    }));
    // Reset file input
    const fileInput = document.getElementById('resume');
    if (fileInput) fileInput.value = '';
  };

  // ── SUBMIT APPLICATION ──
 // In your Careers.jsx - Use this function
const handleSubmitApplication = async (e) => {
  e.preventDefault();
  
  if (!formData.fullName.trim()) {
    alert('Please enter your full name');
    return;
  }
  if (!formData.email.trim()) {
    alert('Please enter your email');
    return;
  }
  if (!formData.resume) {
    alert('Please upload your resume');
    return;
  }

  try {
    setSubmitting(true);
    
    const submitData = new FormData();
    submitData.append('careerId', selectedJob.CareerID);
    submitData.append('fullName', formData.fullName.trim());
    submitData.append('email', formData.email.trim());
    submitData.append('phone', formData.phone || '');
    submitData.append('experience', formData.experience || '');
    submitData.append('coverLetter', formData.coverLetter || '');
    submitData.append('resume', formData.resume);

    console.log('📤 Submitting application for career ID:', selectedJob.CareerID);

    const response = await fetch('http://localhost:5000/api/careers/apply', {
      method: 'POST',
      body: submitData
    });

    const result = await response.json();
    console.log('📥 Response:', result);
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit');
    }

    alert('✅ Application submitted successfully!');
    closeApplicationModal();
    
  } catch (error) {
    console.error('❌ Error:', error);
    alert(`❌ Failed to submit: ${error.message}`);
  } finally {
    setSubmitting(false);
  }
};
  // ── HANDLE ESCAPE KEY ──
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showApplicationModal) {
        closeApplicationModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showApplicationModal]);

  if (loading) {
    return (
      <div className="careers-loading">
        <div className="loading-spinner"></div>
        <p>Loading careers...</p>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
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
            <div className="careers-hero-illustration">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="#7C3AED" strokeOpacity="0.1" strokeWidth="2"/>
                <circle cx="200" cy="200" r="130" stroke="#7C3AED" strokeOpacity="0.15" strokeWidth="2"/>
                <circle cx="200" cy="200" r="80" stroke="#7C3AED" strokeOpacity="0.2" strokeWidth="2"/>
                <circle cx="200" cy="200" r="40" fill="#7C3AED" fillOpacity="0.1" stroke="#7C3AED" strokeWidth="2"/>
                <path d="M200 80 L220 160 L300 180 L240 230 L260 310 L200 270 L140 310 L160 230 L100 180 L180 160 L200 80Z" fill="#7C3AED" fillOpacity="0.15" stroke="#7C3AED" strokeWidth="2"/>
                <circle cx="200" cy="200" r="12" fill="#7C3AED" fillOpacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
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
              <p>Work on cutting-edge projects that push the boundaries of technology.</p>
              <span className="careers-why-tag">Cutting Edge</span>
            </div>
            <div className="careers-why-card card-2">
              <div className="careers-why-icon">📚</div>
              <h3>Learning & Growth</h3>
              <p>Continuous learning opportunities and professional development programs.</p>
              <span className="careers-why-tag">Grow With Us</span>
            </div>
            <div className="careers-why-card card-3">
              <div className="careers-why-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Work on projects that impact industries across the globe.</p>
              <span className="careers-why-tag">Worldwide</span>
            </div>
            <div className="careers-why-card card-4">
              <div className="careers-why-icon">🤝</div>
              <h3>Collaborative Culture</h3>
              <p>Join a diverse, inclusive team where your ideas are valued.</p>
              <span className="careers-why-tag">Team First</span>
            </div>
            <div className="careers-why-card card-5">
              <div className="careers-why-icon">🏠</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working hours, remote options, and healthy balance culture.</p>
              <span className="careers-why-tag">Flexible</span>
            </div>
            <div className="careers-why-card card-6">
              <div className="careers-why-icon">🏥</div>
              <h3>Benefits Package</h3>
              <p>Comprehensive health insurance and employee wellness programs.</p>
              <span className="careers-why-tag">Wellness</span>
            </div>
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="careers-openings" id="openings">
        <div className="section-inner">
          <div className="careers-openings-header">
            <span className="careers-openings-label">Current Openings</span>
            <h2>Find Your <span>Perfect Role</span></h2>
            <p>Join us in building smarter systems for tomorrow.</p>
          </div>

          <div className="careers-openings-stats">
            <div className="careers-opening-stat">
              <span className="careers-opening-stat-number">{careers.length}</span>
              <span className="careers-opening-stat-label">Open Positions</span>
            </div>
            <div className="careers-opening-stat">
              <span className="careers-opening-stat-number">{new Set(careers.map(c => c.Department).filter(Boolean)).size}</span>
              <span className="careers-opening-stat-label">Departments</span>
            </div>
            <div className="careers-opening-stat">
              <span className="careers-opening-stat-number">{new Set(careers.map(c => c.Location).filter(Boolean)).size}</span>
              <span className="careers-opening-stat-label">Locations</span>
            </div>
          </div>

          <div className="careers-openings-grid">
            {careers.map((job) => (
              <div key={job.CareerID} className="careers-opening-card">
                <div className="careers-opening-card-top">
                  <div className="careers-opening-icon">💼</div>
                  <span className="careers-opening-type">{job.JobType || 'Full Time'}</span>
                </div>
                <h3>{job.JobTitle}</h3>
                <div className="careers-opening-meta">
                  <span className="careers-opening-dept">{job.Department || 'Engineering'}</span>
                  <span className="careers-opening-location">📍 {job.Location || 'Remote'}</span>
                </div>
                <p>{job.Description?.substring(0, 120)}...</p>
                <button 
                  onClick={() => openApplicationModal(job)} 
                  className="careers-opening-apply"
                >
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {careers.length === 0 && (
            <div className="no-careers">
              <p>No open positions at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* HIRING PROCESS */}
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
                <p>Submit your application through our careers portal.</p>
              </div>
            </div>
            <div className="careers-process-step">
              <div className="careers-process-step-number">02</div>
              <div className="careers-process-step-content">
                <h4>Initial Screening</h4>
                <p>Our HR team will review your application and schedule a call.</p>
              </div>
            </div>
            <div className="careers-process-step">
              <div className="careers-process-step-number">03</div>
              <div className="careers-process-step-content">
                <h4>Technical Interview</h4>
                <p>Showcase your skills with our engineering team.</p>
              </div>
            </div>
            <div className="careers-process-step">
              <div className="careers-process-step-number">04</div>
              <div className="careers-process-step-content">
                <h4>Final Round</h4>
                <p>Meet with leadership to discuss your vision and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS & BENEFITS */}
      <section className="careers-perks">
        <div className="section-inner">
          <div className="careers-perks-header">
            <span className="careers-perks-label">Perks & Benefits</span>
            <h2>We've Got You <span>Covered</span></h2>
            <p>Everything you need to thrive — professionally and personally.</p>
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

      {/* CTA */}
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
                <button onClick={() => careers.length > 0 && openApplicationModal(careers[0])} className="btn-glass-secondary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION MODAL ── */}
      {showApplicationModal && selectedJob && (
        <div className="application-modal-overlay" onClick={closeApplicationModal}>
          <div className="application-modal" onClick={(e) => e.stopPropagation()}>
            <button className="application-modal-close" onClick={closeApplicationModal}>✕</button>
            
            <div className="application-modal-header">
              <div className="application-modal-icon">📝</div>
              <h2>Apply for <span>{selectedJob.JobTitle}</span></h2>
              <p>{selectedJob.Department} • {selectedJob.Location || 'Remote'}</p>
            </div>

            <form onSubmit={handleSubmitApplication} className="application-modal-form">
              <div className="application-form-group">
                <label>Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="application-form-group">
                <label>Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="application-form-group">
              <label>Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="application-form-group">
                <label>Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3-5 years"
                />
              </div>

              <div className="application-form-group">
                <label>Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us why you're the perfect fit for this role..."
                />
              </div>

              <div className="application-form-group">
                <label>Resume / CV <span className="required">*</span></label>
                <div className="application-resume-upload">
                  {formData.resumeName ? (
                    <div className="application-resume-file">
                      <span className="application-resume-icon">📄</span>
                      <span className="application-resume-name">{formData.resumeName}</span>
                      <button 
                        type="button" 
                        className="application-resume-remove"
                        onClick={removeResume}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeUpload}
                        className="application-resume-input"
                      />
                      <label htmlFor="resume" className="application-resume-label">
                        <span className="application-resume-upload-icon">📤</span>
                        <span>Click to upload or drag & drop</span>
                        <span className="application-resume-hint">PDF, DOC, DOCX (Max 5MB)</span>
                      </label>
                    </>
                  )}
                </div>
              </div>

              <div className="application-modal-actions">
                <button type="button" onClick={closeApplicationModal} className="application-btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="application-btn-submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <span className="spinner"></span> Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
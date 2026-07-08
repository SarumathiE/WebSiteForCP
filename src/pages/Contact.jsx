import { useState } from "react";
import { api } from "../utils/api";
import "../pages/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.submitContact(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-inner">
          <div className="contact-hero-content">
            <div className="contact-hero-badge">
              <span className="contact-hero-dot" />
              Let's Connect
            </div>
            <h1>
              Get In <span>Touch</span>
            </h1>
            <p className="contact-hero-desc">
              Have a project in mind? Looking for a partner to build smarter systems? 
              We'd love to hear from you. Let's start a conversation.
            </p>
            <div className="contact-hero-actions">
              <a href="#contact-form" className="btn-primary-contact">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </a>
              <a href="mailto:info@codepage.com" className="btn-ghost-contact">
                info@codepage.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-main" id="contact-form">
        <div className="section-inner">
          <div className="contact-grid">
            {/* Left - Contact Info */}
            <div className="contact-info">
              <div className="contact-info-header">
                <span className="contact-info-label">Contact Information</span>
                <h2>Let's Start a <span>Conversation</span></h2>
                <p>
                  Reach out to us through any of the channels below. We'll get back 
                  to you within 24 hours.
                </p>
              </div>
              
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@codepage.com</p>
                    <p>support@codepage.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">🕐</div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <span>Follow us</span>
                <div className="contact-social-links">
                  <a href="#" className="contact-social-link">🐦</a>
                  <a href="#" className="contact-social-link">💼</a>
                  <a href="#" className="contact-social-link">📱</a>
                  <a href="#" className="contact-social-link">📺</a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                
                {submitted ? (
                  <div className="success-message">
                    <h4>✅ Message Sent!</h4>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="contact-form-group">
                        <label>Your Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="john@example.com" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="contact-form-group">
                      <label>Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        placeholder="How can we help you?" 
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-form-group">
                      <label>Message *</label>
                      <textarea 
                        rows="5" 
                        name="message"
                        placeholder="Tell us about your project..." 
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-submit" disabled={loading}>
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="section-inner">
          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07690933884!2d80.06834857436854!3d13.047096626150915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e1ab0e8c6e8b8c8!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CodePage Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="section-inner">
          <div className="contact-cta-card glass-effect">
            <div className="contact-cta-glow"></div>
            <div className="contact-cta-glow-2"></div>
            <div className="contact-cta-content">
              <span className="contact-cta-badge">Let's Talk</span>
              <h2>Ready to <span>Build Something Great?</span></h2>
              <p>
                Schedule a call with our team and let's discuss how we can bring your
                vision to life.
              </p>
              <div className="contact-cta-actions">
                <a href="#" className="btn-glass-primary">Schedule a Call</a>
                <a href="mailto:info@codepage.com" className="btn-glass-secondary">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
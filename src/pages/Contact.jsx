export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Get In <span>Touch</span></h1>
          <p>Let's discuss how we can help you build smarter systems</p>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@codepage.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your Message" rows="5"></textarea>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
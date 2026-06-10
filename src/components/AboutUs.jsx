import './AboutUs.css';
import aboutImage from '../assets/commercial_office_complex.jpeg';

export default function AboutUs() {


  return (
    <section className="about-section" id="about">
      <div className="about-blueprint-bg" />
      <div className="content-wrapper">
        <div className="about-grid">
          {/* Left Text Block */}
          <div className="about-text-side">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>ABOUT VAIBHAVA REALTY</span>
            <h2 className="about-heading">
              Building Premium Landmarks and Gated Communities
            </h2>
            <p className="about-desc-main">
              Vaibhava Realty is a premier property development company based in Hyderabad. We specialize in residential buildings, commercial spaces, and gated land developments.
            </p>
            <p className="about-desc-secondary">
              Our mission is to create spaces with complete legal transparency and long term value. Whether you are looking for a modern home or a high return plot investment, we ensure structural quality and secure planning in every project.
            </p>

            <div className="about-stats-row">
              <div className="about-stat-item">
                <span className="about-stat-num">100%</span>
                <span className="about-stat-label">Legal Transparency</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">50+</span>
                <span className="about-stat-label">Acres Managed</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">100%</span>
                <span className="about-stat-label">Structural Integrity</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="about-media-side">
            <div className="about-media-container">
              <img 
                src={aboutImage} 
                alt="Modern commercial office complex detailing structural steel glass" 
                className="about-primary-img"
              />
              <div className="about-glass-overlay" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img 
                  src="/logo2.png" 
                  alt="Vaibhava Realty Logo" 
                  style={{ height: '36px', width: '36px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255, 255, 255, 0.15)' }} 
                />
                <div>
                  <h4 className="overlay-title" style={{ margin: 0, marginBottom: '0.25rem' }}>HYDERABAD DEVELOPMENTS</h4>
                  <p className="overlay-text" style={{ margin: 0 }}>Developing high quality gated communities, commercial hubs, and luxury residences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

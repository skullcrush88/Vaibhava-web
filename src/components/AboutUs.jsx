import './AboutUs.css';
import aboutImage from '../assets/about_us_new.png';

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
              Building Modern Infrastructure and Sustainable Communities
            </h2>
            <p className="about-desc-main">
              Vaibhava Realty is a premier property development company based in Hyderabad. We specialize in building modern infrastructure, sustainable residential spaces, and gated land developments.
            </p>
            <p className="about-desc-secondary">
              Our mission is to combine sustainability and quality engineering to deliver long term value. Whether you are looking for a modern villa or a premium land investment, we ensure legal transparency and secure planning in every development.
            </p>

            <div className="about-stats-row">
              <div className="about-stat-item">
                <span className="about-stat-num">100%</span>
                <span className="about-stat-label">Legal Transparency</span>
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
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

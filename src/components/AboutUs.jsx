import { motion } from 'motion/react';
import { Shield, Hammer, Compass, Award } from 'lucide-react';
import './AboutUs.css';
import aboutImage from '../assets/commercial_office_complex.jpeg';

export default function AboutUs() {
  const cards = [
    {
      icon: <Hammer size={24} className="about-card-icon" />,
      title: "Residential Properties",
      desc: "Architecturally stunning, sustainable, and modern homes (flats & villas) designed for elevated living."
    },
    {
      icon: <Compass size={24} className="about-card-icon" />,
      title: "Commercial Hubs",
      desc: "High-traffic, strategically located commercial spaces engineered to give businesses the infrastructure they need to scale."
    },
    {
      icon: <Award size={24} className="about-card-icon" />,
      title: "Plotting Ventures",
      desc: "Premium, rapidly appreciating land parcels with massive development potential, offering you total freedom of customization."
    },
    {
      icon: <Shield size={24} className="about-card-icon" />,
      title: "Investment Consulting",
      desc: "Cultivating prosperity for IT employees, business leaders, NRIs, and HNIs with secure, high-yield real estate investments."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-blueprint-bg" />
      <div className="content-wrapper">
        <div className="about-grid">
          {/* Left Text Block */}
          <div className="about-text-side">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>ABOUT VAIBHAVA REALTY</span>
            <h2 className="about-heading">
              Shaping Grandeur, Fostering Community, & Cultivating Prosperity.
            </h2>
            <p className="about-desc-main">
              Welcome to Vaibhava Realty, where we don’t just build structures—we shape grandeur, foster community, and cultivate prosperity.
            </p>
            <p className="about-desc-secondary">
              As a premier, full-service real estate and construction firm, we specialize in delivering high-value properties across the entire real estate spectrum. Whether you are looking for the premium comfort of modern flats and luxury villas, strategic commercial spaces to scale your business, or high-yield plotting ventures, we are your trusted partners in growth.
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
                  <h4 className="overlay-title" style={{ margin: 0, marginBottom: '0.25rem' }}>VAIBHAVA EST. 2026</h4>
                  <p className="overlay-text" style={{ margin: 0 }}>Engineering the future of luxury architectures with precision-crafted steel facades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Cards Grid */}
        <div className="about-cards-grid">
          {cards.map((card, idx) => (
            <motion.div 
              className="about-value-card" 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-card-icon-box">
                {card.icon}
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

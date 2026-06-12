import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Layers, ShieldCheck, Phone, MessageCircle, MapPin, Building2, Sparkles, Calendar } from 'lucide-react';
import './App.css';

// Components
import SmoothScroll from './components/SmoothScroll';
import BlueprintGrid from './components/BlueprintGrid';
import NavigationIsland from './components/NavigationIsland';
import HorizontalScrollShowcase from './components/HorizontalScrollShowcase';
import MaskWipeSection from './components/MaskWipeSection';
import Promises from './components/Promises';
import InquiryForm from './components/InquiryForm';
import BlurText from './components/BlurText';
import CustomCursor from './components/CustomCursor';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideo, setActiveVideo] = useState('logo'); // 'logo' or 'drone'
  const logoVideoRef = useRef(null);
  const droneVideoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (activeVideo === 'logo') {
          if (droneVideoRef.current) {
            droneVideoRef.current.pause();
          }
          if (logoVideoRef.current) {
            logoVideoRef.current.currentTime = 0;
            await logoVideoRef.current.play();
          }
        } else {
          if (logoVideoRef.current) {
            logoVideoRef.current.pause();
          }
          if (droneVideoRef.current) {
            droneVideoRef.current.currentTime = 0;
            await droneVideoRef.current.play();
          }
        }
      } catch (err) {
        console.warn('Video playback was prevented:', err);
      }
    };

    playVideo();
  }, [activeVideo]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div id="home">
        {/* Core Layout Shell Elements */}
        <CustomCursor />
        <BlueprintGrid />
        <NavigationIsland />

        {/* 1. Hero Landing Page Section */}
        <header className="hero-section">
          {/* Loop Background Video Source */}
          <video
            ref={logoVideoRef}
            className={`hero-video-bg ${activeVideo === 'logo' ? 'active' : 'inactive'}`}
            muted
            playsInline
            preload="auto"
            src={isMobile ? '/logovid.mp4' : '/logolaptop.mp4'}
            onEnded={() => setActiveVideo('drone')}
          />
          <video
            ref={droneVideoRef}
            className={`hero-video-bg ${activeVideo === 'drone' ? 'active' : 'inactive'}`}
            muted
            playsInline
            preload="auto"
            src="/drone.mp4"
            onEnded={() => setActiveVideo('logo')}
          />
          <div className="hero-vignette" />

          <div className="content-wrapper">
            <div className="hero-text-box">
              <div className="hero-header-group">
                <h1>
                  <BlurText
                    text="Vaibhava Realty."
                    delay={120}
                    animateBy="words"
                    direction="bottom"
                    style={{ width: '100%', color: 'var(--accent-gold)', flexWrap: 'nowrap' }}
                  />
                  <BlurText
                    text="Lands & Estates."
                    delay={120}
                    animateBy="words"
                    direction="bottom"
                    style={{ width: '100%', flexWrap: 'nowrap' }}
                  />
                </h1>
                <p className="hero-desc">
                  Building modern infrastructure, sustainable developments, and premium lands in Hyderabad. We design spaces that offer exceptional quality and value for future generations.
                </p>
              </div>

              <div className="hero-ctas">
                <a
                  href="#showcase"
                  className="btn-primary"
                  onClick={(e) => handleScrollTo(e, 'showcase')}
                  data-cursor="explore"
                >
                  Explore Portfolio <ArrowRight size={16} />
                </a>
                <a
                  href="#vision"
                  className="btn-secondary"
                  onClick={(e) => handleScrollTo(e, 'vision')}
                  data-cursor="philosophy"
                >
                  Our Philosophy
                </a>
              </div>
            </div>
          </div>



          <div className="hero-scroll-indicator">
            <span>SCROLL TO VIEW</span>
            <div className="indicator-line-box"></div>
          </div>
        </header>

        {/* 2. Horizontal Scroll Section Showcase */}
        <main>
          {/* About Us Section */}
          <AboutUs />

          <HorizontalScrollShowcase />

          {/* 3. Mask Wipe Section */}
          <MaskWipeSection />

          {/* 4. Corporate Commitments & Promises Section */}
          <Promises />

          {/* Projects Section */}
          <section className="projects-section" id="projects">
            <div className="content-wrapper">
              <div className="projects-header">
                <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>PORTFOLIO & VENTURES</span>
                <h2 className="projects-heading">Featured Projects</h2>
                <div className="projects-subtitle-wrapper">
                  <p className="projects-subtitle">
                    Explore our upcoming and active architectural developments in Hyderabad's premier zones.
                  </p>
                </div>
              </div>

              <div className="projects-grid">
                <div className="coming-soon-card minimal-card">
                  <div className="minimal-card-header">
                    <span className="project-type">PORTFOLIO DEPLOYMENT</span>
                    <h3 className="minimal-card-title">Coming Soon</h3>
                  </div>
                  <p className="minimal-card-desc">
                    We are structuring our portfolio of premium lands, residential estates, and architectural developments in Hyderabad's high-growth corridors. Details will be unveiled shortly.
                  </p>
                  <div className="minimal-card-footer">
                    <span className="pulsing-indicator-dot" />
                    <span>REGISTRATIONS OPENING SOON</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FAQ Section */}
          <FAQ />

          {/* 7. Inquiry Form Section */}
          <InquiryForm />
        </main>

        {/* 8. Custom Auto-Expanding Footer Component */}
        <footer className="expanding-footer">
          <div className="content-wrapper">
            <div className="footer-columns-grid">

              <div className="footer-brand-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <h3 className="footer-title" style={{ margin: 0 }}>VAIBHAVA <span>REALTY</span></h3>
                </div>
                <p className="footer-tagline">
                  Vaibhava Realty is a premier property development company in Hyderabad, specializing in high quality residential buildings, commercial hubs, and plotting ventures.
                </p>
              </div>

              <div className="footer-links-col">
                <h4>SEGMENTS</h4>
                <ul className="footer-links-list">
                  <li><a href="#showcase" onClick={(e) => handleScrollTo(e, 'showcase')}>Residential Properties</a></li>
                  <li><a href="#showcase" onClick={(e) => handleScrollTo(e, 'showcase')}>Commercial Hubs</a></li>
                  <li><a href="#showcase" onClick={(e) => handleScrollTo(e, 'showcase')}>Plotting Ventures</a></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>COMPANY</h4>
                <ul className="footer-links-list">
                  <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</a></li>
                  <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')}>FAQ</a></li>
                  <li><a href="#inquire" onClick={(e) => handleScrollTo(e, 'inquire')}>Bookings</a></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>ENGINEERING</h4>
                <ul className="footer-links-list" style={{ color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <ShieldCheck size={14} /> Legal Transparency
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    <Layers size={14} /> Structural Grade A
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    <Globe size={14} /> Future-Proof Value
                  </li>
                </ul>
              </div>

            </div>

            <div className="footer-baseline">
              <div>© 2026 VAIBHAVA REALTY. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </footer>

        {/* Floating Communication Hub */}
        <div className="floating-comm-hub">
          <a 
            href="tel:+919059458484" 
            className="floating-btn call-btn" 
            title="Call Principal Office"
            data-cursor="call"
          >
            <Phone size={20} />
          </a>
          <a 
            href="https://wa.me/919059458484?text=Hi%20Vaibhava%20Realty%2C%20I%20am%20interested%20in%20your%20developments." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="floating-btn whatsapp-btn" 
            title="Chat via WhatsApp"
            data-cursor="whatsapp"
          >
            <MessageCircle size={20} />
          </a>
        </div>

      </div>
    </SmoothScroll>
  );
}

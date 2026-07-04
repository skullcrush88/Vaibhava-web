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
import Services from './components/Services';

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
  }, [activeVideo, isMobile]);

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
            key={isMobile ? 'logo-mobile' : 'logo-laptop'}
            ref={logoVideoRef}
            className={`hero-video-bg ${activeVideo === 'logo' ? 'active' : 'inactive'}`}
            autoPlay={activeVideo === 'logo'}
            muted
            playsInline
            preload="auto"
            src={isMobile ? '/logovid.mp4' : '/logolaptop.mp4'}
            onEnded={() => setActiveVideo('drone')}
          />
          <video
            key="drone-video"
            ref={droneVideoRef}
            className={`hero-video-bg ${activeVideo === 'drone' ? 'active' : 'inactive'}`}
            autoPlay={activeVideo === 'drone'}
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
                  href="#projects"
                  className="btn-primary"
                  onClick={(e) => handleScrollTo(e, 'projects')}
                  data-cursor="buy"
                >
                  Buy Properties <ArrowRight size={16} />
                </a>
                <a
                  href="#inquire"
                  className="btn-secondary"
                  onClick={(e) => handleScrollTo(e, 'inquire')}
                  data-cursor="sell"
                >
                  Sell / List Properties
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

          {/* Services Section */}
          <Services />

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

              {/* Category 1: Ongoing Ventures */}
              <div className="projects-sub-section" id="projects-ventures">
                <div className="sub-section-title-box">
                  <h3>Ongoing Ventures</h3>
                  <div className="sub-section-line" />
                </div>
                <div className="projects-grid">
                  {/* Details will be updated soon */}
                </div>
              </div>

              {/* Category 2: Ongoing Projects */}
              <div className="projects-sub-section" id="projects-ongoing">
                <div className="sub-section-title-box">
                  <h3>Ongoing Projects</h3>
                  <div className="sub-section-line" />
                </div>
                <div className="projects-grid">
                  {/* Details will be updated soon */}
                </div>
              </div>

              {/* Category 3: Completed Projects */}
              <div className="projects-sub-section" id="projects-completed">
                <div className="sub-section-title-box">
                  <h3>Completed Projects</h3>
                  <div className="sub-section-line" />
                </div>
                <div className="projects-grid">
                  {/* Details will be updated soon */}
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
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.535 0 10.04-4.471 10.043-9.977.002-2.67-1.034-5.177-2.907-7.064C16.59 1.68 14.093.655 11.432.655c-5.543 0-10.052 4.475-10.055 9.984-.001 1.838.503 3.626 1.458 5.21l-1.016 3.71 3.828-1.003zM16.561 13.62c-.259-.13-1.532-.756-1.77-.843-.239-.087-.413-.13-.587.13-.174.26-.674.843-.826 1.017-.152.174-.304.195-.563.065-.259-.13-1.096-.404-2.088-1.287-.772-.688-1.293-1.538-1.445-1.798-.152-.26-.016-.401.115-.53.118-.116.259-.301.39-.452.13-.152.174-.26.259-.434.087-.174.043-.326-.021-.456-.065-.13-.587-1.413-.804-1.936-.211-.509-.444-.44-.61-.448-.158-.007-.34-.009-.52-.009-.18 0-.472.067-.719.34-.247.272-.943.922-.943 2.25 0 1.328.966 2.61 1.101 2.783.135.174 1.902 2.904 4.609 4.07 1.093.473 1.948.7 2.61.91.665.21 1.27.18 1.748.108.533-.08 1.532-.626 1.748-1.23.217-.604.217-1.12.152-1.23-.065-.11-.239-.174-.499-.304z" />
            </svg>
          </a>
        </div>

      </div>
    </SmoothScroll>
  );
}

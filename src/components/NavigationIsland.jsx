import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import CareersModal from './CareersModal';
import './NavigationIsland.css';

export default function NavigationIsland() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Scroll-direction hiding (hide on down scroll, reveal on up scroll)
      // Only hide on scroll if mobile menu is closed and not on mobile screens
      const isMobile = window.innerWidth <= 768;
      if (currentScrollY > lastScrollY && currentScrollY > 180 && !menuOpen && !isMobile) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;

      // 3. Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (currentScrollY / totalHeight) * 100;
        setScrollPercent(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`nav-island-container ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''} ${menuOpen ? 'mobile-menu-active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <nav className="nav-island-inner">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="nav-brand" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <div className="nav-logo-wrapper">
            <img 
              src="/logo2.png" 
              alt="Vaibhava Realty Logo" 
              className="nav-logo"
            />
          </div>
          <span>VAIBHAVA <span className="brand-accent">REALTY</span></span>
        </a>

        {/* Dynamic Links Menu */}
        <ul className={`nav-links-list ${menuOpen ? 'mobile-open' : ''}`}>
          <li className="nav-link-item">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
          </li>
          <li className="nav-link-item">
            <a href="#promises" onClick={(e) => handleNavClick(e, 'promises')}>Promises</a>
          </li>
          <li className="nav-link-item">
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
          </li>
          <li className="nav-link-item">
            <a href="#inquire" onClick={(e) => handleNavClick(e, 'inquire')}>Inquire</a>
          </li>
          <li className="nav-link-item">
            <a 
              href="#careers" 
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setIsCareersOpen(true);
              }}
            >
              Careers
            </a>
          </li>
          {/* Duplicate CTA inside mobile menu list for clean vertical layout stack */}
          <li className="nav-link-item mobile-cta-item">
            <button className="nav-action-btn" onClick={(e) => handleNavClick(e, 'inquire')}>
              Book Tour
            </button>
          </li>
        </ul>

        {/* CTA booking button (desktop only) */}
        <button className="nav-action-btn desktop-cta" onClick={(e) => handleNavClick(e, 'inquire')}>
          Book Tour
        </button>

        {/* Hamburger menu button for touch/mobile devices */}
        <button 
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Dynamic Scroll Progress Bar */}
        <div className="nav-progress-track">
          <div className="nav-progress-fill" style={{ width: `${scrollPercent}%` }} />
        </div>
      </nav>
      <CareersModal isOpen={isCareersOpen} onClose={() => setIsCareersOpen(false)} />
    </div>
  );
}

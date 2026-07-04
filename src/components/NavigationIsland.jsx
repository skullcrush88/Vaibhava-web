import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import CareersModal from './CareersModal';
import './NavigationIsland.css';

export default function NavigationIsland() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (currentScrollY / totalHeight) * 100;
        setScrollPercent(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`nav-island-container ${scrolled ? 'scrolled' : ''} ${hovered ? 'hovered' : ''} ${menuOpen ? 'mobile-menu-active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setDropdownOpen(false);
      }}
    >
      <nav className="nav-island-inner">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="nav-brand" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <svg className="nav-brand-emblem" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--accent-gold)' }}>
            <path d="M4 20V8l4-3v15M10 20V5l4-3v18M16 20V10l4-3v13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="nav-brand-text">
            <span className="brand-main">VAIBHAVA</span>
            <span className="brand-accent">REALTY</span>
          </div>
        </a>

        {/* Dynamic Links Menu */}
        <ul className={`nav-links-list ${menuOpen ? 'mobile-open' : ''}`}>
          <li className="nav-link-item">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
          </li>
          
          {/* Projects Dropdown Menu */}
          <li 
            className={`nav-link-item dropdown-item ${dropdownOpen ? 'dropdown-active' : ''}`}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <a 
              href="#projects" 
              className="dropdown-toggle-link"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                } else {
                  handleNavClick(e, 'projects');
                }
              }}
            >
              Projects <ChevronDown size={12} className={`dropdown-arrow-icon ${dropdownOpen ? 'rotated' : ''}`} />
            </a>
            <ul className={`dropdown-sub-menu ${dropdownOpen ? 'open' : ''}`}>
              <li>
                <a href="#projects-ventures" onClick={(e) => handleNavClick(e, 'projects-ventures')}>
                  Ongoing Ventures
                </a>
              </li>
              <li>
                <a href="#projects-ongoing" onClick={(e) => handleNavClick(e, 'projects-ongoing')}>
                  Ongoing Projects
                </a>
              </li>
              <li>
                <a href="#projects-completed" onClick={(e) => handleNavClick(e, 'projects-completed')}>
                  Completed Projects
                </a>
              </li>
            </ul>
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

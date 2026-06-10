import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScrollShowcase.css';
import plottingImage from '../assets/plotting.jpeg';
import commercialImage from '../assets/commercial_office_complex.jpeg';
import residentialImage from '../assets/residential.jpeg';

gsap.registerPlugin(ScrollTrigger);

function TiltImage({ src, alt, coords }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 15, y: x * 15 });
  };

  const handleMouseEnter = () => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="slide-visual-right"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: hovered 
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: hovered ? 'transform 0.05s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      data-cursor="explore"
    >
      <img src={src} alt={alt} className="slide-image" />
    </div>
  );
}

export default function HorizontalScrollShowcase() {
  const pinRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mm = gsap.matchMedia();

    // Match media for desktop scroll interactions
    mm.add("(min-width: 769px)", () => {
      const pinSection = pinRef.current;
      const container = containerRef.current;

      const totalSlides = 3;
      const xTranslate = -(100 * (totalSlides - 1));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Slide properties container horizontally
      tl.to(container, {
        x: `${xTranslate}vw`,
        ease: 'none',
      }, 0);

      // Slide progress bar fill at the same time
      tl.fromTo(".showcase-progress-bar", 
        { width: "0%" },
        { width: "100%", ease: 'none' },
        0
      );
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      mm.revert();
    };
  }, []);

  const properties = [
    {
      label: 'Featured Segment 01',
      title: 'Residential Properties',
      desc: 'Premium residential developments featuring modern architecture, sustainable layouts, and excellent building standards in Hyderabad.',
      img: residentialImage,
      coords: 'LAT: 17.4325° N // LON: 78.4070° E',
      area: 'HYDERABAD',
      glass: 'Premium Flats & Villas',
    },
    {
      label: 'Featured Segment 02',
      title: 'Commercial Hubs',
      desc: 'State of the art commercial spaces and business infrastructure designed for high traffic areas in Hyderabad.',
      img: commercialImage,
      coords: 'LAT: 17.4483° N // LON: 78.3741° E',
      area: 'HYDERABAD',
      glass: 'Strategic Workspaces',
    },
    {
      label: 'Featured Segment 03',
      title: 'Plotting Ventures',
      desc: 'High value gated plotting ventures with modern infrastructure, offering strong appreciation potential and clear legal titles.',
      img: plottingImage,
      coords: 'LAT: 17.3117° N // LON: 78.2751° E',
      area: 'HYDERABAD',
      glass: 'Gated Custom Layouts',
    },
  ];

  if (isMobile) {
    return (
      <div className="mobile-showcase-section" id="showcase">
        <div className="content-wrapper">
          <div className="mobile-showcase-header">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>Featured Portfolio</span>
            <h2>Luxury Estates</h2>
          </div>
          <div className="mobile-showcase-list">
            {properties.map((prop, idx) => (
              <div className="mobile-showcase-card" key={idx}>
                <div className="mobile-card-img-box">
                  <img src={prop.img} alt={prop.title} className="mobile-card-img" />
                </div>
                <div className="mobile-card-text">
                  <span className="mobile-card-meta" style={{ color: 'var(--accent-gold)' }}>{prop.label}</span>
                  <h3>{prop.title}</h3>
                  <p>{prop.desc}</p>
                  <div className="mobile-card-metrics">
                    <div className="metric">
                      <span className="val">{prop.area}</span>
                      <span className="lbl">Location</span>
                    </div>
                    <div className="metric">
                      <span className="val">{prop.glass}</span>
                      <span className="lbl">Scope</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="horizontal-scroll-pin" ref={pinRef} id="showcase" data-cursor="scroll">
      <div className="horizontal-scroll-container" ref={containerRef}>
        {properties.map((prop, idx) => (
          <section className="horizontal-section-slide" key={idx}>
            <div className="slide-inner-grid">
              <div className="slide-content-left">
                <span className="slide-meta-label" style={{ color: 'var(--accent-gold)' }}>{prop.label}</span>
                <h2 className="slide-title">{prop.title}</h2>
                <p className="slide-desc">{prop.desc}</p>
              </div>

              <TiltImage src={prop.img} alt={prop.title} coords={prop.coords} />
            </div>
          </section>
        ))}
      </div>

      {/* Dynamic Slide Progress Tracker */}
      <div className="showcase-progress-track">
        <div className="showcase-progress-bar" />
      </div>
    </div>
  );
}

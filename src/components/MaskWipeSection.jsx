import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MaskWipeSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function MaskWipeSection() {
  const containerRef = useRef(null);
  const topPanelRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const container = containerRef.current;
      const topPanel = topPanelRef.current;

      // Mask wipe animation using GSAP ScrollTrigger
      gsap.fromTo(
        topPanel,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="wipe-container" ref={containerRef} id="vision">
      {/* 1. Underlying Dark Panel */}
      <div className="wipe-panel bottom-dark">
        <div className="wipe-content-box">
          <div className="wipe-text-side">
            <span className="wipe-badge">01 // DESIGN INTEGRITY</span>
            <h2 className="wipe-heading">Uncompromising Standards</h2>
            <p className="wipe-desc">
              We believe architectural excellence is born from the harmony of design and structural integrity. Every development we undertake is guided by a commitment to longevity, precision, and complete regulatory transparency.
            </p>
            <div className="technical-specs-row">
              <div className="spec-item">
                <span className="spec-val">Grade A</span>
                <span className="spec-lbl">Structural Quality</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">100% Clear</span>
                <span className="spec-lbl">Legal Compliance</span>
              </div>
            </div>
          </div>

          <div className="wipe-visual-media">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
              alt="Premium luxury modern villa facade representing design and construction quality" 
              className="wipe-image-placeholder"
            />
          </div>
        </div>
      </div>

      {/* 2. Overlapping Light Panel */}
      <div className="wipe-panel top-light" ref={topPanelRef}>
        <div className="wipe-content-box">
          <div className="wipe-text-side">
            <span className="wipe-badge">02 // FORWARD THINKING</span>
            <h2 className="wipe-heading">Sustainable Value</h2>
            <p className="wipe-desc">
              Building for tomorrow means integrating sustainable infrastructure, modern utility grids, and eco-conscious engineering. We design master-planned spaces that protect your capital and thrive for generations.
            </p>
            <div className="technical-specs-row">
              <div className="spec-item">
                <span className="spec-val">Eco-Grid</span>
                <span className="spec-lbl">Resilient Utilities</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">Generation+</span>
                <span className="spec-lbl">Asset Longevity</span>
              </div>
            </div>
          </div>

          <div className="wipe-visual-media">
            <img 
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" 
              alt="Eco-friendly luxury villa development representing sustainable value" 
              className="wipe-image-placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

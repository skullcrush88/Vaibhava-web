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
            <span className="wipe-badge">01 // LAND DEVELOPMENT</span>
            <h2 className="wipe-heading">Premium Gated Plotting Ventures</h2>
            <p className="wipe-desc">
              We develop residential layouts in fast growing zones of Hyderabad, including Moinabad and Shadnagar. Our plots are fully integrated with wide roads, secure gates, underground power grids, and clear legal approvals.
            </p>
          </div>

          <div className="wipe-visual-media">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Premium land plotting layouts in Hyderabad" 
              className="wipe-image-placeholder"
            />
          </div>
        </div>
      </div>

      {/* 2. Overlapping Light Panel */}
      <div className="wipe-panel top-light" ref={topPanelRef}>
        <div className="wipe-content-box">
          <div className="wipe-text-side">
            <span className="wipe-badge">02 // RESIDENTIAL & COMMERCIAL</span>
            <h2 className="wipe-heading">Modern Luxury Villas and Offices</h2>
            <p className="wipe-desc">
              Our construction team builds luxury villas and commercial business spaces in prime locations such as Jubilee Hills and Hitec City. Every project is crafted with high quality building standards, spacious layouts, and excellent connectivity.
            </p>
            <div className="technical-specs-row">
              <div className="spec-item">
                <span className="spec-val">A Grade</span>
                <span className="spec-lbl">Construction</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">Clear Title</span>
                <span className="spec-lbl">Legal Approvals</span>
              </div>
            </div>
          </div>

          <div className="wipe-visual-media">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury residential and commercial developments" 
              className="wipe-image-placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

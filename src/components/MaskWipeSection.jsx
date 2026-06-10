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
            <span className="wipe-badge">01 // Architectural Shell</span>
            <h2 className="wipe-heading">Framing the Natural Landscape.</h2>
            <p className="wipe-desc">
              At Vibhava Realty, we prioritize spatial geometry. Our luxury developments incorporate minimal structural columns and wide frameless glazing, turning the natural landscape into a dynamic canvas.
            </p>

          </div>

          <div className="wipe-visual-media">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Structural Glazing Steel Grid" 
              className="wipe-image-placeholder"
            />
          </div>
        </div>
      </div>

      {/* 2. Overlapping Light Panel */}
      <div className="wipe-panel top-light" ref={topPanelRef}>
        <div className="wipe-content-box">
          <div className="wipe-text-side">
            <span className="wipe-badge">02 // Spatial Interior</span>
            <h2 className="wipe-heading">Infused with Fluid Light.</h2>
            <p className="wipe-desc">
              By removing traditional visual thresholds, our spaces breathe. Natural sunlight flows deeply through sliding systems, blending concrete interiors and garden environments into one fluid living zone.
            </p>
            <div className="technical-specs-row">
              <div className="spec-item">
                <span className="spec-val">4.5m</span>
                <span className="spec-lbl">Ceiling Clearance</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">Double</span>
                <span className="spec-lbl">Thermal Seal</span>
              </div>
            </div>
          </div>

          <div className="wipe-visual-media">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
              alt="Bright Glass interior space" 
              className="wipe-image-placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

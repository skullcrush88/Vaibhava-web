import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Skip Lenis smooth scroll on touch devices to preserve native momentum scroll
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    // Initialize Lenis smooth scrolling for desktop
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      syncTouch: false,
      touchMultiplier: 1.5,
    });

    // Synchronize ScrollTrigger updates with Lenis scrolling
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Hook Lenis into GSAP ticker loop
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerUpdate);
    };
  }, []);

  return <>{children}</>;
}

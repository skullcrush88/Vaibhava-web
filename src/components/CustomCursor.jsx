import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(pointer: coarse)').matches;
  });

  // Motion values for smooth trailing effect
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Find the closest interactive or cursor-tagged element
      const target = e.target.closest('[data-cursor], a, button, select, input, textarea');
      if (target) {
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorType('text');
          setCursorText(customText);
        } else {
          setCursorType('pointer');
          setCursorText('');
        }
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dynamic Trailing Outer Ring */}
      <motion.div
        className={`custom-cursor-ring ${cursorType}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {cursorType === 'text' && (
          <span className="custom-cursor-label">{cursorText}</span>
        )}
      </motion.div>

      {/* Instant Central Dot */}
      <motion.div
        className={`custom-cursor-dot ${cursorType}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}

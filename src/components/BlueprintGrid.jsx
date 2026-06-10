import { useEffect, useState } from 'react';

export default function BlueprintGrid() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized viewport percentage coords
      const xPercent = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const yPercent = ((e.clientY / window.innerHeight) * 100).toFixed(1);
      setCoords({ x: xPercent, y: yPercent });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 4-column structural grids */}
      <div className="technical-grid">
        <div className="col-divider"></div>
        <div className="col-divider"></div>
        <div className="col-divider"></div>
      </div>


    </>
  );
}

const styles = {
  coordsPanel: {
    position: 'fixed',
    bottom: '2.5rem',
    left: '4vw',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    pointerEvents: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.08em',
    color: 'var(--text-muted)',
    opacity: 0.6,
  },
  coordItem: {
    display: 'flex',
    gap: '0.5rem',
  },
  coordLabel: {
    fontWeight: '300',
  },
  coordVal: {
    fontWeight: '500',
    color: 'var(--text-light)',
  }
};

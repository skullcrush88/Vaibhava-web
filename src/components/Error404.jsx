import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ShieldAlert, Terminal, RefreshCw } from 'lucide-react';
import './Error404.css';

export default function Error404({ bypassAction }) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [pixelCoords, setPixelCoords] = useState({ x: 0, y: 0 });
  const [logs, setLogs] = useState([]);
  const [sysTime, setSysTime] = useState('');

  // Update mouse position coordinates (in percentages and pixels)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const xPx = e.clientX - rect.left;
      const yPx = e.clientY - rect.top;
      
      const xPercent = (xPx / rect.width) * 100;
      const yPercent = (yPx / rect.height) * 100;
      
      setCoords({ x: xPercent.toFixed(1), y: yPercent.toFixed(1) });
      setPixelCoords({ x: Math.round(xPx), y: Math.round(yPx) });
      
      // Update CSS variables for mouse-tracking radial glow
      containerRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
      containerRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Format real-time clock and typing logs
  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      const now = new Date();
      setSysTime(now.toUTCString());
    }, 1000);

    // Dynamic terminal log lines sequence
    const logLines = [
      'INITIATING SECTOR RECOVERY PROBE...',
      'STATUS CODE: [404] SUBPATH_NOT_RESOLVED',
      'WARNING: SEGMENT HAS NO PHYSICAL CORRESPONDENCE',
      'ROUTING SYSTEM INTERCEPTED FOR SECURITY...',
      'ATTEMPTING FALLBACK TO PRIMARY ANCHORS...'
    ];

    let index = 0;
    const logTimer = setInterval(() => {
      if (index < logLines.length) {
        setLogs(prev => [...prev, logLines[index]]);
        index++;
      } else {
        clearInterval(logTimer);
      }
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <div className="error-container" ref={containerRef}>
      {/* Background Grids & Scans */}
      <div className="error-grid-bg" />
      <div className="error-radial-glow" />
      <div className="error-scanlines" />
      <div className="error-scanner-bar" />

      {/* Crosshair Indicators */}
      <div className="error-crosshair crosshair-tl" />
      <div className="error-crosshair crosshair-tr" />
      <div className="error-crosshair crosshair-bl" />
      <div className="error-crosshair crosshair-br" />

      {/* System Node & Pulse */}
      <div className="error-system-node">
        <span className="pulse-dot" />
        SYSTEM NODE: VAIBHAVA_PRIMARY_S1
      </div>

      {/* Main content display */}
      <div className="error-content">
        <div className="glitch-wrapper">
          <div className="glitch-code">404</div>
        </div>

        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: '#fcfbf9' }}>
          Sector Not Found
        </h2>
        
        <p style={{ color: 'var(--text-muted-dark)', maxWidth: '480px', fontSize: '0.95rem' }}>
          The requested coordinate system or blueprint does not exist in our primary layout registry.
        </p>

        {/* HUD Data Panel */}
        <div className="error-hud-panel">
          <div className="hud-row">
            <span>REGISTRY SECTOR:</span>
            <span className="hud-value highlight">{window.location.pathname}</span>
          </div>
          <div className="hud-row">
            <span>TIMESTAMP:</span>
            <span className="hud-value">{sysTime || 'SYNCING...'}</span>
          </div>
          <div className="hud-row">
            <span>SYS_ERROR:</span>
            <span className="hud-value highlight" style={{ color: '#ff6b6b' }}>
              ERR_CODE_0x0194
            </span>
          </div>
          
          {/* Terminal Console Logs */}
          <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(205,162,107,0.15)', paddingTop: '0.75rem' }}>
            <span className="mono-label" style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.5rem' }}>
              <Terminal size={10} /> TERMINAL CONSOLE
            </span>
            <div style={{ minHeight: '80px', color: '#a2a5a9', fontSize: '0.72rem', lineHeight: '1.4' }}>
              {logs.map((log, idx) => (
                <div key={idx} style={{ opacity: 0.85 }}>
                  &gt; {log}
                </div>
              ))}
              {logs.length < 5 && <div className="pulse-dot" style={{ width: '4px', height: '4px', margin: '0' }} />}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => window.location.href = '/'}>
            <RefreshCw size={14} /> Reset Grid
          </button>
        </div>
      </div>

      {/* Coordinate panel in bottom corner */}
      <div className="error-coords-hud">
        <div>X_AXIS: {coords.x}% / {pixelCoords.x}px</div>
        <div>Y_AXIS: {coords.y}% / {pixelCoords.y}px</div>
        <div>MATRIX: RESOLVING_GRID</div>
      </div>
    </div>
  );
}

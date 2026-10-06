import { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setPhase('reveal'), 400);
        setTimeout(() => {
          setPhase('done');
          onComplete();
        }, 1400);
      } else {
        setProgress(Math.floor(current));
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      ref={containerRef}
      className={`loading-screen ${phase === 'reveal' ? 'is-leaving' : ''}`}
    >
      <div className="loading-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="loading-grid-line" />
        ))}
      </div>

      <div className="loading-content">
        <div className="loading-studio">
          <span className="loading-studio-label">ROHIT R KULKARNI</span>
        </div>

        <div className="loading-meta">
          <span className="loading-number arch-number">
            {String(progress).padStart(3, '0')}
          </span>
        </div>

        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <div className="loading-status">
          <span className="loading-status-text">
            {progress < 30
              ? 'Initializing space'
              : progress < 60
              ? 'Loading architectural experience'
              : progress < 90
              ? 'Composing environment'
              : 'Ready'}
          </span>
        </div>
      </div>

      <div className="loading-coordinates arch-coordinates">
        16.8302° N, 75.7100° E — VIJAYAPURA
      </div>
    </div>
  );
}

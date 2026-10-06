import { useRef, useState, useEffect, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ArchScene from '../3D/ArchScene';
import './HeroSection.css';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScene, setShowScene] = useState(true);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    // Check for WebGL support and device capability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setShowScene(false);
      }
    } catch {
      setShowScene(false);
    }

    // Reduce on mobile
    if (window.innerWidth < 768) {
      setShowScene(false);
    }

    const timer = setTimeout(() => setIsIntroComplete(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero ${isIntroComplete ? 'is-ready' : ''}`}
      onMouseMove={handleMouseMove}
      id="hero"
    >
      {/* 3D Scene */}
      {showScene && (
        <div className="hero-canvas">
          <Canvas
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            shadows
          >
            <Suspense fallback={null}>
              <PerspectiveCamera
                makeDefault
                position={[6, 4, 8]}
                fov={35}
                near={0.1}
                far={100}
              />
              <ArchScene mouseX={mousePos.x} mouseY={mousePos.y} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
              <fog attach="fog" args={['#0A0A0A', 8, 25]} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Grain overlay */}
      <div className="hero-grain" />

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-top">
          <div className="hero-coordinates arch-coordinates">
            <span>16.8302° N</span>
            <span>75.7100° E</span>
          </div>
        </div>

        <div className="hero-center">
          <div className="hero-name-wrapper">
            <h1 className="hero-name">
              <span className="hero-name-line">
                <span className="hero-name-text">Rohit R</span>
              </span>
              <span className="hero-name-line">
                <span className="hero-name-text hero-name-text--light">Kulkarni</span>
              </span>
            </h1>
          </div>

          <div className="hero-statement-wrapper">
            <p className="hero-statement">
              Designing spaces that feel meaningful,<br />
              functional, and deeply connected to people and place.
            </p>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-scroll-indicator">
            <div className="hero-scroll-line" />
            <span className="hero-scroll-text text-label">Scroll to explore</span>
          </div>

          <div className="hero-meta">
            <span className="text-label">B.Arch 2022–2027</span>
            <span className="text-label">Vijayapura, Karnataka</span>
          </div>
        </div>
      </div>

      {/* Architectural grid lines */}
      <div className="hero-grid-overlay">
        <div className="hero-grid-line hero-grid-line--v" style={{ left: '25%' }} />
        <div className="hero-grid-line hero-grid-line--v" style={{ left: '50%' }} />
        <div className="hero-grid-line hero-grid-line--v" style={{ left: '75%' }} />
        <div className="hero-grid-line hero-grid-line--h" style={{ top: '33.33%' }} />
        <div className="hero-grid-line hero-grid-line--h" style={{ top: '66.66%' }} />
      </div>
    </section>
  );
}

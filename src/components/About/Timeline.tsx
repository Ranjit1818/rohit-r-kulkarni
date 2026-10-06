import { useRef, useEffect, useState } from 'react';
import { architectInfo } from '../../data/projects';
import './Timeline.css';

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`timeline section ${isVisible ? 'is-visible' : ''}`}
      id="experience"
    >
      <div className="container">
        <div className="timeline-header">
          <div className="timeline-header-label">
            <span className="text-overline">Experience</span>
            <div className="arch-line timeline-header-line" />
          </div>

          <h2 className="timeline-title">
            <span className="timeline-title-line">
              <span>Professional</span>
            </span>
            <span className="timeline-title-line">
              <span>Journey</span>
            </span>
          </h2>
        </div>

        <div className="timeline-content">
          <div className="timeline-line" />

          {architectInfo.experience.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="timeline-item-marker">
                <div className="timeline-item-dot" />
              </div>

              <div className="timeline-item-content">
                <div className="timeline-item-year arch-number">{exp.year}</div>
                <div className="timeline-item-info">
                  <h3 className="timeline-item-role">{exp.role}</h3>
                  <div className="timeline-item-meta">
                    <span className="timeline-item-firm">{exp.firm}</span>
                    <span className="timeline-item-divider">·</span>
                    <span className="timeline-item-location">{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

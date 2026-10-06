import { useRef, useEffect, useState } from 'react';
import { architectInfo } from '../../data/projects';
import './AboutSection.css';

export default function AboutSection() {
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
      className={`about section ${isVisible ? 'is-visible' : ''}`}
      id="about"
    >
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <div className="about-header-label">
            <span className="text-overline">About</span>
            <div className="arch-line about-header-line" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="about-grid">
          {/* Left: Name and Bio */}
          <div className="about-left">
            <div className="about-name-block">
              <h2 className="about-name">
                <span className="about-name-line">
                  <span>{architectInfo.fullName}</span>
                </span>
              </h2>
              <span className="about-title text-label">{architectInfo.title}</span>
            </div>

            <div className="about-bio">
              <p className="about-bio-text">{architectInfo.shortBio}</p>
            </div>

            <div className="about-philosophy">
              <h3 className="about-section-title text-overline">Philosophy</h3>
              <p className="about-philosophy-text">{architectInfo.philosophy}</p>
            </div>

            <div className="about-detail-block">
              <h3 className="about-section-title text-overline">Approach</h3>
              <ul className="about-list">
                {architectInfo.approach.map((item, i) => (
                  <li key={i} className="about-list-item">
                    <span className="about-list-marker" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Details */}
          <div className="about-right">
            <div className="about-detail-block">
              <h3 className="about-section-title text-overline">Expertise</h3>
              <div className="about-tags">
                {architectInfo.expertise.map((item, i) => (
                  <span key={i} className="about-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="about-detail-block">
              <h3 className="about-section-title text-overline">Software & Skills</h3>
              <div className="about-tags">
                {architectInfo.skills.map((item, i) => (
                  <span key={i} className="about-tag about-tag--skill">{item}</span>
                ))}
              </div>
            </div>

            <div className="about-detail-block">
              <h3 className="about-section-title text-overline">Education</h3>
              <div className="about-education">
                {architectInfo.education.map((edu, i) => (
                  <div key={i} className="about-edu-item">
                    <span className="about-edu-year arch-number">{edu.year}</span>
                    <div className="about-edu-info">
                      <span className="about-edu-degree">{edu.degree}</span>
                      <span className="about-edu-institution">{edu.institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-detail-block">
              <h3 className="about-section-title text-overline">Workshops</h3>
              <div className="about-tags">
                {architectInfo.workshops.map((item, i) => (
                  <span key={i} className="about-tag about-tag--workshop">{item}</span>
                ))}
              </div>
            </div>

            <div className="about-detail-block">
              <h3 className="about-section-title text-overline">Recognition</h3>
              <div className="about-awards">
                {architectInfo.awards.map((award, i) => (
                  <div key={i} className="about-award-item">
                    <span className="about-award-year arch-number">{award.year}</span>
                    <span className="about-award-title">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-cv">
              <a
                href="/cv/rohit-kulkarni-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-cv-button"
                data-cursor="Download"
              >
                <span className="about-cv-text">Download CV</span>
                <span className="about-cv-icon">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './ProjectShowcase.css';

function ProjectCard({ project, index }: {
  project: typeof projects[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    // Use a colored placeholder if image doesn't exist
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.style.background = `linear-gradient(135deg, ${project.color}22, ${project.color}44)`;
    }
  }, [project.color]);

  return (
    <div
      ref={cardRef}
      className={`project-card project-card--${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'is-visible' : ''}`}
    >
      <Link
        to={`/project/${project.id}`}
        className="project-card-link"
        data-cursor="View Project →"
      >
        <div className="project-card-image-wrapper">
          <div
            className="project-card-image-container"
            style={{
              background: imgLoaded ? undefined : `linear-gradient(145deg, ${project.color}15, ${project.color}30)`,
            }}
          >
            <img
              src={project.heroImage}
              alt={`${project.title} — ${project.type}`}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={handleImageError}
              className={`project-card-image ${imgLoaded ? 'is-loaded' : ''}`}
            />
            <div className="project-card-image-overlay" />
          </div>

          {/* Architectural frame lines */}
          <div className="project-card-frame">
            <div className="project-card-frame-corner project-card-frame-corner--tl" />
            <div className="project-card-frame-corner project-card-frame-corner--br" />
          </div>
        </div>

        <div className="project-card-info">
          <div className="project-card-meta">
            <span className="project-card-number arch-number">
              {project.number}
            </span>
            <span className="project-card-divider">—</span>
            <span className="project-card-type text-label">{project.type}</span>
          </div>

          <h3 className="project-card-title">{project.title}</h3>

          <div className="project-card-details">
            <span className="project-card-detail">{project.location}</span>
            <span className="project-card-detail">{project.year}</span>
            <span className="project-card-detail project-card-status">{project.status}</span>
          </div>

          <p className="project-card-description">
            {project.description.substring(0, 120)}...
          </p>

          <div className="project-card-cta">
            <span className="project-card-cta-text">Explore project</span>
            <span className="project-card-cta-arrow">→</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const header = document.getElementById('work-header');
    if (header) observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="projects-showcase section" id="work">
      <div className="container">
        <div
          id="work-header"
          className={`projects-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="projects-header-label">
            <span className="text-overline">Selected Work</span>
            <div className="arch-line projects-header-line" />
          </div>

          <h2 className="projects-header-title">
            <span className="projects-header-title-line">
              <span>A Portfolio of</span>
            </span>
            <span className="projects-header-title-line">
              <span>Architectural Intent</span>
            </span>
          </h2>

          <p className="projects-header-description">
            Each project is a response to its unique conditions — site, climate, culture,
            and the aspirations of its inhabitants. Explore the work.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

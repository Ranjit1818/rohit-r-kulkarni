import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects, type ProjectImage } from '../data/projects';
import './ProjectPage.css';

function ImageWithFallback({
  src,
  alt,
  className,
  style,
  color,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`project-img-wrap ${className || ''}`}
      style={{
        ...style,
        background: !loaded || errored
          ? `linear-gradient(145deg, ${color || '#1a1918'}22, ${color || '#1a1918'}44)`
          : undefined,
      }}
    >
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`project-img ${loaded ? 'is-loaded' : ''}`}
        />
      )}
      {errored && (
        <div className="project-img-placeholder">
          <span className="project-img-placeholder-text">{alt}</span>
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const project = projects.find((p: typeof projects[0]) => p.id === id);
  const projectIndex = projects.findIndex((p: typeof projects[0]) => p.id === id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  const handleBack = useCallback(() => {
    navigate('/');
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [navigate]);

  if (!project) {
    return (
      <div className="project-page-empty">
        <h2>Project not found</h2>
        <Link to="/">Return home</Link>
      </div>
    );
  }

  return (
    <div ref={pageRef} className={`project-page ${isReady ? 'is-ready' : ''}`}>
      {/* Back Navigation */}
      <button className="project-back" onClick={handleBack} data-cursor="Back">
        <span className="project-back-arrow">←</span>
        <span className="project-back-text">All Projects</span>
      </button>

      {/* Hero */}
      <section className="project-hero">
        <div className="project-hero-content container">
          <div className="project-hero-meta">
            <span className="project-hero-number arch-number">{project.number}</span>
            <span className="project-hero-type text-label">{project.type}</span>
          </div>

          <h1 className="project-hero-title">{project.title}</h1>

          <div className="project-hero-details">
            <div className="project-hero-detail">
              <span className="text-label">Location</span>
              <span className="project-hero-detail-value">{project.location}</span>
            </div>
            <div className="project-hero-detail">
              <span className="text-label">Year</span>
              <span className="project-hero-detail-value">{project.year}</span>
            </div>
            <div className="project-hero-detail">
              <span className="text-label">Area</span>
              <span className="project-hero-detail-value">{project.area}</span>
            </div>
            <div className="project-hero-detail">
              <span className="text-label">Status</span>
              <span className="project-hero-detail-value project-status-accent">{project.status}</span>
            </div>
            <div className="project-hero-detail">
              <span className="text-label">Role</span>
              <span className="project-hero-detail-value">{project.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="project-hero-image">
        <ImageWithFallback
          src={project.heroImage}
          alt={`${project.title} — hero`}
          className="project-hero-img"
          color={project.color}
        />
      </section>

      {/* Statement */}
      <section className="project-statement section">
        <div className="container">
          <div className="project-statement-content">
            <span className="text-overline">Project Statement</span>
            <p className="project-statement-text">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="project-concept section">
        <div className="container">
          <div className="project-section-header">
            <span className="text-overline">Concept</span>
            <div className="arch-line" style={{ maxWidth: 80 }} />
          </div>
          <p className="project-concept-text">{project.concept}</p>

          {project.sketches.length > 0 && (
            <div className="project-concept-sketches">
              {project.sketches.map((sketch: ProjectImage, i: number) => (
                <div key={i} className="project-sketch-item" data-cursor="Zoom">
                  <ImageWithFallback
                    src={sketch.src}
                    alt={sketch.alt}
                    color={project.color}
                  />
                  {sketch.caption && (
                    <span className="project-image-caption text-label">{sketch.caption}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="project-gallery section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Gallery</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
            </div>
          </div>

          <div className="project-gallery-grid container">
            {project.gallery.map((img: ProjectImage, i: number) => (
              <div
                key={i}
                className={`project-gallery-item project-gallery-item--${
                  i === 0 ? 'full' : i % 3 === 0 ? 'full' : 'half'
                }`}
                data-cursor="View"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  color={project.color}
                />
                {img.caption && (
                  <span className="project-image-caption text-label">{img.caption}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Plans */}
      {project.plans.length > 0 && (
        <section className="project-plans section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Plans</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
            </div>

            <div className="project-drawings-grid">
              {project.plans.map((plan: ProjectImage, i: number) => (
                <div key={i} className="project-drawing-item" data-cursor="Zoom">
                  <ImageWithFallback
                    src={plan.src}
                    alt={plan.alt}
                    color={project.color}
                  />
                  {plan.caption && (
                    <span className="project-image-caption text-label">{plan.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sections */}
      {project.sections.length > 0 && (
        <section className="project-sections section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Sections</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
            </div>

            <div className="project-drawings-grid">
              {project.sections.map((sec: ProjectImage, i: number) => (
                <div key={i} className="project-drawing-item" data-cursor="Zoom">
                  <ImageWithFallback
                    src={sec.src}
                    alt={sec.alt}
                    color={project.color}
                  />
                  {sec.caption && (
                    <span className="project-image-caption text-label">{sec.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Drawings / Elevations */}
      {project.drawings.length > 0 && (
        <section className="project-elevations section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Drawings</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
            </div>

            <div className="project-drawings-grid">
              {project.drawings.map((drw: ProjectImage, i: number) => (
                <div key={i} className="project-drawing-item" data-cursor="Zoom">
                  <ImageWithFallback
                    src={drw.src}
                    alt={drw.alt}
                    color={project.color}
                  />
                  {drw.caption && (
                    <span className="project-image-caption text-label">{drw.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials */}
      {project.materials.length > 0 && (
        <section className="project-materials section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Materiality</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
            </div>

            <div className="project-materials-grid">
              {project.materials.map((mat: ProjectImage, i: number) => (
                <div key={i} className="project-material-item">
                  <ImageWithFallback
                    src={mat.src}
                    alt={mat.alt}
                    color={project.color}
                  />
                  {mat.caption && (
                    <span className="project-image-caption text-label">{mat.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Info */}
      <section className="project-info section">
        <div className="container">
          <div className="project-section-header">
            <span className="text-overline">Project Information</span>
            <div className="arch-line" style={{ maxWidth: 80 }} />
          </div>

          <div className="project-info-grid">
            <div className="project-info-item">
              <span className="text-label">Client</span>
              <span className="project-info-value">{project.client}</span>
            </div>
            <div className="project-info-item">
              <span className="text-label">Architect</span>
              <span className="project-info-value">Rohit R Kulkarni</span>
            </div>
            <div className="project-info-item">
              <span className="text-label">Role</span>
              <span className="project-info-value">{project.role}</span>
            </div>
            <div className="project-info-item">
              <span className="text-label">Year</span>
              <span className="project-info-value">{project.year}</span>
            </div>
            <div className="project-info-item">
              <span className="text-label">Location</span>
              <span className="project-info-value">{project.location}</span>
            </div>
            <div className="project-info-item">
              <span className="text-label">Status</span>
              <span className="project-info-value">{project.status}</span>
            </div>
            {project.collaborators.length > 0 && (
              <div className="project-info-item project-info-item--full">
                <span className="text-label">Collaborators</span>
                <span className="project-info-value">
                  {project.collaborators.join(', ')}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="project-next">
          <Link
            to={`/project/${nextProject.id}`}
            className="project-next-link"
            data-cursor="Next →"
          >
            <div className="container">
              <div className="project-next-content">
                <span className="text-overline">Next Project</span>
                <div className="project-next-info">
                  <span className="project-next-number arch-number">{nextProject.number}</span>
                  <h2 className="project-next-title">{nextProject.title}</h2>
                </div>
                <span className="project-next-type text-label">
                  {nextProject.type} — {nextProject.location}
                </span>
              </div>
            </div>

            <div
              className="project-next-bg"
              style={{
                background: `linear-gradient(145deg, ${nextProject.color}15, ${nextProject.color}30)`,
              }}
            />
          </Link>
        </section>
      )}
    </div>
  );
}

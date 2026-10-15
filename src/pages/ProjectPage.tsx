import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects, type ProjectImage } from '../data/projects';
import './ProjectPage.css';

function ImageWithFallback({
  src,
  alt,
  className,
  style,
  color,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  onClick?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`project-img-wrap ${className || ''} ${onClick ? 'is-clickable' : ''}`}
      style={{
        ...style,
        background: !loaded || errored
          ? `linear-gradient(145deg, ${color || '#1a1918'}22, ${color || '#1a1918'}44)`
          : undefined,
      }}
      onClick={onClick}
    >
      {!errored && (
        <img
          src={encodeURI(src)}
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
      {onClick && loaded && (
        <div className="project-img-hover-hint">
          <span className="project-img-hover-icon">⤢</span>
          <span className="project-img-hover-text">Inspect Sheet</span>
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

  // Lightbox state
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const project = projects.find((p) => p.id === id);
  const projectIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  // All distinct images for the lightbox viewer
  const allMediaImages = useMemo(() => {
    if (!project) return [];
    const map = new Map<string, ProjectImage>();

    // Add hero first
    if (project.heroImage) {
      map.set(project.heroImage, {
        src: project.heroImage,
        alt: `${project.title} — Primary View`,
        caption: 'Primary Architectural Perspective',
      });
    }

    // Add gallery
    project.gallery?.forEach((img) => {
      if (!map.has(img.src)) map.set(img.src, img);
    });

    // Add drawings / plans / sections
    project.drawings?.forEach((img) => {
      if (!map.has(img.src)) map.set(img.src, img);
    });
    project.plans?.forEach((img) => {
      if (!map.has(img.src)) map.set(img.src, img);
    });
    project.sections?.forEach((img) => {
      if (!map.has(img.src)) map.set(img.src, img);
    });

    return Array.from(map.values());
  }, [project]);

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

  const openLightbox = useCallback((src: string) => {
    const idx = allMediaImages.findIndex((img) => img.src === src);
    if (idx !== -1) {
      setActiveImageIndex(idx);
      setIsZoomed(false);
    }
  }, [allMediaImages]);

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
    setIsZoomed(false);
  }, []);

  const nextImage = useCallback(() => {
    if (activeImageIndex === null || allMediaImages.length === 0) return;
    setActiveImageIndex((activeImageIndex + 1) % allMediaImages.length);
    setIsZoomed(false);
  }, [activeImageIndex, allMediaImages.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null || allMediaImages.length === 0) return;
    setActiveImageIndex((activeImageIndex - 1 + allMediaImages.length) % allMediaImages.length);
    setIsZoomed(false);
  }, [activeImageIndex, allMediaImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, closeLightbox, nextImage, prevImage]);

  if (!project) {
    return (
      <div className="project-page-empty">
        <h2>Project not found</h2>
        <Link to="/">Return home</Link>
      </div>
    );
  }

  const activeMedia = activeImageIndex !== null ? allMediaImages[activeImageIndex] : null;

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
      {project.heroImage && (
        <section className="project-hero-image" onClick={() => openLightbox(project.heroImage)}>
          <ImageWithFallback
            src={project.heroImage}
            alt={`${project.title} — hero`}
            className="project-hero-img"
            color={project.color}
          />
        </section>
      )}

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
            <span className="text-overline">Concept & Approach</span>
            <div className="arch-line" style={{ maxWidth: 80 }} />
          </div>
          <p className="project-concept-text">{project.concept}</p>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Visualizations & Perspectives</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
              <span className="project-gallery-counter text-label">{project.gallery.length} Plates</span>
            </div>
          </div>

          <div className="project-gallery-grid container">
            {project.gallery.map((img: ProjectImage, i: number) => (
              <div
                key={i}
                className={`project-gallery-item project-gallery-item--${
                  i === 0 ? 'full' : i % 3 === 0 ? 'full' : 'half'
                }`}
                data-cursor="Inspect"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  color={project.color}
                  onClick={() => openLightbox(img.src)}
                />
                {img.caption && (
                  <span className="project-image-caption text-label">{img.caption}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Drawings / Technical Sheets */}
      {project.drawings && project.drawings.length > 0 && (
        <section className="project-elevations section">
          <div className="container">
            <div className="project-section-header">
              <span className="text-overline">Architectural & Technical Documentation</span>
              <div className="arch-line" style={{ maxWidth: 80 }} />
              <span className="project-gallery-counter text-label">{project.drawings.length} Drawings</span>
            </div>

            <div className="project-drawings-grid">
              {project.drawings.map((drw: ProjectImage, i: number) => (
                <div key={i} className="project-drawing-item" data-cursor="Inspect">
                  <ImageWithFallback
                    src={drw.src}
                    alt={drw.alt}
                    color={project.color}
                    onClick={() => openLightbox(drw.src)}
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

      {/* Project Info */}
      <section className="project-info section">
        <div className="container">
          <div className="project-section-header">
            <span className="text-overline">Project Specifications</span>
            <div className="arch-line" style={{ maxWidth: 80 }} />
          </div>

          <div className="project-info-grid">
            <div className="project-info-item">
              <span className="text-label">Client / Studio</span>
              <span className="project-info-value">{project.client}</span>
            </div>
            <div className="project-info-item">
              <span className="text-label">Architect / Designer</span>
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
            {project.collaborators && project.collaborators.length > 0 && (
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

      {/* Architectural Lightbox Modal */}
      {activeMedia && (
        <div className="arch-lightbox" onClick={closeLightbox}>
          <div className="arch-lightbox-overlay" />

          {/* Top Bar */}
          <div className="arch-lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="arch-lightbox-title-wrap">
              <span className="arch-lightbox-project-name">{project.title}</span>
              <span className="arch-lightbox-divider">/</span>
              <span className="arch-lightbox-caption">{activeMedia.caption || activeMedia.alt}</span>
            </div>

            <div className="arch-lightbox-controls">
              <button
                type="button"
                className="arch-lightbox-ctrl-btn"
                onClick={() => setIsZoomed(!isZoomed)}
                title="Toggle Zoom"
              >
                {isZoomed ? 'Actual Size (1:1)' : 'Fit View'}
              </button>
              <button
                type="button"
                className="arch-lightbox-close-btn"
                onClick={closeLightbox}
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div
            className={`arch-lightbox-body ${isZoomed ? 'is-zoomed' : ''}`}
            onClick={(e) => {
              // Click on image toggles zoom
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
          >
            <img
              src={encodeURI(activeMedia.src)}
              alt={activeMedia.alt}
              className="arch-lightbox-image"
            />
          </div>

          {/* Nav buttons */}
          {allMediaImages.length > 1 && (
            <>
              <button
                type="button"
                className="arch-lightbox-nav arch-lightbox-nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous sheet"
              >
                ‹
              </button>
              <button
                type="button"
                className="arch-lightbox-nav arch-lightbox-nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next sheet"
              >
                ›
              </button>
            </>
          )}

          {/* Bottom Bar Counter */}
          <div className="arch-lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <span className="arch-lightbox-counter arch-number">
              {String((activeImageIndex ?? 0) + 1).padStart(2, '0')} / {String(allMediaImages.length).padStart(2, '0')}
            </span>
            <span className="arch-lightbox-hint">Use ← → arrow keys to navigate · ESC to close</span>
          </div>
        </div>
      )}
    </div>
  );
}

import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects, type Project } from '../../data/projects';
import './ProjectShowcase.css';

type FilterCategory = 'all' | 'academic' | 'hospitality' | 'competition' | 'technical' | 'residential';

interface FilterOption {
  key: FilterCategory;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'academic', label: 'Academic & Campus' },
  { key: 'hospitality', label: 'Hospitality & Resort' },
  { key: 'competition', label: 'Competition Awards' },
  { key: 'technical', label: 'Working Drawings' },
  { key: 'residential', label: 'Residential Freelance' },
];

function ProjectCard({ project, index }: {
  project: Project;
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
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.style.background = `linear-gradient(135deg, ${project.color}22, ${project.color}44)`;
    }
  }, [project.color]);

  const totalMedia = (project.gallery?.length || 0) + (project.drawings?.length || 0);
  const mediaLabel = project.category === 'technical'
    ? `${project.gallery.length} Sheets`
    : `${totalMedia || 1} Views`;

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
              src={encodeURI(project.heroImage)}
              alt={`${project.title} — ${project.type}`}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={handleImageError}
              className={`project-card-image ${imgLoaded ? 'is-loaded' : ''}`}
            />
            <div className="project-card-image-overlay" />

            {/* Media count badge */}
            <div className="project-card-badge">
              <span className="project-card-badge-dot" style={{ backgroundColor: project.color }} />
              <span className="project-card-badge-text">{mediaLabel}</span>
            </div>
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
            {project.description.length > 150
              ? `${project.description.substring(0, 145)}...`
              : project.description}
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
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const header = document.getElementById('work-header');
    if (header) observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
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
            Each project is a rigorous response to site, climate, tectonic expression, and spatial experience — spanning institutional campuses, terrain resorts, heritage museums, technical working drawings, and residential architecture.
          </p>

          {/* Category Filter Pills */}
          <div className="projects-filters">
            {FILTER_OPTIONS.map((opt) => {
              const count = counts[opt.key] || 0;
              if (count === 0 && opt.key !== 'all') return null;
              const isActive = activeFilter === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setActiveFilter(opt.key)}
                  className={`projects-filter-btn ${isActive ? 'is-active' : ''}`}
                >
                  <span className="projects-filter-label">{opt.label}</span>
                  <span className="projects-filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from 'react';
import { architectInfo } from '../../data/projects';
import './ContactSection.css';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      className={`contact section ${isVisible ? 'is-visible' : ''}`}
      id="contact"
    >
      <div className="container">
        <div className="contact-header">
          <div className="contact-header-label">
            <span className="text-overline">Contact</span>
            <div className="arch-line contact-header-line" />
          </div>

          <h2 className="contact-headline">
            <span className="contact-headline-line">
              <span>Let's Build Something</span>
            </span>
            <span className="contact-headline-line">
              <span>Worth Remembering.</span>
            </span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info-block">
              <span className="contact-info-label text-label">Email</span>
              <a
                href={`mailto:${architectInfo.contact.email}`}
                className="contact-info-value"
                data-cursor=""
              >
                {architectInfo.contact.email}
              </a>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-label text-label">Phone</span>
              <a
                href={`tel:${architectInfo.contact.phone}`}
                className="contact-info-value"
                data-cursor=""
              >
                {architectInfo.contact.phone}
              </a>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-label text-label">Location</span>
              <span className="contact-info-value">{architectInfo.contact.location}</span>
            </div>

            <div className="contact-social">
              <a
                href={architectInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                data-cursor=""
              >
                LinkedIn
              </a>
              <a
                href={architectInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                data-cursor=""
              >
                Instagram
              </a>
              <a
                href={architectInfo.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                data-cursor=""
              >
                Behance
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name" className="contact-field-label text-label">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="contact-field-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email" className="contact-field-label text-label">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="contact-field-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-project" className="contact-field-label text-label">
                Project Type
              </label>
              <input
                type="text"
                id="contact-project"
                name="project"
                value={formState.project}
                onChange={handleChange}
                placeholder="e.g., Residential, Cultural, Commercial"
                className="contact-field-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message" className="contact-field-label text-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact-field-textarea"
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              data-cursor="Send"
              disabled={isSubmitted}
            >
              <span className="contact-submit-text">
                {isSubmitted ? 'Message Sent' : 'Send Message'}
              </span>
              <span className="contact-submit-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

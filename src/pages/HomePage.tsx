import HeroSection from '../components/Hero/HeroSection';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import AboutSection from '../components/About/AboutSection';
import Timeline from '../components/About/Timeline';
import ContactSection from '../components/Contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectShowcase />
      <AboutSection />
      <Timeline />
      <ContactSection />
    </>
  );
}

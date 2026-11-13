import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { InitialLoader } from './components/common/InitialLoader';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackgroundCanvas } from './components/common/BackgroundCanvas';
import { Navbar } from './components/common/Navbar';
import { ResumeModal } from './components/common/ResumeModal';
import { ProjectModal } from './components/common/ProjectModal';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { ProjectShowcase } from './components/sections/ProjectShowcase';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import type { Project } from './types';

export const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#F5F5F0] transition-colors duration-500 overflow-x-hidden">
      {/* Initial Minimal Monogram Splash */}
      <AnimatePresence>
        {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Background Particle Canvas */}
      <BackgroundCanvas />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Floating Glass Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <TechStack />
        <ProjectShowcase onSelectProject={(p) => setSelectedProject(p)} />
        <Achievements />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

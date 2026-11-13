import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Layers, CheckCircle, Activity, Award } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#101013] text-[#F5F5F0] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#151518]/90">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono-tech px-2 py-0.5 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/30">
                  PROJECT {project.number}
                </span>
                <span className="text-xs font-mono-tech text-neutral-400">
                  {project.tag}
                </span>
              </div>
              <h2 className="font-editorial text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">{project.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#C5FF4A]" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {project.achievement && (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 text-[#C5FF4A]">
                <Award className="w-5 h-5 shrink-0" />
                <div className="text-xs font-mono-tech font-semibold">
                  {project.achievement}
                </div>
              </div>
            )}

            {/* Metrics Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono-tech">
                    {s.label}
                  </div>
                  <div className="text-sm font-bold text-white mt-1 font-mono-tech">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Narrative Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-mono-tech tracking-wider text-[#C5FF4A] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                System Overview & Purpose
              </h3>
              <div className="space-y-2 text-sm text-neutral-300 leading-relaxed font-sans">
                {project.longDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Architectural Flow Diagram */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-mono-tech tracking-wider text-[#C5FF4A] flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Data & Pipeline Architecture
              </h3>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono-tech text-xs space-y-2">
                {project.architectureDetails.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#C5FF4A] font-bold">0{idx + 1}.</span>
                    <span className="text-neutral-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-mono-tech tracking-wider text-[#C5FF4A] flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Key Capabilities & Implemented Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-3">
              <div className="text-xs uppercase font-mono-tech tracking-wider text-neutral-400">
                Technologies & Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/[0.05] border border-white/10 text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#151518]/90 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-mono-tech">
              Open source on GitHub
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C5FF4A] text-[#0B0B0D] font-bold text-xs hover:bg-[#b0f530] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

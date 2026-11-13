import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Award,
  Video,
  ShieldAlert,
  Lightbulb,
  ArrowRight,
  Eye,
  CheckCircle,
  RotateCcw,
} from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types';
import { GithubIcon } from '../common/Icons';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const flagshipProjects = PROJECTS.filter((p) => p.isFlagship);

  // Interactive mini-simulations inside preview cards:
  // 1. RetailSense: simulated tracking FPS & count
  const [cctvFrame, setCctvFrame] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCctvFrame((prev) => (prev + 1) % 100);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // 2. RoadSOS: interactive 15s countdown simulator
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(15);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (sosActive && countdown > 0) {
      interval = setInterval(() => setCountdown((c) => c - 1), 1000);
    } else if (countdown === 0) {
      setSosActive(false);
    }
    return () => clearInterval(interval);
  }, [sosActive, countdown]);

  const handleTriggerSOS = () => {
    setCountdown(15);
    setSosActive(true);
  };
  const handleCancelSOS = () => {
    setSosActive(false);
    setCountdown(15);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#C5FF4A]">
              <span className="w-6 h-[1px] bg-[#C5FF4A]" />
              <span>03 // Selected Systems & Software</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              PROJECT GALLERY
            </h2>
            <p className="text-sm font-mono-tech text-neutral-400">
              End-to-end architectures spanning AI computer vision, geospatial emergency apps, and LLM intelligence.
            </p>
          </div>

          <div className="font-mono-tech text-xs text-neutral-400 border border-white/10 px-4 py-2 rounded-xl bg-white/[0.02]">
            <span>Featured Repositories: </span>
            <span className="text-[#C5FF4A] font-bold">3 Architectures</span>
          </div>
        </div>

        {/* Flagship Projects Stack */}
        <div className="space-y-24">
          {flagshipProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all"
              >
                {/* Project Number Watermark */}
                <div className="absolute top-4 right-8 font-sans text-7xl sm:text-9xl font-black tabular-nums text-white/[0.03] pointer-events-none select-none">
                  {project.number}
                </div>

                {/* Left / Info Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/30">
                        PROJECT {project.number}
                      </span>
                      <span className="text-xs font-mono-tech text-neutral-400">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-4xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono-tech text-[#C5FF4A]/90">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.achievement && (
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/25 text-xs text-[#C5FF4A] font-mono-tech">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>{project.achievement}</span>
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-1">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-neutral-300 font-sans"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5FF4A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-5 py-2.5 rounded-xl bg-[#C5FF4A] text-black font-bold text-xs font-mono-tech uppercase tracking-wider hover:bg-[#b0f530] transition-colors flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/[0.04] text-white border border-white/10 hover:border-white/20 font-mono-tech text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#C5FF4A]" />
                      <span>View Code</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  </div>
                </div>

                {/* Right / Interactive Mockup Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl p-5 space-y-4">
                    {/* Top Browser/HUD Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-neutral-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 text-[10px] text-neutral-400">
                          {project.id === 'retailsense-ai'
                            ? 'retailsense-stream.live'
                            : project.id === 'road-sos'
                            ? 'roadsos-telemetry.app'
                            : 'ideanest-evaluator.ai'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#C5FF4A] text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A] animate-ping" />
                        <span>LIVE PREVIEW</span>
                      </div>
                    </div>

                    {/* Simulation Body for Each Project */}
                    {project.id === 'retailsense-ai' && (
                      <div className="space-y-3">
                        <div className="relative h-60 w-full rounded-xl bg-[#0F1115] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
                          {/* Simulated CCTV Camera Grid & Crosshairs */}
                          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                          <div className="flex items-center justify-between z-10 text-[10px] font-mono-tech text-neutral-400">
                            <div className="flex items-center gap-2">
                              <Video className="w-3 h-3 text-red-400 animate-pulse" />
                              <span>CAM_01: MAIN AISLE ENTRY</span>
                            </div>
                            <span className="text-[#C5FF4A]">30.2 FPS // BYTE-TRACK</span>
                          </div>

                          {/* Dynamic Person Detection Bounding Boxes */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                              animate={{
                                x: [0, 20, -15, 0],
                                y: [0, -10, 10, 0],
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                              className="absolute left-1/4 top-1/4 p-2 rounded border border-[#C5FF4A] bg-[#C5FF4A]/10 text-[9px] font-mono-tech text-[#C5FF4A]"
                            >
                              <div className="font-bold">ID #104 : Person (0.94)</div>
                              <div className="text-[8px] text-neutral-300">Age: 24-28 | Male</div>
                              <div className="text-[8px] text-neutral-400">Dwell: 02m 14s</div>
                            </motion.div>

                            <motion.div
                              animate={{
                                x: [0, -25, 10, 0],
                                y: [0, 15, -12, 0],
                              }}
                              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                              className="absolute right-1/4 bottom-1/4 p-2 rounded border border-cyan-400 bg-cyan-400/10 text-[9px] font-mono-tech text-cyan-400"
                            >
                              <div className="font-bold">ID #108 : Person (0.91)</div>
                              <div className="text-[8px] text-neutral-300">Age: 21-25 | Female</div>
                              <div className="text-[8px] text-neutral-400">Dwell: 04m 32s</div>
                            </motion.div>
                          </div>

                          {/* Real-time stats bar */}
                          <div className="z-10 grid grid-cols-3 gap-2 p-2 rounded-lg bg-black/70 border border-white/5 text-[9px] font-mono-tech">
                            <div>
                              <span className="text-neutral-400">Total Entry: </span>
                              <span className="text-white font-bold">{342 + (cctvFrame % 5)}</span>
                            </div>
                            <div>
                              <span className="text-neutral-400">In-Store Now: </span>
                              <span className="text-[#C5FF4A] font-bold">28 People</span>
                            </div>
                            <div>
                              <span className="text-neutral-400">Avg Dwell: </span>
                              <span className="text-white font-bold">4.8 min</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[11px] font-mono-tech text-neutral-400 text-center">
                          Simulated ByteTrack multi-object tracking & demographic extraction pipeline
                        </div>
                      </div>
                    )}

                    {project.id === 'road-sos' && (
                      <div className="space-y-3">
                        <div className="h-60 w-full rounded-xl bg-[#120F11] border border-white/10 p-4 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[10px] font-mono-tech">
                            <span className="text-red-400 flex items-center gap-1.5 font-bold">
                              <ShieldAlert className="w-3.5 h-3.5" />
                              CRASH ALERT / SOS TRIGGER
                            </span>
                            <span className="text-neutral-400">GPS: 11.341° N, 77.717° E</span>
                          </div>

                          {/* Interactive 15-second SOS test widget */}
                          <div className="flex flex-col items-center justify-center space-y-3 py-2">
                            {sosActive ? (
                              <div className="text-center space-y-2">
                                <div className="text-3xl font-black font-mono-tech text-red-500 animate-pulse">
                                  00:{countdown < 10 ? `0${countdown}` : countdown}
                                </div>
                                <div className="text-xs text-neutral-300 font-mono-tech">
                                  Auto-dispatching emergency telemetry in {countdown}s...
                                </div>
                                <button
                                  onClick={handleCancelSOS}
                                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-mono-tech uppercase font-bold flex items-center gap-1.5 mx-auto cursor-pointer"
                                >
                                  <RotateCcw className="w-3.5 h-3.5 text-[#C5FF4A]" />
                                  <span>Cancel Emergency (False Alarm)</span>
                                </button>
                              </div>
                            ) : (
                              <div className="text-center space-y-2">
                                <button
                                  onClick={handleTriggerSOS}
                                  className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black font-editorial tracking-wider text-sm shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all flex items-center gap-2 mx-auto cursor-pointer"
                                >
                                  <ShieldAlert className="w-4 h-4" />
                                  <span>SIMULATE SOS TRIGGER</span>
                                </button>
                                <div className="text-[10px] text-neutral-400 font-mono-tech">
                                  Click to test 15-second countdown failsafe
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Emergency nearby nodes */}
                          <div className="grid grid-cols-2 gap-2 text-[9px] font-mono-tech">
                            <div className="p-1.5 rounded bg-white/[0.03] border border-white/5">
                              <span className="text-neutral-400">Nearest Trauma: </span>
                              <span className="text-neutral-200">1.8 km (Overpass API)</span>
                            </div>
                            <div className="p-1.5 rounded bg-white/[0.03] border border-white/5">
                              <span className="text-neutral-400">Map Mode: </span>
                              <span className="text-[#C5FF4A]">Offline Tile Fallback</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[11px] font-mono-tech text-neutral-400 text-center">
                          Interactive 15-second SOS countdown failsafe & Overpass API location query
                        </div>
                      </div>
                    )}

                    {project.id === 'ideanest' && (
                      <div className="space-y-3">
                        <div className="h-60 w-full rounded-xl bg-[#0D1217] border border-white/10 p-4 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[10px] font-mono-tech">
                            <span className="text-[#C5FF4A] flex items-center gap-1.5 font-bold">
                              <Lightbulb className="w-3.5 h-3.5" />
                              IDEA VALIDATION MATRIX
                            </span>
                            <span className="text-neutral-400">OpenAI Buildathon Finalist</span>
                          </div>

                          {/* Evaluation metric bars */}
                          <div className="space-y-2.5 py-1">
                            <div>
                              <div className="flex justify-between text-[10px] font-mono-tech mb-1">
                                <span className="text-neutral-300">Problem Urgency & TAM</span>
                                <span className="text-[#C5FF4A] font-bold">92%</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#C5FF4A] rounded-full w-[92%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-[10px] font-mono-tech mb-1">
                                <span className="text-neutral-300">Competitor Moat & Defensibility</span>
                                <span className="text-[#C5FF4A] font-bold">88%</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#C5FF4A] rounded-full w-[88%]" />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-[10px] font-mono-tech mb-1">
                                <span className="text-neutral-300">Monetization & Unit Economics</span>
                                <span className="text-[#C5FF4A] font-bold">85%</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#C5FF4A] rounded-full w-[85%]" />
                              </div>
                            </div>
                          </div>

                          {/* Verdict Box */}
                          <div className="p-2 rounded-lg bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 text-[10px] font-mono-tech text-[#C5FF4A] flex items-center justify-between">
                            <span>Composite Score: 88.3 / 100</span>
                            <span className="font-bold">STATUS: HIGH POTENTIAL</span>
                          </div>
                        </div>

                        <div className="text-[11px] font-mono-tech text-neutral-400 text-center">
                          Automated LLM market evaluation & competitor positioning matrix
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

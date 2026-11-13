import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Terminal,
  Cpu,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, VERIFIED_STATS } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t overflow-hidden transition-colors ${
        isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div
            className={`flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] font-semibold ${
              isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
            }`}
          >
            <span
              className={`w-6 h-[1px] ${isDark ? 'bg-[#C5FF4A]' : 'bg-[#4A6310]'}`}
            />
            <span>01 // Editorial Profile</span>
          </div>
          <h2
            className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-[#121212]'
            }`}
          >
            ABOUT VIDHYASRI
          </h2>
          <p
            className={`text-sm font-mono-tech ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            A synthesis of computer science fundamentals, backend rigor, and AI engineering.
          </p>
        </div>

        {/* 2-Column Creative Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Manifesto & Personal Statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl relative overflow-hidden transition-all ${
                isDark
                  ? 'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-white/10'
                  : 'bg-white border-black/10 shadow-md'
              }`}
            >
              {/* Subtle top indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] opacity-70 ${
                  isDark
                    ? 'bg-gradient-to-r from-transparent via-[#C5FF4A] to-transparent'
                    : 'bg-gradient-to-r from-transparent via-[#5D7B1C] to-transparent'
                }`}
              />

              <div className="space-y-6">
                <div
                  className={`flex items-center justify-between text-xs font-mono-tech ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                  }`}
                >
                  <span
                    className={`uppercase tracking-widest font-semibold ${
                      isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                    }`}
                  >
                    Personal Statement
                  </span>
                  <span>Erode, Tamil Nadu</span>
                </div>

                {/* Exact requested text with expressive editorial sizing */}
                <p
                  className={`font-editorial text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight ${
                    isDark ? 'text-white' : 'text-[#121212]'
                  }`}
                >
                  "{PERSONAL_INFO.bio}"
                </p>

                <div
                  className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech ${
                    isDark
                      ? 'border-white/10 text-neutral-400'
                      : 'border-black/10 text-neutral-600 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin
                      className={`w-3.5 h-3.5 ${
                        isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                      }`}
                    />
                    <span>Nandha Engineering College, Erode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar
                      className={`w-3.5 h-3.5 ${
                        isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                      }`}
                    />
                    <span>Class of 2024 – 2028</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Academic Credentials Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl space-y-5 transition-all ${
                isDark
                  ? 'bg-[#151518]/80 border-white/10'
                  : 'bg-white border-black/10 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      isDark
                        ? 'bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 text-[#C5FF4A]'
                        : 'bg-[#5D7B1C]/10 border border-[#5D7B1C]/30 text-[#5D7B1C]'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-editorial text-lg font-bold ${
                        isDark ? 'text-white' : 'text-[#121212]'
                      }`}
                    >
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p
                      className={`text-xs font-mono-tech ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                    >
                      {EDUCATION_DATA.degree}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={`font-mono-tech text-2xl sm:text-3xl font-black ${
                      isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                    }`}
                  >
                    {EDUCATION_DATA.cgpa}
                  </div>
                  <div
                    className={`text-[10px] font-mono-tech ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                    }`}
                  >
                    Cumulative GPA
                  </div>
                </div>
              </div>

              <div
                className={`pt-3 border-t space-y-2 ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
              >
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 text-xs ${
                      isDark ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    <span
                      className={`mt-1 font-bold ${
                        isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                      }`}
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Verified Stats & Engineering Pillars */}
          <div className="lg:col-span-5 space-y-8">
            {/* Stats Counter Grid with perfect baseline alignment & high contrast */}
            <div className="grid grid-cols-2 gap-4">
              {VERIFIED_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all group flex flex-col justify-between min-h-[120px] ${
                    isDark
                      ? 'bg-white/[0.02] border-white/10 hover:border-[#C5FF4A]/40 hover:bg-white/[0.04]'
                      : 'bg-white border-black/10 hover:border-[#5D7B1C]/40 shadow-sm hover:shadow-md'
                  }`}
                >
                  {stat.label === 'LeetCode Problems' ? (
                    <a
                      href={PERSONAL_INFO.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="h-full flex flex-col justify-between cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`font-mono-tech text-3xl sm:text-4xl font-black tracking-tight leading-none transition-colors ${
                            isDark
                              ? 'text-white group-hover:text-[#C5FF4A]'
                              : 'text-[#121212] group-hover:text-[#4A6310]'
                          }`}
                        >
                          {stat.value}
                        </div>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                          }`}
                        />
                      </div>

                      <div className="mt-3 space-y-0.5">
                        <div
                          className={`text-xs font-bold font-mono-tech transition-colors ${
                            isDark ? 'text-neutral-200' : 'text-neutral-900'
                          }`}
                        >
                          {stat.label}
                        </div>
                        <div
                          className={`text-[11px] font-mono-tech transition-colors ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                          }`}
                        >
                          {stat.subtext}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="flex items-start justify-between">
                        <div
                          className={`font-mono-tech text-3xl sm:text-4xl font-black tracking-tight leading-none transition-colors ${
                            isDark
                              ? 'text-white group-hover:text-[#C5FF4A]'
                              : 'text-[#121212] group-hover:text-[#4A6310]'
                          }`}
                        >
                          {stat.value}
                        </div>
                        <span
                          className={`w-2 h-2 rounded-full mt-1.5 transition-colors ${
                            isDark
                              ? 'bg-[#C5FF4A]/60 group-hover:bg-[#C5FF4A]'
                              : 'bg-[#5D7B1C]/60 group-hover:bg-[#5D7B1C]'
                          }`}
                        />
                      </div>

                      <div className="mt-3 space-y-0.5">
                        <div
                          className={`text-xs font-bold font-mono-tech transition-colors ${
                            isDark ? 'text-neutral-200' : 'text-neutral-900'
                          }`}
                        >
                          {stat.label}
                        </div>
                        <div
                          className={`text-[11px] font-mono-tech transition-colors ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                          }`}
                        >
                          {stat.subtext}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Architectural Pillars / Engineering Traits */}
            <div className="space-y-4">
              <div
                className={`text-xs uppercase font-mono-tech tracking-wider ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600 font-semibold'
                }`}
              >
                Core Engineering Strengths
              </div>

              {/* Trait 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-5 rounded-2xl border transition-all space-y-2 ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                    : 'bg-white border-black/10 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark
                        ? 'bg-[#C5FF4A]/10 text-[#C5FF4A]'
                        : 'bg-[#5D7B1C]/10 text-[#5D7B1C]'
                    }`}
                  >
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h4
                    className={`font-editorial text-base font-bold ${
                      isDark ? 'text-white' : 'text-[#121212]'
                    }`}
                  >
                    Algorithmic Rigor & Problem Solving
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  Systematic problem solver with 380+ algorithmic challenges conquered on LeetCode. Strong command over Java, Python, dynamic programming, and data structures.
                </p>
              </motion.div>

              {/* Trait 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`p-5 rounded-2xl border transition-all space-y-2 ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                    : 'bg-white border-black/10 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark
                        ? 'bg-[#C5FF4A]/10 text-[#C5FF4A]'
                        : 'bg-[#5D7B1C]/10 text-[#5D7B1C]'
                    }`}
                  >
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4
                    className={`font-editorial text-base font-bold ${
                      isDark ? 'text-white' : 'text-[#121212]'
                    }`}
                  >
                    Computer Vision & Deep Learning
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  Hands-on experience deploying YOLO, ByteTrack, InsightFace, and PyTorch for real-time spatial object tracking, dwell-time analytics, and facial attribute extraction.
                </p>
              </motion.div>

              {/* Trait 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`p-5 rounded-2xl border transition-all space-y-2 ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                    : 'bg-white border-black/10 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark
                        ? 'bg-[#C5FF4A]/10 text-[#C5FF4A]'
                        : 'bg-[#5D7B1C]/10 text-[#5D7B1C]'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4
                    className={`font-editorial text-base font-bold ${
                      isDark ? 'text-white' : 'text-[#121212]'
                    }`}
                  >
                    Practical Full-Stack Execution
                  </h4>
                </div>
                <p
                  className={`text-xs leading-relaxed font-sans ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  Crafting end-to-end applications from FastAPI REST pipelines and MySQL schema design to modern reactive user interfaces with React, Leaflet, and Capacitor.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

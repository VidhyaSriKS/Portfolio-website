import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  ExternalLink,
  Code,
  ShieldCheck,
  Cloud,
  FileCheck,
} from 'lucide-react';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { LeetCodeIcon } from '../common/Icons';

export const Achievements: React.FC = () => {
  const { isDark } = useTheme();

  const getIcon = (id: string) => {
    switch (id) {
      case 'leetcode-380':
        return <Code className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
      case 'openai-buildathon':
        return <Trophy className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
      case 'startup-tn':
        return <Award className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
      case 'cert-cloud':
        return <Cloud className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
      case 'cert-ethical-hacking':
        return <ShieldCheck className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
      case 'cert-nlp':
        return <FileCheck className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
      default:
        return <Award className={`w-5 h-5 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />;
    }
  };

  return (
    <section
      id="achievements"
      className={`relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t overflow-hidden transition-colors ${
        isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div
              className={`flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] font-semibold ${
                isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
              }`}
            >
              <span
                className={`w-6 h-[1px] ${isDark ? 'bg-[#C5FF4A]' : 'bg-[#4A6310]'}`}
              />
              <span>04 // Milestones & Accreditations</span>
            </div>
            <h2
              className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-[#121212]'
              }`}
            >
              ACHIEVEMENTS
            </h2>
            <p
              className={`text-sm font-mono-tech ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              National hackathon recognitions, competitive problem solving, and professional certifications.
            </p>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all group relative overflow-hidden ${
                  item.highlight
                    ? isDark
                      ? 'bg-gradient-to-b from-white/[0.04] to-white/[0.015] border-white/15 hover:border-[#C5FF4A]/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                      : 'bg-white border-black/10 hover:border-[#5D7B1C]/50 shadow-md'
                    : isDark
                    ? 'bg-white/[0.02] border-white/5 hover:border-white/20'
                    : 'bg-white border-black/10 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Subtle Glow on highlight */}
                {item.highlight && isDark && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5FF4A]/5 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-4">
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                        isDark
                          ? 'bg-[#C5FF4A]/10 border border-[#C5FF4A]/25'
                          : 'bg-[#5D7B1C]/10 border border-[#5D7B1C]/25'
                      }`}
                    >
                      {getIcon(item.id)}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono-tech tracking-wider uppercase font-semibold border ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-[#C5FF4A]'
                          : 'bg-black/5 border-black/10 text-[#4A6310]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization (Lining numerals with Plus Jakarta Sans for perfect alignment) */}
                  <div className="space-y-1">
                    <h3
                      className={`text-xl font-bold tracking-tight leading-tight transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-[#C5FF4A]'
                          : 'text-[#121212] group-hover:text-[#4A6310]'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`text-xs font-mono-tech ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                      }`}
                    >
                      {item.organization}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-sans ${
                      isDark ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                {item.stats && (
                  <div
                    className={`pt-5 mt-5 border-t text-xs font-mono-tech flex items-center justify-between ${
                      isDark
                        ? 'border-white/5 text-neutral-400'
                        : 'border-black/10 text-neutral-600'
                    }`}
                  >
                    <span>{item.stats}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                          isDark
                            ? 'text-[#C5FF4A] hover:underline'
                            : 'text-[#4A6310] hover:underline'
                        }`}
                      >
                        <span>Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* LeetCode & Problem Solving Banner */}
        <div
          className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
            isDark
              ? 'bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border-white/10'
              : 'bg-white border-black/10 shadow-md'
          }`}
        >
          <div className="space-y-2 text-center md:text-left">
            <div
              className={`text-xs font-mono-tech uppercase tracking-widest font-semibold ${
                isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
              }`}
            >
              Continuous Problem Solving
            </div>
            {/* Perfectly aligned numerals using Plus Jakarta Sans */}
            <h4
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-[#121212]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span
                style={{ fontFamily: 'var(--font-sans)' }}
                className="tabular-nums"
              >
                380+
              </span>{' '}
              Algorithmic Challenges Solved
            </h4>
            <p
              className={`text-xs sm:text-sm max-w-xl font-sans leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Consistent focus on time and space complexity, dynamic programming, trees, graphs, and database query optimization across Java, SQL, and Python.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.leetcode || 'https://leetcode.com/u/Vidhyasri_KS/'}
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-3 rounded-2xl font-bold font-mono-tech text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                isDark
                  ? 'bg-[#C5FF4A] text-black hover:bg-[#b0f530] shadow-[0_0_20px_rgba(197,255,74,0.3)]'
                  : 'bg-[#5D7B1C] text-white hover:bg-[#4D6715]'
              }`}
            >
              <LeetCodeIcon className="w-4 h-4" />
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

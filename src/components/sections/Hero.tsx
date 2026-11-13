import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../common/MagneticButton';
import { useTheme } from '../../context/ThemeContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { isDark } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);

  // Continuous cycling text
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center"
      >
        {/* Hero Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Expressive Typography & Pitch */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Main Greeting */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`font-mono-tech text-xs uppercase tracking-[0.25em] flex items-center gap-2 font-semibold ${
                  isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Computer Science & Engineering</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
              >
                <span className={isDark ? 'text-white' : 'text-[#121212]'}>
                  HELLO, I'M <br />
                </span>
                <span className="hero-name-gradient">
                  VIDHYASRI.
                </span>
              </motion.h1>
            </div>

            {/* Cycling Dynamic Subtitle */}
            <div className="h-12 sm:h-14 flex items-center overflow-hidden">
              <span
                className={`text-xl sm:text-3xl font-editorial font-medium mr-2 sm:mr-3 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                I am a
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 28, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -28, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-editorial text-xl sm:text-3xl font-bold tracking-tight border-b-2 pb-0.5 ${
                    isDark
                      ? 'text-[#C5FF4A] border-[#C5FF4A]/40'
                      : 'text-[#4A6310] border-[#4A6310]/40'
                  }`}
                >
                  {PERSONAL_INFO.roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Secondary Headline & Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`text-base sm:text-lg md:text-xl max-w-2xl font-sans font-light leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-800'
              }`}
            >
              <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#121212]'}`}>
                "{PERSONAL_INFO.tagline}"
              </strong>{' '}
              Bridging robust backend architectures, computer vision intelligence, and practical full-stack solutions.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <MagneticButton
                as="a"
                href="#projects"
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm font-mono-tech uppercase tracking-wider transition-all flex items-center gap-2 group cursor-pointer ${
                  isDark
                    ? 'bg-[#C5FF4A] text-black hover:bg-[#b0f530] shadow-[0_0_25px_rgba(197,255,74,0.35)]'
                    : 'bg-[#5D7B1C] text-white hover:bg-[#4D6715] shadow-md'
                }`}
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </MagneticButton>

              <MagneticButton
                onClick={() => onOpenResume()}
                className={`px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm font-mono-tech uppercase tracking-wider transition-all flex items-center gap-2 group cursor-pointer ${
                  isDark
                    ? 'bg-white/[0.04] text-white border border-white/10 hover:border-[#C5FF4A]/50 hover:bg-white/[0.08]'
                    : 'bg-white text-neutral-900 border border-neutral-300 hover:border-[#5D7B1C] shadow-sm hover:bg-neutral-50'
                }`}
              >
                <Download className={`w-4 h-4 ${isDark ? 'text-[#C5FF4A]' : 'text-[#5D7B1C]'}`} />
                <span>Download Resume</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href="#contact"
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-3.5 rounded-full font-mono-tech text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isDark
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-700 hover:text-black font-semibold'
                }`}
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </motion.div>

            {/* Micro Specs Bar */}
            <div
              className={`pt-4 grid grid-cols-3 gap-3 max-w-lg border-t ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="group/stat cursor-pointer block transition-transform hover:-translate-y-0.5"
              >
                <div
                  className={`text-[11px] font-mono-tech flex items-center gap-1 ${
                    isDark ? 'text-neutral-400 group-hover/stat:text-[#C5FF4A]' : 'text-neutral-600 font-medium group-hover/stat:text-[#4A6310]'
                  }`}
                >
                  <span>LeetCode</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover/stat:opacity-100" />
                </div>
                <div
                  className={`text-lg font-bold font-mono-tech ${
                    isDark ? 'text-white' : 'text-[#121212]'
                  }`}
                >
                  380+ Solved
                </div>
              </a>
              <div>
                <div
                  className={`text-[11px] font-mono-tech ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                  }`}
                >
                  Academic CGPA
                </div>
                <div
                  className={`text-lg font-bold font-mono-tech ${
                    isDark ? 'text-[#C5FF4A]' : 'text-[#4A6310]'
                  }`}
                >
                  8.76 / 10
                </div>
              </div>
              <div>
                <div
                  className={`text-[11px] font-mono-tech ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                  }`}
                >
                  OpenAI Buildathon
                </div>
                <div
                  className={`text-lg font-bold font-mono-tech ${
                    isDark ? 'text-white' : 'text-[#121212]'
                  }`}
                >
                  Finalist
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Prominent Portrait & Decorative Elements */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Ambient Background Aura */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full blur-3xl pointer-events-none ${
                isDark
                  ? 'bg-gradient-to-tr from-[#C5FF4A]/15 to-transparent'
                  : 'bg-gradient-to-tr from-[#829F35]/15 to-transparent'
              }`}
            />

            {/* Frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden p-2 border shadow-2xl transition-all ${
                isDark
                  ? 'bg-gradient-to-b from-white/10 via-white/5 to-transparent border-white/10'
                  : 'bg-gradient-to-b from-black/10 via-black/5 to-transparent border-black/10 shadow-xl'
              }`}
            >
              {/* Image Container with Inner Border and Scanline Effect */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 group portrait-photo-container">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Shade on Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-editorial text-sm font-bold tracking-tight text-white">
                        Vidhyasri K S
                      </div>
                      <div className="text-[10px] font-mono-tech text-neutral-300">
                        B.E. Computer Science Engineering
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono-tech text-[#C5FF4A] font-bold">
                        CGPA 8.76
                      </div>
                      <div className="text-[9px] font-mono-tech text-neutral-300">
                        Class of 2028
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`pt-12 sm:pt-16 flex items-center justify-between text-xs font-mono-tech ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-[#C5FF4A]' : 'bg-[#5D7B1C]'
              }`}
            />
            <span>PORTFOLIO v2.4 • INTERACTIVE EDITION</span>
          </div>

          <a
            href="#about"
            className={`flex items-center gap-2 transition-colors group ${
              isDark ? 'hover:text-white' : 'hover:text-black font-semibold'
            }`}
          >
            <span className="tracking-widest uppercase text-[10px]">Scroll to explore</span>
            <div
              className={`w-6 h-9 rounded-full border flex items-start justify-center p-1 ${
                isDark ? 'border-white/20' : 'border-black/20'
              }`}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className={`w-1 h-2 rounded-full ${
                  isDark ? 'bg-[#C5FF4A]' : 'bg-[#5D7B1C]'
                }`}
              />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

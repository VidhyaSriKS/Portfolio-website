import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/[0.08] bg-black/40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5FF4A] to-[#829F35] flex items-center justify-center font-editorial font-bold text-black text-xs">
                VK
              </div>
              <span className="font-editorial text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm font-sans leading-relaxed">
              Computer Science Engineering student at Nandha Engineering College. Specialized in AI computer vision, backend systems, and responsive web applications.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#C5FF4A] animate-pulse" />
              <span>Erode, India (IST): </span>
              <span className="text-white font-bold">{time || '09:30 PM'}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-neutral-400 hover:text-[#C5FF4A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
              Network
            </div>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#C5FF4A]/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#C5FF4A]/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#C5FF4A]/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-neutral-300 hover:text-white hover:border-[#C5FF4A]/40 transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5FF4A]" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-neutral-400">
          <div>
            © {new Date().getFullYear()} Vidhyasri K S. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & Engineered with</span>
            <span className="text-[#C5FF4A]">Precision</span>
            <span>• React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

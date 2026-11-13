import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NAV_LINKS, PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy for sections
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 pointer-events-none px-4 sm:px-6 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full border transition-all duration-300 ${
            isDark
              ? 'bg-[#151518]/75 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'bg-white/80 border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          } backdrop-blur-xl ${
            isScrolled ? 'px-4 py-2 sm:px-5 sm:py-2.5' : 'px-5 py-3 sm:px-6 sm:py-3.5'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#C5FF4A] to-[#829F35] flex items-center justify-center font-editorial font-black text-black text-xs tracking-tighter shadow-[0_0_15px_rgba(197,255,74,0.3)] transition-transform group-hover:scale-105">
              VK
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="font-editorial text-xs font-bold tracking-tight text-white dark:text-white light:text-black">
                {PERSONAL_INFO.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-colors duration-200 z-10 ${
                    isActive
                      ? isDark
                        ? 'text-black font-semibold'
                        : 'text-white font-semibold'
                      : isDark
                      ? 'text-neutral-300 hover:text-white'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      className={`absolute inset-0 rounded-full z-[-1] ${
                        isDark ? 'bg-[#C5FF4A]' : 'bg-[#829F35]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-tech font-medium transition-all ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-neutral-800 border border-black/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#C5FF4A]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </button>

            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-[#C5FF4A] border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-[#829F35] border border-black/10'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className={`absolute top-20 left-4 right-4 p-6 rounded-2xl border ${
                isDark
                  ? 'bg-[#151518]/95 border-white/10 text-white'
                  : 'bg-white/95 border-black/10 text-black'
              } backdrop-blur-2xl shadow-2xl space-y-4`}
            >
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => {
                  const id = link.href.replace('#', '');
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`px-4 py-2.5 rounded-xl font-editorial text-base transition-colors flex items-center justify-between ${
                        isActive
                          ? isDark
                            ? 'bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/30'
                            : 'bg-[#829F35]/15 text-[#829F35] border border-[#829F35]/30'
                          : isDark
                          ? 'text-neutral-300 hover:bg-white/5'
                          : 'text-neutral-700 hover:bg-black/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#C5FF4A]" />}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C5FF4A] text-black font-semibold text-xs tracking-wide"
                >
                  <FileText className="w-4 h-4" />
                  <span>View & Download Resume</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


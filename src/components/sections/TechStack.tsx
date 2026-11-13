import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Boxes,
  Globe,
  Terminal,
  Wrench,
  Search,
  Layers,
  X,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export const TechStack: React.FC = () => {
  const { isDark } = useTheme();
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-4 h-4" />;
      case 'ai-ml':
        return <Cpu className="w-4 h-4" />;
      case 'ml-libraries':
        return <Boxes className="w-4 h-4" />;
      case 'web':
        return <Globe className="w-4 h-4" />;
      case 'core':
        return <Terminal className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Filter skills based on active category and search
  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategoryId !== 'all' && cat.id !== activeCategoryId) {
      return null;
    }
    const filteredSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0 && searchQuery) return null;
    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section
      id="skills"
      className={`relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t overflow-hidden transition-colors ${
        isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">
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
              <span>02 // Technical Capabilities</span>
            </div>
            <h2
              className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-[#121212]'
              }`}
            >
              SKILL EXPLORER
            </h2>
            <p
              className={`text-sm font-mono-tech ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Categorized technologies, deep-learning libraries, and core computing foundations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            />
            <input
              type="text"
              placeholder="Search skill (e.g. YOLO, PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs font-mono-tech transition-colors outline-none ${
                isDark
                  ? 'bg-white/[0.03] border-white/10 text-white placeholder-neutral-500 focus:border-[#C5FF4A]/50'
                  : 'bg-white border-black/15 text-[#121212] placeholder-neutral-500 focus:border-[#5D7B1C] shadow-xs'
              }`}
            />
          </div>
        </div>

        {/* Category Filters Bar */}
        <div
          className={`flex flex-wrap items-center gap-2 pb-2 border-b ${
            isDark ? 'border-white/[0.06]' : 'border-black/[0.06]'
          }`}
        >
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono-tech transition-all flex items-center gap-2 cursor-pointer ${
              activeCategoryId === 'all'
                ? isDark
                  ? 'bg-[#C5FF4A] text-black font-bold shadow-[0_0_15px_rgba(197,255,74,0.3)]'
                  : 'bg-[#5D7B1C] text-white font-bold shadow-md'
                : isDark
                ? 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/5'
                : 'bg-white text-neutral-700 hover:text-black border border-black/10 shadow-xs'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>
              All Categories ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
            </span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono-tech transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-[#C5FF4A] text-black font-bold shadow-[0_0_15px_rgba(197,255,74,0.3)]'
                      : 'bg-[#5D7B1C] text-white font-bold shadow-md'
                    : isDark
                    ? 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/5'
                    : 'bg-white text-neutral-700 hover:text-black border border-black/10 shadow-xs'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-75">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Inspection Card */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-5 sm:p-6 rounded-2xl border backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
              isDark
                ? 'bg-gradient-to-r from-[#C5FF4A]/10 via-[#C5FF4A]/5 to-transparent border-[#C5FF4A]/30 text-white'
                : 'bg-white border-[#5D7B1C]/40 text-[#121212] shadow-md'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base font-mono-tech shrink-0 ${
                  isDark
                    ? 'bg-[#C5FF4A] text-black shadow-[0_0_15px_rgba(197,255,74,0.3)]'
                    : 'bg-[#5D7B1C] text-white shadow-sm'
                }`}
              >
                {selectedSkill.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4
                    className={`font-editorial text-lg font-bold ${
                      isDark ? 'text-white' : 'text-[#121212]'
                    }`}
                  >
                    {selectedSkill.name}
                  </h4>
                  <span
                    className={`text-[10px] font-mono-tech px-2 py-0.5 rounded ${
                      isDark
                        ? 'bg-white/10 text-[#C5FF4A]'
                        : 'bg-black/5 text-[#4A6310] font-semibold'
                    }`}
                  >
                    {selectedSkill.category}
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 font-sans leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  {selectedSkill.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className={`text-xs font-mono-tech self-end sm:self-center px-3 py-1.5 rounded-lg border cursor-pointer transition-colors flex items-center gap-1.5 shrink-0 ${
                isDark
                  ? 'border-white/10 text-neutral-400 hover:text-white hover:bg-white/5'
                  : 'border-black/10 text-neutral-600 hover:text-black hover:bg-black/5 font-medium'
              }`}
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}

        {/* Category Sections & Interactive Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`p-1.5 rounded-lg ${
                      isDark
                        ? 'bg-[#C5FF4A]/10 text-[#C5FF4A]'
                        : 'bg-[#5D7B1C]/10 text-[#5D7B1C]'
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3
                    className={`font-editorial text-lg font-bold tracking-wide uppercase ${
                      isDark ? 'text-white' : 'text-[#121212]'
                    }`}
                  >
                    {cat.name}
                  </h3>
                </div>
                <span
                  className={`text-xs font-mono-tech ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {cat.skills.length} skills listed
                </span>
              </div>

              {/* Skills Grid - Clean, Minimalist, Editorial without repetitive bottom text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {cat.skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3, scale: 1.01 }}
                      onClick={() =>
                        setSelectedSkill({
                          name: skill.name,
                          description: skill.description,
                          category: cat.name,
                        })
                      }
                      className={`p-5 rounded-2xl cursor-pointer transition-all border relative flex flex-col justify-between group ${
                        isSelected
                          ? isDark
                            ? 'bg-[#1D1D22] border-[#C5FF4A] shadow-[0_0_20px_rgba(197,255,74,0.2)]'
                            : 'bg-white border-[#5D7B1C] shadow-md ring-2 ring-[#5D7B1C]/20'
                          : isDark
                          ? 'bg-white/[0.02] border-white/10 hover:border-[#C5FF4A]/50 hover:bg-white/[0.04]'
                          : 'bg-white border-black/10 hover:border-[#5D7B1C]/50 shadow-xs hover:shadow-md'
                      }`}
                    >
                      <div>
                        {/* Top Row: Name */}
                        <div
                          className={`font-editorial text-base font-bold transition-colors ${
                            isDark
                              ? 'text-white group-hover:text-[#C5FF4A]'
                              : 'text-[#121212] group-hover:text-[#4A6310]'
                          }`}
                        >
                          {skill.name}
                        </div>

                        {/* Description */}
                        <p
                          className={`text-xs mt-2.5 line-clamp-2 leading-relaxed font-sans ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                          }`}
                        >
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

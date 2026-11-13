import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Download,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../common/MagneticButton';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/Icons';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending, trigger mailto, and trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5FF4A', '#829F35', '#ffffff'],
        });
      } catch {
        // ignore
      }

      // Compose mailto link as fallback
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Vidhyasri,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      )}`;

      // Open email client
      window.open(mailtoUrl, '_blank');
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#C5FF4A]">
            <span className="w-6 h-[1px] bg-[#C5FF4A]" />
            <span>05 // Inquiries & Collaborations</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
            LET'S BUILD SOMETHING MEANINGFUL.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-sans font-light pt-2">
            Have an interesting idea, opportunity, or project? I'd love to connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Coordinates & Social Connects */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-6">
              <div className="text-xs uppercase font-mono-tech tracking-wider text-neutral-400">
                Direct Contact Channels
              </div>

              {/* Email Card */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C5FF4A]/10 text-[#C5FF4A] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono-tech text-neutral-400">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-[#C5FF4A] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#C5FF4A]/10 text-[#C5FF4A] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono-tech text-neutral-400">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#C5FF4A] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] uppercase font-mono-tech text-neutral-400">
                  Professional Profiles
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#C5FF4A]" />
                      <span className="text-xs font-semibold text-white">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-[#C5FF4A]" />
                      <span className="text-xs font-semibold text-white">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LeetCodeIcon className="w-4 h-4 text-[#C5FF4A]" />
                      <span className="text-xs font-semibold text-white">LeetCode</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Resume Download CTA Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#C5FF4A]/10 to-transparent border border-[#C5FF4A]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#C5FF4A] text-xs font-mono-tech font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Resume & Academic Transcript</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans">
                  Official curriculum vitae with project references and academic credentials.
                </p>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={onOpenResume}
                    className="w-full py-2.5 rounded-xl bg-[#C5FF4A] text-black font-bold text-xs font-mono-tech uppercase tracking-wider hover:bg-[#b0f530] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C5FF4A]/20 border border-[#C5FF4A] flex items-center justify-center text-[#C5FF4A] mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md font-sans">
                    Thank you, {formData.name}. Your email client was triggered with your message, and a copy has been preformatted for Vidhyasri K S.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-white font-mono-tech text-xs uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]/60 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono-tech text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-300">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="ada@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]/60 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono-tech text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-300">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      placeholder="Project Opportunity / AI Discussion"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.subject ? 'border-red-500' : 'border-white/10'
                      } text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]/60 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono-tech text-red-400">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-neutral-300">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your idea, requirements, or team opportunity..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]/60 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono-tech text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    onClick={() => {}}
                    className="w-full py-4 rounded-xl bg-[#C5FF4A] text-black font-bold font-mono-tech text-xs uppercase tracking-widest hover:bg-[#b0f530] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,255,74,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

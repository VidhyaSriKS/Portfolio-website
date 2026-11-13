import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  GraduationCap,
  Award,
  Code2,
  FileText,
  CheckCircle2,
  Copy,
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111114] text-[#F5F5F0] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161A]/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 flex items-center justify-center text-[#C5FF4A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-lg font-bold tracking-tight text-white flex items-center gap-2">
                    {PERSONAL_INFO.name}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#C5FF4A]/15 text-[#C5FF4A] border border-[#C5FF4A]/30 font-mono-tech">
                      Curriculum Vitae
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono-tech">
                    B.E. Computer Science & Engineering • CGPA 8.76
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Vidhyasri_KS_Resume.pdf"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#C5FF4A] text-[#0B0B0D] font-semibold text-xs hover:bg-[#b0f530] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Quick actions bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 transition-colors text-left"
                >
                  <div>
                    <div className="text-[11px] text-neutral-400 font-mono-tech uppercase">Direct Email</div>
                    <div className="text-xs font-medium text-neutral-200 truncate">{PERSONAL_INFO.email}</div>
                  </div>
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 transition-colors text-left"
                >
                  <div>
                    <div className="text-[11px] text-neutral-400 font-mono-tech uppercase">LinkedIn</div>
                    <div className="text-xs font-medium text-neutral-200">linkedin.com/in/vidhyasri-ks</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 shrink-0" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C5FF4A]/40 transition-colors text-left"
                >
                  <div>
                    <div className="text-[11px] text-neutral-400 font-mono-tech uppercase">GitHub</div>
                    <div className="text-xs font-medium text-neutral-200">github.com/VidhyaSriKS</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 shrink-0" />
                </a>
              </div>

              {/* PDF Preview Frame */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <div className="px-4 py-2 bg-white/[0.02] border-b border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono-tech">
                  <span>Document View: Vidhyasri_KS_Resume.pdf</span>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-[#C5FF4A]"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="w-full h-[480px] bg-neutral-900 flex items-center justify-center relative">
                  <iframe
                    src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0`}
                    title="Vidhyasri K S Resume"
                    className="w-full h-full border-none"
                  />
                </div>
              </div>

              {/* Highlights Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 text-[#C5FF4A] mb-2 font-mono-tech text-xs uppercase font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{EDUCATION_DATA.institution}</div>
                  <div className="text-xs text-neutral-400 mt-1">{EDUCATION_DATA.degree}</div>
                  <div className="text-xs text-[#C5FF4A] font-mono-tech mt-2">CGPA: {EDUCATION_DATA.cgpa} / {EDUCATION_DATA.scale}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 text-[#C5FF4A] mb-2 font-mono-tech text-xs uppercase font-semibold">
                    <Code2 className="w-4 h-4" />
                    <span>Key Technical Focus</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Python, Java, MySQL, YOLO, OpenCV, InsightFace, ByteTrack, FastAPI, PyTorch, React.js.
                  </p>
                  <div className="text-xs text-neutral-400 font-mono-tech mt-2">380+ Solved on LeetCode</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 text-[#C5FF4A] mb-2 font-mono-tech text-xs uppercase font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Key Honors</span>
                  </div>
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    National Finalist at NxtWave × OpenAI Buildathon (IdeaNest) & StartupTN Finalist.
                  </div>
                  <div className="text-xs text-neutral-400 font-mono-tech mt-2">NPTEL & Infosys Certified</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-[#16161A]/90 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono-tech">Official Curriculum Vitae</span>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Vidhyasri_KS_Resume.pdf"
                className="hover:text-[#C5FF4A] underline font-mono-tech"
              >
                Download PDF to device
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const InitialLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + 10;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[99999] bg-[#0B0B0D] flex flex-col items-center justify-center p-6"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-16 h-16 rounded-2xl bg-[#151518] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(197,255,74,0.25)]"
        >
          <span className="font-editorial text-2xl font-black text-[#C5FF4A] tracking-tighter">
            VK
          </span>
          <div className="absolute inset-0 rounded-2xl border border-[#C5FF4A]/40 animate-ping opacity-25" />
        </motion.div>

        {/* Name & Title */}
        <div className="text-center space-y-1">
          <div className="font-editorial text-sm font-bold tracking-widest text-white uppercase">
            Vidhyasri K S
          </div>
          <div className="text-[10px] font-mono-tech text-neutral-400 uppercase tracking-widest">
            Portfolio System Initializing
          </div>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden relative">
          <motion.div
            className="h-full bg-[#C5FF4A] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        <div className="text-[10px] font-mono-tech text-[#C5FF4A]">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
};

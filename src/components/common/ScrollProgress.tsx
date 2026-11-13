import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5FF4A]/40 via-[#C5FF4A] to-[#829F35] origin-left z-[100] shadow-[0_0_8px_rgba(197,255,74,0.6)]"
      style={{ scaleX }}
    />
  );
};


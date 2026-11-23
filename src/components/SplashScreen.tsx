import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1100);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#F8F9FA] flex items-center justify-center select-none overflow-hidden"
    >
      {/* 
        PURE MINIMAL LIGHT MPFC WORDMARK BUILD-UP & FADE
        Identical size & position as the hero wordmark for seamless transition
      */}
      <div className="overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, letterSpacing: '0.04em' }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            letterSpacing: '-0.015em' 
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne font-extrabold text-[13vw] leading-none text-[#0F141A] tracking-tight flex items-center justify-center"
        >
          <span>MP</span>
          <span>FC</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

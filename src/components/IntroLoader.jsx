import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STATES = [
  'Initializing Environment...',
  'Loading Core Assets...',
  'Compiling Resources...',
  'Almost Ready...'
];

const IntroLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  // Progress logic
  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(p => {
        if (p + step >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Status text logic
  useEffect(() => {
    if (progress >= 100) {
      setStatusIdx(LOADING_STATES.length);
      return;
    }
    const ratio = progress / 100;
    const newIdx = Math.floor(ratio * LOADING_STATES.length);
    if (newIdx !== statusIdx && newIdx < LOADING_STATES.length) {
      setStatusIdx(newIdx);
    }
  }, [progress, statusIdx]);

  // Completion trigger
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(onComplete, 600);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Subtle Noise / Grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />

      {/* Center Container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-sm">
        
        {/* SVG Circular Progress */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-8">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#39FF14" />
                <stop offset="100%" stopColor="#0091ea" />
              </linearGradient>
            </defs>
            {/* Background track */}
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="transparent"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
            />
            {/* Animated progress stroke */}
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="transparent"
              stroke="url(#loader-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ strokeDasharray: 289, strokeDashoffset: 289 }}
              animate={{ strokeDashoffset: 289 - (289 * progress) / 100 }}
              transition={{ duration: 0.1, ease: "linear" }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(57,255,20,0.4))"
              }}
            />
          </svg>

          {/* Inner Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="font-bebas text-3xl tracking-widest text-[#ececec] neon-text">YK</span>
          </motion.div>
        </div>

        {/* Loading Text & Percentage */}
        <div className="flex flex-col items-center gap-2 h-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-fira text-[#39FF14] text-xl font-medium tracking-widest"
          >
            {Math.floor(progress)}%
          </motion.div>

          <AnimatePresence mode="wait">
            {progress < 100 ? (
              <motion.div
                key={statusIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="font-outfit text-sm text-[#777] uppercase tracking-wider"
              >
                {LOADING_STATES[statusIdx]}
              </motion.div>
            ) : (
              <motion.div
                key="ready"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-outfit text-sm text-[#ececec] uppercase tracking-wider"
              >
                System Ready
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
};

export default IntroLoader;

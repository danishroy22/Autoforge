"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Background effects */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo animation */}
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border border-cyan-neon/20 border-t-cyan-neon"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-2xl font-black text-cyan-neon text-glow-cyan"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  AF
                </span>
              </div>
            </div>

            <h1
              className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-white mb-2"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              AutoForge
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-[0.4em] mb-8">
              12H Hackathon
            </p>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-electric-blue via-cyan-neon to-purple-neon rounded-full"
              />
            </div>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-4 text-xs text-slate-600 uppercase tracking-widest"
            >
              Initializing...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

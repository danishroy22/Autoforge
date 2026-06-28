"use client";

import { motion } from "framer-motion";

export default function ResultsSoonHero() {
  return (
    <div className="w-full flex flex-col items-center py-4 sm:py-8 relative">
      {/* Anticipation particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-neon/60"
            style={{
              left: `${8 + (i * 7) % 84}%`,
              top: `${20 + (i * 11) % 60}%`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 2 + (i % 3) * 0.5,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <motion.h2
        animate={{
          textShadow: [
            "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,102,255,0.2)",
            "0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(0,212,255,0.3)",
            "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,102,255,0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white mb-5 sm:mb-6 relative z-10"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Results will be announced shortly
      </motion.h2>

      <motion.p
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="max-w-xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed px-4 relative z-10"
      >
        The award ceremony is about to begin.
      </motion.p>

      <motion.div
        className="mt-10 h-px w-48 sm:w-64 bg-gradient-to-r from-transparent via-purple-neon to-transparent relative z-10"
        animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </div>
  );
}

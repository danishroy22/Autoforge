"use client";

import { motion } from "framer-motion";

export default function AwaitingResultsHero() {
  return (
    <div className="w-full flex flex-col items-center py-4 sm:py-8">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-strong border border-cyan-neon/30 flex items-center justify-center mb-8 glow-cyan"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-cyan-neon/40 border-t-cyan-neon animate-spin" />
      </motion.div>

      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white text-glow-blue mb-5 sm:mb-6"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Awaiting Results
      </h2>

      <p className="max-w-xl text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed px-4">
        Our judges are currently evaluating the projects. Thank you for your
        patience.
      </p>

      <div className="mt-10 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-cyan-neon"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

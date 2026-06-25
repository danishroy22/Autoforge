"use client";

import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import SponsorShowcase from "./SponsorShowcase";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-cyan-neon uppercase tracking-[0.25em] font-medium border border-cyan-neon/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
            Live Event
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span className="block text-white">AutoForge</span>
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-electric-blue via-cyan-neon to-purple-neon bg-clip-text text-transparent text-glow-cyan">
            12H Hackathon
          </span>
        </motion.h1>

        {/* Powered by */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-400 mb-2"
        >
          Powered by{" "}
          <span className="text-white font-semibold tracking-wide">22Labs</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl font-light tracking-[0.3em] uppercase text-slate-300 mb-12 sm:mb-16 md:mb-20"
        >
          Build.{" "}
          <span className="text-cyan-neon">Innovate.</span>{" "}
          <span className="text-purple-neon">Transform.</span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.div>

        {/* Sponsors — visible immediately on big screens */}
        <SponsorShowcase variant="hero" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

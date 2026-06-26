"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDING } from "@/lib/data";
import CountdownTimer from "./CountdownTimer";
import SponsorShowcase from "./SponsorShowcase";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-10 sm:pt-12 pb-8 sm:pb-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Hackathon logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 sm:mb-4"
        >
          <Image
            src={BRANDING.hackathonLogo}
            alt="UoM AutoForge Hackathon"
            width={320}
            height={320}
            unoptimized
            priority
            className="w-28 h-auto sm:w-36 md:w-40 mx-auto drop-shadow-[0_0_20px_rgba(0,102,255,0.2)]"
          />
        </motion.div>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-cyan-neon uppercase tracking-[0.25em] font-medium border border-cyan-neon/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
            Live Event
          </span>
        </motion.div>

        {/* Powered by */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-base text-slate-400 mb-3 sm:mb-4"
        >
          Powered by{" "}
          <span className="text-white font-semibold tracking-wide">22Labs</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm sm:text-base md:text-lg font-light tracking-[0.3em] uppercase text-slate-300 mb-6 sm:mb-8"
        >
          Build.{" "}
          <span className="text-cyan-neon">Innovate.</span>{" "}
          <span className="text-purple-neon">Transform.</span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.div>

        <SponsorShowcase variant="hero" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

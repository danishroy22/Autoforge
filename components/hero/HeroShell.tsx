"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDING } from "@/lib/data";
import { getPhaseLabel, type EventPhase } from "@/lib/event-phase";
import SponsorShowcase from "@/components/SponsorShowcase";

interface HeroShellProps {
  phase: EventPhase;
  children: React.ReactNode;
  celebratory?: boolean;
}

export default function HeroShell({
  phase,
  children,
  celebratory = false,
}: HeroShellProps) {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-10 sm:pt-12 pb-8 sm:pb-10">
      {celebratory && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(0, 102, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
          }}
        />
      )}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-cyan-neon uppercase tracking-[0.25em] font-medium border border-cyan-neon/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
            {getPhaseLabel(phase)}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-base text-slate-400 mb-3 sm:mb-4"
        >
          Powered by{" "}
          <span className="text-white font-semibold tracking-wide">22Labs</span>
        </motion.p>

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

        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          {children}
        </motion.div>

        <SponsorShowcase variant="hero" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

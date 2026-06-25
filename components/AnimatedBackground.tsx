"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 102, 255, 0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 100%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}

export function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10 sm:mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        <span className="text-glow-blue">{children}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 text-slate-400 text-sm sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-neon to-transparent" />
    </div>
  );
}

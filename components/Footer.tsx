"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white mb-2"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            AutoForge 12H Hackathon
          </h3>
          <p className="text-sm text-slate-400 mb-1">
            Powered by{" "}
            <span className="text-white font-medium">22Labs</span>
          </p>
          <p className="text-sm text-slate-500">
            University of Mauritius Students&apos; Union
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-neon/40" />
            <span className="text-xs text-slate-600 uppercase tracking-[0.3em]">
              Build. Innovate. Transform.
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-neon/40" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

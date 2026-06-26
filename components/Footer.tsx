"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDING } from "@/lib/data";

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
          className="flex flex-col items-center"
        >
          <Image
            src={BRANDING.hackathonLogo}
            alt="UoM AutoForge Hackathon"
            width={200}
            height={200}
            unoptimized
            className="w-24 sm:w-28 h-auto mb-6 opacity-90"
          />

          <p className="text-sm text-slate-400 mb-6">
            Powered by{" "}
            <span className="text-white font-medium">22Labs</span>
          </p>

          <p className="text-sm text-slate-500 mb-6">
            {BRANDING.studentUnionName}
          </p>

          <div className="flex items-center justify-center gap-3">
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

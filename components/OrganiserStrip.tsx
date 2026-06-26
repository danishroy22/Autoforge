"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDING } from "@/lib/data";

export default function OrganiserStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-4 sm:px-6 py-6 sm:py-8"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-500 shrink-0">
          Main Organiser
        </p>
        <div className="h-px w-8 bg-cyan-neon/20 hidden sm:block" />
        <div className="sponsor-card rounded-xl px-5 py-3 sm:px-6 sm:py-3.5">
          <Image
            src={BRANDING.studentUnionLogo}
            alt={BRANDING.studentUnionName}
            width={240}
            height={72}
            unoptimized
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

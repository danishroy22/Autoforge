"use client";

import { motion } from "framer-motion";
import { schedule } from "@/lib/data";
import { SectionWrapper, SectionTitle } from "./AnimatedBackground";

export default function Schedule() {
  return (
    <SectionWrapper id="schedule" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <SectionTitle subtitle="Your roadmap through the hackathon">
          Event Schedule
        </SectionTitle>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-cyan-neon to-purple-neon opacity-40" />

          <div className="space-y-0">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full glass-strong flex items-center justify-center border border-cyan-neon/30 glow-cyan">
                    <span
                      className="text-xs sm:text-sm font-bold text-cyan-neon tabular-nums"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {item.time}
                    </span>
                  </div>
                  {index < schedule.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="absolute top-14 sm:top-16 left-1/2 -translate-x-1/2 w-px h-6 bg-cyan-neon/20 origin-top"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 sm:pt-3">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="glass rounded-xl p-4 sm:p-5 border border-white/5 hover:border-cyan-neon/20 transition-colors duration-300"
                  >
                    <h3
                      className="text-base sm:text-lg font-semibold text-white mb-1"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-slate-400">{item.description}</p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

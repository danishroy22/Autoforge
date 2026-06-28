"use client";

import { motion } from "framer-motion";
import { scheduleDays } from "@/lib/data";
import { SectionWrapper, SectionTitle } from "./AnimatedBackground";

export default function Schedule() {
  return (
    <SectionWrapper id="schedule" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <SectionTitle subtitle="Two days at POWA — build, present, celebrate">
          Event Schedule
        </SectionTitle>

        <div className="space-y-14 sm:space-y-16">
          {scheduleDays.map((day) => (
            <div key={day.label}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
              >
                <h3
                  className="text-lg sm:text-xl font-bold uppercase tracking-wider text-cyan-neon"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {day.label}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{day.date}</p>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
                  {day.venue}
                </p>
                <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent" />
              </motion.div>

              <div className="relative">
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-cyan-neon to-purple-neon opacity-40" />

                <div className="space-y-0">
                  {day.items.map((item, dayIndex) => {
                    const isLastInDay = dayIndex === day.items.length - 1;

                    return (
                      <motion.div
                        key={`${day.label}-${item.time}-${item.title}`}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (dayIndex % 5) * 0.06 }}
                        className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0"
                      >
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 sm:w-16 min-h-[3rem] sm:min-h-[4rem] rounded-full glass-strong flex items-center justify-center border border-cyan-neon/30 glow-cyan px-1">
                            <span
                              className="text-[10px] sm:text-xs font-bold text-cyan-neon tabular-nums text-center leading-tight"
                              style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                              {item.time}
                            </span>
                          </div>
                          {!isLastInDay && (
                            <motion.div
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.15 }}
                              className="absolute top-14 sm:top-16 left-1/2 -translate-x-1/2 w-px h-6 bg-cyan-neon/20 origin-top"
                            />
                          )}
                        </div>

                        <div className="flex-1 pt-1 sm:pt-2">
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            className="glass rounded-xl p-4 sm:p-5 border border-white/5 hover:border-cyan-neon/20 transition-colors duration-300"
                          >
                            <h4
                              className="text-base sm:text-lg font-semibold text-white mb-1"
                              style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                              {item.title}
                            </h4>
                            {item.description && (
                              <p className="text-sm text-slate-400">
                                {item.description}
                              </p>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

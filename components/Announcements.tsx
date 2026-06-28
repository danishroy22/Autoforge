"use client";

import { motion } from "framer-motion";
import { announcements, type Announcement } from "@/lib/data";
import { SectionWrapper, SectionTitle } from "./AnimatedBackground";

const priorityStyles: Record<
  NonNullable<Announcement["priority"]>,
  { border: string; badge: string; badgeText: string }
> = {
  normal: {
    border: "border-white/8 hover:border-cyan-neon/30",
    badge: "bg-white/5 text-slate-400",
    badgeText: "Update",
  },
  high: {
    border: "border-electric-blue/30 hover:border-electric-blue/60",
    badge: "bg-electric-blue/20 text-cyan-neon",
    badgeText: "Important",
  },
  urgent: {
    border: "border-purple-neon/40 hover:border-purple-neon/70",
    badge: "bg-purple-neon/20 text-purple-neon",
    badgeText: "Urgent",
  },
};

function AnnouncementCard({
  announcement,
  index,
}: {
  announcement: Announcement;
  index: number;
}) {
  const priority = announcement.priority ?? "normal";
  const styles = priorityStyles[priority];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:scale-[1.02] ${styles.border}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`text-xs uppercase tracking-widest px-2.5 py-1 rounded-full font-medium ${styles.badge}`}
        >
          {styles.badgeText}
        </span>
        <time className="text-xs text-slate-500 font-mono shrink-0">
          {announcement.timestamp}
        </time>
      </div>
      <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
        {announcement.message}
      </p>
    </motion.div>
  );
}

export default function Announcements() {
  const priorityOrder = { urgent: 0, high: 1, normal: 2 };
  const sorted = [...announcements].sort(
    (a, b) =>
      priorityOrder[a.priority ?? "normal"] -
      priorityOrder[b.priority ?? "normal"]
  );

  return (
    <SectionWrapper id="announcements" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Stay updated with the latest event news">
          Announcements
        </SectionTitle>

        <div className="space-y-4">
          {sorted.map((announcement, index) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              index={index}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-slate-600"
        >
          Edit announcements in{" "}
          <code className="text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">
            lib/data.ts
          </code>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}

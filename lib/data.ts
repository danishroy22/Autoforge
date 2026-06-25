export interface Announcement {
  id: string;
  message: string;
  timestamp: string;
  priority?: "normal" | "high" | "urgent";
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export interface Rule {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Event configuration — update these for the actual event date
export const EVENT_CONFIG = {
  // Official hackathon start (10:00 AM)
  startHour: 10,
  startMinute: 0,
  // Submission deadline (22:00 / 10 PM)
  endHour: 22,
  endMinute: 0,
  // Set to the actual event date (YYYY-MM-DD)
  eventDate: "2026-06-25",
};

export const announcements: Announcement[] = [
  {
    id: "1",
    message: "Lunch available at the cafeteria.",
    timestamp: "13:00",
    priority: "normal",
  },
  {
    id: "2",
    message: "Mentors are available for consultation.",
    timestamp: "11:30",
    priority: "normal",
  },
  {
    id: "3",
    message: "Submission deadline approaching — finalize your projects!",
    timestamp: "20:00",
    priority: "urgent",
  },
  {
    id: "4",
    message: "Presentation order will be published at 21:00.",
    timestamp: "19:00",
    priority: "high",
  },
];

export const schedule: ScheduleItem[] = [
  {
    time: "10:00",
    title: "Opening & Challenge Briefing",
    description: "Welcome address and challenge reveal",
  },
  {
    time: "10:30",
    title: "Coding Begins",
    description: "The clock starts — build something amazing",
  },
  {
    time: "13:00",
    title: "Lunch Break",
    description: "Refuel at the cafeteria",
  },
  {
    time: "16:00",
    title: "Tea Break",
    description: "Refreshments and networking",
  },
  {
    time: "21:00",
    title: "Submission Preparation",
    description: "Finalize and prepare your submission",
  },
  {
    time: "22:00",
    title: "Submission Deadline",
    description: "All projects must be submitted",
  },
];

export const sponsors: Sponsor[] = [
  { name: "22Labs", logo: "/webp/22labs@300x.webp" },
  { name: "Emtel", logo: "/webp/emtel@300x.webp" },
  { name: "Doppler AI", logo: "/webp/doppler-ai.webp" },
  { name: "Lumetryx", logo: "/webp/lumetryx_normal.webp" },
  { name: "NexaVenu", logo: "/webp/nexavenu2.webp" },
  { name: "Clarity", logo: "/webp/clarity.webp" },
  { name: "Bullet", logo: "/webp/bullet.webp" },
  { name: "Fogg", logo: "/webp/fogg.webp" },
  { name: "KFC", logo: "/webp/kfc.webp" },
  { name: "Pizza Inn", logo: "/webp/pizzainn.webp" },
  { name: "Subana", logo: "/webp/subana.webp" },
];

export const rules: Rule[] = [
  {
    id: "1",
    title: "Build Within Period",
    description: "All work must be completed within the official competition period.",
    icon: "⏱️",
  },
  {
    id: "2",
    title: "Original Work Only",
    description: "Projects must be original work created during the hackathon.",
    icon: "💡",
  },
  {
    id: "3",
    title: "Respect Participants",
    description: "Maintain a collaborative and respectful environment for all.",
    icon: "🤝",
  },
  {
    id: "4",
    title: "Submit Before 22:00",
    description: "Teams must submit their projects before the 22:00 deadline.",
    icon: "📤",
  },
  {
    id: "5",
    title: "Judges' Decision Final",
    description: "All judging decisions are final and binding.",
    icon: "⚖️",
  },
];

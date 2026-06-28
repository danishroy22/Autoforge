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

export interface ScheduleDay {
  label: string;
  date: string;
  venue: string;
  items: ScheduleItem[];
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

export const BRANDING = {
  hackathonLogo: "/webp/hackathonlogo.webp",
  studentUnionLogo: "/webp/sulogo.webp",
  studentUnionName: "University of Mauritius Students' Union",
};

export const EVENT_VENUE = "Paul Octave Wiehe Auditorium (POWA)";

// Event configuration — 30 June 2026, coding 10:00 – demo deadline 22:00
export const EVENT_CONFIG = {
  startHour: 10,
  startMinute: 0,
  endHour: 22,
  endMinute: 0,
  eventDate: "2026-06-30",
};

export const announcements: Announcement[] = [
  {
    id: "1",
    message: `Venue: ${EVENT_VENUE}.`,
    timestamp: "09:00",
    priority: "high",
  },
  {
    id: "2",
    message: "Official coding begins at 10:00 — mandatory feature will be announced during briefing.",
    timestamp: "09:45",
    priority: "high",
  },
  {
    id: "3",
    message: "Checkpoint 1: Progress Review at 18:00 — be ready to share your progress.",
    timestamp: "18:00",
    priority: "normal",
  },
  {
    id: "4",
    message: "Demo video submission deadline is 22:00 tonight. End of Day 1.",
    timestamp: "20:00",
    priority: "urgent",
  },
  {
    id: "5",
    message: "Day 2: Team registration from 09:30. Presentation order draw at 10:00.",
    timestamp: "09:30",
    priority: "high",
  },
  {
    id: "6",
    message: "Prize Giving Ceremony at 14:00 — Day 2, POWA.",
    timestamp: "14:00",
    priority: "urgent",
  },
];

export const scheduleDays: ScheduleDay[] = [
  {
    label: "Day 1",
    date: "Tuesday 30 June 2026",
    venue: EVENT_VENUE,
    items: [
      {
        time: "09:00",
        title: "Registration & Opening Ceremony",
        description: "09:00 – 09:30",
      },
      {
        time: "09:30",
        title: "Welcome Address",
        description: "University of Mauritius Students' Union · 09:30 – 09:35",
      },
      {
        time: "09:35",
        title: "Address by Nexavenu",
        description: "09:35 – 09:40",
      },
      {
        time: "09:40",
        title: "Address by Clarity",
        description: "Brian Luk Tong · 09:40 – 09:45",
      },
      {
        time: "09:45",
        title: "Track Overview, Rules & Mandatory Feature",
        description: "Judging criteria and mandatory feature announcement · 09:45 – 10:00",
      },
      {
        time: "10:00",
        title: "Official Start of Coding",
        description: "Development Session 1 · 10:00 – 13:00",
      },
      {
        time: "13:00",
        title: "Lunch Break",
        description: "13:00 – 14:00",
      },
      {
        time: "14:00",
        title: "Development Session 2",
        description: "14:00 – 15:00",
      },
      {
        time: "15:00",
        title: "Tea Break",
        description: "15:00 – 15:30",
      },
      {
        time: "15:30",
        title: "Development Session 3",
        description: "15:30 – 18:00",
      },
      {
        time: "18:00",
        title: "Checkpoint 1: Progress Review",
        description: "18:00 – 18:30",
      },
      {
        time: "18:30",
        title: "Development Session 4",
        description: "18:30 – 19:00",
      },
      {
        time: "19:00",
        title: "Dinner Break",
        description: "19:00 – 20:00",
      },
      {
        time: "20:00",
        title: "Development Session 5",
        description: "20:00 – 22:00",
      },
      {
        time: "22:00",
        title: "Demo Video Submission Deadline",
        description: "End of Day 1",
      },
    ],
  },
  {
    label: "Day 2",
    date: "Wednesday 1 July 2026",
    venue: EVENT_VENUE,
    items: [
      {
        time: "09:30",
        title: "Registration of Teams",
        description: "09:30 – 10:00",
      },
      {
        time: "10:00",
        title: "Draw of Presentation Order",
        description: "10:00 – 10:10",
      },
      {
        time: "10:10",
        title: "Team Presentations — Part 1",
        description: "10:10 – 13:00",
      },
      {
        time: "13:00",
        title: "Lunch",
        description: "13:00 – 14:00",
      },
      {
        time: "14:00",
        title: "Prize Giving Ceremony",
        description: "14:00 – 14:30",
      },
      {
        time: "14:30",
        title: "Distribution of Certificates",
        description: "14:30 – 15:00",
      },
      {
        time: "15:00",
        title: "Photo Session",
        description: "15:00 – 15:15",
      },
      {
        time: "15:15",
        title: "Tea Break & Event Wrap-Up",
        description: "15:15 – 16:00",
      },
    ],
  },
];

/** @deprecated Use scheduleDays — kept for backwards compatibility */
export const schedule: ScheduleItem[] = scheduleDays.flatMap((d) => d.items);

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
  { name: "Secret Cafetaria", logo: "/webp/secret-cafetaria.webp" },
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
    description: "Demo video submissions must be uploaded before the 22:00 Day 1 deadline.",
    icon: "📤",
  },
  {
    id: "5",
    title: "Judges' Decision Final",
    description: "All judging decisions are final and binding.",
    icon: "⚖️",
  },
  {
    id: "6",
    title: "Follow Event Guidelines",
    description: "Adhere to all venue rules, safety protocols, and staff instructions.",
    icon: "📋",
  },
];

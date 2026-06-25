import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoForge 12H Hackathon | Live Dashboard",
  description:
    "Live event dashboard for the AutoForge 12H Hackathon — Powered by 22Labs. Build. Innovate. Transform.",
  keywords: ["hackathon", "AutoForge", "22Labs", "University of Mauritius"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="antialiased bg-black text-slate-200">
        {children}
      </body>
    </html>
  );
}

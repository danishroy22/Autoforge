import LoadingScreen from "@/components/LoadingScreen";
import ParticleField from "@/components/ParticleField";
import AnimatedGrid from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import OrganiserStrip from "@/components/OrganiserStrip";
import Announcements from "@/components/Announcements";
import Schedule from "@/components/Schedule";
import HackathonRules from "@/components/HackathonRules";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen">
        <AnimatedGrid />
        <ParticleField />
        <Hero />
        <OrganiserStrip />
        <Announcements />
        <Schedule />
        <HackathonRules />
        <Footer />
      </main>
    </>
  );
}

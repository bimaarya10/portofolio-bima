"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightCursor from "@/components/SpotlightCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TimelineSection from "@/components/TimelineSection";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import TechMarquee from "@/components/TechMarquee";
import ContactFooter from "@/components/ContactFooter";
import EasterEggToast from "@/components/EasterEggToast";

export default function Portfolio() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const triggerEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#f8faff] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Subtle Desktop Spotlight Cursor */}
      <SpotlightCursor />

      {/* Floating Sticky Pill Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col gap-20 sm:gap-28 pb-12">
        <Hero onEasterEggTrigger={triggerEasterEgg} />
        <About />
        <Skills />
        <TimelineSection />
        <Achievements />
        <Projects />
        <TechMarquee />
      </main>

      {/* Contact + Footer — full bleed dark section, outside constrained main */}
      <ContactFooter />

      {/* Easter Egg Toast Notification */}
      <EasterEggToast show={showEasterEgg} message="Still building things 🚀" />
    </div>
  );
}
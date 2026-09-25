"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    });

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    /* Fixed header — sits at top:0 but has internal padding so the pill clears the viewport edge */
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-5 sm:py-6 pointer-events-none">
      {/* === Desktop pill nav === */}
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto transition-all duration-300 rounded-full px-2 py-1.5 flex items-center gap-0.5 border backdrop-blur-md shadow-sm ${
          scrolled
            ? "bg-white/90 dark:bg-zinc-950/90 border-zinc-200/90 dark:border-zinc-800/90 shadow-zinc-900/5 dark:shadow-black/20"
            : "bg-white/75 dark:bg-zinc-950/75 border-zinc-200/60 dark:border-zinc-800/60"
        }`}
      >
        {/* Desktop items */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/50 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile compact row */}
        <div className="flex md:hidden items-center gap-3 px-1.5 py-0.5">
          <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
            {navItems.find((n) => n.id === activeSection)?.label ?? "Menu"}
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            className="p-1 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — anchored below the pill */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto absolute top-[calc(100%+4px)] left-4 right-4 max-w-[280px] mx-auto md:hidden rounded-2xl bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl shadow-xl p-2.5 flex flex-col gap-0.5 z-50"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-sm transition-colors ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

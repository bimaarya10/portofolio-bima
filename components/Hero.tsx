"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  FolderGit2,
  Send,
  Brain,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

interface HeroProps {
  onEasterEggTrigger?: () => void;
}

export default function Hero({ onEasterEggTrigger }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [clickCount, setClickCount] = useState(0);

  /* ── Subtle 3-D tilt on photo ── */
  const photoRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 30, stiffness: 150 };
  const smoothX = useSpring(mouseX, springCfg);
  const smoothY = useSpring(mouseY, springCfg);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handlePhotoMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  /* ── Easter egg ── */
  const handleNameClick = () => {
    const n = clickCount + 1;
    setClickCount(n);
    if (n >= 3) { onEasterEggTrigger?.(); setClickCount(0); }
  };

  /* ── Smooth scroll helper ── */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  /* ── Animation variants ── */
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16, filter: shouldReduceMotion ? "none" : "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
  };
  const photoAnim = {
    hidden: { opacity: 0, scale: 0.93, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const socials = [
    { name: "Email", href: personalInfo.socials.email, icon: Mail, target: undefined },
    { name: "GitHub", href: personalInfo.socials.github, icon: Github, target: "_blank" },
    { name: "LinkedIn", href: personalInfo.socials.linkedin, icon: Linkedin, target: "_blank" },
  ];

  return (
    /*
     * Hero section
     * - pt accounts for the ~64–72 px floating navbar (py-5 × 2 ≈ 40 px + pill ~28 px)
     * - We use min-h that feels natural without excessive empty space
     */
    <section
      id="hero"
      className="relative flex items-center pt-20 pb-10 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-2rem)]"
    >
      {/* ── Subtle background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Dot pattern fading out from top */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,#000_60%,transparent_100%)] opacity-50" />

        {/* Animated blob — very subtle */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ x: [0, 20, -16, 0], y: [0, -24, 12, 0], scale: [1, 1.06, 0.97, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-400/[0.06] dark:bg-blue-500/[0.08] blur-3xl"
          />
        )}
      </div>

      {/* ── Two-column grid ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* ══ LEFT — Text content ══ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 max-w-[640px]"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50/90 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item}>
            <h1 className="font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] text-[clamp(2rem,5vw,3.25rem)]">
              <span className="block">{personalInfo.headlineFirst}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 dark:from-zinc-400 dark:via-zinc-500 dark:to-zinc-600">
                {personalInfo.headlineSecond}
              </span>
            </h1>
          </motion.div>

          {/* Introduction */}
          <motion.p
            variants={item}
            className="text-[0.9375rem] sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.75] max-w-[520px]"
          >
            Hello, I&apos;m{" "}
            <button
              onClick={handleNameClick}
              type="button"
              className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-dotted decoration-zinc-300 dark:decoration-zinc-700 underline-offset-3 cursor-pointer"
              title="Click me 3×!"
            >
              {personalInfo.name}
            </button>
            , a passionate software engineer with a strong interest in machine learning and data science.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-2.5 pt-1">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-sm font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white shadow-sm transition-all duration-200 active:scale-95"
              style={{ paddingLeft: "1.125rem", paddingRight: "1.125rem" }}
            >
              <FolderGit2 className="w-3.5 h-3.5 text-blue-400 dark:text-blue-600 group-hover:rotate-6 transition-transform" />
              View Projects
              <ArrowDown className="w-3 h-3 opacity-50 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 active:scale-95"
              style={{ paddingLeft: "1.125rem", paddingRight: "1.125rem" }}
            >
              <Send className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
              Let&apos;s Connect
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex items-center gap-2.5">
            {socials.map(({ name, href, icon: Icon, target }) => (
              <motion.a
                key={name}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                aria-label={name}
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className="group relative p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:shadow-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Icon className="w-[18px] h-[18px]" />
                {/* Tooltip */}
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
                  {name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ══ RIGHT — Profile photo ══
            On mobile: shown ABOVE the text (order-first).
            On desktop: right column (order reset by grid). */}
        <motion.div
          variants={photoAnim}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div
            ref={photoRef}
            onMouseMove={handlePhotoMouseMove}
            onMouseLeave={handlePhotoMouseLeave}
            className="relative"
            style={{ perspective: 1000 }}
          >
            {/* Very soft glow — reduced vs before */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-400/12 via-indigo-400/6 to-transparent blur-2xl pointer-events-none" />

            {/* Photo */}
            <motion.div
              style={shouldReduceMotion ? {} : { rotateX, rotateY }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={[
                "relative overflow-hidden rounded-3xl",
                "border border-zinc-200/80 dark:border-zinc-800",
                "shadow-lg shadow-zinc-900/8 dark:shadow-black/25",
                "bg-zinc-100 dark:bg-zinc-900",
                // Responsive sizes — large on desktop, controlled on mobile
                "w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80",
              ].join(" ")}
            >
              <Image
                src={personalInfo.avatar}
                alt={`Profile photo of ${personalInfo.name}`}
                fill
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Single subtle floating badge — top-right only */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-sm text-[10px] font-medium text-zinc-600 dark:text-zinc-300 pointer-events-none"
            >
              <Brain className="w-3 h-3 text-blue-500" />
              ML &amp; Software
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

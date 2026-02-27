"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Smartphone, Briefcase, User, Users, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const skills = [
    { name: "Frontend", icon: <Layout className="w-5 h-5" />, tech: "Vue.js, Nuxt.js, React/Next.js" },
    { name: "Backend", icon: <Database className="w-5 h-5" />, tech: "Node.js, Express.js, LoopBack" },
    { name: "Data Science & Computer Vision", icon: <Code2 className="w-5 h-5" />, tech: "Python, Machine Learning, CNN, YOLO" },
    { name: "Mobile", icon: <Smartphone className="w-5 h-5" />, tech: "Flutter" },
  ];

  const educations = [
    {
      degree: "Computer Science",
      institution: "Lambung Mangkurat University",
      period: "Aug 2023 - Aug 2027",
      desc: "Focused on Full-Stack Development, Teamwork, and core computer science disciplines.",
    },
    {
      degree: "Computer and Network Engineering",
      institution: "SMK Negeri 2 Banjarbaru",
      period: "Jul 2020 - Mar 2023",
      desc: "Final Grade: 86.56",
    }
  ];

  const experiences = [
    {
      title: "Laboratory Assistant",
      organization: "Lambung Mangkurat University",
      period: "Sep 2025 - Present",
      desc: "Teaching Assistant for the Numerical Analysis Course.",
    },
    {
      title: "Full Stack Developer",
      organization: "RuangAlgo.com - IT Solutions",
      period: "Dec 2024 - Present",
      desc: "Freelance professional utilizing TypeScript, PostgreSQL, and various other modern web technologies to build comprehensive IT solutions.",
    },
    {
      title: "Laboratory Assistant",
      organization: "Lambung Mangkurat University",
      period: "Sep 2024 - Dec 2024",
      desc: "Teaching Assistant for the Basic Programming Course.",
    },
    {
      title: "Student Intern",
      organization: "PLN Icon Plus",
      period: "Jan 2022 - Jun 2022",
      desc: "Student Intern at PT Indonesia Comnets Plus, a company operating as an Internet Service Provider (ISP).",
    }
  ];

  const organizations = [
    {
      title: "Member of Appreciation and Student Education Division",
      organization: "BEM FMIPA ULM",
      period: "Feb 2026 - Present",
      desc: "Associated with Lambung Mangkurat University.",
    },
    {
      title: "Head of Education and Technology Department",
      organization: "HIMAKOM FMIPA ULM 2025",
      period: "Mar 2025 - Present",
      desc: "Associated with Lambung Mangkurat University.",
    },
    {
      title: "Full Member",
      organization: "Science Goes to Opera FMIPA ULM 2025",
      period: "Mar 2025 - Present",
      desc: "Associated with Lambung Mangkurat University.",
    },
    {
      title: "Member of Entrepreneurship Division",
      organization: "HIMAKOM FMIPA ULM 2024",
      period: "Feb 2024 - Dec 2024",
      desc: "Associated with Lambung Mangkurat University.",
    }
  ];

  const projects = [
    {
      title: "ERPGo - PT Ruang Algo Multimatics",
      desc: "ERPGo is a web-based multi-tenant ERP solution developed to optimize core business operations, including sales, procurement, finance, logistics, HR, and production. The platform integrates a dedicated Point of Sale (POS) module and a separate Online Order system that manages both Customer and Cashier Orders. It is designed to support SMEs and institutions in integrating their workflows through real-time data access and centralized control.",
      tags: ["Fullstack", "TypeScript",  "Nuxt.js","System Architecture", "Web"],
    },
    {
      title: "CLINICALgo - PT Ruang Algo Multimatics",
      desc: "CLINICALgo is a comprehensive web-based Clinic Management System designed to streamline healthcare operations. It centralizes patient administration, electronic medical records (EMR), and appointment scheduling, alongside essential clinic management features like pharmacy inventory and billing to enhance service delivery and operational efficiency",
      tags: ["Fullstack", "TypeScript",  "Nuxt.js", "Loopback.io","System Architecture", "Web"],
    },
    {
      title: "Brew Chat - Lambung Mangkurat University",
      desc: "Brew Chat is a mobile community platform connecting coffee enthusiasts through real-time group messaging. The app features location-based services to recommend nearby coffee shops and provides visitor traffic insights, allowing users to gauge venue popularity and crowd levels.",
      tags: ["Node.js", "Socket.io", "Mobile App"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-blue-500/30">
      <main className="max-w-4xl pt-20 pb-12 mx-auto px-6 sm:pt-24 sm:pb-12 flex flex-col gap-24">

        {/* Hero Section */}
        <section className="flex flex-col gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-medium tracking-wide mb-2">
              Hello, welcome!
            </h2>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              Software Engineer. <br />
              <span className="text-zinc-400 dark:text-zinc-600">Data Science Enthusiast.</span>
            </h1>
            <p className="max-w-4xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Hello, I'm Bima Arya Sena, a passionate software engineer with a strong interest in data science and computer vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-4 mt-4"
          >
            <a href="mailto:bimaaryasena7@gmail.com" className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/bimaarya10" target="_blank" className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/bima-arya-sena-756219278/" target="_blank" className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </section>

        {/* About Me Section (UPDATED WITH IMAGE) */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4"
          >
            <User className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-2xl font-semibold">About Me</h3>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start">
            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300"
            >
              {/* PASTIKAN FILE profile.jpg ADA DI FOLDER public */}
              <Image 
                src="/profile.jpg" 
                alt="Bima Arya Sena"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Text Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed"
            >
              <p>
                Computer Science Undergraduate at Lambung Mangkurat University with a strong background in Full-Stack Development. Passionate about bridging Software Engineering and Data Science to build scalable, efficient tech solutions. Committed to continuous learning and driving innovation in the technology sector.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Keahlian Section */}
        <section>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4"
          >
            Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-3 text-zinc-500 group-hover:text-blue-500 transition-colors">
                  {skill.icon}
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{skill.name}</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{skill.tech}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pendidikan Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4"
          >
            <GraduationCap className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </motion.div>
          
          <div className="flex flex-col gap-10 border-l border-zinc-300 dark:border-zinc-800 ml-3 pl-8 relative">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-950" />
                
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{edu.degree}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 mb-3 text-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">{edu.institution}</span>
                  <span className="hidden sm:inline text-zinc-400">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{edu.period}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pengalaman Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4"
          >
            <Briefcase className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </motion.div>
          
          <div className="flex flex-col gap-10 border-l border-zinc-300 dark:border-zinc-800 ml-3 pl-8 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-950" />
                
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{exp.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 mb-3 text-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">{exp.organization}</span>
                  <span className="hidden sm:inline text-zinc-400">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pengalaman Organisasi Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4"
          >
            <Users className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-2xl font-semibold">Organizational Experience</h3>
          </motion.div>
          
          <div className="flex flex-col gap-10 border-l border-zinc-300 dark:border-zinc-800 ml-3 pl-8 relative">
            {organizations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-950" />
                
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{org.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 mb-3 text-sm">
                  <span className="font-medium text-blue-600 dark:text-blue-400">{org.organization}</span>
                  <span className="hidden sm:inline text-zinc-400">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{org.period}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  {org.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proyek Section */}
        <section>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4"
          >
            Projects
          </motion.h3>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors cursor-pointer" />
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 pb-4 text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
          <p>© {new Date().getFullYear()} made with love by Bima Arya Sena</p>
        </footer>

      </main>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    title: "Abdijabar Tech — Premium Calculator",
    description:
      "A cross-platform calculator app with AI-powered math solver, 2D graphing engine, unit converter with 8 categories, and camera OCR scan & solve. Built with Flutter and Groq AI.",
    tags: ["Flutter", "AI", "Groq", "Dart", "OCR", "SQLite"],
    color: "#00d4ff",
    github: "https://github.com/Ubdyjabaar/Calculator",
    demo: "https://ubdyjabaar.github.io/Calculator",
  },
  {
    title: "ABDI AI — Telegram Assistant",
    description:
      "A Telegram AI assistant bot for task management, event scheduling with reminders, quiz solving from PDFs/images, and social media posting. Uses LangGraph + Groq LLM.",
    tags: ["Python", "LangGraph", "Groq", "Telegram", "AI", "SQLite"],
    color: "#7c3aed",
    github: "https://github.com/Ubdyjabaar/Midusa-AI",
    demo: "https://t.me/Abdi_AI_Bot",
  },
  {
    title: "Abdijabar Tech — AI Suite",
    description:
      "Full ecosystem combining the calculator app and AI assistant with Firebase backend for real-time sync, cloud storage, and cross-platform data persistence.",
    tags: ["Firebase", "AI", "Cloud", "Full-Stack", "API"],
    color: "#f59e0b",
    github: "https://github.com/Ubdyjabaar",
    demo: "https://ubdyjabaar.github.io/Calculator",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — a premium 3D interactive portfolio built with Next.js, React Three Fiber, Framer Motion, and Tailwind CSS. Features glassmorphism design and 3D visuals.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind", "TypeScript"],
    color: "#10b981",
    github: "https://github.com/Ubdyjabaar/abdijabar-portfolio",
    demo: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-widest text-primary uppercase mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Showcasing innovative solutions across AI, mobile, and web
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative rounded-2xl glass overflow-hidden transition-all duration-300 hover:glass-hover"
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
                }}
              />
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
                  >
                    <GitFork size={14} />
                    Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

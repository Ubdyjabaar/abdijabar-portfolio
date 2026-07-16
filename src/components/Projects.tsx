"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Download,
  Smartphone,
  Bot,
  Monitor,
  GitFork,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: "calculator",
    title: "Abdijabar Tech",
    subtitle: "Premium AI Calculator",
    description:
      "A cross-platform calculator app with AI-powered math solver, 2D graphing engine, unit converter with 8 categories, and camera OCR scan & solve. Built with Flutter and Groq AI.",
    longDescription: [
      "Standard & scientific calculator with cursor-based expression editing",
      "2D graphing engine — plot any function interactively",
      "AI Math Solver — derivatives, integrals, equations with step-by-step explanations",
      "Camera OCR — take a photo of a math problem and get instant solutions",
      "Unit converter — Length, Area, Temperature, Volume, Mass, Data, Speed, Time + Tip calculator",
      "History with SQLite persistence (up to 500 entries)",
      "Dark/Light theme with Material 3 and glassmorphism design",
    ],
    tags: ["Flutter", "Groq AI", "OCR", "SQLite", "Dart"],
    color: "#00d4ff",
    image: "/calculator-preview.jpeg",
    downloads: [
      {
        label: "Android APK",
        icon: Smartphone,
        url: "https://github.com/Ubdyjabaar/Calculator/releases",
        desc: "Latest version for Android",
      },
      {
        label: "Windows",
        icon: Monitor,
        url: "https://github.com/Ubdyjabaar/Calculator/releases",
        desc: "Portable ZIP for Windows",
      },
    ],
    links: [
      { label: "Web Demo", url: "https://ubdyjabaar.github.io/Calculator", icon: ExternalLink },
      { label: "Source Code", url: "https://github.com/Ubdyjabaar/Calculator", icon: GitFork },
    ],
  },
  {
    id: "midusa-ai",
    title: "ABDI AI",
    subtitle: "Telegram Assistant Bot",
    description:
      "A Telegram AI assistant bot for task management, event scheduling with reminders, quiz solving from PDFs/images, and social media posting. Uses LangGraph + Groq LLM.",
    longDescription: [
      "Task management — add, list, complete, and delete tasks via chat",
      "Event scheduling — natural language date parsing with reminders every 60s",
      "AI Chat — powered by Groq llama-3.3-70b with LangGraph intent routing",
      "Quiz Solver — upload PDF or photo of exam questions, get solved answers in .docx",
      "Social Media — post to Facebook and TikTok directly from Telegram",
      "State-machine agent — intelligently classifies intent and routes to handlers",
    ],
    tags: ["Python", "LangGraph", "Groq", "Telegram", "AI"],
    color: "#7c3aed",
    image: "",
    downloads: [],
    links: [
      { label: "Use Bot", url: "https://t.me/Abdi_AI_Bot", icon: Bot },
      { label: "Source Code", url: "https://github.com/Ubdyjabaar/Midusa-AI", icon: GitFork },
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

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
            My Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Explore My <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Download apps, use bots, and explore what I&apos;ve built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isOpen = activeProject === project.id;
            return (
              <motion.div
                key={project.id}
                layout
                className="group rounded-2xl glass overflow-hidden transition-all duration-300 hover:glass-hover"
                style={{
                  border: isOpen
                    ? `1px solid ${project.color}30`
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
                  }}
                />

                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className="text-xs font-mono tracking-wider"
                        style={{ color: project.color }}
                      >
                        {project.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {project.title}
                      </h3>
                    </div>
                    {project.image && (
                      <div className="hidden sm:block w-20 h-20 rounded-xl overflow-hidden shrink-0 glass">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

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

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/5 space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                              <Sparkles size={14} className="text-primary" />
                              Features
                            </h4>
                            <ul className="space-y-2">
                              {project.longDescription.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-zinc-400"
                                >
                                  <Check
                                    size={12}
                                    className="mt-0.5 shrink-0"
                                    style={{ color: project.color }}
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {project.downloads.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                                <Download size={14} className="text-primary" />
                                Download
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {project.downloads.map((dl) => {
                                  const Icon = dl.icon;
                                  return (
                                    <a
                                      key={dl.label}
                                      href={dl.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all duration-200"
                                      style={{
                                        background: `${project.color}15`,
                                        color: project.color,
                                        border: `1px solid ${project.color}25`,
                                      }}
                                    >
                                      <Icon size={14} />
                                      {dl.label}
                                      <span className="text-zinc-500 font-normal hidden sm:inline">
                                        — {dl.desc}
                                      </span>
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-3 pt-2">
                            {project.links.map((link) => {
                              const Icon = link.icon;
                              return (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                                >
                                  <Icon size={14} />
                                  {link.label}
                                  <ArrowRight
                                    size={12}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  />
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() =>
                      setActiveProject(isOpen ? null : project.id)
                    }
                    className="mt-4 text-xs font-mono tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                    style={{ color: project.color }}
                  >
                    {isOpen ? "Show Less" : "Explore Project"}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ↓
                    </motion.span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Assistant",
    description:
      "Intelligent conversational agent using advanced prompt engineering and LLM integration for natural language understanding and task automation.",
    tags: ["AI", "Python", "Prompt Engineering", "LLM"],
    color: "#00d4ff",
  },
  {
    title: "Flutter E-Commerce App",
    description:
      "Cross-platform mobile application with real-time inventory, payment gateway integration, and personalized recommendations using Firebase.",
    tags: ["Flutter", "Firebase", "UI/UX", "Dart"],
    color: "#7c3aed",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive visualization platform for business intelligence, featuring real-time data processing, custom reports, and predictive analytics.",
    tags: ["Python", "Data Analysis", "React", "SQL"],
    color: "#f59e0b",
  },
  {
    title: "UI/UX Design System",
    description:
      "Comprehensive design system with reusable components, accessibility-first approach, and seamless developer handoff documentation.",
    tags: ["UI/UX", "Figma", "Design System", "Prototyping"],
    color: "#10b981",
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
                    href="#"
                    className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
                  >
                    <GitFork size={14} />
                    Source
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

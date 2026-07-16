"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Smartphone,
  Palette,
  BarChart3,
  Code2,
  Cpu,
  Globe,
  Flame,
  Database,
  Cloud,
  Link2,
  Zap,
} from "lucide-react";


const skills = [
  { icon: Brain, label: "Prompt Engineering", level: 95, color: "#00d4ff" },
  { icon: Smartphone, label: "Flutter Development", level: 90, color: "#7c3aed" },
  { icon: Palette, label: "UI/UX Design", level: 88, color: "#f59e0b" },
  { icon: BarChart3, label: "Data Analysis", level: 85, color: "#10b981" },
  { icon: Code2, label: "Python Development", level: 92, color: "#3b82f6" },
  { icon: Cpu, label: "Artificial Intelligence", level: 90, color: "#ec4899" },
  { icon: Globe, label: "Full-Stack Development", level: 85, color: "#00d4ff" },
  { icon: Flame, label: "Firebase", level: 82, color: "#f59e0b" },
  { icon: Database, label: "SQL & MongoDB", level: 80, color: "#10b981" },
  { icon: Cloud, label: "Cloud Technologies", level: 78, color: "#3b82f6" },
  { icon: Link2, label: "REST APIs", level: 88, color: "#7c3aed" },
  { icon: Zap, label: "AI Automation", level: 85, color: "#ec4899" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-widest text-primary uppercase mb-4">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Crafting digital experiences through diverse technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl glass transition-all duration-300 hover:glass-hover hover:scale-[1.02]"
                style={{
                  boxShadow: `0 0 30px ${skill.color}08`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${skill.color}15, transparent 40%)`,
                  }}
                />
                <div className="relative p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl"
                      style={{
                        background: `${skill.color}15`,
                        color: skill.color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-sm text-zinc-200">
                      {skill.label}
                    </h3>
                  </div>

                  <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        boxShadow: `0 0 10px ${skill.color}40`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
                    />
                  </div>
                  <span
                    className="mt-1 block text-xs font-mono text-right"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import FloatingShapes from "./FloatingShapes";

const roles = [
  "Software Engineer",
  "AI Developer",
  "Prompt Engineering Expert",
  "Flutter Developer",
  "UI/UX Designer",
  "Data Analyst",
  "Python Developer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingShapes />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto section-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-primary font-mono mb-4 tracking-widest uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="gradient-text">Abdijabar</span>
          <br />
          <span className="text-white">Mohamed Ibrahim</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-10 md:h-12 mb-8"
        >
          <span className="text-xl md:text-2xl text-zinc-400 font-mono">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10"
        >
          I transform ideas into intelligent digital products by combining
          Artificial Intelligence, Prompt Engineering, Flutter development,
          UI/UX design, Python programming, and Data Analytics to build
          innovative, scalable, and user-focused solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-background px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
          >
            View My Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold text-zinc-200 transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-6 text-zinc-600"
        >
          {["AI", "ML", "Flutter", "Python", "UI/UX"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono tracking-wider text-zinc-600"
            >
              #{tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}

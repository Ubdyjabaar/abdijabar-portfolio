"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-widest text-primary uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Have a project in mind? Let&apos;s discuss how I can help bring your
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-zinc-400 text-sm">
                  abdijabar@example.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Location</h3>
                <p className="text-zinc-400 text-sm">Available for Remote Work</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-xl glass px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-background px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

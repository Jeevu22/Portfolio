"use client";

import { motion } from "motion/react";


const contactLinks = [
  {
    label: "Email",
    value: "jeevanhs05@gmail.com",
    href: "mailto:jeevanhs05@gmail.com",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.5)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Connect Professionally",
    href: "https://linkedin.com/in/jeevan-h-s-152945301",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.5)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@Jeevu22",
    href: "https://github.com/Jeevu22",
    color: "#e0e0e0",
    glow: "rgba(220,220,220,0.4)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@jeevu_.17",
    href: "https://www.instagram.com/jeevu_.17/",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.5)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function Footer() {
  return (
    <footer
      className="bg-[#080808] text-white pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 md:px-24 border-t border-white/[0.06] relative z-20 overflow-hidden"
      id="contact"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-12 sm:gap-16 md:gap-8">

        {/* Left — CTA */}
        <motion.div
          className="max-w-2xl w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-5 font-medium">
            Let&apos;s work together
          </p>
          <h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 bg-gradient-to-br from-white via-white/85 to-white/30 bg-clip-text text-transparent leading-[1.05]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Let&apos;s build something impactful together.
          </h3>
          <p className="text-white/40 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md font-light leading-relaxed">
            Open for opportunities, collaborations, or just a chat about data and AI.
          </p>
          <a
            href="mailto:jeevanhs05@gmail.com"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-black font-bold tracking-widest text-xs sm:text-sm uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Start a Conversation
            <svg className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Right — Contact Links */}
        <motion.div
          className="flex flex-col gap-2 sm:gap-3 w-full md:w-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {contactLinks.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 p-4 pr-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300"
              style={{ minWidth: "280px" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${c.color}10`;
                (e.currentTarget as HTMLElement).style.border = `1px solid ${c.color}35`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${c.glow}25`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  color: c.color,
                  background: `${c.color}18`,
                  border: `1px solid ${c.color}30`,
                }}
              >
                {c.icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-0.5">
                  {c.label}
                </p>
                <p className="text-white/80 font-medium tracking-wide text-sm transition-colors duration-300 group-hover:text-white">
                  {c.value}
                </p>
              </div>
              {/* Arrow */}
              <svg
                className="w-4 h-4 ml-auto text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/[0.07] text-[11px] text-white/25 flex flex-col md:flex-row justify-between items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} Jeevan H S. All rights reserved.</p>
        <p className="font-medium tracking-widest uppercase">Built with Next.js & Framer Motion</p>
      </motion.div>
    </footer>
  );
}

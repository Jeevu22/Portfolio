"use client";

import { motion } from "motion/react";

const platforms = [
  {
    name: "LinkedIn",
    handle: "Jeevan H S",
    link: "https://linkedin.com/in/jeevan-h-s-152945301",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "Connect with me",
  },
  {
    name: "GitHub",
    handle: "@Jeevu22",
    link: "https://github.com/Jeevu22",
    color: "#e0e0e0",
    glow: "rgba(220,220,220,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "View repositories",
  },
  {
    name: "Instagram",
    handle: "@jeevu_.17",
    link: "https://www.instagram.com/jeevu_.17/",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: "Follow me",
  },
  {
    name: "Email",
    handle: "jeevanhs05@gmail.com",
    link: "mailto:jeevanhs05@gmail.com",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Say hello",
  },
];

export default function Socials() {
  return (
    <section className="relative z-20 bg-[#0e0e0e] py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-24 text-white border-y border-white/5 overflow-hidden" id="connect">
      {/* Background ambient blobs */}
      <div className="absolute -top-40 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-medium">Find me on</span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Connect Across Platforms.
          </h2>
          <p className="text-white/40 text-sm sm:text-base md:text-lg max-w-xl px-2">
            Checkout my repositories, follow my journey, or drop me a mail directly.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {platforms.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.link}
              target={p.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col items-center justify-center p-6 sm:p-9 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${p.color}12 0%, #141414 60%)`,
                border: `1px solid ${p.color}30`,
                boxShadow: `0 4px 24px ${p.glow}20`,
              }}
            >
              {/* Corner glow decoration */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ background: p.color, transform: "translate(30%, -30%)" }}
              />

              {/* Icon circle */}
              <div
                className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-105"
                style={{
                  color: p.color,
                  background: `${p.color}20`,
                  boxShadow: `0 0 20px ${p.glow}60, inset 0 1px 0 ${p.color}30`,
                  border: `1px solid ${p.color}40`,
                }}
              >
                {p.icon}
              </div>

              {/* Text */}
              <h3
                className="relative z-10 text-xl font-bold tracking-tight mb-1 transition-all duration-300"
                style={{ color: p.color, fontFamily: "var(--font-space)" }}
              >
                {p.name}
              </h3>
              <p className="relative z-10 text-white/50 text-sm font-medium tracking-wide mb-4 group-hover:text-white/70 transition-colors duration-300 break-all text-center">
                {p.handle}
              </p>

              {/* CTA */}
              <span
                className="relative z-10 text-[11px] tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full transition-all duration-300"
                style={{
                  color: p.color,
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.label} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

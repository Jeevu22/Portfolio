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
    href: "https://www.linkedin.com/feed/",
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
    label: "WhatsApp",
    value: "Chat Directly",
    href: "https://wa.me/918073474557",
    color: "#25D366",
    glow: "rgba(37,211,102,0.5)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function Footer() {
  return (
    <footer
      className="bg-[#080808] text-white pt-28 pb-12 px-6 md:px-24 border-t border-white/[0.06] relative z-20 overflow-hidden"
      id="contact"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-16 md:gap-8">

        {/* Left — CTA */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5 font-medium">
            Let&apos;s work together
          </p>
          <h3
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white via-white/85 to-white/30 bg-clip-text text-transparent leading-[1.05]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Let&apos;s build something
            <br />
            impactful together.
          </h3>
          <p className="text-white/40 text-lg mb-10 max-w-md font-light leading-relaxed">
            Open for opportunities, collaborations, or just a chat about data and AI.
          </p>
          <motion.a
            href="mailto:jeevanhs05@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold tracking-widest text-sm uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Start a Conversation
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right — Contact Links */}
        <motion.div
          className="flex flex-col gap-3 w-full md:w-auto"
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

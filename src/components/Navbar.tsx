"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

import { useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jeevu_.17/",
    color: "#E1306C",
    hoverShadow: "rgba(225,48,108,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jeevan-h-s-152945301",
    color: "#0A66C2",
    hoverShadow: "rgba(10,102,194,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Jeevu22",
    color: "#e0e0e0",
    hoverShadow: "rgba(255,255,255,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

const navLinks = ["Work", "About", "Skills", "Connect", "Contact"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-3 px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between pl-4 pr-2 sm:pl-5 sm:pr-2.5 py-2 rounded-full w-full max-w-3xl transition-colors duration-500"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: scrolled ? "rgba(8,8,12,0.85)" : "rgba(255,255,255,0.04)",
          border: scrolled
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled
            ? "0 6px 32px rgba(0,0,0,0.6)"
            : "0 4px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="#home"
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-space)" }}
        >
          <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#4D94FF] to-[#B829FF] flex items-center justify-center text-[11px] font-bold text-white shadow-[0_0_12px_rgba(184,41,255,0.5)]">
            J
          </span>
          <span className="text-white font-bold text-[12px] tracking-[0.18em] uppercase hidden sm:inline">
            Jeevan
          </span>
        </a>

        {/* ── Center Nav Links (Desktop) ── */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-[10px] tracking-[0.18em] uppercase font-semibold text-white/50 hover:text-white transition-colors duration-200 py-1"
            >
              {link}
              {hovered === link && (
                <motion.span
                  className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-white/0 via-white to-white/0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* ── Right (Desktop) ── */}
        <div className="hidden md:flex items-center gap-1.5">
          {socialLinks.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex items-center justify-center w-7 h-7 rounded-full"
              style={{
                color: s.color,
                background: `${s.color}16`,
                border: `1px solid ${s.color}30`,
              }}
            >
              <span className="w-[13px] h-[13px] block">{s.icon}</span>
            </motion.a>
          ))}

          <motion.a
            href="/Jeevan_HS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="ml-1.5 px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]"
          >
            Resume
          </motion.a>
        </div>

        {/* ── Mobile Trigger ── */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/Jeevan_HS_Resume.pdf"
            target="_blank"
            className="px-3.5 py-1.5 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase"
          >
            Resume
          </a>
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-16 z-40 md:hidden"
          >
            <div className="p-6 rounded-3xl bg-[rgba(8,8,12,0.96)] backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex flex-col gap-5 items-center">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base tracking-[0.2em] uppercase font-bold text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}

                <div className="w-full h-px bg-white/10 my-1" />

                <div className="flex gap-3">
                  {socialLinks.map((s, idx) => (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + idx * 0.05 }}
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10"
                      style={{ color: s.color }}
                    >
                      <span className="w-4 h-4">{s.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  // ... (keeping existing socialLinks)
  {
    name: "Instagram",
    href: "https://www.instagram.com/jeevu.17",
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
    name: "WhatsApp",
    href: "https://wa.me/918073474557",
    color: "#25D366",
    hoverShadow: "rgba(37,211,102,0.6)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
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
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4">
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between px-6 md:px-8 py-4 md:py-5 rounded-2xl w-full max-w-6xl transition-all duration-500"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          background: scrolled
            ? "rgba(10,10,10,0.85)"
            : "rgba(255,255,255,0.03)",
          border: scrolled
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 8px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* ── Logo ── */}
        <div
          className="flex items-center gap-3 w-auto md:w-1/4"
          style={{ fontFamily: "var(--font-space)" }}
        >
          {/* Animated dot */}
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 rounded-full bg-white inline-block flex-shrink-0"
          />
          <span className="text-white font-bold text-sm md:text-base tracking-[0.18em] uppercase">
            Portfolio
          </span>
        </div>

        {/* ── Center Nav Links (Desktop) ── */}
        <div className="hidden md:flex items-center justify-center gap-10 w-2/4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-[11px] tracking-[0.22em] uppercase font-semibold text-white/45 hover:text-white transition-colors duration-300 py-1"
            >
              {link}
              {hovered === link && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-white/0 via-white to-white/0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* ── Right (Desktop) ── */}
        <div className="hidden md:flex items-center justify-end gap-3 w-1/4">
          {/* Social Icon Badges */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.93 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300"
                style={{
                  color: s.color,
                  background: `${s.color}18`,
                  boxShadow: `0 0 10px ${s.hoverShadow}40, inset 0 1px 0 ${s.color}22`,
                  border: `1px solid ${s.color}33`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${s.color}30`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${s.hoverShadow}, 0 0 6px ${s.hoverShadow}80`;
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${s.color}66`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${s.color}18`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${s.hoverShadow}40, inset 0 1px 0 ${s.color}22`;
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${s.color}33`;
                }}
              >
                <span className="w-[15px] h-[15px] block">{s.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-white/10 mx-1" />

          {/* Resume Button */}
          <motion.a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-2.5 rounded-xl bg-white text-black text-[11px] font-bold tracking-widest uppercase transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)]"
          >
            Resume
          </motion.a>
        </div>

        {/* ── Mobile Trigger ── */}
        <div className="flex md:hidden items-center gap-4">
          <motion.a
            href="/resume.html"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-[10px] font-bold tracking-widest uppercase"
          >
            Resume
          </motion.a>
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="p-6 rounded-[2.5rem] bg-[rgba(10,10,10,0.95)] backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex flex-col gap-6 items-center">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg tracking-[0.2em] uppercase font-bold text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
                
                <div className="w-full h-px bg-white/10 my-2" />
                
                <div className="flex gap-4">
                  {socialLinks.map((s, idx) => (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.05) }}
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10"
                      style={{ color: s.color }}
                    >
                      <span className="w-5 h-5">{s.icon}</span>
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

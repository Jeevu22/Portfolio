"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const statCards = [
  {
    label: "PROJECTS",
    value: "5+",
    sub: "Shipped & Presented",
    icon: "🚀",
    iconClass:
      "bg-gradient-to-br from-pink-500/20 to-transparent border-pink-500/30",
  },
  {
    label: "CERTIFICATIONS",
    value: "8+",
    sub: "Deloitte · Tata · NASSCOM",
    icon: "🏅",
    iconClass:
      "bg-gradient-to-br from-yellow-500/20 to-transparent text-yellow-400 border-yellow-500/30",
  },
  {
    label: "FOCUS",
    value: "AI / ML",
    sub: "+ Full-Stack Dev",
    icon: "</>",
    iconClass:
      "bg-gradient-to-br from-[#1E3A8A]/40 to-transparent text-[#4D94FF] border-[#4D94FF]/30 text-[13px] font-bold",
  },
];

const infoItems = [
  {
    icon: "🎓",
    title: "Final Year",
    sub: "B.E. AI & DS · 2023–27",
    color: "#00E5FF",
  },
  {
    icon: "🏫",
    title: "Coorg Institute",
    sub: "Of Technology",
    color: "#4D94FF",
  },
  {
    icon: "💼",
    title: "Open to Internships",
    sub: "AI · Data · Full-Stack",
    color: "#B829FF",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] flex flex-col"
    >
      {/* ── Portrait background with glow ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Warm aura glow behind the portrait */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%]"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 62% 45%, rgba(255,94,20,0.28) 0%, rgba(255,60,40,0.12) 40%, transparent 70%)",
          }}
        />
        <img
          src="/sequence/frame_00_delay-0.333s.png"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          style={{ filter: "brightness(1.02) saturate(1.12)" }}
        />
        {/* Soft glow bloom over the image */}
        <div
          className="absolute inset-0 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 40% 45% at 60% 40%, rgba(255,120,50,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Readability gradients — lighter so the portrait stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/35" />
      </div>

      {/* ── Main hero content ── */}
      <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-center pt-24 pb-6 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col items-start text-left max-w-[620px]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/25 bg-purple-500/[0.08] backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.22em] font-semibold text-purple-300/90 uppercase">
                AI &amp; Data Science Engineer
              </span>
            </div>

            {/* Name */}
            <h1
              className="leading-[0.9] font-bold text-white mb-6"
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                letterSpacing: "-0.02em",
                textShadow: "0 0 60px rgba(255,100,40,0.25)",
              }}
            >
              JEEVAN
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6 max-w-[500px]">
              Final-year AI &amp; Data Science undergraduate building
              intelligent, real-world systems — from predictive analytics to
              full-stack applications.
            </p>

            {/* Roles */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-[15px] font-semibold mb-9">
              <span className="text-[#00E5FF]">Machine Learning</span>
              <span className="text-white/30">•</span>
              <span className="text-[#B829FF]">Data Analytics</span>
              <span className="text-white/30">•</span>
              <span className="text-[#4D94FF]">Full-Stack Dev</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Jeevan_HS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4D94FF] to-[#B829FF] text-white font-bold text-xs sm:text-[13px] tracking-[0.1em] uppercase hover:shadow-[0_0_30px_rgba(184,41,255,0.45)] transition-shadow duration-300"
              >
                <span className="text-lg leading-none group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
                Resume
              </a>
              <a
                href="#work"
                className="group flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/15 text-white font-bold text-xs sm:text-[13px] tracking-[0.1em] uppercase hover:bg-white/10 hover:border-white/25 transition-colors duration-300"
              >
                View Projects
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Compact stat chips — mobile/tablet only */}
            <div className="grid grid-cols-3 gap-3 w-full mt-10 lg:hidden">
              {statCards.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 p-3 text-center"
                >
                  <p className="text-lg font-bold text-white leading-none mb-1">
                    {c.value}
                  </p>
                  <p className="text-[9px] tracking-wider text-white/45 uppercase font-semibold">
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stat cards (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {statCards.map((c) => (
              <div
                key={c.label}
                className="group flex items-center gap-6 p-5 rounded-[20px] bg-black/50 backdrop-blur-md border border-white/10 min-w-[280px] shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-black/65 hover:border-white/20 transition-colors duration-300"
              >
                <div>
                  <p className="text-[10px] text-white/45 font-semibold tracking-wider uppercase mb-1">
                    {c.label}
                  </p>
                  <p className="text-2xl font-bold text-white leading-none mb-1">
                    {c.value}
                  </p>
                  <p className="text-xs text-white/50">{c.sub}</p>
                </div>
                <div
                  className={`ml-auto w-11 h-11 rounded-[14px] flex items-center justify-center text-lg border group-hover:scale-110 transition-transform duration-300 ${c.iconClass}`}
                >
                  {c.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom info bar + scroll cue ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.35 }}
        className="relative z-10 w-full max-w-[960px] mx-auto px-5 sm:px-8 pb-6 flex flex-col items-center"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 p-4 md:px-8 rounded-3xl md:rounded-full bg-black/60 backdrop-blur-md border border-white/10 mb-6 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          {infoItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center justify-start md:justify-center gap-4 px-2 ${
                i > 0 ? "md:border-l md:border-white/[0.08]" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-base shrink-0 border"
                style={{
                  color: item.color,
                  borderColor: `${item.color}33`,
                  background: `${item.color}14`,
                }}
              >
                {item.icon}
              </div>
              <div className="text-left">
                <p
                  className="text-[13px] font-bold leading-tight"
                  style={{ color: item.color }}
                >
                  {item.title}
                </p>
                <p className="text-xs text-white/60">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex flex-col items-center gap-2">
          <p className="text-[9px] tracking-[0.3em] text-white/40 font-semibold uppercase">
            Scroll to Explore
          </p>
          <div className="w-[18px] h-7 rounded-full border border-white/30 flex justify-center p-[3px]">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[3px] h-[5px] bg-white/60 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

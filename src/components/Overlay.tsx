"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";


export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Smooth spring wrapper for all scroll transforms
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Section 1: Hero (0 - 0.15)
  const o1 = useTransform(smoothProgress, [0, 0.05, 0.13], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.13], [0, -180]);
  const scale1 = useTransform(smoothProgress, [0, 0.13], [1, 0.94]);

  // Section 2: About (0.15 - 0.35)
  const o2 = useTransform(smoothProgress, [0.12, 0.18, 0.3, 0.36], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.12, 0.36], [120, -120]);

  // Section 3: What I Like (0.35 - 0.55)
  const o3 = useTransform(smoothProgress, [0.35, 0.41, 0.5, 0.56], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.35, 0.56], [120, -120]);

  // Section 4: What I Build (0.55 - 0.75)
  const o4 = useTransform(smoothProgress, [0.55, 0.61, 0.7, 0.76], [0, 1, 1, 0]);
  const y4 = useTransform(smoothProgress, [0.55, 0.76], [120, -120]);

  // Section 5: Goal (0.75 - 1.00)
  const o5 = useTransform(smoothProgress, [0.75, 0.82, 0.95, 1], [0, 1, 1, 0]);
  const y5 = useTransform(smoothProgress, [0.75, 1], [120, -50]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 w-full">
      <div className="sticky top-0 h-screen w-full">

        {/* ── HERO ── */}
        <motion.div
          style={{ opacity: o1, y: y1, scale: scale1 }}
          className="absolute inset-0 z-10"
          data-hero-content
        >
          {/* Centered hero content container positioned at ~47% from top */}
          <div
            className="absolute left-1/2 w-full max-w-[950px] px-6 text-center"
            style={{
              top: '47%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase font-semibold mb-7 md:mb-8"
                style={{ color: 'rgba(255,255,255,0.38)' }}
              >
                AI & DATA SCIENCE ENGINEER
              </motion.p>

              <h1
                className="leading-[0.92] font-extrabold text-white mb-6 md:mb-7"
                style={{
                  fontFamily: 'var(--font-space)',
                  fontSize: 'clamp(5rem, 8vw, 8.5rem)',
                  letterSpacing: '-0.05em',
                  textShadow: '0 2px 20px rgba(0,0,0,0.35)',
                }}
              >
                Jeevan
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="max-w-[560px] mx-auto font-normal mb-9 md:mb-10 leading-[1.4] tracking-normal"
                style={{
                  fontSize: 'clamp(16px, 1.3vw, 20px)',
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                I build intelligent systems that transform data into decisions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
              >
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white text-black font-bold text-[13px] tracking-[0.1em] uppercase hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] hover:translate-y-[-2px] transition-all duration-300 w-[155px] h-[50px]"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Resume
                </a>
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-transparent border border-white/25 text-white/85 font-bold text-[13px] tracking-[0.1em] uppercase hover:bg-white/[0.08] hover:border-white/40 hover:translate-y-[-2px] transition-all duration-300 w-[155px] h-[50px]"
                >
                  Connect
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── ABOUT ── */}
        <motion.div
          style={{ opacity: o2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left w-full px-6 md:px-24 max-w-5xl"
        >
          <div className="backdrop-blur-xl bg-black/30 p-6 sm:p-10 md:p-14 border border-white/[0.07] rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
            <span className="inline-block text-[10px] font-bold tracking-[0.35em] text-[#00E5FF] uppercase mb-5 px-3 py-1 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/10">
              About Me
            </span>
            <p className="text-2xl md:text-4xl leading-relaxed text-white/90 font-light" style={{ fontFamily: "var(--font-space)" }}>
              I&apos;m a third-year Artificial Intelligence and Data Science student
              at Coorg Institute of Technology.{" "}
              <span className="text-white/45">
                I am passionate about building intelligent systems that solve
                real-world problems using data, machine learning, and smart
                automation.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── WHAT I LIKE ── */}
        <motion.div
          style={{ opacity: o3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right w-full px-6 md:px-24"
        >
          <div className="max-w-4xl ml-auto backdrop-blur-xl bg-black/30 p-6 sm:p-10 md:p-14 border border-white/[0.07] rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
            <span className="inline-block text-[10px] font-bold tracking-[0.35em] text-[#FF0055] uppercase mb-5 px-3 py-1 rounded-full border border-[#FF0055]/20 bg-[#FF0055]/10">
              What I Like
            </span>
            <p className="text-3xl md:text-5xl leading-tight text-white/90 font-light" style={{ fontFamily: "var(--font-space)" }}>
              Deeply interested in{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Artificial Intelligence, Machine Learning, and Data Analytics.
              </span>
            </p>
            <p className="text-base text-white/40 mt-6 leading-relaxed">
              I enjoy working on real-world problem-solving projects, especially
              in healthcare, automation, and smart systems.
            </p>
          </div>
        </motion.div>

        {/* ── WHAT I BUILD ── */}
        <motion.div
          style={{ opacity: o4, y: y4 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left w-full px-6 md:px-24"
        >
          <div className="max-w-5xl backdrop-blur-xl bg-black/30 p-6 sm:p-10 md:p-14 border border-white/[0.07] rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
            <span className="inline-block text-[10px] font-bold tracking-[0.35em] text-[#8A2BE2] uppercase mb-5 px-3 py-1 rounded-full border border-[#8A2BE2]/20 bg-[#8A2BE2]/10">
              What I Build
            </span>
            <p className="text-4xl md:text-6xl tracking-tight text-white/90 leading-tight" style={{ fontFamily: "var(--font-space)" }}>
              Intelligent applications using{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
                AI and data science
              </span>{" "}
              techniques.
            </p>
            <p className="text-lg text-white/45 mt-6 max-w-2xl leading-relaxed">
              My work includes hospital management platforms, data dashboards,
              and predictive models focused on practicality and scalability.
            </p>
          </div>
        </motion.div>

        {/* ── GOAL / AMBITION ── */}
        <motion.div
          style={{ opacity: o5, y: y5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-6 md:px-24"
        >
          <div className="max-w-4xl backdrop-blur-xl bg-black/30 p-6 sm:p-10 md:p-16 border border-white/[0.07] rounded-[2.5rem] shadow-[0_8px_80px_rgba(255,255,255,0.04)]">
            <span className="inline-block text-[10px] font-bold tracking-[0.35em] text-emerald-400 uppercase mb-6 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/10">
              Ambition
            </span>
            <p className="text-3xl md:text-5xl leading-tight text-white font-semibold" style={{ fontFamily: "var(--font-space)" }}>
              Become a skilled AI Engineer and work on innovative technologies
              that solve real-world challenges.
            </p>
            <div className="w-20 h-[2px] bg-gradient-to-r from-emerald-400 to-transparent mx-auto mt-10 opacity-60 rounded-full" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

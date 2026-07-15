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
          className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24"
          data-hero-content
        >
          <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 h-full relative pt-10 md:pt-20">
            
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start text-left max-w-[600px] z-20 pointer-events-auto"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] mb-6 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                <span className="text-[10px] md:text-[11px] tracking-[0.2em] font-semibold text-white/70 uppercase">
                  DATA PIPELINE ARCHITECT
                </span>
              </div>

              {/* Name */}
              <h1 className="leading-[0.9] font-bold text-white mb-6" style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(4rem, 7vw, 7.5rem)', letterSpacing: '-0.02em' }}>
                JEEVAN
              </h1>

              {/* Description */}
              <p className="text-[16px] md:text-[18px] text-white/70 font-light leading-relaxed mb-6 max-w-[480px]">
                Designing intelligent systems that transform complex data into meaningful insights.
              </p>

              {/* Roles List */}
              <div className="flex flex-wrap items-center gap-3 text-[14px] md:text-[15px] font-semibold mb-10">
                <span className="text-[#00E5FF]">AI Engineer</span>
                <span className="text-white/30">•</span>
                <span className="text-[#B829FF]">Data Scientist</span>
                <span className="text-white/30">•</span>
                <span className="text-[#4D94FF]">ML Developer</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[13px] tracking-wide uppercase hover:opacity-90 transition-opacity">
                  <span className="text-lg leading-none">↓</span> RESUME
                </a>
                <a href="#projects" className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-[13px] tracking-wide uppercase hover:bg-white/5 transition-colors">
                  CASE STUDIES <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </motion.div>

            {/* Right Side Stat Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="hidden lg:flex flex-col gap-4 z-20 pointer-events-auto mt-[-40px]"
            >
              {/* Card 1 */}
              <div className="flex items-center gap-6 p-5 rounded-[20px] bg-black/40 backdrop-blur-md border border-white/[0.05] min-w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <p className="text-[10px] text-white/40 font-semibold tracking-wider uppercase mb-1">PROJECTS</p>
                  <p className="text-2xl font-bold text-white leading-none mb-1">10+</p>
                  <p className="text-[12px] text-white/50">Completed</p>
                </div>
                <div className="ml-auto w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-lg border border-white/[0.05]">🚀</div>
              </div>
              {/* Card 2 */}
              <div className="flex items-center gap-6 p-5 rounded-[20px] bg-black/40 backdrop-blur-md border border-white/[0.05] min-w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <p className="text-[10px] text-white/40 font-semibold tracking-wider uppercase mb-1">EXPERIENCE</p>
                  <p className="text-2xl font-bold text-white leading-none mb-1">2+</p>
                  <p className="text-[12px] text-white/50">Years Learning</p>
                </div>
                <div className="ml-auto w-11 h-11 rounded-xl bg-[#1E3A8A]/30 text-[#4D94FF] flex items-center justify-center text-[12px] font-bold border border-[#4D94FF]/20 pb-0.5">&lt;/&gt;</div>
              </div>
              {/* Card 3 */}
              <div className="flex items-center gap-6 p-5 rounded-[20px] bg-black/40 backdrop-blur-md border border-white/[0.05] min-w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <p className="text-[10px] text-white/40 font-semibold tracking-wider uppercase mb-1">FOCUS</p>
                  <p className="text-2xl font-bold text-white leading-none mb-1">AI / ML</p>
                  <p className="text-[12px] text-white/50">Solutions</p>
                </div>
                <div className="ml-auto w-11 h-11 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center text-lg border border-yellow-500/20">💡</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Info Bar & Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[900px] px-6 flex flex-col items-center z-20 pointer-events-none"
          >
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 p-4 rounded-[24px] md:rounded-[100px] bg-black/40 backdrop-blur-xl border border-white/[0.08] mb-6 md:mb-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)] pointer-events-auto">
              {/* Item 1 */}
              <div className="flex items-center justify-center md:justify-start gap-4 px-4 w-full md:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] text-lg shrink-0">🎓</div>
                <div className="text-left">
                  <p className="text-[13px] font-bold text-[#00E5FF] leading-tight">3rd Year</p>
                  <p className="text-[12px] text-white/60">B.E. AI & DS</p>
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-10 bg-white/10 shrink-0"></div>
              
              {/* Item 2 */}
              <div className="flex items-center justify-center md:justify-start gap-4 px-4 w-full md:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#4D94FF]/10 flex items-center justify-center text-[#4D94FF] text-lg shrink-0">🏫</div>
                <div className="text-left">
                  <p className="text-[13px] font-bold text-[#4D94FF] leading-tight">Coorg Institute</p>
                  <p className="text-[12px] text-white/60">Of Technology</p>
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-10 bg-white/10 shrink-0"></div>
              
              {/* Item 3 */}
              <div className="flex items-center justify-center md:justify-start gap-4 px-4 w-full md:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#B829FF]/10 flex items-center justify-center text-[#B829FF] text-lg shrink-0">🧠</div>
                <div className="text-left">
                  <p className="text-[13px] font-bold text-[#B829FF] leading-tight">AI & Data Science</p>
                  <p className="text-[12px] text-white/60">Specialization</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-[9px] tracking-[0.3em] text-white/40 font-semibold uppercase">SCROLL TO EXPLORE</p>
              <div className="w-[18px] h-7 rounded-full border border-white/30 flex justify-center p-[3px]">
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[3px] h-[5px] bg-white/60 rounded-full"
                />
              </div>
            </div>
          </motion.div>
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

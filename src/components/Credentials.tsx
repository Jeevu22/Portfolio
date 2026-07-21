"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const certifications = [
  {
    org: "Deloitte Australia",
    title: "Data Analytics Job Simulation",
    detail: "Practical workplace tasks in data analysis & forensic technology · via Forage",
    year: "2026",
    color: "#86BC25",
  },
  {
    org: "Tata",
    title: "Data Visualisation for Business Insights",
    detail: "Framing business scenarios & communicating data-driven insights · via Forage",
    year: "2026",
    color: "#4D94FF",
  },
  {
    org: "NASSCOM FutureSkills Prime",
    title: "Exploratory Data Analysis",
    detail: "MeitY–NASSCOM aligned course on structured EDA techniques",
    year: "2026",
    color: "#B829FF",
  },
  {
    org: "Infosys Springboard",
    title: "Data Science Course Completion",
    detail: "Data wrangling, EDA, supervised learning & model evaluation",
    year: "2025",
    color: "#00E5FF",
  },
  {
    org: "EYESEC Cyber Security",
    title: "Cyber Security Implications & Defences",
    detail: "AICTE-approved · scored 99.50% · threat landscape & network defence",
    year: "2024",
    color: "#FF0055",
  },
  {
    org: "CIT Robotics CoE",
    title: "I/O Interfacing with Embedded Systems",
    detail: "6-day hands-on workshop · microcontrollers, sensors, real-time I/O",
    year: "2024",
    color: "#FBBF24",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "Nexora Hackathon",
    detail:
      "Presented Campus Resource Orchestrator — selected for real-world impact in campus sustainability.",
    year: "2026",
  },
  {
    icon: "🥇",
    title: "AICTE IDEATHON — State Level",
    detail:
      "Recognized at New Horizon College of Engineering, Bengaluru for innovative problem-solving with Team Phoenix.",
    year: "2025",
  },
  {
    icon: "🎨",
    title: "PRAGYATHA'25 UI/UX Hackathon — National Level",
    detail:
      "Designed user-centric interfaces and presented end-to-end UX solutions to an industry jury.",
    year: "2025",
  },
  {
    icon: "⚡",
    title: "GUVI × HCL — India AI Impact Buildathon",
    detail: "AI Impact Summit 2026 participant.",
    year: "2026",
  },
];

export default function Credentials() {
  return (
    <section
      className="relative z-20 bg-[#0d0d13] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-white overflow-hidden border-y border-white/5"
      id="credentials"
    >
      {/* Ambient glow */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-600/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-medium">
            ● Proof of Work
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Certifications &amp; Achievements.
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl px-2">
            Industry programs, national-level hackathons, and hands-on
            credentials that back the work.
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {certifications.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease }}
              className="group relative p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15] transition-colors duration-300 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`,
                }}
              />
              <div className="flex items-start justify-between gap-3 mb-3">
                <p
                  className="text-[11px] font-bold tracking-[0.15em] uppercase"
                  style={{ color: c.color }}
                >
                  {c.org}
                </p>
                <span className="text-[10px] text-white/35 font-semibold shrink-0 px-2 py-0.5 rounded-full border border-white/10">
                  {c.year}
                </span>
              </div>
              <h3
                className="text-lg font-semibold text-white/90 mb-2 leading-snug"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {c.title}
              </h3>
              <p className="text-[13px] text-white/45 leading-relaxed">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.08, ease }}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/[0.07] hover:border-white/[0.14] transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-xl shrink-0">
                {a.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-bold text-white/90">
                    {a.title}
                  </h3>
                  <span className="text-[10px] text-white/35 font-semibold px-2 py-0.5 rounded-full border border-white/10">
                    {a.year}
                  </span>
                </div>
                <p className="text-[13px] text-white/45 leading-relaxed">
                  {a.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

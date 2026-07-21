"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    tag: "About Me",
    tagColor: "#00E5FF",
    title: (
      <>
        Final-year{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          AI &amp; Data Science
        </span>{" "}
        undergraduate at Coorg Institute of Technology.
      </>
    ),
    body: "B.E. 2023–2027. I work at the intersection of Machine Learning, Data Analytics, and Full-Stack Development — building intelligent systems that solve meaningful, real-world problems.",
  },
  {
    tag: "What Drives Me",
    tagColor: "#FF0055",
    title: (
      <>
        Impact-driven engineering —{" "}
        <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent font-semibold">
          sustainability, healthcare, and security.
        </span>
      </>
    ),
    body: "From a campus energy dashboard targeting 15–20% less energy wastage, to a hospital management system, to a NIST-grade password analyzer — I build things people actually use.",
  },
  {
    tag: "Recognition",
    tagColor: "#8A2BE2",
    title: (
      <>
        Hackathons &amp; certifications from{" "}
        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          Deloitte, Tata, NASSCOM &amp; Infosys.
        </span>
      </>
    ),
    body: "Presented at the Nexora inter-college hackathon, recognized at state-level IDEATHON 2025, and completed industry job simulations and structured data science programs.",
  },
  {
    tag: "Next Step",
    tagColor: "#34D399",
    title: (
      <>
        Actively seeking{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">
          internship opportunities
        </span>{" "}
        in AI, data, and full-stack roles.
      </>
    ),
    body: "Eager to contribute as a proactive team member, grow through hands-on industry exposure, and deliver impactful AI-driven solutions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 bg-[#0a0a0f] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-medium">
            ● Who I Am
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            About Me.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (idx % 2) * 0.1, ease }}
              className="p-7 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] transition-colors duration-300"
            >
              <span
                className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase mb-5 px-3 py-1 rounded-full border"
                style={{
                  color: card.tagColor,
                  borderColor: `${card.tagColor}33`,
                  background: `${card.tagColor}14`,
                }}
              >
                {card.tag}
              </span>
              <p
                className="text-xl sm:text-2xl md:text-[1.7rem] leading-snug text-white/90 font-light mb-4"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {card.title}
              </p>
              <p className="text-sm sm:text-base text-white/45 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

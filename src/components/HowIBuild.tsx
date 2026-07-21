"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Raw data, sensor inputs, usage records",
    color: "#00E5FF",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Preprocessing",
    description: "Cleaning, normalization, feature engineering",
    color: "#B829FF",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "ML Model",
    description: "Training, validation, hyperparameter tuning",
    color: "#FF2E93",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path strokeLinecap="round" d="M8 20h8M12 16v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l2.5-3 2 2L14 8l3 3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "API Layer",
    description: "REST endpoints, authentication, rate limiting",
    color: "#FBBF24",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3M13 15h4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Dashboard",
    description: "Visualizations, alerts, real-time monitoring",
    color: "#34D399",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M5 21V10M12 21V4M19 21v-8" />
        <path strokeLinecap="round" d="M3 21h18" />
      </svg>
    ),
  },
];

export default function HowIBuild() {
  return (
    <section
      className="relative z-20 bg-[#0a0a0f] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-white overflow-hidden"
      id="how-i-build"
    >
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-80 bg-cyan-500/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#00E5FF]/70 mb-4 font-medium">
            ● System Architecture
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            How I Build.
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl px-2">
            End-to-end data pipeline architecture — from raw data ingestion to
            intelligent dashboards.
          </p>
        </motion.div>

        {/* Pipeline cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease }}
              className="group relative flex flex-col items-center text-center p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15] transition-colors duration-300"
            >
              {/* Step number */}
              <span
                className="absolute top-4 left-5 text-[10px] font-bold tracking-[0.25em]"
                style={{ color: `${step.color}99` }}
              >
                {step.number}
              </span>

              {/* Icon tile */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mt-3 border group-hover:scale-110 transition-transform duration-300"
                style={{
                  color: step.color,
                  background: `${step.color}14`,
                  borderColor: `${step.color}33`,
                  boxShadow: `0 0 24px ${step.color}22`,
                }}
              >
                {step.icon}
              </div>

              <h3
                className="text-lg font-bold text-white/90 mb-2"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {step.title}
              </h3>
              <p className="text-[13px] text-white/45 leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (desktop) */}
              {idx < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-white/20 text-lg z-10">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

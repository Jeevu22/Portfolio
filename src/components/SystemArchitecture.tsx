"use client";

import { motion } from "motion/react";

export default function SystemArchitecture() {
  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Raw patient data, sensor inputs, medical records",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Preprocessing",
      description: "Cleaning, normalization, feature engineering",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "ML Model",
      description: "Training, validation, hyperparameter tuning",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "API Layer",
      description: "REST endpoints, authentication, rate limiting",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Dashboard",
      description: "Visualizations, alerts, real-time monitoring",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-medium">● System Architecture</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            How I Build.
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl px-2">
            End-to-end data pipeline architecture — from raw data ingestion to intelligent dashboards.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex flex-col gap-4 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <span
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-semibold text-white/90">{step.title}</h3>
                </div>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>

              {/* Icon */}
              <div
                className={`flex items-center justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-blue-400">
                  {step.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

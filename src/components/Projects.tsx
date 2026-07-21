"use client";

import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      title: "Campus Resource Orchestrator (CRO)",
      category: "Full Stack / Predictive Analytics",
      year: "2026",
      sections: {
        problem:
          "Indian college campuses lack real-time visibility into electricity, water, and waste usage — resources are wasted and log-keeping is manual.",
        solution:
          "Architected a sustainability dashboard with real-time monitoring across departments, a predictive module forecasting consumption from historical patterns, and an admin panel with role-based access, alert thresholds, and automated reports.",
        impact:
          "Targets 15–20% reduction in campus energy wastage; replaced manual log-keeping across 5+ departments. Presented at the Nexora inter-college hackathon.",
      },
      builtWith: ["React", "Node.js", "Python", "MongoDB", "Chart.js", "REST APIs"],
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Secure Password Generator & Analyzer",
      category: "Security / Python",
      year: "2024",
      sections: {
        problem:
          "Most password tools produce weak or predictable credentials and give users no real feedback on strength.",
        solution:
          "Built a cryptographically secure generator grounded in NIST SP 800-63B using Python's secrets module and Shannon entropy, plus a real-time analyzer evaluating entropy bits, character diversity, and known-breach exposure.",
        impact:
          "Instant, actionable feedback with visual entropy meters and configurable policy rules — high-entropy, breach-resistant passwords by default.",
      },
      builtWith: ["Python", "Flask", "JavaScript", "HTML/CSS", "NIST SP 800-63B"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Hospital Management System",
      category: "Full Stack / Databases",
      year: "2024",
      sections: {
        problem:
          "Hospitals struggle with fragmented patient records, manual appointment scheduling, and heavy administrative overhead.",
        solution:
          "Developed a full-featured HMS handling patient records, appointments, doctor schedules, and billing — on a normalized MySQL schema with role-based access for doctors, nurses, and admins, served through Flask REST APIs.",
        impact:
          "Significantly reduced manual administrative overhead with secure multi-user record management and real-time inventory tracking across departments.",
      },
      builtWith: ["Python", "Flask", "MySQL", "SQL"],
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Data Analytics Dashboard",
      category: "Data Visualization",
      year: "2024",
      sections: {
        problem:
          "Large raw datasets are unreadable for non-technical stakeholders, and manual reporting burns hours.",
        solution:
          "End-to-end data wrangling and EDA in Python (Pandas, NumPy) and Excel, loaded into interactive Tableau dashboards with KPI focus, filters, drill-downs, and calculated fields.",
        impact:
          "Reduced manual reporting effort and made complex metrics clear to business audiences — enabling data-driven decisions.",
      },
      builtWith: ["Tableau", "Excel", "Python", "Pandas", "NumPy"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Developer Portfolio Website",
      category: "Frontend / Deployment",
      year: "2025",
      sections: {
        problem:
          "A portfolio needs to feel handcrafted and load fast — templates look generic and score poorly.",
        solution:
          "Designed and deployed a fully responsive portfolio with smooth scroll animations and a reusable component architecture with clean separation of concerns.",
        impact:
          "95+ Lighthouse performance score across all metrics with automated CI/CD deployment.",
      },
      builtWith: ["React", "TailwindCSS", "Vite", "Framer Motion", "Vercel"],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <section
      className="relative z-20 bg-[#0a0a0f] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-24 text-white"
      id="work"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-medium">
            ● Selected Work
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Case Studies.
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl px-2">
            Real projects — presented at hackathons, grounded in industry
            standards, and built to be used.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start"
            >
              {/* Image */}
              <div
                className={`relative rounded-2xl overflow-hidden h-64 md:h-80 border border-white/[0.07] ${
                  idx % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white/80">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-blue-400 font-medium text-xs mb-2 uppercase tracking-[0.1em]">
                    {project.category}
                  </p>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-white/90 mb-6"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Problem/Solution/Impact */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-white/50 font-semibold text-sm mb-1">
                        Problem
                      </p>
                      <p className="text-white/70 text-sm">
                        {project.sections.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/50 font-semibold text-sm mb-1">
                        Solution
                      </p>
                      <p className="text-white/70 text-sm">
                        {project.sections.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/50 font-semibold text-sm mb-1">
                        Impact
                      </p>
                      <p className="text-white/70 text-sm">
                        {project.sections.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Built With Tags */}
                <div>
                  <p className="text-white/50 font-semibold text-xs mb-2">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

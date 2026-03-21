"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { 
      title: "Hospital Management System (HMS)", 
      category: "Full Stack / AI", 
      desc: "A system designed to manage patient data, appointments, and hospital workflows efficiently.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "Predictive Health Dashboard", 
      category: "Data Visualization", 
      desc: "Interactive analytics platform visualizing patient outcome predictions based on historical medical data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "Automated Data Pipeline", 
      category: "Data Engineering", 
      desc: "Robust ETL pipeline designed for extracting and transforming messy datasets into scalable SQL architectures.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      title: "AI NLP Assistant", 
      category: "Machine Learning", 
      desc: "Custom-trained LLM application providing automated conversational support for medical inquiries.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" 
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-24 text-white" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Selected Work<span className="text-blue-500">.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">Building practical, scalable, and impactful solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.03)] cursor-pointer"
            >
              {/* Image with Apple-like framing */}
              <div className="w-full aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-1000 ease-out group-hover:scale-[1.08] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-100" />
              </div>

              {/* Content Box */}
              <div className="p-8 md:p-10 relative z-10 bg-[#1a1a1a] shrink-0">
                <p className="text-blue-400 font-medium text-xs mb-3 uppercase tracking-[0.1em]">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white/90 tracking-tight mb-4" style={{ fontFamily: "var(--font-space)" }}>
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "LinkedIn",
    handle: "Jeevan H S",
    link: "https://www.linkedin.com/feed/",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.55)",
    gradient: "from-[#0A66C2]/20 via-[#0A66C2]/5 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "Connect with me",
  },
  {
    name: "GitHub",
    handle: "@Jeevu22",
    link: "https://github.com/Jeevu22",
    color: "#e0e0e0",
    glow: "rgba(220,220,220,0.4)",
    gradient: "from-white/10 via-white/5 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "View repositories",
  },
  {
    name: "Instagram",
    handle: "@jeevu.17",
    link: "https://www.instagram.com/jeevu.17",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.55)",
    gradient: "from-[#E1306C]/20 via-[#E1306C]/5 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: "Follow me",
  },
  {
    name: "WhatsApp",
    handle: "+91 8073474557",
    link: "https://wa.me/918073474557",
    color: "#25D366",
    glow: "rgba(37,211,102,0.55)",
    gradient: "from-[#25D366]/20 via-[#25D366]/5 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "Message me",
  },
];

export default function Socials() {
  return (
    <section className="relative z-20 bg-[#0e0e0e] py-28 px-6 md:px-24 text-white border-y border-white/5 overflow-hidden" id="connect">
      {/* Background ambient blobs */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-medium">Find me on</span>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Connect Across Platforms.
          </h2>
          <p className="text-white/40 text-lg max-w-xl">
            Checkout my repositories, follow my journey, or shoot me a message directly.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex flex-col items-center justify-center p-9 rounded-3xl overflow-hidden transition-all duration-400"
              style={{
                background: `linear-gradient(135deg, ${p.color}12 0%, #141414 60%)`,
                border: `1px solid ${p.color}30`,
                boxShadow: `0 4px 24px ${p.glow}20`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${p.glow}, 0 0 0 1px ${p.color}50`;
                (e.currentTarget as HTMLElement).style.border = `1px solid ${p.color}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${p.glow}20`;
                (e.currentTarget as HTMLElement).style.border = `1px solid ${p.color}30`;
              }}
            >
              {/* Corner glow decoration */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ background: p.color, transform: "translate(30%, -30%)" }}
              />

              {/* Icon circle */}
              <div
                className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110"
                style={{
                  color: p.color,
                  background: `${p.color}20`,
                  boxShadow: `0 0 20px ${p.glow}60, inset 0 1px 0 ${p.color}30`,
                  border: `1px solid ${p.color}40`,
                }}
              >
                {p.icon}
              </div>

              {/* Text */}
              <h3
                className="relative z-10 text-xl font-bold tracking-tight mb-1 transition-all duration-300"
                style={{ color: p.color, fontFamily: "var(--font-space)" }}
              >
                {p.name}
              </h3>
              <p className="relative z-10 text-white/50 text-sm font-medium tracking-wide mb-4 group-hover:text-white/70 transition-colors duration-300">
                {p.handle}
              </p>

              {/* CTA */}
              <span
                className="relative z-10 text-[11px] tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full transition-all duration-300"
                style={{
                  color: p.color,
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.label} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

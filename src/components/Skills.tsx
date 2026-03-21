"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: (
        <svg className="w-6 h-6 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "Python", logo: "🐍" },
        { name: "C", logo: "⚡" },
        { name: "SQL", logo: "🗄️" }
      ],
      color: "from-blue-500/20 to-blue-500/0",
      border: "hover:border-blue-500/30"
    },
    {
      title: "Data Tools",
      icon: (
        <svg className="w-6 h-6 mb-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: [
        { name: "Tableau", logo: "📊" },
        { name: "Excel", logo: "📈" }
      ],
      color: "from-emerald-500/20 to-emerald-500/0",
      border: "hover:border-emerald-500/30"
    },
    {
      title: "Tools & IDEs",
      icon: (
        <svg className="w-6 h-6 mb-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: "PyCharm", logo: "⚙️" },
        { name: "VS Code", logo: "💻" },
        { name: "Antigravity", logo: "🚀" }
      ],
      color: "from-purple-500/20 to-purple-500/0",
      border: "hover:border-purple-500/30"
    },
    {
      title: "Online Platforms",
      icon: (
        <svg className="w-6 h-6 mb-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: [
        { name: "LeetCode", logo: "🏆" },
        { name: "Kaggle", logo: "📈" },
        { name: "GitHub", logo: "🐙" }
      ],
      color: "from-orange-500/20 to-orange-500/0",
      border: "hover:border-orange-500/30"
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-24 text-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Technical Arsenal.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">The tools and platforms I use to build scalable machine learning architectures.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className={`p-8 rounded-[2rem] bg-gradient-to-b ${category.color} bg-[#1a1a1a] border border-white/5 transition-all duration-300 ${category.border}`}
            >
              {category.icon}
              <h3 className="text-2xl font-semibold text-white/90 mb-6 tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm tracking-wide shadow-sm hover:bg-white/10 transition-colors cursor-default"
                  >
                    <span className="text-xl">{skill.logo}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

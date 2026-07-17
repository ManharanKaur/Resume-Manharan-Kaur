import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import "../styles/ExperienceSection.css";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Plasmid Training Program",
      role: "Machine Learning Trainee",
      date: "June 1, 2025 – August 1, 2025",
      points: [
        "Worked on machine learning concepts and implementation",
        "Built a span detection system for extracting relevant text segments",
        "Performed data preprocessing, model training, and evaluation",
        "Used Python and relevant ML/NLP tools",
      ],
    }
  ];

  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="experience-section" id="experience" ref={containerRef}>
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-blue animate-gradient">
              Experience
            </span>
          </h2>
          <p className="text-cyber-white/60">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-pink to-cyber-blue -translate-x-1/2 hidden md:block glow-pink"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", delay: 0.3 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyber-black border-2 border-cyber-pink z-10 -translate-x-1/2 shadow-[0_0_10px_rgba(255,79,163,0.8)] hidden md:block"
                  />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 lg:pr-16 md:text-right" : "md:pl-12 lg:pl-16 md:ml-auto"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                      className="experience-card group"
                    >
                      <h3 className="text-2xl font-bold text-cyber-white mb-2 group-hover:text-cyber-pink transition-colors">
                        {exp.company}
                      </h3>
                      
                      <div className={`flex flex-col md:flex-row gap-2 mb-4 text-sm font-medium ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <span className="flex items-center gap-1 text-cyber-blue">
                          <Briefcase size={16} />
                          {exp.role}
                        </span>
                        <span className="hidden md:inline text-white/20">|</span>
                        <span className="flex items-center gap-1 text-cyber-white/50">
                          <Calendar size={16} />
                          {exp.date}
                        </span>
                      </div>

                      <ul className={`space-y-2 text-cyber-white/70 text-sm ${isEven ? "md:text-right" : "md:text-left"}`}>
                        {exp.points.map((point, pIndex) => (
                          <li key={pIndex} className="relative">
                            <span className={`inline-block ${isEven ? "" : "pl-4"}`}>
                              {!isEven && <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-cyber-pink rounded-full opacity-50" />}
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

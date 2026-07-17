import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import '../styles/ProjectCard.css';

export const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="project-card group"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 79, 163, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Image Container */}
      <div className="project-card__img-wrapper">
        <div className="absolute inset-0 bg-cyber-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card__img"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="project-card__category">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="text-2xl font-bold text-cyber-white mb-3 group-hover:text-cyber-pink transition-colors">
          {project.title}
        </h3>
        <p className="text-cyber-white/70 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-cyber-white/5 text-cyber-white/80 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          {project.buttons.map((btn, idx) => {
            const isRepo = btn.text.toLowerCase().includes("repository");
            const Icon = isRepo ? Code : ExternalLink;
            
            return (
              <a
                key={idx}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isRepo 
                    ? "bg-transparent border border-white/20 text-cyber-white hover:border-cyber-white hover:bg-white/5"
                    : "bg-cyber-pink text-white hover:bg-cyber-pink/90 hover:glow-pink shadow-lg"
                }`}
              >
                <Icon size={16} />
                <span>{btn.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

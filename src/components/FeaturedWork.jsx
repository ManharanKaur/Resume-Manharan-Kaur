import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projects";
import "../styles/FeaturedWork.css";

export const FeaturedWork = () => {
  return (
    <section className="featured-work-section" id="featured-work">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyber-navy/20 to-transparent pointer-events-none" />
      
      <div className="featured-work-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink animate-gradient">
              Featured Work
            </span>
          </h2>
          <p className="text-cyber-white/60 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my problem-solving skills
            and technical abilities.
          </p>
        </motion.div>

        <div className="featured-work-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

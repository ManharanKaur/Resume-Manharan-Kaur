import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projects";
import "../styles/FeaturedWork.css";

export const FeaturedWork = () => {
  return (
    <section className="featured-work" id="featured-work">
      <div className="featured-work__header">
        <h2 className="featured-work__title">Featured Work</h2>
        <p className="featured-work__subtitle">
          A selection of my recent projects showcasing my problem-solving skills
          and technical abilities.
        </p>
      </div>

      <div className="featured-work__scroll-wrapper">
        <div className="featured-work__grid">
          {projectsData.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

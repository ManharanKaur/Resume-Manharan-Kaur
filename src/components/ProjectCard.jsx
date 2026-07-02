import React from 'react';
import '../styles/ProjectCard.css';

 export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__media">
        <img src={project.image} alt={project.title} className="project-card__image" />
        <div className="project-card__badge">{project.category}</div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-card__tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-card__buttons">
          {project.buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="project-card__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

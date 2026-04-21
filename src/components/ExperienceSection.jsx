import React from "react";
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
    },
    {
      company: "Indiaum Solutions",
      role: "Video Annotator Intern",
      date: "April 14, 2026 – Present",
      points: [
        "Annotated video datasets for AI/ML model training",
        "Performed frame-by-frame labeling of objects/events",
        "Ensured high-quality and consistent data annotation",
        "Followed structured workflows and guidelines",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h1 className="experience-card__title">Experience</h1>

      <div className="experience-card">
        <span className="experience-card__subtitle">Professional Journey</span>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-item__timeline">
                <div className="experience-item__dot" />
                {index !== experiences.length - 1 && (
                  <div className="experience-item__line" />
                )}
              </div>

              <div className="experience-item__content">
                <h3 className="experience-item__company">{exp.company}</h3>

                <div className="experience-item__meta">
                  <span className="experience-item__role">{exp.role}</span>
                  <div className="experience-item__date">
                    {/* Simple SVG Icon representing the calendar/briefcase in your original code */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect
                        x="2"
                        y="3"
                        width="12"
                        height="11"
                        rx="1"
                        stroke="#6B6176"
                        strokeWidth="1.33"
                      />
                      <path
                        d="M5 3V1H11V3"
                        stroke="#6B6176"
                        strokeWidth="1.33"
                      />
                    </svg>
                    {exp.date}
                  </div>
                </div>

                <ul className="experience-item__details">
                  {exp.points.map((point, pIndex) => (
                    <li key={pIndex} className="experience-item__detail-point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

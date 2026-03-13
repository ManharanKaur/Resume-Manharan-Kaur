import React from 'react';
import '../styles/SkillsSection.css';

export const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Core Computing",
      skills: ["Python", "C++", "JavaScript", "SQL", "HTML/CSS", "ML", "DL", "Natural Language Processing", "Computer Vision", "DSA", "OOPs", "DBMS", "OS", "Computer Networks", "Cryptography", "Exploratory Data Analysis", "Data Visualization"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skills-card__icon">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      )
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Numpy", "Pandas", "NLTK", "Scikit-learn", "TensorFlow", "Keras", "pyttsx3" ,"SpeechRecognition"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skills-card__icon">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Tools & Platforms",
      skills: ["Visual Studio Code", "Terminal", "Git & GitHub", "npm", "Vite", "ChatGPT", "Figma", "Tableau"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skills-card__icon">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    },
    {
      title: "Other Skills",
      skills: ["Debugging", "Leadership", "Problem Solving", "Communication"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skills-card__icon">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="skills-section" id="skills-section">
      <header className="skills-section__header">
        <h2 className="skills-section__title">My Skills</h2>
      </header>

      <div className="skills-section__grid">
        {skillGroups.map((group, index) => (
          <article key={index} className="skills-card">
            <div className="skills-card__icon-container">
              {group.icon}
            </div>
            <h3 className="skills-card__title">{group.title}</h3>
            <div className="skills-card__list">
              {group.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skills-card__tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

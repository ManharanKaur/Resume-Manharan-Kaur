import React from "react";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-text">Emerging tech · Data & AI</span>
          </div>

          <h1 className="hero__title">
            Hello, I'm <br />
            <span className="hero__title-name">Manharan</span>
          </h1>

          <h2 className="hero__subtitle">
            Building intelligent experiences where code meets creativity.
          </h2>

          <p className="hero__description">
            Emerging tech professional exploring the intersection of data,
            intelligence, and experience. I simplify complex datasets into
            elegant insights and build seamless solutions.
          </p>

          <div className="hero__meta">
            <div className="hero__meta-item">
              Current focus · <span className="hero__meta-value">Machine learning & generative AI</span>
            </div>
            <div className="hero__meta-item">
              Based in · <span className="hero__meta-value">India (Remote)</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#aboutme" className="hero__button">
              About me
            </a>
            <a href="#featured-work" className="hero__button">
              Explore my work
            </a>
            <a href="public/Resume__Manharan.pdf" target="_blank" className="hero__button">
              View Resume
            </a>
          </div>

          <div className="hero__status">
            <strong className="hero__status-highlight">Actively seeking internships</strong> in Data science,
            Analytics, Full Stack and AI-driven products.
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img
              className="hero__image"
              src="./my_photo.jpeg"
              alt="Manharan Kaur"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
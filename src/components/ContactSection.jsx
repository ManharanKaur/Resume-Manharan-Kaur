import React from "react";
import "../styles/ContactSection.css";

export const ContactSection = () => {

  const socialLinks = [
    {
      label: "Email",
      url: "mailto:thisismanharankaur@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#6BD1FF" strokeWidth="2"/>
          <path d="M3 7l9 6 9-6" stroke="#6BD1FF" strokeWidth="2"/>
        </svg>
      )
    },
    {
      label: "GitHub",
      url: "https://github.com/ManharanKaur",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.3 6.84 9.65.5.1.68-.22.68-.48
            0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5
            -.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11
            2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07
            0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27
            2.75 1.05A9.33 9.33 0 0112 6.8c.85.004 1.7.12 2.5.35
            1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72
            .64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06
            .36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85
            0 .26.18.59.69.48A10.22 10.22 0 0022 12.2C22 6.58
            17.52 2 12 2z"
            stroke="#6BD1FF"
            strokeWidth="1.5"
          />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manharan-kaur/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" stroke="#6BD1FF" strokeWidth="2"/>
          <path d="M7 10v7M7 7h.01M11 10v7m0-4c0-1.7 2-2 2-2s2 .3 2 2v4"
            stroke="#6BD1FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">

        <header className="contact-section__header">
          <h2 className="contact-section__title">Let's Connect</h2>

          <p className="contact-section__description">
            If you'd like to collaborate, connect, or just say hi, feel free to
            <br className="contact-section__br--desktop" />
            reach out!
          </p>
        </header>

        <div className="contact-section__actions">

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-section__button"
            >

              <span className="contact-section__icon-wrapper">
                {link.icon}
              </span>

              <span className="contact-section__label">
                {link.label}
              </span>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
};
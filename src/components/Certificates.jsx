import React from 'react';
import { certificatesData } from "../data/certificates";
import '../styles/Certificates.css';

export const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        
        {/* Header Block */}
        <header className="certificates-container__header">
          <h2 className="certificates-container__title">Certificates</h2>
          <span className="certificates-container__subtitle">Credentials &amp; Learning</span>
        </header>

        {/* Dynamic Cards Grid */}
        <div className="certificates-container__grid">
          {certificatesData.map((cert) => (
            <article 
              key={cert.id} 
              className={`cert-card cert-card--theme-${cert.theme}`}
            >
              {/* Card Main Body Info */}
              <div className="cert-card__body">
                
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                
                <div className="cert-card__status-group">
                  <span className="cert-card__status-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9CA3AF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </span>
                  <span className="cert-card__status-text">{cert.status}</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <footer className="cert-card__footer">
                <div className="cert-card__tags">
                  {cert.tags.map((tag, idx) => (
                    <span key={idx} className="cert-card__tag">{tag}</span>
                  ))}
                </div>

                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card__action"
                >
                <span className="cert-card__action-text">
                    View
                </span>
                <span className="cert-card__action-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                    <path d="M18 13V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </a>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

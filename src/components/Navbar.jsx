import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills-section" },
  { name: "Projects", href: "#featured-work" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="header-container">
      <nav className="header-nav">
        {/* Logo */}
        <div className="header-nav__logo">Manharan Kaur</div>

        {/* Hamburger Button */}
        <button
          className="header-nav__hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation List */}
        <ul
          className={`header-nav__list ${
            isOpen ? "header-nav__list--open" : ""
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="header-nav__item">
              <a
                href={item.href}
                className={`header-nav__link ${
                  activeSection === item.href ? "header-nav__link--active" : ""
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navItems = [
  { name: "Home", href: "#hero", active: true },
  { name: "Skills", href: "#skills-section" },
  { name: "Projects", href: "#featured-work" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-nav__logo">Manharan Kaur</div>

        <button 
          className="header-nav__hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`header-nav__list ${isOpen ? "header-nav__list--open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name} className="header-nav__item">
              <a
                href={item.href}
                className={`header-nav__link ${item.active ? "header-nav__link--active" : ""}`}
                onClick={() => setIsOpen(false)}
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
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills-section" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#featured-work" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`navbar-header ${isScrolled ? "navbar-header--scrolled" : ""}`}
    >
      <nav className={`navbar-nav ${isScrolled ? "navbar-nav--scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-logo glow-text">
          <span className="text-cyber-pink">M</span>K
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href
                    ? "text-cyber-black"
                    : "text-cyber-white/70 hover:text-cyber-white"
                }`}
              >
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-cyber-pink rounded-full glow-pink"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 group-hover:text-glow-pink transition-all">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-cyber-white p-2 hover:text-cyber-pink transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="navbar-mobile-menu glow-pink md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-medium py-2 border-b border-white/5 transition-colors ${
                activeSection === item.href
                  ? "text-cyber-pink"
                  : "text-cyber-white/70"
              }`}
              onClick={() => {
                setIsOpen(false);
                setActiveSection(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

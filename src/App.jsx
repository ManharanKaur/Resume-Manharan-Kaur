import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FeaturedWork } from "./components/FeaturedWork";
import { Certificates } from "./components/Certificates";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ExperienceSection />
        <FeaturedWork />
        <Certificates />
        <ContactSection />
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Manharan Kaur. All rights reserved.</p>
        <p className="app-footer__tagline">Crafted with precision & passion.</p>
      </footer>
    </div>
  );
}

export default App;

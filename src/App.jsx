import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FeaturedWork } from "./components/FeaturedWork";
import { Certificates } from "./components/Certificates";
import { ContactSection } from "./components/ContactSection";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
`;

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedWork />
      <Certificates />
      <ContactSection />
    </PageWrapper>
  );
}

export default App;

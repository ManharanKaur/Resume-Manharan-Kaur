import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsSection } from "./components/SkillsSection";
import { FeaturedWork } from "./components/FeaturedWork";
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
      <FeaturedWork />
      <ContactSection />
    </PageWrapper>
  );
}

export default App;

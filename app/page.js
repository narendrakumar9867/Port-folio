import FooterPage from "../components/footer/Footer";
import NavbarPage from "../components/navbar/Navbar";
import React from "react";
import AboutPage from "../components/about/page";
import SkillPage from "../components/skills/page";
import ProjectPage from "../components/projects/page";
import ExperiencePage from "../components/experience/page";

export default function Home() {
  return (
    <>
      <NavbarPage />

      <AboutPage />

      <SkillPage />

      <ProjectPage />

      <ExperiencePage />
      
      <FooterPage />
    </>
  );
};


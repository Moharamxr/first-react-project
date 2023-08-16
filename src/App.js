import "./App.css";
import React from "react";
import HeroSection from "./components/hero/hero";
import BioSection from "./components/bio/bio";
import SkillsSection from "./components/skills/skills";
import PortfolioSection from "./components/portofolio/portoflio";
import Footer from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <HeroSection></HeroSection>
      <BioSection></BioSection>
      <SkillsSection></SkillsSection>
      <PortfolioSection></PortfolioSection>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

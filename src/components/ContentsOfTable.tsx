import { AppContextForDisplayMode } from "@src/App";
import { useContext, useRef } from "react";
import styled from "styled-components";
import { colorSelector } from "@src/styles/Theme";

import Home from "@components/Home";
import AboutMe from "@components/AboutMe";
import Skills from "@components/Skills";
import Projects from "@components/Projects";

const COTWrapper = styled.div`
  position: absolute;
  z-index: 300;
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: row;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-around;
  align-items: center;
  position: fixed;
`;
const COTItems = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const ContentsOfTable = () => {
  const { displayMode } = useContext(AppContextForDisplayMode);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <COTWrapper>
        <COTItems
          style={{
            backgroundColor: colorSelector(displayMode, "font"),
          }}
          onClick={scrollToHome}
        />
        <COTItems
          style={{
            backgroundColor: colorSelector(displayMode, "font"),
          }}
          onClick={scrollToAboutMe}
        />
        <COTItems
          style={{
            backgroundColor: colorSelector(displayMode, "font"),
          }}
          onClick={scrollToSkills}
        />
        <COTItems
          style={{
            backgroundColor: colorSelector(displayMode, "font"),
          }}
          onClick={scrollToProjects}
        />
      </COTWrapper>
      <Home ref={homeRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

export default ContentsOfTable;

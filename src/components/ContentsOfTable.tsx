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
  width: 950px;
  height: 60px;
  display: flex;
  flex-direction: row;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-around;
  align-items: center;
  position: fixed;
  border-radius: 100px;
  transition: 0.3s;
`;
const COTItemsContainer = styled.div`
  flex: 1;
  text-align: center;
`;
const COTItems = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.3s;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
  }
  &:hover {
    width: 70px;
    border-radius: 25px;

    &::before {
      opacity: 1;
    }
  }
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
      <COTWrapper
      // style={{ backgroundColor: colorSelector(displayMode, "container") }}
      >
        <COTItemsContainer>
          <COTItems
            style={{
              backgroundColor: colorSelector(displayMode, "container"),
              color: colorSelector(displayMode, "font"),
            }}
            onClick={scrollToHome}
            data-text={"HOME"}
          ></COTItems>
        </COTItemsContainer>
        <COTItemsContainer>
          <COTItems
            style={{
              backgroundColor: colorSelector(displayMode, "container"),
              color: colorSelector(displayMode, "font"),
            }}
            onClick={scrollToAboutMe}
            data-text={"ABOUT"}
          >
            {" "}
          </COTItems>
        </COTItemsContainer>
        <COTItemsContainer>
          <COTItems
            style={{
              backgroundColor: colorSelector(displayMode, "container"),
              color: colorSelector(displayMode, "font"),
            }}
            onClick={scrollToSkills}
            data-text={"SKILLS"}
          ></COTItems>
        </COTItemsContainer>
        <COTItemsContainer>
          <COTItems
            style={{
              backgroundColor: colorSelector(displayMode, "container"),
              color: colorSelector(displayMode, "font"),
            }}
            onClick={scrollToProjects}
            data-text={"PROJECTS"}
          ></COTItems>
        </COTItemsContainer>
      </COTWrapper>
      <Home ref={homeRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

export default ContentsOfTable;

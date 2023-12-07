import { AppContextForDisplayMode } from "@src/App";
import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import styled from "styled-components";
import { colorSelector } from "@src/styles/Theme";

import Home from "@components/Home";
import AboutMe from "@components/AboutMe";
import Skills from "@components/Skills";
import Projects from "@components/Projects";

const ContentsOfTable = () => {
  const { displayMode } = useContext(AppContextForDisplayMode);
  const [menuActive, setMenuActive] = useState({
    home: false,
    about: false,
    skills: false,
    projects: false,
  });

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToHome = useCallback(() => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [homeRef]);

  const scrollToAboutMe = useCallback(() => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [aboutMeRef]);

  const scrollToSkills = useCallback(() => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [skillsRef]);

  const scrollToProjects = useCallback(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [projectsRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        homeRef.current &&
        aboutMeRef.current &&
        skillsRef.current &&
        projectsRef.current
      ) {
        const homeOffsetTop = homeRef.current.offsetTop;
        const aboutOffsetTop = aboutMeRef.current?.offsetTop;
        const skillsOffsetTop = skillsRef.current?.offsetTop;
        const projectsOffsetTop = projectsRef.current?.offsetTop;

        const scrollY = window.scrollY;

        if (
          scrollY >= homeOffsetTop &&
          scrollY < homeOffsetTop + homeRef.current.clientHeight
        ) {
          setMenuActive({
            home: true,
            about: false,
            skills: false,
            projects: false,
          });
        } else if (
          scrollY >= aboutOffsetTop &&
          scrollY < aboutOffsetTop + aboutMeRef.current.clientHeight
        ) {
          setMenuActive({
            home: false,
            about: true,
            skills: false,
            projects: false,
          });
        } else if (
          scrollY >= skillsOffsetTop &&
          scrollY < skillsOffsetTop + skillsRef.current.clientHeight
        ) {
          setMenuActive({
            home: false,
            about: false,
            skills: true,
            projects: false,
          });
        } else if (
          scrollY >= projectsOffsetTop &&
          scrollY < projectsOffsetTop + projectsRef.current.clientHeight
        ) {
          setMenuActive({
            home: false,
            about: false,
            skills: false,
            projects: true,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [homeRef, aboutMeRef, skillsRef, projectsRef]);

  return (
    <div>
      <COTWrapper
        style={{ backgroundColor: colorSelector(displayMode, "container") }}
      >
        <COTItemsContainer>
          {menuActive.home ? (
            <ActiveCOTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToHome}
              data-text={"HOME"}
            ></ActiveCOTItems>
          ) : (
            <COTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToHome}
              data-text={"HOME"}
            ></COTItems>
          )}
        </COTItemsContainer>
        <COTItemsContainer>
          {menuActive.about ? (
            <ActiveCOTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToAboutMe}
              data-text={"ABOUT"}
            ></ActiveCOTItems>
          ) : (
            <COTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToAboutMe}
              data-text={"ABOUT"}
            ></COTItems>
          )}
        </COTItemsContainer>
        <COTItemsContainer>
          {menuActive.skills ? (
            <ActiveCOTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToSkills}
              data-text={"SKILLS"}
            ></ActiveCOTItems>
          ) : (
            <COTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToSkills}
              data-text={"SKILLS"}
            ></COTItems>
          )}
        </COTItemsContainer>
        <COTItemsContainer>
          {menuActive.projects ? (
            <ActiveCOTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToProjects}
              data-text={"PROJECTS"}
            ></ActiveCOTItems>
          ) : (
            <COTItems
              style={{
                backgroundColor: colorSelector(displayMode, "container"),
                color: colorSelector(displayMode, "font"),
              }}
              onClick={scrollToProjects}
              data-text={"PROJECTS"}
            ></COTItems>
          )}
        </COTItemsContainer>
      </COTWrapper>
      <Home ref={homeRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

const COTWrapper = styled.div`
  position: absolute;
  z-index: 300;
  width: 950px;
  height: 60px;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-around;
  align-items: center;
  position: fixed;
  border-radius: 10px;
  transition: 0.3s;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
    font-weight: 700;
  }
  &:hover {
    width: 70px;
    border-radius: 25px;
    &::before {
      opacity: 1;
    }
  }
`;
const ActiveCOTItems = styled.button`
  width: 70px;
  height: 35px;
  border-radius: 25px;
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
    opacity: 1;
    transition: 0.3s;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
  }
  &:hover {
    width: 70px;
    border-radius: 25px;
  }
`;

export default React.memo(ContentsOfTable);

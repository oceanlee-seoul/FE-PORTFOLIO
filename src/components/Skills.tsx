import styled from "styled-components";
import { forwardRef } from "react";

const SkillsContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 5;
`;

const TestText = styled.h1`
  color: white;
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SkillsContainer ref={ref}>
      <TestText>This is Skills</TestText>
    </SkillsContainer>
  );
});

export default Skills;

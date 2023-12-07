import styled from "styled-components";
import React, { forwardRef, useEffect } from "react";

const ProjectContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 5;
  border-top: 1px solid white;
`;

const TestText = styled.h1`
  color: white;
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <ProjectContainer ref={ref}>
      <TestText>This is Projects</TestText>
    </ProjectContainer>
  );
});

export default React.memo(Projects);

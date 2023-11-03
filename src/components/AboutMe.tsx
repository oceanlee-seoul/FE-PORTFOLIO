import styled from "styled-components";

const AboutMeContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 200vh;
  background-color: black;
  z-index: 5;
`;

const TestText = styled.h1`
  color: white;
  font-size: 5rem;
  position: absolute;
  top: 150vh;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <TestText>This is AboutMe</TestText>
    </AboutMeContainer>
  );
};

export default AboutMe;

import styled from "styled-components";

const AboutMeContainer = styled.div`
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

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <TestText>This is AboutMe</TestText>
    </AboutMeContainer>
  );
};

export default AboutMe;

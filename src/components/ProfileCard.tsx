import { AppContextForDisplayMode } from "@src/App";
import { useContext } from "react";
import Memoji from "@assets/profile.jpg";
import styled from "styled-components";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import {
  darkModeFontColor,
  lightModeFontColor,
  darkModeContainerColor,
  lightModeContainerColor,
} from "@src/styles/Theme";

type TProfileCard = {
  text: string;
};

const ProfileWrapper = styled.div`
  transition: 0.3s;
  margin-top: 80px;
  width: 350px;
  height: 350px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -100px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
const ProfileBar = styled.span`
  display: inline-block;
  width: 70%;
  height: 3px;
  border-radius: 5px;
  margin-top: 30px;
`;
const ProfileLinksContainer = styled.div`
  width: 70%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

const ProfileCard = ({ text }: TProfileCard) => {
  const { displayMode } = useContext(AppContextForDisplayMode);

  return (
    <ProfileWrapper
      style={{
        backgroundColor:
          displayMode === "dark"
            ? darkModeContainerColor
            : lightModeContainerColor,
        boxShadow:
          displayMode === "dark"
            ? "rgba(121, 121, 121, 0.096) 0px 10px 10px 0px"
            : "rgba(99, 99, 99, 0.085)  0px 10px 10px 0px",
      }}
    >
      <ProfileImage
        src={Memoji}
        style={{
          boxShadow:
            displayMode === "dark"
              ? "rgba(121, 121, 121, 0.096) 0px 10px 10px 0px"
              : "rgba(99, 99, 99, 0.085)  0px 10px 10px 0px",
        }}
      />
      <h1
        style={{
          color:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
          marginTop: "190px",
          fontSize: "2rem",
        }}
      >
        {text}
      </h1>
      <ProfileBar
        style={{
          backgroundColor:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
        }}
      />
      <ProfileLinksContainer>
        <StyledIcon
          style={{
            display: "block",
            color:
              displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
          }}
          icon={faGithub}
        />
        <StyledIcon
          style={{
            display: "block",
            color:
              displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
          }}
          icon={faBook}
        />
        <StyledIcon
          style={{
            display: "block",
            color:
              displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
          }}
          icon={faInstagram}
        />
      </ProfileLinksContainer>
    </ProfileWrapper>
  );
};

export default ProfileCard;

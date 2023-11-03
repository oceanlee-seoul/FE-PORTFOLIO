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

const ProfileCard = ({ text }: TProfileCard) => {
  const { displayMode } = useContext(AppContextForDisplayMode);

  const ProfileWrapper = styled.div`
    transition: 0.3s;
    margin-top: 80px;
    width: 350px;
    height: 350px;
    background-color: ${displayMode === "dark"
      ? darkModeContainerColor
      : lightModeContainerColor};
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${displayMode === "dark"
        ? "rgba(121, 121, 121, 0.096)"
        : "rgba(99, 99, 99, 0.085)"}
      0px 10px 10px 0px;
  `;
  const ProfileImage = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -100px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: ${displayMode === "dark"
        ? "rgba(121, 121, 121, 0.096)"
        : "rgba(99, 99, 99, 0.085)"}
      0px 10px 10px 0px;
  `;
  const ProfileBar = styled.span`
    display: inline-block;
    width: 70%;
    height: 3px;
    border-radius: 5px;
    margin-top: 30px;
    background-color: ${displayMode === "dark"
      ? darkModeFontColor
      : lightModeFontColor};
  `;
  const ProfileLinksContainer = styled.div`
    width: 70%;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
  `;

  const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 4rem;
    color: ${displayMode === "dark" ? darkModeFontColor : lightModeFontColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  `;

  return (
    <ProfileWrapper>
      <ProfileImage src={Memoji} />
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
      <ProfileBar />
      <ProfileLinksContainer>
        <StyledIcon style={{ display: "block" }} icon={faGithub} />
        <StyledIcon style={{ display: "block" }} icon={faBook} />
        <StyledIcon style={{ display: "block" }} icon={faInstagram} />
      </ProfileLinksContainer>
    </ProfileWrapper>
  );
};

export default ProfileCard;

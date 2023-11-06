import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { AppContextForDisplayMode } from "@src/App";
import { useContext } from "react";
import {
  darkModeContainerColor,
  darkModeFontColor,
  lightModeContainerColor,
  lightModeFontColor,
} from "@src/styles/Theme";

const ButtonWrapper = styled.button`
  z-index: 100;
  position: absolute;
  border-radius: 50px;
  height: 50px;
  width: 80px;
  overflow: hidden;
  right: 50px;
  top: 30px;
  border: none;
  position: fixed;
  cursor: pointer;
`;
const ButtonToggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: 0.1s;
  position: absolute;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-top: 5px;
`;

const ToggleDisplayMode = () => {
  const { displayMode, changeDisplayMode } = useContext(
    AppContextForDisplayMode
  );

  return (
    <ButtonWrapper
      onClick={changeDisplayMode}
      style={{
        backgroundColor:
          displayMode === "dark"
            ? darkModeContainerColor
            : lightModeContainerColor,
      }}
    >
      <ButtonToggle
        style={{
          left: displayMode === "light" ? "5px" : "35px",
          top: "5px",
          backgroundColor:
            displayMode === "dark"
              ? darkModeContainerColor
              : lightModeContainerColor,
        }}
      >
        <StyledIcon
          icon={displayMode === "dark" ? faMoon : faSun}
          style={{
            color:
              displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
          }}
        />
      </ButtonToggle>
    </ButtonWrapper>
  );
};

export default ToggleDisplayMode;

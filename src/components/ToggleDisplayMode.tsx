import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { AppContextForDisplayMode } from "@src/App";
import { useContext } from "react";

const ButtonWrapper = styled.button`
  background-color: #0a0a0a;
  z-index: 100;
  position: absolute;
  border-radius: 50px;
  height: 50px;
  width: 80px;
  overflow: hidden;
  right: 20px;
  top: 20px;
  border: none;
  position: fixed;
  cursor: pointer;
`;
const ButtonToggle = styled.div`
  background-color: rgb(240, 240, 240);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: 0.1s;
  position: absolute;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-top: 5px;
  color: #0a0a0a;
`;

const ToggleDisplayMode = () => {
  const { displayMode, changeDisplayMode } = useContext(
    AppContextForDisplayMode
  );

  return (
    <ButtonWrapper onClick={changeDisplayMode}>
      <ButtonToggle
        style={{ left: displayMode === "light" ? "5px" : "35px", top: "5px" }}
      >
        <StyledIcon icon={displayMode === "dark" ? faMoon : faSun} />
      </ButtonToggle>
    </ButtonWrapper>
  );
};

export default ToggleDisplayMode;

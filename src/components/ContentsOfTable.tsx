import { AppContextForDisplayMode } from "@src/App";
import { useContext } from "react";
import styled from "styled-components";
import { darkModeFontColor, lightModeFontColor } from "@src/styles/Theme";

const COTWrapper = styled.div`
  position: absolute;
  z-index: 300;
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: row;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-around;
  align-items: center;
  position: fixed;
`;
const COTItems = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const ContentsOfTable = () => {
  const { displayMode } = useContext(AppContextForDisplayMode);
  const handleScrollToTop = () => {
    // Scroll to the top of the page (or target element)
    window.scrollTo({
      top: 664,
      behavior: "smooth", // You can use 'auto' for instant scroll or 'smooth' for smooth scroll
    });
  };
  return (
    <COTWrapper>
      <COTItems
        style={{
          backgroundColor:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
        }}
      />
      <COTItems
        style={{
          backgroundColor:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
        }}
        onClick={handleScrollToTop}
      />
      <COTItems
        style={{
          backgroundColor:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
        }}
      />
      <COTItems
        style={{
          backgroundColor:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
        }}
      />
      <COTItems
        style={{
          backgroundColor:
            displayMode === "dark" ? darkModeFontColor : lightModeFontColor,
        }}
      />
    </COTWrapper>
  );
};

export default ContentsOfTable;

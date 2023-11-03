import { AppContextForDisplayMode } from "@src/App";
import { useContext } from "react";
import Memoji from "@assets/memoji.png";
import ToggleDisplayMode from "@components/ToggleDisplayMode";
import Styles from "@styles/Home.module.scss";

const Home = () => {
  const { displayMode } = useContext(AppContextForDisplayMode);

  return (
    <div>
      <ToggleDisplayMode />
      <div className={Styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={Styles.gradientsContainer}>
          <div className={Styles.g1}></div>
          <div className={Styles.g2}></div>
          <div className={Styles.g3}></div>
          <div className={Styles.g4}></div>
          <div className={Styles.g5}></div>
        </div>
        <div
          className={
            displayMode === "dark"
              ? Styles.contentContainerDark
              : Styles.contentContainerLight
          }
        >
          <div className={Styles.textBox}>
            <h1>안녕하세요,</h1>
            <h1>프론트엔드 개발자</h1>
            <h1>이대양입니다.</h1>
          </div>
          <div className={Styles.imageBox}>
            <img src={Memoji}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

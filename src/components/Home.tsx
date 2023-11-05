import { AppContextForDisplayMode } from "@src/App";
import React, { useContext, forwardRef } from "react";
import Styles from "@styles/Home.module.scss";
import { TypeAnimation } from "react-type-animation";
import ProfileCard from "@components/ProfileCard";

const Home = forwardRef<HTMLDivElement>((props, ref) => {
  const { displayMode } = useContext(AppContextForDisplayMode);

  return (
    <div className={Styles.Home} ref={ref}>
      <div className={Styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="20"
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
          <div className={Styles.imageBox}>
            <ProfileCard text={"Lee Daeyang"} />
          </div>
          <div className={Styles.textBox}>
            <TypeAnimation
              sequence={[
                `안녕하세요,\n웹 프론트엔드 개발자\n이대양 입니다.\n\n방문해 주셔서\n감사합니다. :)`,
              ]}
              wrapper="span"
              style={{ whiteSpace: "pre-line", fontSize: "4.5rem" }}
              speed={10}
              deletionSpeed={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default React.memo(Home);

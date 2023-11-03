import { useState, createContext, useEffect } from "react";
import Home from "@components/Home";
import "@src/App.css";
import ContentsOfTable from "./components/ContentsOfTable";
import AboutMe from "./components/AboutMe";

export const AppContextForDisplayMode = createContext<{
  displayMode: "dark" | "light";
  changeDisplayMode: () => void;
}>({ displayMode: "dark", changeDisplayMode: () => {} });

function App() {
  const [displayMode, setDisplayMode] = useState<"dark" | "light">("light");
  const changeDisplayMode = () => {
    displayMode === "dark" ? setDisplayMode("light") : setDisplayMode("dark");
  };
  useEffect(() => {
    console.log(window.scrollY);
  }, [window.scrollY]);

  return (
    <div>
      <AppContextForDisplayMode.Provider
        value={{ displayMode, changeDisplayMode }}
      >
        <ContentsOfTable />
        <Home />
        <AboutMe />
      </AppContextForDisplayMode.Provider>
    </div>
  );
}

export default App;

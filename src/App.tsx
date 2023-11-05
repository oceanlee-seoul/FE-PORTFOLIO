import { useState, createContext } from "react";
import "@src/App.css";
import ContentsOfTable from "@components/ContentsOfTable";
import ToggleDisplayMode from "@components/ToggleDisplayMode";

export const AppContextForDisplayMode = createContext<{
  displayMode: "dark" | "light";
  changeDisplayMode: () => void;
}>({ displayMode: "dark", changeDisplayMode: () => {} });

function App() {
  const [displayMode, setDisplayMode] = useState<"dark" | "light">("light");
  const changeDisplayMode = () => {
    displayMode === "dark" ? setDisplayMode("light") : setDisplayMode("dark");
  };

  return (
    <div>
      <AppContextForDisplayMode.Provider
        value={{ displayMode, changeDisplayMode }}
      >
        <ContentsOfTable />
        <ToggleDisplayMode />
      </AppContextForDisplayMode.Provider>
    </div>
  );
}

export default App;

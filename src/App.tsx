import { useState, createContext } from "react";
import Home from "@components/Home";
import "@src/App.css";

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
        <Home />
      </AppContextForDisplayMode.Provider>
    </div>
  );
}

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SobreMim from "./components/SobreMim";
import { createContext, useContext, useState } from "react";
import { Habilidades } from "./components/Habilidades";

export const context = createContext<any>(null);
export const useGlobalContext = () => useContext(context);

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<"br" | "us">("br");

  return (
    <>
      <context.Provider
        value={{
          language: currentLanguage,
          setCurrentLanguage: setCurrentLanguage,
        }}
      >
        <Navbar />
        <Home />
        <SobreMim />
        <Habilidades></Habilidades>
      </context.Provider>
    </>
  );
}

export default App;

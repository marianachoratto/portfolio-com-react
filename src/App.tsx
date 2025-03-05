import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { createContext, useContext, useState } from "react";

export const context = createContext({language: "", setLanguage: ()=>{}})
export function useGlobalContext(){
  return useContext(context)
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<"br" | "us" >("br")

  return (
    <context.Provider value={{language: currentLanguage, setLanguage:setCurrentLanguage }}>
      <Navbar />
      <Home />
    </context.Provider>
  );
}

export default App;

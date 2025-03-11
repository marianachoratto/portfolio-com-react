import { useState } from "react";
import { MdOutlineTranslate } from "react-icons/md";
import { LanguageItens } from "./LanguageItens";
import styled from "styled-components";
import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";

export default function Navbar() {
  const [languageOptions, setLanguageOptions] = useState(false);

  function changeLanguage() {
    setLanguageOptions((prevValue) => {
      console.log(!prevValue);
      return !prevValue;
    });
  }

  return (
    <>
      <div className="Navbar">
        <div>Mariana Choratto</div>
        <div id="text_navbar">
          <a href="#divHome" target="_self">
            <p>{useChangeLanguageFunction("home")}</p>
          </a>
          <a href="" target="_self">
            <p>{useChangeLanguageFunction("sobreMim")}</p>
          </a>
          <a href="" target="_self">
            <p>{useChangeLanguageFunction("habilidades")}</p>
          </a>
          <a href="" target="_self">
            <p>{useChangeLanguageFunction("projetos")}</p>
          </a>
        </div>
        <LanguageComponent>
          <button className="translate-btn" onClick={changeLanguage}>
            <MdOutlineTranslate className="translate-icon" />
          </button>
          {languageOptions && (
            <LanguageItens setLanguageOptions={setLanguageOptions} />
          )}
        </LanguageComponent>
      </div>
    </>
  );
}

const LanguageComponent = styled.div`
  position: relative;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fade-in 1.5s;
  }

  /* Melhorias: procurar como usar fade-out */
`;

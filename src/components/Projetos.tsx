import {
  Button,
  CardsProjetoPai,
  DivProjeto,
  TituloHabilidade,
} from "./ProjetosStyled";
import {
  changeLanguageTitle,
  useChangeLanguageFunction,
} from "../utils/changeLanguageFunction";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { ModalProjeto } from "./ModalProjetos";
import { listaProjetos } from "../utils/listaProjetos";

export function Projetos() {
  const [buttonVerMais, setbuttonVerMais] = useState(false);
  const changeLanguageFunction = useChangeLanguageFunction;

  return (
    <div>
      <h1 className="mb-5">{useChangeLanguageFunction("projetosTitulo")}</h1>
      <CardsProjetoPai>
        {listaProjetos.map((card, index) => {
          const descricaoProjeto = changeLanguageTitle(index, "descricao");

          return (
            <DivProjeto>
              <h2 className="mb-3">{changeLanguageTitle(index, "titulo")}</h2>
              <a href={card.linkAcesse}>
                <img src={card.imagem} />
              </a>
              <div className="d-flex flex-wrap gap-2 row-gap-3 w-100 justify-content-center mb-2 mt-3 ">
                {card.skills.map((skill) => (
                  <TituloHabilidade>{skill}</TituloHabilidade>
                ))}
              </div>
              <p>
                {descricaoProjeto.split(" ").slice(0, 15).join(" ")}
                {"..."}
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a>
                  <Button
                    type="button"
                    className="btn btn-light"
                    onClick={() => setbuttonVerMais(!buttonVerMais)}
                  >
                    {changeLanguageFunction("verMais")}
                  </Button>
                </a>
                <a href={card.linkAcesse}>
                  <Button type="button" className="btn btn-light">
                    {changeLanguageFunction("acesse")} <FiExternalLink />
                  </Button>
                </a>
                <a href={card.linkGithub}>
                  <Button type="button" className="btn btn-light ">
                    <FaGithub size={30} />
                  </Button>
                </a>
              </div>
            </DivProjeto>
          );
        })}
      </CardsProjetoPai>
      {/* Modal  */}
      {buttonVerMais && <ModalProjeto />}
    </div>
  );
}

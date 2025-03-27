import {
  Button,
  CardsProjetoPai,
  DivProjeto,
  TituloHabilidade,
} from "./ProjetosStyled";
import flag_of_Brazil from "../assets/Flag_of_Brazil.svg.png";
import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { ModalProjeto } from "./ModalProjetos";

export function Projetos() {
  const [buttonVerMais, setbuttonVerMais] = useState(false);

  const descricao =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum consequuntur tempore laborum eos ad aspernatur, sapiente totam odio neque accusantium? Sed consectetur dolore culpa fugiat nesciunt vel!";

  return (
    <div>
      <h1>{useChangeLanguageFunction("projetosTitulo")}</h1>
      <CardsProjetoPai>
        <DivProjeto>
          <h2 className="mb-3">Titulo do projeto</h2>
          <a href="#">
            <img src={flag_of_Brazil} />
          </a>
          <div className="d-flex flex-wrap gap-2 row-gap-3 w-100 justify-content-center mb-2 mt-3 ">
            <TituloHabilidade>Titulo da habilidade</TituloHabilidade>
            <TituloHabilidade>Titulo</TituloHabilidade>
            <TituloHabilidade>habilidade</TituloHabilidade>
          </div>
          <p>
            {descricao.split(" ").slice(0, 15).join(" ")}
            {"..."}
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button
              type="button"
              className="btn btn-light"
              onClick={() => {
                console.log("oi", buttonVerMais);
                return setbuttonVerMais(!buttonVerMais);
              }}
            >
              Ver mais
            </Button>
            <a href="#">
              <Button type="button" className="btn btn-light">
                Acesse <FiExternalLink />
              </Button>
            </a>
            <Button type="button" className="btn btn-light ">
              <FaGithub size={30} />
            </Button>
          </div>
        </DivProjeto>
      </CardsProjetoPai>
      {/* Modal  */}
      {buttonVerMais && <ModalProjeto />}
    </div>
  );
}

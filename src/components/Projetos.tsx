import {
  CardsProjetoPai,
  DivProjeto,
  TituloHabilidade,
} from "./ProjetosStyled";
import flag_of_Brazil from "../assets/Flag_of_Brazil.svg.png";
import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";

export function Projetos() {
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            consequuntur tempore laborum eos ad aspernatur, sapiente totam odio
            neque accusantium? Sed consectetur dolore culpa fugiat nesciunt vel!
          </p>
        </DivProjeto>
      </CardsProjetoPai>
    </div>
  );
}

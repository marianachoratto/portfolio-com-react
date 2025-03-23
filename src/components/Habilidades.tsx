import styled from "styled-components";
import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";
import { objHabilidades } from "../utils/ListOfHabilities";

const ImgIcon = styled.img`
  max-height: 130px;
  max-width: 130px;

  &.css {
    margin-top: 15px;
  }
`;

const ContainerHabilidades = styled.div`
  border: 2px solid white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;
  min-width: 200px;
`;

export function Habilidades() {
  const cards = objHabilidades.map((card) => {
    const addCss =
      card.nome == "Cucumber" ||
      card.nome == "Appium" ||
      card.nome == "Git" ||
      card.nome == "Django" ||
      card.nome == "NodeJS" ||
      card.nome == "React" ||
      card.nome == "Github" ||
      card.nome == "Robot Framework" ||
      card.nome == "SQL" ||
      card.nome == "Postman";

    return (
      <ContainerHabilidades
        className="card-body col-6 col-md-3"
        key={card.nome}
      >
        <h5 className="card-title">{card.nome}</h5>
        <ImgIcon src={card.imagem} className={addCss ? "css" : ""} />
      </ContainerHabilidades>
    );
  });

  return (
    <div className="container d-flex flex-column align-items-center mb-5">
      <h1>{useChangeLanguageFunction("habilidades")}</h1>

      <div className="row flex-wrap row-gap-5 column-gap-5 justify-content-center w-100">
        {cards}
      </div>
    </div>
  );
}

import styled from "styled-components";
import flag_eua from "../assets/flag_eua.png";
import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";
import { listTitles } from "../utils/ListOfHabilities";

export function Habilidades() {
  const titulos = listTitles.map((titulo) => {
    return <h1>{titulo}</h1>;
  });
  return (
    <>
      <h1>{useChangeLanguageFunction("habilidades")}</h1>

      <ContainerHabilidades className="d-flex flex-wrap row-gap-5 column-gap-4 column-gap-sm-5 justify-content-center column-gap-lg-5 w-100">
        <div className="d-flex flex-column-aic gap-2 col-4 col-sm-5 col-lg-3 hidden">
          {titulos}

          <img src={flag_eua} alt="" />
        </div>
      </ContainerHabilidades>
    </>
  );
}

const ContainerHabilidades = styled.div``;

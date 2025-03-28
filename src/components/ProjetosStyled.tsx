import styled from "styled-components";

export const CardsProjetoPai = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 3rem;
`;

export const DivProjeto = styled.div`
  border: 2px, solid, #ffffff;
  border-radius: 6px;
  padding: 16px;
  box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;
  max-width: 30rem;
`;

export const TituloHabilidade = styled.p`
  border-radius: 12px;
  font-weight: bold;
  background-color: #ec9acc49;
  color: #e9a4ce;
  font-size: 0.75rem;
  padding: 0.3rem;
`;

export const Button = styled.button`
  height: 44px;
  width: 101px;
  font-size: 0.86rem;
`;

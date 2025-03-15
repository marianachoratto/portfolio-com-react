import styled from "styled-components";

export const SobreMimDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5%;
  gap: 2rem;

  .div-sobre-mim-texto {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    /* text-align: justify; */
    gap: 3.5rem;
    font-size: 1.25rem;
  }

  .sobre-mim-titulo {
    font-weight: bold;
  }
`;

export const DivImg = styled.div`
  flex: 1;
`;

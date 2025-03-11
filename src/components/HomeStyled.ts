import styled from "styled-components";

export const DivHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  margin: 4rem 0;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
  }

  .homeText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 45%;
    gap: 2rem;
  }

  .principal-text {
    display: flex;
    flex-direction: column;
  }

  .resume_get_in_touch_box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
  }

  .border-white {
    border: 2px solid white !important;
    border-radius: 50px;
  }

  .contact-icons {
    padding-top: 0.5rem;
  }

  .icon {
    height: 35px;
    width: 35px;
  }

  .link-icon {
    color: white;
    text-decoration: none;
  }

  .sublinhado {
    color:rgb(236, 154, 205);
  }
`;

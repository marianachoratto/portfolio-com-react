import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";
import { DivImg, SobreMimDiv } from "./SobreMimStyled";
import mariana3 from "../assets/mariana3.jpg";

export default function SobreMim() {
  return (
    <>
      <h1 className="sobre-mim-titulo">
        {useChangeLanguageFunction("sobreMimTitulo")}
      </h1>

      <SobreMimDiv id="sobreMim">
        <div className="div-sobre-mim-texto">
          <section className="section-sobre-mim">
            {useChangeLanguageFunction("sobreMim1")}
          </section>

          <section>{useChangeLanguageFunction("sobreMim2")}</section>
        </div>
        <DivImg>
          <img
            src={mariana3}
            alt=""
            style={{ width: "100%", height: "auto", marginTop: 1.5 }}
          />
        </DivImg>
      </SobreMimDiv>
    </>
  );
}

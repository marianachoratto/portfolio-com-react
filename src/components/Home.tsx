import Card from "react-bootstrap/Card";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { DivHome } from "./HomeStyled";
import { useChangeLanguageFunction } from "../utils/changeLanguageFunction";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
  const tituloHome = useChangeLanguageFunction("tituloHome1");

  const partes = tituloHome.split("QA Engineer");
  const parte2 = partes[1].split("Raro Labs");

  console.log(partes);

  return (
    <DivHome id="divHome">
      <div className="homeText">
        <div className="principal-text">
          <h1>
            {partes[0]} <span className="sublinhado">QA Engineer</span>{" "}
            {parte2[0]}
            <span className="sublinhado">Raro Labs</span>
          </h1>
          <p>{useChangeLanguageFunction("paragrafoHome")}</p>
        </div>
        <div className="resume_get_in_touch_box">
          <Card
            className="card border border-light bg-dark text-white border-white d-flex justify-content-center align-items-center pointer"
            style={{
              width: "18rem",
              height: "6rem",
            }}
          >
            <Card.Link href="#" className="link-icon">
              <Card.Title className="mb-0">
                {useChangeLanguageFunction("curriculo")}
                <FiExternalLink />
              </Card.Title>
            </Card.Link>
          </Card>
          <Card
            className="card border border-light bg-dark text-white border-white"
            style={{
              width: "18rem",
              height: "6rem",
            }}
          >
            <div className="contact-icons">
              <Card.Title>{useChangeLanguageFunction("getInTouch")}</Card.Title>
              <Card.Link
                href="https://www.linkedin.com/in/mariana-choratto-35b4821a4/"
                className="link-icon"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Card.Link>
              <Card.Link
                href="https://github.com/marianachoratto"
                className="link-icon"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Card.Link>
              <Card.Link href="#" className="link-icon" target="_blank">
                <SiGmail className="icon" />
              </Card.Link>
              <Card.Link href="#" className="link-icon" target="_blank">
                <FaWhatsapp className="icon" />
              </Card.Link>
            </div>
          </Card>
        </div>
      </div>
      <img src="../../public/foto_home.jpg"></img>
    </DivHome>
  );
}

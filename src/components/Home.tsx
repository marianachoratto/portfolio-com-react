import Card from "react-bootstrap/Card";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { DivHome } from "./HomeStyled";
import { changeLanguageFunction } from "../utils/changeLanguageFunction";
import { useGlobalContext } from "../App";

export default function Home() {
  const props = useGlobalContext()

  return (
    <DivHome>
      <div className="homeText">
        <div className="principal-text">
          <h1>
            {changeLanguageFunction(props.language, "tituloHome")}
          </h1>
          <p>
            No meu trabalho atuo com testes manuais e automatizados, garantindo
            a qualidade de aplicações com eficiência e precisão. Além disso,
            tenho experiência em desenvolvimento front-end com React e back-end
            com Node.js, o que me permite ter uma visão mais ampla do ciclo de
            desenvolvimento de software.Seja bem-vindo ao meu portfólio!
          </p>
        </div>
        <div className="resume_get_in_touch_box">
          <Card
          className="card border border-light bg-dark text-white border-white d-flex justify-content-center align-items-center"
          style={{
            width: "18rem",
            height: "6rem",
          }}
          >
            <Card.Link href="#" className="link-icon"><Card.Title>Currículo</Card.Title></Card.Link>
          </Card>
          <Card
            className="card border border-light bg-dark text-white border-white"
            style={{
              width: "18rem",
              height: "6rem",
            }}
          >
            <div className="contact-icons">
              <Card.Title>Entre em contato</Card.Title>
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

// import TranslateIcon from "../assets/icons-google-translate-64.png"
import { MdOutlineTranslate } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div>Mariana Choratto</div>
        <div id='text_navbar'>
          <a href="" target="_self">
            <p>Home</p>
          </a>
          <a href="" target="_self">
            <p>Sobre Mim</p>
          </a>
          <a href="" target="_self">
            <p>Habilidades</p>
          </a>
          <a href="" target="_self">
            <p>Projetos</p>
          </a>
        </div>
        <div id='language_icon'>
            <button className="translate-btn"><MdOutlineTranslate className="translate-icon" /></button>
            
        </div>
      </div>
    </>
  );
}

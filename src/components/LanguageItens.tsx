import styled from "styled-components";
import flag_of_Brazil from "../assets/Flag_of_Brazil.svg.png"
import flag_of_eua from "../assets/flag_eua.png"
import { useGlobalContext } from "../App";

export function LanguageItens(props: {setLanguageOptions: React.Dispatch<React.SetStateAction<boolean>>}) {
    const lingua = useGlobalContext()

    
  return (
    <>
      <FlagComponent className="fade-in">
        <Flags
          src={flag_of_Brazil}
          alt="brasil"
        //   VER DEPOIS
          onClick={()=> props.setLanguageOptions(false)}
        />
        <Flags
          src={flag_of_eua}
          alt="eua"
          onClick={()=> props.setLanguageOptions(false)}
        />
      </FlagComponent>
    </>
  );
}

const Flags = styled.img`
  max-width: 30px;
  max-height: 30px;
  cursor: pointer;
`;
const FlagComponent = styled.section`
  position: absolute;
`;

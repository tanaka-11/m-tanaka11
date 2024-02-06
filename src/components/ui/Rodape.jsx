import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// CSS
const StyledRodape = styled.footer`
  background-color: var(--cor-preto);
  box-shadow: var(--sombra-box);
  height: 10vh;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1800px) {
    font-size: 28px;
  }
`;

export default function Rodape() {
  const router = useRouter();
  const [textColor, setTextColor] = useState("#edeff0ee"); // Cor padrão

  useEffect(() => {
    // Lógica para definir a cor do footer com base na página atual
    if (router.pathname === "/") {
      setTextColor("#d7598b");
    } else if (router.pathname === "/hobbys") {
      setTextColor("#7c7cbd");
    } else if (router.pathname === "/contato") {
      setTextColor("#2aa3db");
    } else {
      // Defina a cor padrão para outras páginas (como a página 404)
      setTextColor("#cc2929");
    }
  }, [router.pathname]);

  return (
    <StyledRodape>
      <h3 style={{ color: textColor }}>Direitos Reservados ©</h3>
    </StyledRodape>
  );
}

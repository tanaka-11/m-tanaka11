import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";

// CSS
const StyledRodape = styled.footer`
  background-color: var(--cor-preto);
  color: var(--cor-primaria);
  box-shadow: var(--sombra-box);
  height: 10vh;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Rodape() {
  const router = useRouter();

  useEffect(() => {
    // Lógica para definir a cor do footer com base na página atual
    let color = "#edeff0ee"; // Cor padrão

    if (router.pathname === "/") {
      color = "#d7598b";
    } else if (router.pathname === "/hobbys") {
      color = "#7c7cbd";
    } else if (router.pathname === "/contato") {
      color = "#2aa3db";
    }

    // Defina a cor usando styled-components props
    document
      .getElementById("meuRodape")
      .style.setProperty("--text-color", color);
  }, [router.pathname]);

  return (
    <StyledRodape id="meuRodape" textColor="#edeff0ee">
      <h3>Direitos Reservados ©</h3>
    </StyledRodape>
  );
}

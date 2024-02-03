import styled from "styled-components";

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

  span {
    color: var(--cor-quartenaria);
  }

  h3 {
    color: var(--cor-terciaria);
  }
`;

export default function Rodape() {
  return (
    <StyledRodape>
      <h3>
        Direitos Reservados <span>©</span>
      </h3>
    </StyledRodape>
  );
}

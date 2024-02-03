import styled from "styled-components";

const StyledRodape = styled.footer`
  background-color: var(--cor-preto);
  color: var(--cor-primaria);
  height: 10vh;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Rodape() {
  return (
    <StyledRodape>
      <h3 style={{ textAlign: "center" }}>Direitos Reservados ©</h3>
    </StyledRodape>
  );
}

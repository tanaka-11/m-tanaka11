import styled from "styled-components";
import Menu from "./Menu";

const StyledHeader = styled.header`
  text-align: center;
  background-color: var(--cor-secundaria);
  padding: 0.6rem;
`;

export default function Cabecalho() {
  return (
    <>
      <StyledHeader>
        <div>
          <h1>🎭</h1>
          <hr />
          <Menu />
        </div>
      </StyledHeader>
    </>
  );
}

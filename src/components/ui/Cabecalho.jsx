import styled from "styled-components";
import Menu from "./Menu";

const StyledHeader = styled.header`
  text-align: center;
`;

export default function Cabecalho() {
  return (
    <>
      <StyledHeader>
        <h1>🎭</h1>
        <Menu />
      </StyledHeader>
    </>
  );
}

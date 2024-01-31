import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--cor-primaria);
  box-shadow: var(--sombra-box);
  border-radius: var(--borda-arredondada);
  padding: 1rem;
  margin: 1rem;
  /* margin-bottom: 0; */
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

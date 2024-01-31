import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  padding: 0.3rem;

  a {
    text-decoration: none;
    color: var(--cor-primaria);

    &:first-child {
      color: var(--cor-quartenaria);
    }

    &:last-child {
      color: var(--cor-terciaria);
    }

    &:hover,
    &:focus {
      text-shadow: var(--sombra-box) 1px 1px 1px;
      text-transform: uppercase;
    }
  }
`;

export default function Menu() {
  return (
    <StyledNav>
      <Link href="">Minha História</Link>
      <Link href="">Hobbys</Link>
      <Link href="">Contato</Link>
    </StyledNav>
  );
}

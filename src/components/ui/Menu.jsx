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

  @media screen and (max-width: 400px) {
    a:hover,
    a:focus {
      text-transform: none;
      font-weight: bold;
      text-shadow: var(--cor-roxa) 0 0 1px;
    }
  }
`;

export default function Menu() {
  return (
    <StyledNav>
      <Link href="/">Minha História</Link>
      <Link href="/hobbys">Hobbys</Link>
      <Link href="/contato">Contato</Link>
    </StyledNav>
  );
}

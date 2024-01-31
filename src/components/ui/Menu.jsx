import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--cor-primaria);

    &:hover,
    &:focus {
      color: #000000;
      border-radius: 8px;
    }
  }
`;

export default function Menu() {
  return (
    <StyledNav>
      <Link href="">Minha Historia</Link>
      <Link href="">Hobbys</Link>
      <Link href="">Contato</Link>
    </StyledNav>
  );
}

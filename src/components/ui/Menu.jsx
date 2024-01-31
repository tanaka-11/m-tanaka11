import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav``;

export default function Menu() {
  return (
    <StyledNav>
      <Link href="">Minha Historia</Link>
      <Link href="">Hobbys</Link>
      <Link href="">Contato</Link>
    </StyledNav>
  );
}

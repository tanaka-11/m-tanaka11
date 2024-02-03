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

    &.ativo {
      text-transform: uppercase;
    }

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
    a {
      & a:hover,
      & a:focus {
        text-transform: none;
        font-weight: bold;
      }

      &.ativo {
        font-weight: bold;
      }
    }
  }
`;

export default function Menu() {
  // Hook para link ativo
  const linkAtivo = usePathname();
  const verificaAtivo = (path) => (linkAtivo === path ? "ativo" : "");

  return (
    <StyledNav>
      <Link href="/" className={verificaAtivo("/")}>
        Minha História
      </Link>
      <Link href="/hobbys" className={verificaAtivo("/hobbys")}>
        Hobbys
      </Link>
      <Link href="/contato" className={verificaAtivo("/contato")}>
        Contato
      </Link>
    </StyledNav>
  );
}

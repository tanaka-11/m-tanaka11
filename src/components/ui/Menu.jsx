import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  padding: 0.3rem;

  a {
    text-decoration: none;
    color: var(--cor-branca);

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
      &.ativo {
        font-weight: bold;
      }

      &:hover,
      &:focus {
        text-transform: none;
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    a.ativo {
      text-transform: uppercase;
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

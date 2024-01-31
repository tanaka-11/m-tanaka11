import styled from "styled-components";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: var(--cor-preto);
  padding: 0.4rem;
  text-align: center;
  box-shadow: var(--sombra-box);

  hr {
    width: 70%;
    background: linear-gradient(
      to right,
      var(--cor-quartenaria),
      var(--cor-terciaria)
    );
    border: none;
    height: 4px;
    margin: 6px auto;
  }
`;

export default function Cabecalho() {
  return (
    <>
      <StyledHeader>
        <div>
          <Link href="/">
            <Image
              src="/images/mascara.png"
              width={100}
              height={100}
              alt="Mascara de Teatro Grego"
            />
          </Link>
          <hr />
          <Menu />
        </div>
      </StyledHeader>
    </>
  );
}

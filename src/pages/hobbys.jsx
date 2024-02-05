import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Container from "@/components/ui/Container";

// CSS
const StyledHobbys = styled.section`
  h2 {
    color: var(--cor-roxa);
    background-color: var(--cor-preto);
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: var(--borda-arredondada);
    cursor: pointer;
    filter: grayscale(100%) blur(1px);
    transition: filter 1.3s ease, transform 0.7s ease;

    &:hover,
    &:focus {
      filter: grayscale(0) blur(0);
      transform: scale(1.01);
    }
  }

  article {
    background-color: var(--cor-preto);
    color: var(--cor-branca);
    border-radius: var(--borda-arredondada);
    text-align: center;

    & h3 {
      color: var(--cor-roxa);
      margin: 1rem;
    }

    & p {
      margin: 1rem;
    }

    &:first-child h3 {
      color: var(--cor-quartenaria);
    }

    &:last-child h3 {
      color: var(--cor-terciaria);
    }
  }

  @media screen and (min-width: 320px) {
    div {
      display: flex;
      flex-direction: column;
    }

    article {
      margin: 1rem auto;
      width: 100%;
    }

    img {
      min-width: 220px;
      height: 465px;
      width: 100%;
    }
  }

  @media screen and (min-width: 670px) {
    div {
      display: flex;
      flex-direction: column;
    }

    article {
      width: 90%;
      margin: 0.8rem auto;
      padding: 0.6rem;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 450px;
      height: 540px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1100px) {
    div {
      display: flex;
      flex-direction: row;
    }

    article {
      width: 100%;
      padding: 0.6rem;
    }
  }
`;

export default function Hobbys() {
  return (
    <>
      <Head>
        <title>Hobbys</title>
        <meta
          name="description"
          content="Passatempos preferidos e importância deles para a desenvolvedora Marina Tanaka"
        />
      </Head>

      <StyledHobbys>
        <h2>Hobbys</h2>

        <Container>
          <article>
            <h3>Atividade Física</h3>
            <p>
              "Onde tem o alivio da mente, sinto-me leve, em um momento onde
              posso deixar para trás as preocupações da vida."
            </p>
            <Image
              src="/images/bike.jpg"
              width={300}
              height={380}
              alt="Guidão da bicicleta"
            />
          </article>

          <article>
            <h3>Programação</h3>
            <p>
              "De alguma maneira, foi algo que trouxe mais maturidade à minha
              vida e a salvou de certa forma."
            </p>
            <Image
              src="/images/programacao.jpg"
              width={300}
              height={380}
              alt="Computador"
            />
          </article>

          <article>
            <h3>Amor</h3>
            <p>
              "No abraço dela descobri o amor, se tornou minha parceira,
              conselheira, que me inspira a ser quem eu sou hoje."
            </p>
            <Image
              src="/images/bia.jpg"
              width={300}
              height={380}
              alt="Pretinha saliente"
            />
          </article>
        </Container>
      </StyledHobbys>
    </>
  );
}

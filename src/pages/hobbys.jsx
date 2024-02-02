import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Container from "@/components/ui/Container";

// CSS
const StyledHobbys = styled.section`
  h2 {
    color: var(--cor-roxa);
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem;
  }

  article {
    background-color: var(--cor-preto);
    color: var(--cor-primaria);
    border-radius: var(--borda-arredondada);
    margin: 0.5rem;

    h3 {
      color: var(--cor-roxa);
      margin: 1rem;
    }

    p {
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
  }

  @media screen and (min-width: 768px) {
    div {
      display: flex;
      flex-direction: row;
    }

    article {
      width: 90%;

      & p {
        word-break: auto-phrase;
      }
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
            <h3>Programação</h3>
            <p>
              "De alguma maneira, foi algo que trouxe mais maturidade à minha
              vida e a salvou de certa forma."
            </p>
            <Image />
          </article>

          <article>
            <h3>Atividade Física</h3>
            <p>
              "Onde tem o alivio da mente, sinto-me leve, em um momento onde
              posso deixar para trás as preocupações da vida."
            </p>
            <Image />
          </article>

          <article>
            <h3>Lazer</h3>
            <p>
              "Na melodia, encontro um refúgio onde posso expressar livremente
              meus sentimentos, transformando as notas em um espelho da minha
              alma."
            </p>
            <Image />
          </article>
        </Container>
      </StyledHobbys>
    </>
  );
}

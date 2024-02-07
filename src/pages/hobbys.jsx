import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import ArtigoHobbys from "@/components/ArtigoHobbys";

// CSS
const StyledHobbys = styled.section`
  h2 {
    color: var(--cor-roxa);
    background-color: var(--cor-preto);
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 0.5s ease;
    &:hover,
    &:focus {
      transform: scale(1.02);
      background-color: var(--cor-preto-transparente);
      color: var(--cor-roxa-hover);
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    color: var(--cor-branca);
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
      margin: 0.5rem auto;
      width: 100%;
    }

    img {
      min-width: 220px;
      height: 425px;
      width: 100%;
    }
  }

  @media screen and (min-width: 670px) {
    div {
      display: flex;
      flex-direction: column;
    }

    h3 {
      font-size: 26px;
    }

    h3 {
      font-size: 24px;
    }

    article {
      width: 90%;
      margin: 0.8rem auto;
      padding: 0.6rem;

      & p {
        font-size: 22px;
      }
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 450px;
      height: 540px;
      max-width: 100%;
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

  @media screen and (min-width: 1300px) {
    h2 {
      font-size: 36px;
      width: 90%;
      margin: 1rem auto;
      &:hover,
      &:focus {
        transform: scale(1.02);
      }
    }

    article {
      /* height: 67vh; */

      & img {
        height: 600px;
        width: 550px;
      }

      & h3 {
        font-size: 28px;
      }

      & p {
        font-size: 26px;
      }
    }

    div {
      width: 90%;
      margin: 1rem auto;
    }
  }

  @media screen and (min-width: 1800px) {
    h2 {
      font-size: 38px;
      width: 90%;
      margin: 1rem auto;
      &:hover,
      &:focus {
        transform: scale(1.02);
      }
    }

    article {
      height: 67vh;

      & img {
        height: 500px;
        width: 500px;
      }

      & h3 {
        font-size: 26px;
      }

      & p {
        font-size: 24px;
      }
    }

    div {
      width: 90%;
      margin: 1rem auto;
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
          <ArtigoHobbys />
        </Container>
      </StyledHobbys>
    </>
  );
}

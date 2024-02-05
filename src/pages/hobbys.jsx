import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import ArtigoHobbys from "@/components/ArtigoHobbys";

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
    /* background-color: var(--cor-preto-transparente); */
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
      /* margin: 1rem; */
    }

    article {
      margin: 0.5rem auto;
      width: 100%;
    }

    img {
      min-width: 220px;
      height: 400px;
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
          <ArtigoHobbys />
        </Container>
      </StyledHobbys>
    </>
  );
}

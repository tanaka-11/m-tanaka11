import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// CSS
const Styled404 = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
    background-color: #3c3b3d;
    color: #cc2929;
    padding: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
  }

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem auto;
    border-radius: var(--borda-arredondada);
    box-shadow: var(--sombra-box);
    background-color: var(--cor-preto);

    & p {
      font-size: 30px;
      margin: 1rem;
    }

    & img {
      width: 550px;
      height: 550px;
      max-width: 100%;
    }
  }

  @media screen and (min-width: 320px) {
    h1 {
      font-size: 1.2rem;
    }

    article {
      width: 100%;
      flex-direction: column;

      & p {
        font-size: 20px;
        color: var(--cor-branca);
      }

      & img {
        height: 350px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 2.6rem;
    }

    article {
      flex-direction: row;

      & p {
        font-size: 30px;
      }

      & img {
        width: 550px;
        height: 550px;
        max-width: 100%;
      }
    }
  }
`;

export default function Pagina404() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>

      <Styled404>
        <h1>404 - Página não encontrada</h1>

        <Container>
          <article>
            <Image
              src="/images/404-image.jpg"
              width={550}
              height={550}
              alt="Imagem representativa para página não encontrada"
              priority
            />
            <p>
              "A intensidade da busca não foi suficiente para encontrar a página
              que você procura. Volte à luz do conhecimento para continuar sua
              jornada."
            </p>
          </article>
        </Container>
      </Styled404>
    </>
  );
}

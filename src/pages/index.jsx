import Container from "@/components/ui/Container";
import apiFake from "./api/server";
// import { serverAPI } from "./api/server";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// CSS
const StyledHome = styled.section`
  h3 {
    font-style: italic;
    font-weight: 550;
    font-size: 18px;
    text-align: center;
    margin: 1rem;
    background-color: var(--cor-primaria);
    padding: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
  }

  p {
    margin: 10px;
    padding: 10px;
  }

  article {
    margin: 20px auto;
    text-align: center;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    background-color: var(--cor-preto);
    color: var(--cor-primaria);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden; /* Evita que as sombras vazem para fora do article */
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }

  /* Estilos para telas com largura mínima de 320px */
  @media screen and (min-width: 320px) {
    img {
      max-height: 300px;
    }

    article {
      width: 90%;
    }
  }

  /* Estilos para telas com largura mínima de 500px */
  @media screen and (min-width: 500px) {
    img {
      min-height: 400px;
      height: auto;
      width: 100%;
    }

    article {
      width: 90%;
    }
  }

  /* Estilos para telas com largura mínima de 1000px */
  @media screen and (min-width: 1000px) {
    img {
      min-height: 650px;
      height: auto;
      width: 100%;
    }

    article {
      width: 850px;
    }
  }
`;

// Função de Servidor

export default function Home() {
  // Hook para as Frases
  const [fraseAtual, setFraseAtual] = useState(null);

  useEffect(() => {
    const fraseAleatoria = apiFake[Math.floor(Math.random() * apiFake.length)];
    setFraseAtual(fraseAleatoria);
  }, []);

  return (
    <>
      <Head>
        <title>_Tanaka11_</title>
      </Head>

      <StyledHome>
        {fraseAtual && <h3>"{fraseAtual.mensagem}".</h3>}

        <Container>
          <article>
            <Image src="/images/demonio.jpg" width={550} height={550} />
            <p>
              "A intensa revolta se apossava do peito, crescendo em meio ao
              pecado se iniciava a jornada nas sombras da vida. Sob os sussurros
              de demônios, a mente repetia <i>'Mente vazia é oficina do cão'</i>{" "}
              ".
            </p>
          </article>

          <article>
            <Image src="/images/anjo.jpg" width={550} height={550} />
            <p>
              "Foi quando um anjo celestial trouxe a luz, guiando essa
              transformação e tornando a jornada uma busca por redenção, onde a
              fé se fortalecia foi onde houve a promessa{" "}
              <i>'Vou te orgulhar minha rainha'</i> ".
            </p>
          </article>

          <article>
            <Image src="/images/protecao.jpg" width={550} height={550} />
            <p>
              "Ciente de sua imperfeição, mas determinada a honrar a promessa,
              ela persiste desafiando as sombras, mantendo acesa a chama da
              esperança agradecendo ao seu anjo protetor por iluminar o seu
              caminho."
            </p>
          </article>
        </Container>
      </StyledHome>
    </>
  );
}

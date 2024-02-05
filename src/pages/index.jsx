import Container from "@/components/ui/Container";
import serverAPI from "./api/server";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// CSS
const StyledHome = styled.section`
  h3 {
    font-style: italic;
    font-weight: 500;
    text-align: center;
    margin: 1rem;
    background-color: var(--cor-preto-transparente);
    color: var(--cor-branca);
    padding: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 0.5s ease;

    &:hover,
    &:focus {
      transform: scale(1.02);
      background-color: var(--cor-preto);
      color: #fff;
    }
  }

  p {
    margin: 1.8rem;
    padding: 1.5rem;
  }

  article {
    margin: 20px auto;
    text-align: center;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    background-color: var(--cor-preto-transparente);
    color: var(--cor-branca);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    overflow: hidden; /* Evita que as sombras vazem para fora do article */
  }

  img {
    width: 100%;
    height: auto;
    max-width: 550px;
    transition: transform 0.7s ease, filter 2s ease;
    filter: grayscale(100%);

    &:hover,
    &:focus {
      transform: scale(1.1);
      filter: grayscale(65%);
    }
  }

  /* Estilos para telas com largura mínima de 320px */
  @media screen and (min-width: 320px) {
    img {
      max-height: 400px;
    }

    article {
      width: 90%;
      flex-direction: column;
    }

    p {
      font-size: 16px;
      margin: 1rem;
      padding: 1rem;
    }
  }

  /* Estilos para telas com largura mínima de 720px */
  @media screen and (min-width: 720px) {
    img {
      height: auto;
      width: 100%;
    }

    h3 {
      font-size: 22px;
    }

    article {
      width: 100%;
      flex-direction: row;
      & p {
        font-size: 20px;
      }
    }
  }

  /* Estilos para telas com largura mínima de 1000px */
  @media screen and (min-width: 1000px) {
    article {
      width: 90%;

      & img {
        min-height: 550px;
      }

      & p {
        font-size: 22px;
        margin: 22px;
      }
    }

    h3 {
      height: 130px;
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
  }
`;

// Função de Servidor
export async function getStaticProps() {
  try {
    // Conexão
    const resposta = await fetch(`${serverAPI}/mensagens.json`);

    // Guardando dados
    const dados = await resposta.json();

    // Tratativa de Erro
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    // Função objeto para array
    const arrayDeMensagens = Object.keys(dados).map((mensagem) => {
      return {
        ...dados[mensagem],
        id: mensagem,
      };
    });

    return {
      props: {
        mensagens: arrayDeMensagens,
      },
    };
  } catch (error) {
    console.error("Erro de conexão: " + error.message);

    return {
      notFound: true,
    };
  }
}

export default function Home({ mensagens }) {
  // Hook para as Frases
  const [fraseAtual, setFraseAtual] = useState(null);

  useEffect(() => {
    const fraseAleatoria =
      mensagens[Math.floor(Math.random() * mensagens.length)];
    setFraseAtual(fraseAleatoria);
  }, []);

  return (
    <>
      <Head>
        <title>_Tanaka11_</title>
        <meta
          name="description"
          content="História em formato de metáfora da desenvolvedora Marina Tanaka"
        />
      </Head>

      <StyledHome>
        {fraseAtual && <h3>"{fraseAtual.mensagem}"</h3>}

        <Container>
          <article>
            <Image
              src="/images/demonio.jpg"
              width={550}
              height={550}
              alt="Demonios em volta de uma criança"
              priority
            />
            <p>
              "A intensa revolta se apossava do peito, crescendo em meio ao
              pecado se iniciou a jornada nas sombras da vida. Sob os sussurros
              de demônios, a mente repetia<i> 'Mente vazia é oficina do cão'</i>{" "}
              ".
            </p>
          </article>

          <article>
            <Image
              src="/images/anjo.jpg"
              width={550}
              height={550}
              alt="Grande anjo olhando para uma criança"
              priority
            />
            <p>
              "Foi quando um anjo celestial trouxe a luz, guiando essa
              transformação e tornando a jornada uma busca por redenção, onde a
              fé se fortalecia foi onde houve a promessa
              <i> 'Vou te orgulhar minha rainha'</i> ".
            </p>
          </article>

          <article>
            <Image
              src="/images/protecao.jpg"
              width={550}
              height={550}
              alt="Criança recebendo asas de anjo e aurelia"
              priority
            />
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

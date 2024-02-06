import Container from "@/components/ui/Container";
import ArtigoIndex from "@/components/ArtigoIndex";
import serverAPI from "./api/server";
import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// CSS
const StyledHome = styled.section`
  h3 {
    font-style: italic;
    font-weight: 500;
    text-align: center;
    margin: 1rem;
    background-color: var(--cor-preto);
    color: var(--cor-branca);
    padding: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 0.5s ease;

    &:hover,
    &:focus {
      transform: scale(1.02);
      background-color: var(--cor-preto-transparente);
      color: #fff;
    }
  }

  @media screen and (min-width: 1000px) {
    article {
      width: 100%;
      & img {
        width: 500px;
        height: 500px;
      }
    }

    h3 {
      height: 130px;
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
  }

  @media screen and (min-width: 1800px) {
    article {
      width: 90%;
      & img {
        width: 600px;
        height: 600px;
      }
    }

    h3 {
      font-size: 38px;
      width: 90%;
      margin: 1rem auto;
      &:hover,
      &:focus {
        transform: scale(1.02);
      }
    }

    div {
      width: 90%;
      margin: 1rem auto;
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
          <ArtigoIndex />
        </Container>
      </StyledHome>
    </>
  );
}

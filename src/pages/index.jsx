import Container from "@/components/ui/Container";
import apiFake from "./api/server";
// import { serverAPI } from "./api/server";
import Head from "next/head";
// import Image from "next/image";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// CSS
const StyledHome = styled.section`
  h3 {
    font-style: italic;
    font-weight: bold;
    text-align: center;
    margin: 1rem;
    background-color: var(--cor-primaria);
    padding: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    /* color: var(--cor-preto); */
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
            {/* <Image></Image> */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus laudantium sunt nisi dignissimos numquam ipsa illo,
              veniam excepturi, distinctio magnam officiis sit minima
              consectetur quia! Explicabo nam maxime vero necessitatibus?
            </p>
          </article>

          <article>
            {/* <Image></Image> */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus laudantium sunt nisi dignissimos numquam ipsa illo,
              veniam excepturi, distinctio magnam officiis sit minima
              consectetur quia! Explicabo nam maxime vero necessitatibus?
            </p>
          </article>

          <article>
            {/* <Image></Image> */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus laudantium sunt nisi dignissimos numquam ipsa illo,
              veniam excepturi, distinctio magnam officiis sit minima
              consectetur quia! Explicabo nam maxime vero necessitatibus?
            </p>
          </article>
        </Container>
      </StyledHome>
    </>
  );
}

import Container from "@/components/ui/Container";
import apiFake from "./api/server";
// import { serverAPI } from "./api/server";
import Head from "next/head";
// import Image from "next/image";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// CSS
const StyledHome = styled.section`
  h2 {
    font-style: italic;
    text-align: center;
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
        <title>@_Tanaka11_</title>
      </Head>

      <StyledHome>
        {fraseAtual && <h2>"{fraseAtual.motivacional}".</h2>}

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

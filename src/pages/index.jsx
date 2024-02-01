import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const StyledHome = styled.section`
  h2 {
    font-style: italic;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>@_Tanaka11_</title>
      </Head>

      <StyledHome>
        <h2>"Frase...."</h2>

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

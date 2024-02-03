import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// CSS
const Styled404 = styled.section``;

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

import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";

// CSS
const StyledHistoria = styled.section`
  /* margin: 1rem; */

  h2 {
    color: var(--cor-quartenaria);
  }
`;

export default function Historia() {
  return (
    <>
      <Head>
        <title>Minha História</title>
        <meta
          name="description"
          content="História da desenvolvedora Marina Tanaka dos Santos Garcia mais conhecida apenas por 'Tanaka' "
        />
      </Head>

      <StyledHistoria>
        <h2>Minha História</h2>

        <Container>
          <h3>O começo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            enim voluptatum voluptatibus ullam! Porro nisi ipsa minus
            reprehenderit commodi quibusdam. Dicta cupiditate ratione dolorem
            distinctio quae, vitae minus omnis debitis!
          </p>

          <h3>Abismo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            enim voluptatum voluptatibus ullam! Porro nisi ipsa minus
            reprehenderit commodi quibusdam. Dicta cupiditate ratione dolorem
            distinctio quae, vitae minus omnis debitis!
          </p>

          <h3>Ressurgimento</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            enim voluptatum voluptatibus ullam! Porro nisi ipsa minus
            reprehenderit commodi quibusdam. Dicta cupiditate ratione dolorem
            distinctio quae, vitae minus omnis debitis!
          </p>
        </Container>
      </StyledHistoria>
    </>
  );
}

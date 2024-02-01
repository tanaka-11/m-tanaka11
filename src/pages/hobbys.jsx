import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";

// CSS
const StyledHobbys = styled.section`
  h2 {
    color: var(--cor-roxa);
  }

  article {
    margin: 1rem;
  }

  @media screen and (min-width: 768px) {
    div {
      display: flex;
      justify-content: space-evenly;
      padding: 2rem;
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
          <article>
            <h3>Programação</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error quis ipsam quisquam recusandae, voluptatibus deserunt est
              deleniti soluta nam rem autem sunt doloremque, culpa consequuntur.
              Earum temporibus accusamus porro.
            </p>
          </article>

          <article>
            <h3>Atividade Física</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error quis ipsam quisquam recusandae, voluptatibus deserunt est
              deleniti soluta nam rem autem sunt doloremque, culpa consequuntur.
              Earum temporibus accusamus porro.
            </p>
          </article>

          <article>
            <h3>Música</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              error quis ipsam quisquam recusandae, voluptatibus deserunt est
              deleniti soluta nam rem autem sunt doloremque, culpa consequuntur.
              Earum temporibus accusamus porro.
            </p>
          </article>
        </Container>
      </StyledHobbys>
    </>
  );
}

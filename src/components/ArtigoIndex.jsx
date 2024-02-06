import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledIndex = styled.section`
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
  }

  @media screen and (min-width: 1800px) {
    article {
      width: 80%;
      & p {
        font-size: 30px;
      }
    }
  }
`;

export default function ArtigoIndex() {
  return (
    <StyledIndex>
      <article>
        <Image
          src="/images/demonio.jpg"
          width={550}
          height={550}
          alt="Demônios em volta de uma criança"
          priority
        />
        <p>
          "A intensa revolta se apossava do peito, crescendo em meio ao pecado
          se iniciou a jornada nas sombras da vida. Sob os sussurros de
          demônios, a mente repetia <i>'Mente vazia é oficina do cão'</i> ".
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
          "Foi quando um anjo celestial trouxe a luz, guiando essa transformação
          e tornando a jornada uma busca por redenção, onde a fé se fortalecia
          foi onde houve a promessa <i>'Vou te orgulhar minha rainha'</i> ".
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
          "Ciente de sua imperfeição, mas determinada a honrar a promessa, ela
          persiste desafiando as sombras, mantendo acesa a chama da esperança
          agradecendo ao seu anjo protetor por iluminar o seu caminho."
        </p>
      </article>
    </StyledIndex>
  );
}

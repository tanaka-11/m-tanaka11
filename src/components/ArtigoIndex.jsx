import Image from "next/image";
import React from "react";

export default function ArtigoIndex() {
  return (
    <div>
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
    </div>
  );
}

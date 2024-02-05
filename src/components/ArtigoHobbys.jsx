// components/ActivitySection.js
import Image from "next/image";
import React from "react";

export default function ArtigoHobbys() {
  return (
    <div>
      <article>
        <h3>Atividade Física</h3>
        <p>
          "Onde tem o alívio da mente, sinto-me leve, em um momento onde posso
          deixar para trás as preocupações da vida."
        </p>
        <Image
          src="/images/bike.jpg"
          width={300}
          height={380}
          alt="Guidão da bicicleta"
        />
      </article>

      <article>
        <h3>Programação</h3>
        <p>
          "De alguma maneira, foi algo que trouxe mais maturidade à minha vida e
          a salvou de certa forma."
        </p>
        <Image
          src="/images/programacao.jpg"
          width={300}
          height={380}
          alt="Computador"
        />
      </article>

      <article>
        <h3>Amor</h3>
        <p>
          "No abraço dela descobri o amor, se tornou minha parceira,
          conselheira, que me inspira a ser quem eu sou hoje."
        </p>
        <Image
          src="/images/bia.jpg"
          width={300}
          height={380}
          alt="Pretinha saliente"
        />
      </article>
    </div>
  );
}

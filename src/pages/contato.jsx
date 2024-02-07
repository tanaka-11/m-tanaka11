import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// CSS
const StyledContato = styled.section`
  h2 {
    color: var(--cor-terciaria);
    background-color: var(--cor-preto);
    transition: transform 0.5s ease;

    &:hover,
    &:focus {
      transform: scale(1.02);
      background-color: var(--cor-preto-transparente);
      color: var(--cor-terciaria-hover);
    }
  }

  form {
    border-radius: var(--borda-arredondada);
    color: var(--cor-branca);
  }

  form > div {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0.8rem;
    font-weight: bold;

    & + p {
      font-size: 0.9rem;
      color: #e62f2f;
      font-weight: bold;
      margin-left: 1.5rem;
      margin-top: 0;
      margin-bottom: 0;
    }

    & input,
    & textarea {
      padding: 0.8rem;
      border: none;
      box-shadow: var(--sombra-box);
      border-radius: 6px;
      background-color: var(--cor-fundo);
    }

    & input#nome:hover {
      text-transform: capitalize;
    }

    & button {
      background-color: var(--cor-terciaria);
      color: var(--cor-branca);
      padding: 0.8rem;
      border-radius: var(--borda-arredondada);
      cursor: pointer;
      border: none;

      &:hover,
      &:focus {
        background-color: var(--cor-roxa);
      }
    }
  }

  @media screen and (min-width: 1800px) {
    article {
      width: 90%;

      & h3 {
        font-size: 28px;
      }
    }

    form > div {
      & input,
      & textarea {
        padding: 1.6rem;
      }

      & + p {
        font-size: 24px;
        margin-bottom: 1rem;
        margin-left: 6.5rem;
      }

      & label {
        font-size: 26px;
      }

      & button {
        font-size: 26px;
      }
    }

    h2 {
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

export default function Contato() {
  const {
    register, // registro dos campos
    handleSubmit, // processamento do form
    formState: { errors }, // state do form
  } = useForm();
  let router = useRouter();

  // Função de enviarContato via Firebase com redirecinamento p/ pagina inicial.
  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados Enviados 🎭");
      router.push("/");
    } catch (error) {
      console.error("Erro ao enviar: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Contatos</title>
        <meta
          name="description"
          content="Entre em contato com a desenvolvedora full-stack Marina Tanaka"
        />
      </Head>

      <StyledContato>
        <h2>Contato</h2>

        <Container>
          <div className="contato">
            <form
              action=""
              method="post"
              // programação do useForm
              onSubmit={handleSubmit((dados) => {
                enviarContato(dados);
              })}
            >
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  {...register("nome", { required: true })}
                />
              </div>

              {errors.nome?.type == "required" && (
                <p>Você deve digitar um nome.</p>
              )}

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                />
              </div>

              {errors.email?.type == "required" && (
                <p>Você deve digitar um email.</p>
              )}

              <div>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  cols="30"
                  rows="8"
                  maxLength={200}
                  {...register("mensagem", {
                    required: true,
                    minLength: 20,
                  })}
                ></textarea>
              </div>

              {errors.mensagem?.type == "required" && (
                <p>Você deve digitar uma mensagem.</p>
              )}
              {errors.mensagem?.type == "minLength" && (
                <p>Escreva no mínimo 20 caracteres.</p>
              )}

              <div>
                <button type="submit">Enviar Mensagem</button>
              </div>
            </form>
          </div>
        </Container>
      </StyledContato>
    </>
  );
}

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
  }

  div .contato {
    background-color: var(--cor-preto);
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
      background-color: var(--cor-primaria);
    }

    & button {
      background-color: var(--cor-terciaria);
      color: #f7f7f7;
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

        <Container className={contato}>
          <form
            action=""
            method="post"
            // programação do useForm
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome </label>
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
              <label htmlFor="email">E-mail </label>
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
              <label htmlFor="mensagem">Mensagem </label>
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
        </Container>
      </StyledContato>
    </>
  );
}

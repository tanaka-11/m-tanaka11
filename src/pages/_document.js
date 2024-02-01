import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="shortcut icon"
          href="/images/mascara.png"
          type="image/png"
          sizes="512x512"
        />

        <meta name="author" content="Marina Tanaka S Garcia" />
        <meta name="keywords" content="blog pessoal" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

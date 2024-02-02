import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Configurando manifest para tranforsmar em PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="m-tanaka" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="m-tanaka" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link
          rel="shortcut icon"
          href="/images/favicon.png"
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

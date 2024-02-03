import Layout from "@/components/ui/Layout";
import Rodape from "@/components/ui/Rodape";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Rodape />
    </Layout>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "./common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, 
      initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Soccer App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

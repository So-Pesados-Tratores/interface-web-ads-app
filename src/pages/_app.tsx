import React from "react";
import { AppProps } from "next/app";

import { FilterBarContextProvider } from "../contexts/filterBarContext";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <FilterBarContextProvider>
        <Component {...pageProps} />
      </FilterBarContextProvider>
    </>
  );
}

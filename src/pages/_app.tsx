import React from "react";
import { AppProps } from "next/app";

import { FilterBarContextProvider } from "../contexts/filterBarContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilterBarContextProvider>
      <Component {...pageProps} />
    </FilterBarContextProvider>
  );
}

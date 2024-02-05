import React from "react";
import { AppProps } from "next/app";

import { ThemeContextProvider } from "../contexts/themeContext";
import { UserContextProvider } from "../contexts/userContext";
import { OrderContextProvider } from "../contexts/orderContext";
import { FilterBarContextProvider } from "../contexts/filterBarContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <OrderContextProvider>
          <FilterBarContextProvider>
            <Component {...pageProps} />
          </FilterBarContextProvider>
        </OrderContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

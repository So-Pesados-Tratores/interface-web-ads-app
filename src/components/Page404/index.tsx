import React from "react";
import Head from "next/head";

import { Container } from "./styles";

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 - Não Encontrado</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Container>
        <p>Página não encontrada</p>
      </Container>
    </>
  );
}

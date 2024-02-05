// Importações necessárias...
import React from "react";
import Head from "next/head";
import ImageSlider from "../ImageSlider";
import PageLayout from "../../PageLayout";

import { IProduct } from "../../../pages/product/[productId]"; // Ajuste o caminho conforme necessário

import { Container } from "./styles";

interface IProps {
  product: IProduct;
}

const ProductPage: React.FC<IProps> = ({ product }) => {
  // Aqui você pode adicionar lógicas específicas do componente da página do produto,
  // como efeitos colaterais, manipulações de estado, etc.

  return (
    <>
      <Head>
        <title>{product.nome}</title>
        <meta name="description" content={product.descricao} />
        {/* Outras tags de metadados conforme necessário */}
      </Head>
      <PageLayout>
        <Container>
          <h1>{product.nome}</h1>
          <div className="img-slider-container">
            <ImageSlider images={product.imagens.map((url) => ({ url }))} />
          </div>
          <div className="description">
            <p>{product.descricao}</p>
          </div>
          {/* Outras seções da página do produto conforme necessário */}
        </Container>
      </PageLayout>
    </>
  );
};

export default ProductPage;

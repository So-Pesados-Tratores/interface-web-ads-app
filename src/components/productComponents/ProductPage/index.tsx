import React from "react";
import Head from "next/head";
import ImageSlider from "../ImageSlider";
import PageLayout from "../../PageLayout";
import { IProduct } from "../../../pages/product/[productId]";
import { Container } from "./styles";

interface IProps {
  product: IProduct;
}

const ProductPage: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.nome}</title>
        <meta name="description" content={product.descricao} />
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
        </Container>
      </PageLayout>
    </>
  );
};

export default ProductPage;

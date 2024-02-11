import React from "react";
import Head from "next/head";
import ImageSlider from "../ImageSlider";
import PageLayout from "../../PageLayout";
import { IProduct } from "../../../pages/product/[productId]";
import {
  Container,
  InterestButton,
  ProductDetails,
  SliderContainer,
} from "./styles";

interface IProps {
  product: IProduct;
}

const handleInterest = () => {
  // Implemente a ação aqui, como abrir um modal ou redirecionar o usuário
  console.log("Interesse no produto registrado.");
};

const ProductPage: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.nome}</title>
        <meta name="description" content={product.descricao} />
      </Head>
      <PageLayout>
        <Container>
          <SliderContainer>
            <ImageSlider images={product.imagens.map((url) => ({ url }))} />
          </SliderContainer>
          <ProductDetails>
            <h1>{product.nome}</h1>

            <h2>Descrição</h2>
            <p>{product.descricao}</p>

            <h2>Categoria</h2>
            <p>{product.categoria}</p>

            <h2>Horas Trabalhadas</h2>
            <p>{product.horas_trabalhadas}</p>

            <h2>Preço</h2>
            <p>R$ {product.preco}</p>

            <InterestButton onClick={handleInterest}>
              Tenho Interesse
            </InterestButton>
          </ProductDetails>
        </Container>
      </PageLayout>
    </>
  );
};

export default ProductPage;

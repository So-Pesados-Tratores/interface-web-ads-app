import React from "react";
import Head from "next/head";
import api from "../../../services/api";
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

const handleInterest = async (productId, productName) => {
  // Solicita o nome do cliente
  const clientName = prompt("Por favor, insira seu nome:", "");
  if (clientName === null || clientName.trim() === "") {
    alert("Nome é necessário para registrar o interesse.");
    return;
  }

  // Solicita o número do WhatsApp do cliente
  const clientPhone = prompt(
    "Por favor, insira seu número de Whatsapp (com DDD):",
    ""
  );
  if (clientPhone === null || clientPhone.trim() === "") {
    alert("Número de Whatsapp é necessário para registrar o interesse.");
    return;
  }

  // Prepara a mensagem padrão de interesse
  const message = `Olá Só pesados tudo bem? Tenho interesse no produto ${productName}. Por favor, entre em contato comigo.`;

  // Monta a estrutura dos campos do formulário
  const query = `mutation {
    createCard(input: {
      pipe_id: "303926987",
      fields_attributes: [
        {field_id: "nome_do_cliente", field_value: "${clientName}"},
        {field_id: "n_mero_de_whatsapp", field_value: "${clientPhone}"},
        {field_id: "produto_de_interesse", field_value: "${productId}"},
        {field_id: "mensagem", field_value: "${message}"}
      ]
    }) {
      card {
        id
        title
      }
    }
  }`;

  try {
    const response = await api.post("", { query });
    console.log("Resposta da API:", response.data); // Isto imprimirá a resposta completa no console

    // Para visualizar detalhes específicos, você pode fazer algo como:
    console.log("ID do Cartão Criado:", response.data.data.createCard.card.id);
    console.log(
      "Título do Cartão Criado:",
      response.data.data.createCard.card.title
    );

    alert("Seu interesse foi registrado com sucesso!");
  } catch (error) {
    console.error(
      "Erro ao submeter o formulário no Pipefy:",
      error.response ? error.response.data : error.message
    );
    alert(
      "Houve um erro ao registrar seu interesse. Por favor, tente novamente."
    );
  }
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

            <InterestButton
              onClick={() => handleInterest(product.id, product.nome)}
            >
              Tenho Interesse
            </InterestButton>
          </ProductDetails>
        </Container>
      </PageLayout>
    </>
  );
};

export default ProductPage;

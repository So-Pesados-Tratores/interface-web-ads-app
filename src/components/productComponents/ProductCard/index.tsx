import React from "react";
import { useRouter } from "next/router";
import { Container } from "./styles";
import { IProduct } from "../../../pages/product/[productId]";

interface IProps {
  iProduct: IProduct;
}

const ProductCard: React.FC<IProps> = ({ iProduct }) => {
  const router = useRouter();

  // Função para tratar o clique no produto, direcionando para a página do produto
  function handleProductClick() {
    // Substitua o 'id' pelo campo correto se necessário
    const href = `/product/${iProduct.id}`;
    router.push(href);
  }

  // Use iProduct diretamente para renderizar o conteúdo do card
  return (
    <Container onClick={handleProductClick}>
      {/* Substitua 'nome' pelo campo correto se necessário */}
      <h2>{iProduct.nome}</h2>

      {/* Renderização dos campos do produto. 
          Ajuste conforme a estrutura de IProduct e os campos que você deseja renderizar. */}
      <div>
        <strong>Categoria:</strong> {iProduct.categoria}
      </div>
      <div>
        <strong>Horas Trabalhadas:</strong> {iProduct.horas_trabalhadas}
      </div>
      <div>
        <strong>Descrição:</strong> {iProduct.descricao}
      </div>
      <div>
        <strong>Preço:</strong> {iProduct.preco}
      </div>

      {/* Se iProduct.imagens for um array de URLs, você pode renderizar assim: */}
      {iProduct.imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem}
          alt={`Imagem do produto ${iProduct.nome}`}
        />
      ))}

      {/* Se houver outros campos dinâmicos, você pode renderizá-los usando map, como: */}
      {/* iProduct.record_fields.map((field) => (
        <div key={field.name}>
          <strong>{field.name}:</strong> {field.value}
        </div>
      )) */}
    </Container>
  );
};

export default ProductCard;

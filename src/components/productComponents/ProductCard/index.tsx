import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../../../services/api"; // Importando o módulo api configurado
import { Container } from "./styles";
import { IProduct } from "../../../pages/product/[productId]";

interface IProps {
  iProduct: IProduct;
}

// Ajuste a interface conforme necessário para corresponder aos dados da sua API
interface ProductDetails {
  id: string;
  title: string;
  record_fields: Array<{
    name: string;
    value: string;
  }>;
}

export default function ProductCard({ iProduct }: IProps) {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      const query = JSON.stringify({
        query: `{ table_record(id: "${product.id}") { id title record_fields { name value } } }`,
      });

      try {
        // Usando o módulo api para fazer a requisição
        const response = await api.post("", query);

        if (
          response.data &&
          response.data.data &&
          response.data.data.table_record
        ) {
          setProduct(response.data.data.table_record);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      }
    }

    fetchProduct();
  }, [iProduct]);

  if (!product) return <div>Carregando...</div>; // Renderiza algo enquanto os dados não são carregados

  // Função para tratar o clique no produto, direcionando para a página do produto
  function handleProductClick() {
    const href = `/product/${product.id}`;
    router.push(href);
  }

  return (
    <Container onClick={handleProductClick}>
      {/* Renderização condicional baseada nos dados do produto */}
      <h2>{product.title}</h2>
      {product.record_fields.map((field) => (
        <div key={field.name}>
          <strong>{field.name}:</strong> {field.value}
        </div>
      ))}
    </Container>
  );
}

import React from "react";
import { GetStaticProps } from "next";
import api from "../../services/api"; // Verifique o caminho para o seu arquivo api
import PageLayout from "../../components/PageLayout";
import ProductCard from "../../components/productComponents/ProductCard";
import { IProduct } from "../../pages/product/[productId]";

interface HomePageProps {
  products: IProduct[];
}

// Função para transformar a estrutura de dados da API para o formato esperado pelo frontend
function transformProduct(node: any): IProduct {
  const product: IProduct = {
    id: node.id,
    nome: findField(node.record_fields, "NOME"),
    categoria: findField(node.record_fields, "CATEGORIA"),
    horas_trabalhadas: findField(node.record_fields, "HORAS_TRABALHADAS"),
    descricao: findField(node.record_fields, "DESCRICAO"),
    imagens: JSON.parse(findField(node.record_fields, "IMAGENS") || "[]"),
    preco: findField(node.record_fields, "PRECO"),
  };

  return product;
}

// Função auxiliar para encontrar um campo pelo nome dentro da lista de campos do produto
function findField(fields: any[], fieldName: string): string {
  const field = fields.find((field) => field.name === fieldName);
  return field ? field.value : "";
}

export const getStaticProps: GetStaticProps = async () => {
  const query = JSON.stringify({
    query: `
      {
        table_records(table_id: "303926833") {
          edges {
            node {
              id
              record_fields {
                name
                value
              }
            }
          }
        }
      }
    `,
  });

  try {
    const response = await api.post("", query);

    if (response.data.data && response.data.data.table_records) {
      const products = response.data.data.table_records.edges.map(({ node }) =>
        transformProduct(node)
      );

      return {
        props: {
          products,
        },
        revalidate: 86400, // 24 horas para revalidação dos dados
      };
    }

    return {
      props: {
        products: [],
      },
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <PageLayout>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} iProduct={product} />
        ))}
      </div>
    </PageLayout>
  );
};

export default HomePage;

import React from "react";
import { GetStaticProps } from "next";
import api from "../../services/api";
import PageLayout from "../../components/PageLayout";
import ProductCard from "../../components/productComponents/ProductCard";
import { IProduct } from "../../pages/product/[productId]";

interface HomePageProps {
  products: IProduct[];
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
    const response = await api.post("", query); // A string vazia "" usa o baseURL definido em api.ts

    if (response.data.data && response.data.data.table_records) {
      const products = response.data.data.table_records.edges.map(({ node }) =>
        transformProduct(node)
      );

      return {
        props: {
          products: products,
        },
        revalidate: 86400, // 24 horas
      };
    } else {
      console.error("Não foi possível obter os dados dos produtos.");
      return {
        props: {
          products: [],
        },
      };
    }
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};

function transformProduct(node: any): IProduct {
  // A lógica de transformação depende da estrutura de dados específica da sua API
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

// Função auxiliar para encontrar um campo pelo nome
function findField(fields: any[], fieldName: string): string {
  const field = fields.find((field) => field.name === fieldName);
  return field ? field.value : "";
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <PageLayout>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageLayout>
  );
};

export default HomePage;

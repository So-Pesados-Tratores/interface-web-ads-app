import React, { useEffect } from "react";
import Cookies from "js-cookie";
import HomePage from "../components/HomePage";
import { GetStaticProps } from "next";
import { IProduct } from "./product/[productId]";
import api from "../services/api";

interface HomeProps {
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
    const response = await api.post("", query);

    if (response.data.data && response.data.data.table_records) {
      const products = response.data.data.table_records.edges.map(({ node }) =>
        transformProduct(node)
      );
      // console.log(products);
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
  console.log(product);
  return product;
}

// Função auxiliar para encontrar um campo pelo nome dentro da lista de campos do produto
function findField(fields: any[], fieldName: string): string {
  const field = fields.find((field) => field.name === fieldName);
  return field ? field.value : "";
}

const Home: React.FC<HomeProps> = ({ products }) => {
  useEffect(() => {
    const somePreference = Cookies.get("somePreference");

    if (!somePreference) {
      Cookies.set("somePreference", "yourValue", {
        expires: 7,
        sameSite: "Strict",
      });
    }
  }, []);

  return <HomePage products={products} />;
};

export default Home;

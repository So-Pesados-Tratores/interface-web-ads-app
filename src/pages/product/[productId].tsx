import React, { useEffect, useState } from "react"; // Se você usa JSX, React deve ser importado.
import { GetStaticPaths, GetStaticProps } from "next";
import ProductPage from "../../components/productComponents/ProductPage";
import api from "../../services/api";
import fetch from "node-fetch";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

interface IRecordField {
  name: string;
  value: string; // Ou qualquer outro tipo, dependendo do campo
}

interface IRecordNode {
  id: string;
  record_fields: IRecordField[];
}

export interface IProduct {
  id: string;
  nome?: string;
  categoria?: string;
  horas_trabalhadas?: string;
  descricao?: string;
  imagens?: string[]; // Supondo que você vai processar o JSON para um array
  preco?: string;
}

interface IProps {
  product: IProduct;
}

// Função para baixar e salvar uma imagem
async function downloadImage(url, imagePath) {
  try {
    const response = await fetch(url);
    const buffer = await response.buffer();
    await writeFile(imagePath, buffer);
  } catch (error) {
    console.error(`Erro ao baixar a imagem ${url}: ${error}`);
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // console.log("Query enviada:", query);
    // console.log("Headers:", api.defaults.headers);

    const response = await api.post(
      "",
      JSON.stringify({
        query: `{ table_records(table_id: 303926833) { edges { node { id record_fields { name value } } } } }`,
      })
    );
    // console.log(
    //   "Resposta da API GetStaticPaths: ",
    //   response.data.data.table_records.edges
    // );
    if (!response.data.data || !response.data.data.table_records) {
      console.error("Dados de table_records não encontrados:", response);
      return { paths: [], fallback: "blocking" };
    }
    const paths = response.data.data.table_records.edges.map(({ node }) => ({
      params: { productId: node.id },
    }));
    console.log({ paths, fallback: "blocking" });
    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.productId;
  // console.log("Matheus: ", productId);

  // Certifique-se de que a query está corretamente formatada para GraphQL.
  const query = JSON.stringify({
    query: `{
      table_record(id: "${productId}") {
        id
        record_fields {
          name
          value
        }
      }
    }`,
  });

  try {
    const response = await api.post("", query);
    // console.log(
    //   "Resposta da API getStaticProps: ",
    //   response.data.data.table_record
    // );

    // Verifique se a resposta da API contém os dados esperados
    if (response.data.data && response.data.data.table_record) {
      const product = transformProduct(response.data.data.table_record);

      // Certifique-se de que product não é undefined
      if (product && product.imagens) {
        // Cria o diretório se não existir
        const imagesDir = path.join(process.cwd(), "public/images");
        await mkdir(imagesDir, { recursive: true });

        const downloadPromises = product.imagens.map(async (imageUrl, i) => {
          const imageName = path.basename(new URL(imageUrl).pathname);
          const imagePath = path.join(imagesDir, imageName);

          await downloadImage(imageUrl, imagePath);

          console.log(`Imagem ${i + 1} baixada: ${imageUrl}`);
          product.imagens[i] = `/images/${imageName}`;
        });

        await Promise.all(downloadPromises);

        return {
          props: { product },
          revalidate: 86400, // 24 horas
        };
      }
    }

    // Se não houver dados ou o produto não for transformado corretamente, retorne notFound
    return { notFound: true };
  } catch (error) {
    console.error("Erro ao buscar detalhes do produto:", error);
    return { notFound: true };
  }
};

function transformProduct(record: IRecordNode): IProduct {
  // Inicializa um objeto product com todas as propriedades potencialiais configuradas para valores padrão seguros
  const product: Partial<IProduct> = {
    id: record.id,
    nome: null,
    categoria: null,
    horas_trabalhadas: null,
    descricao: null,
    imagens: [],
    preco: null,
  };

  // Itera sobre cada campo do registro e atribui os valores ao objeto product conforme necessário
  record.record_fields.forEach((field) => {
    switch (field.name.toUpperCase()) {
      case "NOME":
        product.nome = field.value;
        break;
      case "CATEGORIA":
        // Se o valor for uma string JSON de um array, parseia. Caso contrário, mantém o valor como está.
        try {
          product.categoria = JSON.parse(field.value);
        } catch {
          product.categoria = field.value;
        }
        break;
      case "IMAGENS":
        // Assume que o valor é uma string JSON de um array e tenta parseá-lo.
        try {
          product.imagens = JSON.parse(field.value);
        } catch (error) {
          console.error("Erro ao parsear imagens", error);
          product.imagens = [];
        }
        break;
      case "PRECO":
        product.preco = field.value;
        break;
      case "HORAS_TRABALHADAS":
        product.horas_trabalhadas = field.value;
        break;
      case "DESCRICAO":
        product.descricao = field.value;
        break;
      // Adiciona casos para outros campos conforme necessário
      default:
        // Para campos não reconhecidos ou não necessários, não faz nada
        break;
    }
  });

  // Retorna o objeto product, garantindo que ele corresponda ao tipo IProduct
  return product as IProduct;
}

export default function ProductId({ product: initialProduct }: IProps) {
  // Usa useState para manter o estado do produto no componente
  const [product, setProduct] = useState<IProduct>(initialProduct);

  useEffect(() => {
    const fetchAndUpdateProducts = async () => {
      console.log("Atualizando URLs das imagens...");
      // Aqui você faria a chamada à API para buscar os produtos atualizados
      try {
        const response = await api.post("", {
          query: `{ table_record(id: ${product.id}) { id title record_fields { name value } } }`,
        });
        const updatedProduct = transformProduct(
          response.data.data.table_record
        );
        setProduct(updatedProduct); // Atualiza o estado do produto com os novos dados
      } catch (error) {
        console.error("Erro ao buscar produtos atualizados:", error);
      }
    };

    // Define um intervalo para atualizar as URLs das imagens a cada 10 minutos
    const intervalId = setInterval(fetchAndUpdateProducts, 600000); // 600000 ms = 10 minutos

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [product.id]); // Dependência para o useEffect garantindo que a atualização ocorra com base no ID do produto

  return <ProductPage product={product} />;
}

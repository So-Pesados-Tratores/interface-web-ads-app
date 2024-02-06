import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import api from "../../services/api";
import PageLayout from "../PageLayout";
import ProductCard from "../productComponents/ProductCard";
import PaginationNav from "../PaginationNav";
import LoadingModal from "../LoadingModal";

import { Container } from "./styles";

// Supondo que você tenha definido a interface IProduct em algum lugar
// Esta interface deve refletir a estrutura de um produto conforme esperado pela sua aplicação
interface IProduct {
  id: string;
  nome: string;
  // Adicione outros campos necessários aqui
}

export default function SearchPage() {
  const [getProducts, setProducts] = useState<IProduct[]>([]);
  const [getIsFetching, setIsFetching] = useState(false);
  const [getTotalPages, setTotalPages] = useState(1);

  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const _itemsPerPage = 16;

  useEffect(() => {
    fetchProducts();
  }, [router.query]);

  async function fetchProducts() {
    // Aqui você adaptará a lógica para construir sua query GraphQL baseada nos parâmetros da URL
    const query = `
      query {
        // Sua consulta GraphQL aqui
      }
    `;

    try {
      setIsFetching(true);

      const response = await api.post("", { query });

      // Processamento da resposta para extrair produtos e definir a lógica de paginação
      // Este exemplo é genérico e deve ser ajustado conforme a estrutura de dados da sua API

      setIsFetching(false);

      // Ajuste conforme necessário para a lógica de definição de páginas e produtos
      setTotalPages(1); // Supondo que você calcule o total de páginas baseado na resposta
      setProducts([]); // Transforme a resposta da API para o formato esperado por IProduct[]
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setIsFetching(false);
    }
  }

  function handleChangeFilter(value: string) {
    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        filter: value,
      },
    });
  }

  function handlePagination(value: number) {
    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        page: value,
      },
    });
  }

  return (
    <>
      <Head>
        <title>{`Pesquisa sobre ${router.query.title}`}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <PageLayout>
        <Container>
          <div className="filter-row">
            <p>Filtrar por:&nbsp;</p>
            <select
              id="filter"
              data-testid="filter-select"
              value={router.query.filter}
              onChange={(event) => handleChangeFilter(event.target.value)}
            >
              <option value="">Relevância</option>
              <option value="lowest-price">Menor Preço</option>
              <option value="biggest-price">Maior Preço</option>
            </select>
          </div>

          {getIsFetching && <LoadingModal spinnerSize="10rem" />}

          {getProducts.length == 0 && getIsFetching == false && (
            <h2 data-testid="nothing-found">Nada encontrado</h2>
          )}

          <div className="product-grid">
            {getProducts.length > 0 &&
              getProducts.map((product) => (
                <ProductCard iProduct={product} key={product.id} />
              ))}
          </div>

          {getTotalPages > 1 && (
            <PaginationNav
              totalPages={getTotalPages}
              currentPage={currentPage}
              limitPageNav={5}
              handlePagination={handlePagination}
            />
          )}
        </Container>
      </PageLayout>
    </>
  );
}

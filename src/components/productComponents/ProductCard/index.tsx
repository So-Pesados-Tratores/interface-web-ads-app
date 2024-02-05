import React from "react";
import { useRouter } from "next/router";
import { Container } from "./styles";
import { IProduct } from "../../../pages/product/[productId]";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const router = useRouter();

  function handleProductClickAnchor(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const href = `/product/${product.id}?title=${encodeURIComponent(
      product.nome
    )}`;
    router.push(href);
  }

  return (
    <Container data-testid="product-card">
      <a
        title={product.nome}
        data-testid="product-card-anchor"
        onClick={handleProductClickAnchor}
        href={`/product/${product.id}?title=${encodeURIComponent(
          product.nome
        )}`}
      >
        {/* Removido a lógica de estoque e desconto para simplificar o exemplo */}
        <div className="product-info">
          <figure className="img-container">
            <img
              src={
                product.imagens && product.imagens.length > 0
                  ? product.imagens[0]
                  : "/images/img-n-disp.png"
              }
              alt={`imagem-${product.nome}`}
            />
          </figure>

          <div className="title-price">
            <div className="title-container">
              <span className="title">{product.nome}</span>
            </div>

            {/* Simplifiquei a exibição de preço para usar apenas product.preco */}
            <div className="price-and-discount">
              <span className="price">
                R$ {Number(product.preco).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Container>
  );
}

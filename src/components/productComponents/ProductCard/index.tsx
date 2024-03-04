import React from "react";
import { useRouter } from "next/router";
import { Container } from "./styles";
import { IProduct } from "../../../pages/product/[productId]";
import formatarMoedaReal from "../../../utils/currency";

interface IProps {
  iProduct: IProduct;
}

const ProductCard: React.FC<IProps> = ({ iProduct }) => {
  const router = useRouter();

  function handleProductClick() {
    const href = `/product/${iProduct.id}`;
    router.push(href);
  }

  // Modifique a URL da imagem para passar pelo proxy
  const proxyImageUrl =
    iProduct.imagens.length > 0
      ? `/api/image-proxy?url=${encodeURIComponent(iProduct.imagens[0])}`
      : "";

  const localImageUrl = iProduct.imagens.length > 0 ? iProduct.imagens[0] : "";

  return (
    <Container onClick={handleProductClick}>
      {iProduct.imagens.length > 0 && (
        <img
          src={localImageUrl} // Utilize a URL do proxy aqui (atualmente recebe a url baixa localmente, mas deve ser a URL do proxy no futuro)
          alt={`Imagem do produto ${iProduct.nome}`}
        />
      )}

      <h2>{iProduct.nome}</h2>

      <div>
        <strong>Preço:</strong> {formatarMoedaReal(iProduct.preco)}
      </div>

      <div>
        <strong>Horas Trabalhadas:</strong> {iProduct.horas_trabalhadas}
      </div>
    </Container>
  );
};

export default ProductCard;

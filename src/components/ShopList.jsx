import { Row } from "react-bootstrap";
import { memo, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { MoonLoader } from "react-spinners";

const ShopList = ({ productItems, isLoading }) => {
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <MoonLoader />
      </div>
    );
  }

  if (!productItems?.length && !isLoading) {
    return <h1 className="not-found">Produtos Não Encontrados!!</h1>;
  }

  return (
    <Row
      className="justify-content-center"
      style={{
        marginTop: 50,
      }}
    >
      {productItems?.map((productItem) => {
        return (
          <ProductCard
            key={productItem.tractor_id}
            title={null}
            productItem={productItem}
          />
        );
      })}
    </Row>
  );
};
export default memo(ShopList);

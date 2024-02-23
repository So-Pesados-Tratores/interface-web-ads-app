import React from "react";
import PageLayout from "../../components/PageLayout";
import ProductCard from "../../components/productComponents/ProductCard";
import { IProduct } from "../../pages/product/[productId]";
import { Container } from "./styles";
import { ContainerGlobal } from "../../styles/GlobalStyle";

interface HomePageProps {
  products: IProduct[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <ContainerGlobal>
      <PageLayout>
        <Container>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} iProduct={product} />
            ))}
          </div>
        </Container>
      </PageLayout>
    </ContainerGlobal>
  );
};

export default HomePage;

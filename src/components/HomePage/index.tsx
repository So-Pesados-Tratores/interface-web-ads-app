import React from "react";
import PageLayout from "../../components/PageLayout";
import ProductCard from "../../components/productComponents/ProductCard";
import { IProduct } from "../../pages/product/[productId]";

interface HomePageProps {
  products: IProduct[];
}

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

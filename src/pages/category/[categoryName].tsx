import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFilterBar } from "../../contexts/filterBarContext";
import HomePage from "../index";
import { IProduct } from "../product/[productId]";

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { categoryName } = router.query;
  const { products } = useFilterBar(); // useFilterBar deve retornar valores tipados conforme IFilterBarContext

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  // getCategories.map((category) => (

  //   onClick={() => handleCategoryClick(category.name)}

  //     category.name

  console.log("Products:", products);

  useEffect(() => {
    if (!router.isReady || typeof categoryName !== "string") return;

    const newFilteredProducts = products.filter(
      (product) => product.categoria === categoryName
    );

    setFilteredProducts(newFilteredProducts);
  }, [router.isReady, categoryName, products]);

  // Logs para depuração
  console.log("Entrou na página de categoria:", categoryName, products);
  // console.log(
  //   "Tipos de categoria:" +
  //     (products
  //       ? products.map((product: IProduct) => typeof product.categoria)
  //       : "No products")
  // );
  // console.log(
  //   "Categorias:" +
  //     (products
  //       ? products.map((product: IProduct) => product.categoria)
  //       : "No products")
  // );

  return <HomePage products={filteredProducts} />;
};

export default CategoryPage;

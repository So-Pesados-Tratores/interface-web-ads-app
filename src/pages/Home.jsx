import { Fragment, useCallback, useEffect, useState } from "react";
import Section from "../components/Section";
import { products } from "../utils/products";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { ProductService } from "../services/routes/products";

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [productsList, setProductsList] = useState([])

  const handleGetProducts = useCallback(async () => {
    setLoading(true)
    await ProductService.getProducts()
      .then((res) => {
        setProductsList(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    handleGetProducts();
  }, []);

  const newArrivalData = productsList.filter(
    (item) => item.category === "mobile" || item.category === "wireless" || item.category === "tratores2"
  );

  // const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      {/* <SliderHome /> */}
      {/* <Wrapper /> */}
      {/* <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      /> */}
      <Section
        title="Novidades"
        bgColor="white"
        productItems={newArrivalData}
        isLoading={loading}
      />
      {/* <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} /> */}
    </Fragment>
  );
};

export default Home;

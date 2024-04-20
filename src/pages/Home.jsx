import { Fragment } from "react";
import Section from "../components/Section";
import { products } from "../utils/products";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
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
      />
      {/* <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} /> */}
    </Fragment>
  );
};

export default Home;

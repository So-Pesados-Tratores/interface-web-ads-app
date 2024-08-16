import { Fragment, useCallback, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { ProductService } from "../services/routes/products";
import { MoonLoader } from "react-spinners";

const Product = () => {
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetProductById = useCallback(() => {
    setLoading(true);
    ProductService.getProductsById({ id: id })
      .then((res) => {
        setSelectedProduct(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleGetProductById();
  }, []);

  // const [relatedProducts, setRelatedProducts] = useState([]);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setSelectedProduct(
  //     products.filter((item) => parseInt(item.id) === parseInt(id))[0]
  //   );
  //   setRelatedProducts(
  //     products.filter(
  //       (item) =>
  //         item.category === selectedProduct?.category &&
  //         item.id !== selectedProduct?.id
  //     )
  //   );
  // }, [selectedProduct, id]);

  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={selectedProduct?.name} />
      <ProductDetails selectedProduct={selectedProduct} isLoading={loading} />
      {/* <ProductReviews selectedProduct={selectedProduct} /> */}
      {/* <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section> */}
    </Fragment>
  );
};

export default Product;

import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useCallback, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { ProductService } from "../services/routes/products";

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const handleGetProducts = useCallback(async () => {
    setLoading(true);
    await ProductService.getProducts()
      .then((res) => {
        setProductsList(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const [filterList, setFilterList] = useState([]);
  useWindowScrollToTop();

  useEffect(() => {
    setFilterList(productsList);
  }, [productsList]);

  return (
    <Fragment>
      <Banner title="Produtos" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect
                products={productsList}
                setFilterList={setFilterList}
              />
            </Col>
            <Col md={8}>
              <SearchBar
                products={productsList}
                setFilterList={setFilterList}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} isLoading={loading} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;

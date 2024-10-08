import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import ImagesSwiper from "./components/ImagesSwiper";
import { MoonLoader } from "react-spinners";

const ProductDetails = ({ selectedProduct, isLoading }) => {
  // const dispatch = useDispatch();

  // const [quantity, setQuantity] = useState(1);
  // const handleQuantityChange = (e) => {
  //   setQuantity(e.target.value);
  // };
  // const handelAdd = (selectedProduct, quantity) => {
  //   dispatch(addToCart({ product: selectedProduct, num: quantity }));
  //   toast.success("Product has been added to cart!");
  // };

  const handleNavigateToWpp = () => {
    const phoneNumber = "5511973714233";
    const message = encodeURIComponent(
      `Olá, tudo bem?
      Estou interessado no produto: ${selectedProduct?.name}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

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

  if (!selectedProduct && !isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 300,
        }}
      >
        <h2>Nenhuma informação encontrada no momento</h2>
      </div>
    );
  }

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <ImagesSwiper images={selectedProduct?.urlImages} />
          </Col>
          <Col md={6}>
            <h2
              style={{
                textAlign: "center",
              }}
            >
              {selectedProduct?.name}
            </h2>
            {/* <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div> */}
            <div
              className="info"
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span className="price">
                {selectedProduct?.price?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span>Categoria: {selectedProduct?.category}</span>
            </div>
            {/* <p>{selectedProduct?.shortDesc}</p> */}
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "gray",
              }}
            />
            <h4
              style={{
                marginTop: 15,
              }}
            >
              Descrição
            </h4>
            <p
              style={{
                fontSize: 18,
                marginTop: -5,
              }}
            >
              {selectedProduct?.description}
            </p>

            <h4
              style={{
                marginTop: 15,
              }}
            >
              Marca
            </h4>
            <p
              style={{
                fontSize: 18,
                marginTop: -5,
              }}
            >
              {selectedProduct?.brand}
            </p>

            <h4
              style={{
                marginTop: 15,
              }}
            >
              Ano
            </h4>
            <p
              style={{
                fontSize: 18,
                marginTop: -5,
              }}
            >
              {selectedProduct?.year}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <h4
                  style={{
                    marginTop: 15,
                  }}
                >
                  Horas Trabalhadas
                </h4>
                <p
                  style={{
                    fontSize: 18,
                    marginTop: -5,
                  }}
                >
                  {selectedProduct?.work_hours}
                </p>
              </div>

              <button
                aria-label="Add"
                type="submit"
                className="add"
                onClick={handleNavigateToWpp}
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </button>
            </div>

            {/* <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(selectedProduct, quantity)}
            >
              Add To Cart
            </button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;

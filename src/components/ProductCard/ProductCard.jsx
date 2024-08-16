import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";
import { addProduct } from "../../app/features/product/productSlice";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const handelClick = () => {
    dispatch(addProduct(productItem));
    router(`/shop/${productItem.tractor_id}`);
  };

  const handleNavigateToWpp = ({ name }) => {
    const phoneNumber = "5511973714233";
    const message = encodeURIComponent(
      `Olá, tudo bem?
      Estou interessado no produto: ${name}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}

      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.urlImages && productItem.urlImages[0]}
        alt=""
      />

      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.name}</h3>
        {/* <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div> */}
        <div className="price">
          <h4>R${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handleNavigateToWpp({ name: productItem.name })}
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

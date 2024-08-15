import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer 
    style={{
      maxHeight: 320,
    }}
    >
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: -25
        }}
      >
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <img src="logo.png" alt="logo" width={200} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </Col>
          <Col md={3} sm={5} className="box" style={{paddingTop: 15}}>
            <h2>About Us</h2>
            <ul>
              {/* <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li> */}
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>
                © {new Date().getFullYear()} - Desenvolvido por{" "}
                <a href="https://www.linkedin.com/in/matheuspierro">
                  Matheus Ramos de Pierro
                </a>
              </li>
            </ul>
          </Col>
          {/* <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col> */}
          <Col md={3} sm={5} className="box" style={{paddingTop: 15}}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

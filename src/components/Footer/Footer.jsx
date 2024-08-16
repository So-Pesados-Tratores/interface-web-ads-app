import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

import PDF from "../../assets/pdf/privacyAndPolicy.pdf";

import Logo from "../../assets/png/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: 320,
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: -25,
        }}
      >
        <div
          className="footer-row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <img src={Logo} alt="logo" width={200} />
            </div>
            <p>
              A <strong>Só Pesados </strong>é uma empresa familiar com clientes
              em todo o Brasil, dedicada à venda de veículos agrícolas e
              automotivos, guiada pelos valores de Deus e comprometida com o
              atendimento honesto e confiável.
            </p>
          </Col>
          <Col md={3} sm={5} className="box" style={{ paddingTop: 15 }}>
            <h2>Sobre nós</h2>
            <ul>
              {/* <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li> */}
              <li>Termos e Condições</li>
              <li>
                <a
                  href={PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                © {new Date().getFullYear()} - Desenvolvido por{" "}
                <a
                  href="https://www.linkedin.com/in/matheuspierro"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <strong>Matheus Ramos de Pierro</strong>
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
          <Col md={3} sm={5} className="box" style={{ paddingTop: 15 }}>
            <h2>Contatos</h2>
            <ul>
              <li>
                Rodovia Carlos Tonani, SP 333, KM 103, SN- Zona Rural Barrinha
              </li>
              <li>Email: sopesados.venda@gmail.com</li>
              <li>Telefone: +55 11 91588-2179</li>
            </ul>
          </Col>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

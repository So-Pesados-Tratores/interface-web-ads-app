import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle, FaTag } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "react-loader-spinner";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";
import CategoriesAndSeachBar from "../CategoriesAndSeachBar";

import { Container } from "./styles";

export default function Header() {
  const router = useRouter();

  function handleGoToAccount() {
    router.push({
      pathname: "/account",
      query: { menu: "account-data" },
    });
  }

  return (
    <>
      <Container>
        <header>
          <div className="limit-center">
            <Link href="/">
              <a>
                <img src="/images/logo.png" alt="logo" title="Home" />
              </a>
            </Link>

            {/* Seção "Comprar" */}
            <div className="buy-section">
              <Link href="/comprar">
                <a>Comprar</a>
              </Link>
            </div>

            {/* Seção "Sobre Nós"
            <div className="about-us-section">
              <Link href="/sobre-nos">
                <a>Sobre Nós</a>
              </Link>
            </div> */}
          </div>
        </header>

        <CategoriesAndSeachBar />
      </Container>
    </>
  );
}

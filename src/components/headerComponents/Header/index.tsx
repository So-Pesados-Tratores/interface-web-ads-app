import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle, FaTag } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "react-loader-spinner";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";
import { useUser } from "../../../contexts/userContext";
import { useTheme } from "../../../contexts/themeContext";
import CategoriesAndSeachBar from "../CategoriesAndSeachBar";

import { Container } from "./styles";

export default function Header() {
  const userContext = useUser();
  const router = useRouter();
  const themeContext = useTheme();

  function handleGoToAccount() {
    router.push({
      pathname: "/account",
      query: { menu: "account-data" },
    });
  }

  function handleChangeTheme(checked: boolean) {
    if (checked) themeContext.changeThemeTo("light");
    else themeContext.changeThemeTo("dark");
  }

  return (
    <>
      <Head>
        <meta name="theme-color" content={themeContext.getTheme.primary} />
      </Head>

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

            {/* Seção "Sobre Nós" */}
            <div className="about-us-section">
              <Link href="/sobre-nos">
                <a>Sobre Nós</a>
              </Link>
            </div>

            <div className="announce-section">
              <Link href="/quero-anunciar">
                <a style={{ display: "flex", alignItems: "center" }}>
                  <FaTag style={{ marginRight: "0.5rem" }} />
                  Quero anunciar
                </a>
              </Link>
            </div>

            <div className="login-cart">
              <div className="login">
                {userContext.getLogin == false ? (
                  <button
                    className="login-button"
                    data-testid="login-button"
                    type="button"
                    title="Fazer Login"
                    disabled={userContext.getIsFetchingUser}
                    onClick={() => userContext.handleSwitchModal()}
                  >
                    {userContext.getIsFetchingUser ? (
                      <Loader
                        type="TailSpin"
                        color="#eee"
                        height="1.5rem"
                        width="1.5rem"
                      />
                    ) : (
                      <>
                        <FaSignInAlt />
                        &nbsp;Entrar
                      </>
                    )}
                  </button>
                ) : userContext.getUser ? (
                  <div className="dropdown" data-testid="dropdown-user">
                    <span className="name">
                      Olá, {userContext.getUser.name.split(" ")[0]}
                    </span>
                    <div className="dropdown-content">
                      <p
                        onClick={handleGoToAccount}
                        data-testid="go-to-account"
                      >
                        <FaUserCircle />
                        &nbsp;Minha Conta
                      </p>
                      <p
                        onClick={() => userContext.logOut()}
                        data-testid="logout"
                      >
                        <FaSignOutAlt />
                        &nbsp;Sair
                      </p>
                    </div>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>

            <div
              className="switch-container"
              title={
                themeContext.getTheme.title === "dark"
                  ? "Tema: Escuro"
                  : "Tema: Claro"
              }
            >
              <Switch
                id="react-switch"
                data-testid="theme-switch"
                onChange={handleChangeTheme}
                checked={themeContext.getTheme.title === "light"}
                checkedIcon={<FiSun size={20} color="#16324C" />}
                uncheckedIcon={<FiMoon size={20} />}
                offColor="#444"
                onColor="#ddd"
              />
            </div>
          </div>
        </header>

        <CategoriesAndSeachBar />
      </Container>
    </>
  );
}

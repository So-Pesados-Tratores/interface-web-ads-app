import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

import { Container } from "./styles";
// Certifique-se de que CategoryDropdownMenu é importado corretamente como um componente
import { CategoryDropdownMenu } from "../Header/styles";

interface IProps {
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchBar: () => React.ReactNode;
}

export default function MobileMenu({ setMobileMenuActive, searchBar }: IProps) {
  return (
    <Container>
      <div className="menu-header">
        <Link href="/">
          <a className="logo" onClick={() => setMobileMenuActive(false)}>
            <img src="/images/logo192x.png" alt="logo" title="Home" />
          </a>
        </Link>
        <button
          id="exit-mobile-menu"
          data-testid="exit-mobile-menu"
          type="button"
          onClick={() => setMobileMenuActive(false)}
        >
          <FaTimes size={40} />
        </button>
      </div>
      <div className="menu-body">
        <h1>Menu</h1>
        {searchBar()}
        <CategoryDropdownMenu /> {/* Corrigido para uso como componente */}
      </div>
    </Container>
  );
}

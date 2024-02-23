import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { Container } from "./styles";
import PropTypes from "prop-types";

function MobileMenu({
  setMobileMenuActive,
  searchBar,
  renderCategoryDropdown,
}) {
  return (
    <Container>
      <div className="menu-header">
        <button
          id="exit-mobile-menu"
          data-testid="exit-mobile-menu"
          type="button"
          onClick={() => setMobileMenuActive(false)}
          aria-label="Fechar menu" // Melhoria de acessibilidade
          style={{ cursor: "pointer" }} // Feedback visual melhorado
        >
          <FaTimes size={40} />
        </button>
      </div>
      <div className="menu-body">
        <Link href="/">
          <a
            onClick={() => setMobileMenuActive(false)}
            style={{ display: "block", margin: "0 auto" }}
          >
            <img
              src="/images/logo192x.png"
              alt="logo"
              title="Home"
              style={{ maxWidth: "120px" }}
            />
          </a>
        </Link>
        {searchBar()}
        <div className="category-dropdown">{renderCategoryDropdown()}</div>
      </div>
    </Container>
  );
}

// Atualizando PropTypes
MobileMenu.propTypes = {
  setMobileMenuActive: PropTypes.func.isRequired,
  searchBar: PropTypes.func.isRequired,
  renderCategoryDropdown: PropTypes.func, // Continua opcional
};

export default React.memo(MobileMenu); // Otimização de performance com React.memo

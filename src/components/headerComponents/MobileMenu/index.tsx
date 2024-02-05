import React from "react";
import { FaTimes, FaSignInAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

import { Container } from "./styles";
import { useUser } from "../../../contexts/userContext";
import { ICategory, useFilterBar } from "../../../contexts/filterBarContext";

interface IProps {
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchBar: () => React.ReactNode;
}

export default function MobileMenu({ setMobileMenuActive, searchBar }: IProps) {
  const userContext = useUser();
  const { getCategories } = useFilterBar();
  const router = useRouter();

  function handleLoginModal() {
    setMobileMenuActive(false);
    userContext.handleSwitchModal();
  }

  function handleUserAccount() {
    setMobileMenuActive(false);
    router.push({
      pathname: "/account",
      query: {
        menu: "account-data",
      },
    });
  }

  function handleUserLogout() {
    setMobileMenuActive(false);
    userContext.logOut();
  }

  const categoryList = () => (
    <div className="category-menu">
      {getCategories.map((category) => (
        <Link
          key={category.id}
          href={`/search?categoryId=${category.id}&category=${category.name}`}
        >
          <a onClick={() => setMobileMenuActive(false)}>{category.name}</a>
        </Link>
      ))}
    </div>
  );

  return (
    <Container>
      <div className="menu-header">
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
        {searchBar()}
        {categoryList()}
      </div>
    </Container>
  );
}

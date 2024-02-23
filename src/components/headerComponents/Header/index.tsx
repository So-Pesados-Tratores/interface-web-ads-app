import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaCaretDown, FaCaretRight, FaSearch } from "react-icons/fa";
import ClickAwayListener from "react-click-away-listener";
import { useFilterBar } from "../../../contexts/filterBarContext";
import MobileMenu from "../MobileMenu";
import { Container, CategoryDropdownMenu, SearchBarForm } from "./styles";

export default function Header() {
  const [getActiveCategoryMenu, setActiveCategoryMenu] = useState(false);
  const [getMobileMenuActive, setMobileMenuActive] = useState(false);
  const { getCategories, getSearchBarText, setSearchBarText } = useFilterBar();
  const router = useRouter();

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    router.push(`/search?query=${getSearchBarText}`);
  }

  function handleCategoryClick(categoryId: string) {
    router.push(`/category/${categoryId}`);
  }

  const renderCategoryDropdown = () => (
    <CategoryDropdownMenu>
      <ClickAwayListener onClickAway={() => setActiveCategoryMenu(false)}>
        <ul>
          <li onClick={() => setActiveCategoryMenu(!getActiveCategoryMenu)}>
            Categorias <FaCaretDown />
            {getActiveCategoryMenu && (
              <ul>
                {getCategories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.name}
                    <FaCaretRight />
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </ClickAwayListener>
    </CategoryDropdownMenu>
  );

  const renderSearchBar = () => (
    <SearchBarForm onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="O que você está procurando?"
        value={getSearchBarText}
        onChange={(e) => setSearchBarText(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </SearchBarForm>
  );

  return (
    <>
      <Container>
        <header>
          <h1
            className="title"
            style={{ display: getMobileMenuActive ? "none" : "block" }}
          >
            Encontre todos os equipamentos agrícolas e máquinas pesadas que você
            precisa
          </h1>

          {/* Envolve todos os elementos, exceto o título, para controle de visibilidade */}
          <div style={{ display: getMobileMenuActive ? "none" : "block" }}>
            <div className="limit-center">
              <Link href="/">
                <a className="logo">
                  <img src="/images/logo192x.png" alt="logo" title="Home" />
                </a>
              </Link>

              {getMobileMenuActive ? null : renderSearchBar()}

              <div className="category-dropdown">
                {renderCategoryDropdown()}
              </div>
            </div>

            <div className="mobile-menu">
              <button onClick={() => setMobileMenuActive(true)}>
                <FaBars size={30} />
              </button>
            </div>
          </div>
        </header>
      </Container>

      {getMobileMenuActive && (
        <MobileMenu
          setMobileMenuActive={setMobileMenuActive}
          searchBar={renderSearchBar}
          renderCategoryDropdown={renderCategoryDropdown}
        />
      )}
    </>
  );
}

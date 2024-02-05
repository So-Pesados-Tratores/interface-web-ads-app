import React, { FormEvent, useState } from "react";
import { FaCaretDown, FaCaretRight, FaSearch, FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import ClickAwayListener from "react-click-away-listener";

import { useFilterBar } from "../../../contexts/filterBarContext";
import MobileMenu from "../MobileMenu";

import { Container, CategoryDropdownMenu, SearchBarForm } from "./styles";

export default function CategoriesAndSearchBar() {
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
    <Container>
      {getMobileMenuActive && (
        <MobileMenu
          setMobileMenuActive={setMobileMenuActive}
          searchBar={renderSearchBar}
        />
      )}
      <div className="limit-center">
        <div className="category-and-searchbar">
          {renderCategoryDropdown()}
          {renderSearchBar()}
        </div>
        <div className="mobile-menu">
          <button onClick={() => setMobileMenuActive(true)}>
            <FaBars size={30} />
          </button>
        </div>
      </div>
    </Container>
  );
}

import React, { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaCaretDown, FaCaretRight, FaSearch } from "react-icons/fa";
import ClickAwayListener from "react-click-away-listener";
import { useFilterBar } from "../../../contexts/filterBarContext";
import MobileMenu from "../MobileMenu";
import { Container, CategoryDropdownMenu, SearchBarForm } from "./styles";
import api from "../../../services/api";

export default function Header() {
  const [getActiveCategoryMenu, setActiveCategoryMenu] = useState(false);
  const [getMobileMenuActive, setMobileMenuActive] = useState(false);
  const { getCategories, setCategories, getSearchBarText, setSearchBarText } =
    useFilterBar();
  const router = useRouter();

  // Função para buscar categorias
  const fetchCategories = async () => {
    try {
      const response = await api.post("", {
        query:
          "{ table_records(table_id: 303926832) { edges { node { id record_fields { name value } } } } }",
      });

      // Transforme a resposta para o formato desejado
      const categories = response.data.data.table_records.edges.map((edge) => ({
        id: edge.node.id,
        name:
          edge.node.record_fields.find((field) => field.name === "NOME")
            ?.value || "Categoria sem nome",
      }));

      console.log("Categorias:", categories);

      // Atualize o estado com as novas categorias
      setCategories(categories);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      // Trate o erro conforme necessário
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    router.push(`/search?query=${getSearchBarText}`);
  }

  function handleCategoryClick(categoryId: string) {
    router.push(`/category/${categoryId}`);
  }

  const renderCategoryDropdown = () => (
    <CategoryDropdownMenu>
      {getCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      ))}
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

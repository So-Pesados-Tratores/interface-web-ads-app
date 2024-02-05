import React, { FormEvent, useEffect, useState } from "react";
import { FaCaretDown, FaCaretRight, FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import api from "../../../services/api";
import { ICategory, useFilterBar } from "../../../contexts/filterBarContext";
import { IProduct } from "../../../pages/product/[productId]";
import MobileMenu from "../MobileMenu";

import { Container, CategoryDropdownMenu, SearchBarForm } from "./styles";

let timeoutId: NodeJS.Timeout;

export default function CategoriesAndSeachBar() {
  const [getActiveCategoryMenu, setActiveCategoryMenu] = useState(false);

  const [getProducts, setProducts] = useState<IProduct[]>([]);

  const [getMobileMenuActive, setMobileMenuActive] = useState(false);

  const router = useRouter();
  const filterBarContext = useFilterBar();

  useEffect(() => {
    if (process.browser) {
      const body = document.getElementById("root");

      if (getMobileMenuActive) body.style.overflow = "hidden";
      else body.style.overflow = "initial";
    }
  }, [getMobileMenuActive]);

  function debounceFetchSearchProducts(productTitle: string) {
    filterBarContext.setSearchBarText(productTitle);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(async () => {
      try {
        if (filterBarContext.getSearchBarText.length > 2) {
          // Ajustar a consulta GraphQL aqui para buscar por registros que correspondam ao texto da busca
          const response = await api.post("", {
            query: `
              { 
                table_records(
                  table_id: 303926833, 
                  search: {
                    operator: or,
                    conditions: [{field: "nome", value: "${filterBarContext.getSearchBarText}", strategy: contains}]
                  }
                ) { 
                  edges { 
                    node { 
                      id 
                      record_fields { 
                        name 
                        value 
                      } 
                    } 
                  } 
                } 
              }`,
          });

          // Processar a resposta e ajustar conforme necessário para o seu estado
          const products = response.data.data.table_records.edges.map(
            (edge) => ({
              // Ajuste conforme a estrutura dos seus dados
              id: edge.node.id,
              nome: edge.node.record_fields.find(
                (field) => field.name === "nome"
              ).value,
              // Adicione mais campos conforme necessário
            })
          );

          setProducts(products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error(error);
        alert("Erro ao buscar produtos");
      }
    }, 500);
  }

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    clearTimeout(timeoutId);
    setProducts([]);

    if (String(filterBarContext.getSearchBarText).length > 0) {
      setMobileMenuActive(false);

      delete router.query.categoryId;
      delete router.query.category;

      router.push({
        pathname: "/search",
        query: {
          ...router.query,
          page: 1,
          title: filterBarContext.getSearchBarText,
        },
      });
    }
  }

  function handleCategorySearch(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    category: ICategory
  ) {
    event.stopPropagation();

    setActiveCategoryMenu(false);

    delete router.query.title;

    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        categoryId: category.id,
        page: 1,
        category: String(category.name).split(" ").join("-"),
      },
    });
  }

  function categoryTree() {
    const firstLevels = filterBarContext.getCategories.filter(
      (item) => !item.parent_id
    );

    return (
      <CategoryDropdownMenu>
        <ClickAwayListener onClickAway={() => setActiveCategoryMenu(false)}>
          <ul>
            <li
              className={`category-menu ${
                getActiveCategoryMenu ? "active" : ""
              }`}
              onClick={() => setActiveCategoryMenu(!getActiveCategoryMenu)}
              data-testid="category-menu"
            >
              <p>
                Categorias <FaCaretDown />
              </p>
              <ul data-testid="first-level-categories">
                {firstLevels.map((firstLevel) => buildCategoryTree(firstLevel))}
              </ul>
            </li>
          </ul>
        </ClickAwayListener>
      </CategoryDropdownMenu>
    );
  }

  function buildCategoryTree(category: ICategory) {
    const children = filterBarContext.getCategories.filter(
      (child) => child.parent_id == category.id
    );

    let hasChildren = false;

    if (children.length > 0) hasChildren = true;

    return (
      <li
        key={category.id}
        className={`${hasChildren ? "has-children" : ""}`}
        onClick={(event) => handleCategorySearch(event, category)}
        data-testid="category-children"
      >
        <p>
          {category.name} {hasChildren && <FaCaretRight />}
        </p>
        {hasChildren && (
          <ul>{children.map((child) => buildCategoryTree(child))}</ul>
        )}
      </li>
    );
  }

  function SearchBar() {
    return (
      <SearchBarForm onSubmit={handleSearch}>
        <div className="search-container">
          <h1>
            Encontre todos os equipamentos agrícolas e máquinas pesadas que você
            precisa
          </h1>
          <div className="input-button-container">
            <input
              type="text"
              data-testid="search-bar"
              placeholder="O que você está procurando?"
              value={filterBarContext.getSearchBarText}
              onChange={(event) =>
                debounceFetchSearchProducts(event.target.value)
              }
            />
            <button type="submit" data-testid="search-bar-button">
              <FaSearch />
              Buscar
            </button>
          </div>
        </div>

        <ClickAwayListener onClickAway={() => setProducts([])}>
          <ul className="dropdown-search">
            {getProducts.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/${product.id}?product=${String(product.nome)
                    .split(" ")
                    .join("-")}`}
                >
                  <a onClick={() => setMobileMenuActive(false)}>
                    <div className="img-container">
                      {product.imagens.length > 0 ? (
                        <img
                          src={`${process.env.BACKEND_URL}/uploads/${product.imagens[0]}`}
                          alt={product.nome}
                        />
                      ) : (
                        <img src="/images/img-n-disp.png" alt="sem imagem" />
                      )}
                    </div>
                    <span className="title">{product.nome}</span>
                    <span className="price">
                      <span>R$&nbsp;</span>
                      {product.preco}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ClickAwayListener>
      </SearchBarForm>
    );
  }

  return (
    <Container>
      {getMobileMenuActive && (
        <MobileMenu
          setMobileMenuActive={setMobileMenuActive}
          searchBar={SearchBar}
        />
      )}

      <div className="limit-center">
        <div className="category-and-searchbar">
          {categoryTree()}

          {SearchBar()}

          <span></span>
        </div>

        {/* <div
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
        </div> */}

        <div className="mobile-menu">
          <button type="button" onClick={() => setMobileMenuActive(true)}>
            <FaBars size={30} />
          </button>
        </div>
      </div>
    </Container>
  );
}

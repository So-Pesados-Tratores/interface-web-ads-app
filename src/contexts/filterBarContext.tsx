import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface IProduct {
  id: string;
  nome: string;
  categoria: string;
  horas_trabalhadas: string;
  descricao: string;
  imagens: string[]; // Supondo que você vai processar o JSON para um array
  preco: string;
}

interface IProps {
  children: React.ReactNode;
}

type CategoryType = {
  id: string;
  name: string;
};

interface IUseFilterBar {
  getSearchBarText: string;
  setSearchBarText: (text: string) => void;
  getCategories: CategoryType[];
  setCategories: (categories: CategoryType[]) => void;
  products: IProduct[]; // Adiciona o estado dos produtos
  setProducts: (products: IProduct[]) => void; // Adiciona a função para atualizar os produtos
}

const Context = createContext<IUseFilterBar>({} as IUseFilterBar);

export function FilterBarContextProvider({ children }: IProps) {
  const [getSearchBarText, setSearchBarText] = useState("");
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (router.route === "/" || router.query.categoryId) {
      setSearchBarText("");
    }
  }, [router.route, router.query]);

  return (
    <Context.Provider
      value={{
        getSearchBarText,
        setSearchBarText,
        getCategories: categories,
        setCategories,
        products, // Passa o estado dos produtos
        setProducts, // Passa a função para atualizar os produtos
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useFilterBar() {
  const context = useContext(Context);
  return context;
}

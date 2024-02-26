import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../services/api"; // Ajuste o caminho conforme necessário

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
  setCategories: (categories: CategoryType[]) => void; // Adicionada a função de atualização
}

const Context = createContext<IUseFilterBar>({} as IUseFilterBar);

export function FilterBarContextProvider({ children }: IProps) {
  const [getSearchBarText, setSearchBarText] = useState("");
  const [categories, setCategories] = useState<CategoryType[]>([]);

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
        getCategories: categories, // Garanta que está passando o estado
        setCategories, // Adicione a função ao contexto
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

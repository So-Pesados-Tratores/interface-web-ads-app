import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../services/api"; // Ajuste o caminho conforme necessário

interface IProps {
  children: React.ReactNode;
}

export interface ICategory {
  id: string; // ID agora é uma string, pois é o que o GraphQL geralmente retorna
  name: string;
  // Removido parent_id pois não parece relevante para a nova fonte de dados
}

interface IUseFilterBar {
  getSearchBarText: string;
  setSearchBarText: React.Dispatch<React.SetStateAction<string>>;
  getCategories: ICategory[];
}

const Context = createContext<IUseFilterBar>({} as IUseFilterBar);

export function FilterBarContextProvider({ children }: IProps) {
  const [getSearchBarText, setSearchBarText] = useState("");
  const [getCategories, setCategories] = useState<ICategory[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (router.route === "/" || router.query.categoryId) {
      setSearchBarText("");
    }
  }, [router.route, router.query]);

  async function fetchCategories() {
    try {
      // Agora usamos o módulo 'api' para fazer a solicitação
      const response = await api.post("", {
        // Uma string vazia como URL, pois o baseURL já está definido no módulo 'api'
        query: `{ table_records(table_id: 303926833) { edges { node { id record_fields { name value } } } } }`,
      });

      const categories = response.data.data.table_records.edges.map(
        (edge: any) => ({
          id: edge.node.id,
          // Adaptar conforme necessário para mapear os campos específicos de cada categoria
          name: edge.node.record_fields.find(
            (field: any) => field.name === "NOME"
          ).value,
          // Adicione mais campos aqui conforme necessário
        })
      );

      setCategories(categories);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  return (
    <Context.Provider
      value={{
        getSearchBarText,
        setSearchBarText,
        getCategories,
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

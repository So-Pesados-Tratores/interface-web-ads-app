import axios from 'axios';

// Definição das interfaces para os tipos de dados
interface RecordField {
  name: string;
  value: string;
}

interface ProductNode {
  id: string;
  record_fields: RecordField[];
}

interface ProductEdge {
  node: ProductNode;
}

interface ProductData {
  table_records: {
    edges: ProductEdge[];
  };
}

interface ApiResponse {
  data: ProductData;
}

const API_URL = 'https://api.pipefy.com/graphql';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MDY0Njc5ODksImp0aSI6ImVjMzc0YjhjLTE4MWYtNDYyZi05OWYxLTE0NzhiNGUwNmYwMyIsInN1YiI6MzA0MjY2ODc3LCJ1c2VyIjp7ImlkIjozMDQyNjY4NzcsImVtYWlsIjoibWF0cGllcnJvNTcwQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAzMTQ1NjQsInNjb3BlcyI6W119LCJpbnRlcmZhY2VfdXVpZCI6bnVsbH0.n2HDUCxk42866DTMvqNsZcgXu-TtPwp5Vxx1A8DXiw8YpsyQkYJlGBidbFuoIgdiIhz7c4lDdBRUNZoH8j2VIg'; // Substitua pelo seu token real

// Função para buscar produtos
export const fetchProducts = async (): Promise<ApiResponse | null> => {
  try {
    const response = await axios.post(API_URL, {
      query: "{ table_records(table_id: 303913063) { edges { node { id record_fields { name value } } } } }"
    }, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': AUTH_TOKEN
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return null;
  }
};

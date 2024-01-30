import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api";

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

function App() {
  const [products, setProducts] = useState<ProductEdge[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchProducts();
      if (response && response.data) {
        setProducts(response.data.table_records.edges);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((productEdge) => (
          <li key={productEdge.node.id}>
            <h2>Produto {productEdge.node.id}</h2>
            <ul>
              {productEdge.node.record_fields.map((field) => (
                <li key={field.name}>
                  {field.name}: {field.value}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

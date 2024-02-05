const axios = require("axios");

async function fetchProducts() {
  const query = `{
    table_records(table_id: 303926833) {
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
  }`;

  try {
    const response = await axios.post(
      "https://api.pipefy.com/graphql",
      {
        query: query,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PIPEFY_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Processar a resposta para obter os produtos
    return response.data.data.table_records.edges.map((edge) => {
      const fields = edge.node.record_fields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {});

      return {
        id: edge.node.id,
        ...fields,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

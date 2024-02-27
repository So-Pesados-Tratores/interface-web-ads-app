import api from "./api";

export async function buscarProdutosAtualizados() {
    const query = `
        query {
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
        }
    `;

    try {
        const response = await api.post('', { query });
        const produtosAtualizados = await Promise.all(response.data.data.table_records.edges.map(async edge => {
            const campos = {};

            for (const field of edge.node.record_fields) {
                // Lógica para processar campos não-IMAGENS
                campos[field.name] = field.value;

                // Se o campo for 'IMAGENS', processa as URLs
                if (field.name === 'IMAGENS') {
                    try {
                        const urlsImagens = JSON.parse(field.value);
                        if (Array.isArray(urlsImagens)) {
                            campos[field.name] = await Promise.all(urlsImagens.map(renovarURL));
                        }
                    } catch (error) {
                        console.error('Erro ao processar URLs de imagens', error);
                        campos[field.name] = field.value;
                    }
                }
            }

            return {
                id: edge.node.id,
                campos
            };
        }));
        console.log('Produtos atualizados:', produtosAtualizados);
        return produtosAtualizados;
    } catch (error) {
        console.error('Erro ao buscar produtos atualizados:', error);
        throw error;
    }
}

async function renovarURL(url) {
    const novaUrl = `/api/image-proxy?url=${encodeURIComponent(url)}`;
    return novaUrl;
}

import styled from 'styled-components';

export const Container = styled.section`
    min-height: 50rem;
    padding: 1.25rem;
    background-color: #FFFFFF; // Usando a cor de fundo branca da paleta

    div.product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); // Isso criará 3 colunas de igual largura
        gap: 1.25rem; // Espaço entre os cards
        justify-items: center;
        align-items: start; // Isso garante que os cards alinhem no topo mesmo com alturas diferentes

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, 1fr); // Em telas menores, mostra apenas 2 cards por linha
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr; // Em telas ainda menores, mostra apenas 1 card por linha
        }
    }

    .section-title {
        margin: 2rem 0;
        color: #03243F; // Atualizando a cor do título para a paleta fornecida
        font-size: 1.5rem;
        text-align: center;
        font-weight: bold;
    }
`;

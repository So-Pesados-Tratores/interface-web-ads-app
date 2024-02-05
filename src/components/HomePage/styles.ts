import styled from 'styled-components';

export const Container = styled.section`
    min-height: 50rem;

    div.product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Isso permite uma melhor adaptação ao espaço disponível
        gap: 1.25rem; // Aumenta o espaço entre os cartões
        padding: 1.25rem;

        justify-items: center;
    }

    .section-title {
        margin: 2rem 0; // Aumenta a margem superior e inferior para mais espaço ao redor dos títulos
        color: #d7b88a; // Cor da paleta fornecida
        font-size: 1.5rem; // Aumenta o tamanho da fonte para títulos de seção
        text-align: center; // Centraliza os títulos
        font-weight: bold; // Deixa os títulos em negrito para destaque
    }

    @media (max-width: 1110px) {
        div.product-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Ajusta para menos colunas conforme o espaço disponível diminui
        }
    }

    @media (max-width: 855px) {
        div.product-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Ajusta para ainda menos colunas
        }
    }

    @media (max-width: 570px) {
        padding: 1rem; // Mantém algum padding para não colar os cartões nas bordas da tela
        div.product-grid {
            grid-template-columns: 1fr; // Apenas uma coluna em telas muito pequenas
        }
    }
`;

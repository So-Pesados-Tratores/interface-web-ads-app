import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: row; // Elementos lado a lado em telas grandes
    align-items: flex-start; // Alinha os itens ao início
    gap: 2rem; // Espaço entre os elementos
    padding: 1rem;
    background: #FFFFFF;
    color: #03243F;

    @media (max-width: 1120px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem 0.5rem; // Reduz o padding em telas pequenas
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        color: #03243F;
        margin: 1rem 0;
        @media (max-width: 768px) {
            font-size: 1.5rem; // Diminui o tamanho da fonte em telas menores
            margin: 0.5rem 0;
        }
    }

    .description, .category, .worked-hours, .price {
        text-align: justify;
        padding: 1rem;
        font-size: 1rem;
        background: #FFFFFF;
        border: 1px solid #9A6C55;
        margin: 1rem 0;
        max-width: 600px;
        width: 100%; // Garante que os elementos ocupem a largura total em telas menores
        box-sizing: border-box; // Garante que padding não adicione largura extra
        @media (max-width: 768px) {
            padding: 0.5rem;
            font-size: 0.9rem; // Ajusta o tamanho da fonte
            margin: 0.5rem 0;
        }
    }
`;

export const SliderContainer = styled.div`
    flex: 1;
    max-width: 600px;
    width: 100%; // Garante que o slider se ajuste à largura do contêiner
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%; // Permite que os detalhes do produto se ajustem à largura do contêiner
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

export const InterestButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #03243F;
    color: #FFFFFF;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: auto; // Botão com largura automática em telas grandes
    @media (max-width: 768px) {
        width: 100%; // Botão ocupa toda a largura em telas pequenas
        padding: 0.5rem 1rem; // Ajusta o padding para telas menores
    }
    &:hover {
        background-color: #9A6C55;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(50, 50, 93, 0.5);
    }
`;
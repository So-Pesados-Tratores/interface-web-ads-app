import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: row; // Elementos lado a lado
    align-items: flex-start; // Alinha os itens ao início
    gap: 2rem; // Espaço entre os elementos
    padding: 1rem;
    background: #FFFFFF;
    color: #03243F;

    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        color: #03243F;
        margin: 1rem 0;
    }

    div.img-slider-container,
    div.description,
    div.html-body,
    div.category,
    div.worked-hours,
    div.price {
        padding: 0.625rem;
        background: ${props => props.theme.secondary};
        border-radius: 10px;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    div.img-slider-container {
        width: 100%;
        max-width: 600px;
        margin-bottom: 1rem;
    }

    .description, .category, .worked-hours, .price {
        text-align: justify;
        padding: 1rem;
        font-size: 1rem;
        background: #FFFFFF;
        border: 1px solid #9A6C55;
        margin: 1rem 0;
        max-width: 600px;
    }

    div.html-body {
        grid-area: html-body;
        width: 100%;
        max-width: 43.75rem;
        height: 100%;
        overflow-x: hidden;
        padding-top: 1.25rem;
    }

    @media (max-width: 768px) {
        flex-direction: column; // Empilha os elementos em dispositivos menores
        align-items: center;
    }

    @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1,
        div.img-slider-container, 
        div.description, 
        div.html-body,
        div.category,
        div.worked-hours,
        div.price {
            width: 100%;
            max-width: 43.75rem;
            text-align: center;
        }
    }
`;

export const SliderContainer = styled.div`
    flex: 1; // Ocupa 1/2 do espaço disponível
    max-width: 600px;
`;

export const ProductDetails = styled.div`
    flex: 1; // Ocupa 1/2 do espaço disponível
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    max-width: 600px;
`;

export const InterestButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #03243F; // Azul escuro para o botão
  color: #FFFFFF; // Texto branco
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9A6C55; // Marrom ao passar o mouse
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(50, 50, 93, 0.5); // Para acessibilidade
  }
`;
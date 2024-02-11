import styled from 'styled-components';

export const Container = styled.section`
    min-height: 50rem;
    padding: 1rem;
    background: #FFFFFF;
    color: #03243F;
    display: flex;
    flex-direction: column;
    align-items: center;

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

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px; // Ajuste conforme necessário
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

export const InterestButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4CAF50; // Escolha uma cor que combine com seu design
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; // Um tom um pouco mais escuro para o hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5); // Adiciona um foco visível para acessibilidade
  }
`;
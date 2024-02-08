import styled from 'styled-components';

export const Container = styled.section`
    min-height: 50rem;
    padding: 1rem; // Espaçamento uniforme
    background: #FFFFFF; // Cor de fundo clara para todo o layout da página
    color: #03243F; // Cor escura para o texto
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        color: #03243F; // Título escuro para destaque
        margin: 1rem 0; // Espaçamento vertical do título
    }

    div.img-slider-container,
    div.description,
    div.html-body {
        padding: 0.625rem;
        background: ${props => props.theme.secondary};
    }

    div.img-slider-container {
        width: 100%;
        max-width: 600px; // Tamanho máximo para a imagem
        margin-bottom: 1rem; // Espaçamento abaixo do slider
    }

    .description {
        text-align: justify;
        padding: 1rem;
        font-size: 1rem;
        background: #FFFFFF; // Mantém o fundo claro para a descrição
        border: 1px solid #9A6C55; // Adiciona borda com cor da paleta
        border-radius: 10px; // Bordas arredondadas para um visual suave
        margin: 1rem 0; // Espaçamento vertical
        max-width: 600px; // Largura máxima para manter a legibilidade
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Sombra leve para profundidade
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
        div.html-body  {
            width: 100%;
            max-width: 43.75rem;
            text-align: center;
        }
    }
`;

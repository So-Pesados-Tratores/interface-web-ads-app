import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 15rem; // Reduzindo a largura máxima do cartão
  min-height: 18rem; // Reduzindo a altura mínima para acomodar menos conteúdo
  border: 0.1875rem solid #d7b88a; // Cor da borda da sua paleta
  border-radius: 0.3125rem;
  overflow: hidden;
  background: #efebe4; // Cor de fundo clara da paleta
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Sombra mais sutil

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit; // Previne cores padrão de links
  }

  div.product-info {
    padding: 0.5rem; // Espaçamento interno para o conteúdo do cartão
  }

  a,
  div.product-info {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  span.discount {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 5;

    background: #41773A;
    padding: 0.625rem 0.9375rem;
    font-size: 1.25rem;
  }

  span.lacking {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 5;

    background: #a32e39;
    padding: 0.625rem 0.9375rem;
    font-size: 1.25rem;
  }

  figure.img-container {
    height: auto;
    line-height: 0;
  }

  figure.img-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .title-price {
    flex: 1; // Faz a seção do título e preço ocupar todo o espaço vertical disponível
    display: flex;
    flex-direction: column;
    justify-content: space-around; // Espaçamento igual entre título e preço
  }

  div.title-container {
    text-align: center; // Centraliza o título
  }

  div.title-container span.title {
    font-size: 1rem; // Tamanho da fonte para o título
    color: #d2a869; // Cor da paleta para o título
  }

  div.price-and-discount {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.price-and-discount span.price {
    font-size: 1.25rem; // Tamanho da fonte maior para o preço
    font-weight: bold;
    color: #f09c08; // Cor da paleta para o preço
  }

  div.price-and-discount span.original-price {
    color: #a79972; // Cor mais suave da paleta para o preço original
  }

  button {
    cursor: pointer;
    height: 3.75rem;
    border: 0;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    background: ${props => props.theme.success};
    color: ${props => props.theme.color};

    font-size: 1.25rem;

    transition: background-color .5s;

    &:hover {
      background: ${props => props.theme.successActive};
    }

    &:active {
      background: ${props => props.theme.success};
    }

    &:disabled {
      background: ${props => props.theme.danger};
      cursor: not-allowed;
    }
  }
`;

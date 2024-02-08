import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 250px; // Define a largura do cartão para ser mais compacto
  min-height: 300px; // Altura mínima para manter a consistência
  border: 1px solid #9A6C55; // Cor de borda sutil
  border-radius: 10px; // Bordas arredondadas
  overflow: hidden;
  background: #FFFFFF; // Fundo branco para o cartão
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); // Sombra suave para profundidade
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza os elementos no eixo cruzado
  cursor: pointer;
  padding: 15px; // Espaçamento interno para o conteúdo do cartão
  gap: 10px; // Espaço entre os elementos internos

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra mais pronunciada no hover
  }

  h2 {
    font-family: 'Heebo', sans-serif; // Aplica a fonte 'Heebo' ao título
    color: #03243F; // Cor do título
    font-size: 1rem; // Tamanho da fonte do título
    margin-bottom: 5px; // Margem abaixo do título
    text-align: center; // Centraliza o texto do título
  }

  div {
    font-family: 'Heebo', sans-serif; // Aplica a fonte 'Heebo' ao texto
    color: #03243F; // Cor do texto
    font-size: 0.85rem; // Tamanho da fonte para o texto
    text-align: center; // Centraliza o texto das informações
    width: 100%; // Garante que o texto ocupe toda a largura disponível
  }

  img {
    width: 100%; // Largura da imagem ajustada para cobrir a largura do cartão
    height: 140px; // Altura fixa para a imagem
    object-fit: cover; // Faz com que a imagem cubra o espaço disponível, mantendo sua proporção
    margin-top: 10px; // Espaço acima da imagem
    border-radius: 5px; // Bordas arredondadas para a imagem
  }
`;

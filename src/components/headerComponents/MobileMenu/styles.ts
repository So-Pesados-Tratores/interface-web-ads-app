import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000; // Certifique-se de que o menu sobreponha outros conteúdos
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    .menu-header {
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
    }

    .menu-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    // Aumentar o tamanho da logo e ajustar a margem
    a img {
        width: 120px; // Aumentar o tamanho da logo
        margin: 1rem auto; // Diminuir a margem para aproximar das categorias
    }

    // Centralizar as categorias e ajustar a largura
    .category-dropdown {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        button {
            margin: 0.5rem auto; // Reduzir a margem vertical e centralizar horizontalmente
            width: 60%; // Reduzir a largura dos botões para que não fiquem tão esticados
            // Adicione estilos adicionais aqui, se necessário
        }
    }
`;


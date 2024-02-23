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

    // Estilize o botão de categorias conforme necessário
    button {
        margin: 20px 0; // Exemplo de espaçamento
        // Adicione mais estilos aqui
    }

    // Estilos para a logo
    a img {
        max-width: 120px;
        margin: 20px 0;
    }
`;


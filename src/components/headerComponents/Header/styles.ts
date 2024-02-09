import styled from 'styled-components';

export const Container = styled.div`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 6.25rem; // Altura do header
        background: #03243F; // Cor de fundo do header
        padding: 0 1rem; // Padding horizontal
    }

    div.limit-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%; // Ocupa toda a largura disponível
    }

    // Logo
    a.logo {
        display: flex;
        align-items: center;
        img {
            height: 5rem; // Ajuste conforme necessário para o logo
            width: auto; // Mantém a proporção do logo
        }
    }

    // Seção Comprar e Categorias
    .buy-section, .category-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1; // Permite que os itens cresçam igualmente se necessário
    }
    
    // Ajustes para links e botões para garantir a cor do texto e outros estilos
    a, button {
        color: #FFF; // Cor da fonte
        // Adicione qualquer outro estilo necessário
    }
`;


export const SearchBarForm = styled.form<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${({ isActive }) => (isActive ? 'lightgrey' : 'white')};
    width: auto; // Ajusta a largura conforme necessário, ou use 100% se quiser que ocupe todo o espaço disponível
    margin: 0; // Ajusta conforme necessário

    input {
        flex: 1; // Permite que o input ocupe a maior parte do espaço
        height: 40px; // Ajusta conforme necessário
        padding: 0 10px;
        border: 2px solid #03243F;
        border-right: none; // Remove a borda direita para se conectar visualmente com o botão
        border-radius: 5px 0 0 5px; // Arredonda os cantos esquerdos
        color: #FFF; // Define a cor do texto dentro da caixa de texto
    }

    button {
        height: 44px; // Ajusta a altura para corresponder à caixa de texto, considerando a borda
        width: 50px; // Ajusta a largura conforme necessário
        background-color: #9A6C55; // Cor de fundo do botão
        border: 2px solid #03243F; // Cor da borda
        border-radius: 0 5px 5px 0; // Arredonda os cantos direitos
        color: #FFF; // Define a cor do ícone/texto dentro do botão
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CategoryDropdownMenu = styled.div`
    margin-top: 0.5rem; // Ajuste conforme necessário

    ul {
        list-style: none;
        z-index: 10;
        position: relative;
    }
                
    ul li { 
        width: 12.5rem; 
        height: 2.5rem; 
        background: #03243F;
        color: #FFF;
        float: left; 
        line-height: 2.5rem; 
        font-size: 1.25rem;
        text-align: center; 
        user-select: none; 
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center; // Isso centraliza o texto vertical e horizontalmente.

    }

    ul li.category-menu {
        border-radius: 0.3125rem;
    }

    ul li.category-menu.active {
        border-radius: 0.3125rem 0.3125rem 0 0;
        border-bottom: 1px solid ${props => props.theme.secondary};
    }

    ul li p {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
                
    ul li:hover { 
        background: ${props => props.theme.secondary};
    }

    ul li:active { 
        background: ${props => props.theme.primary};
    }

    li + li {
        border-top: 1px solid ${props => props.theme.secondary};
    } 

    li > ul {
        display: none;
    }

    li.active > ul {
        display: block;
    }


`;
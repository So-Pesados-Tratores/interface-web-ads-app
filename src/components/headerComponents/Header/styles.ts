import styled from 'styled-components';

export const Container = styled.div`
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 30rem; // Altura aumentada do header
        background-image: url('/images/backgroundHeader.png'); // Certifique-se de que o caminho está correto
        background-size: cover;
        background-position: center;
        padding: 0; // Removido o padding horizontal
        position: relative;
        width: 100%; // Garante que ocupa toda a largura
        margin: 0 auto; // Remove margens horizontais
    }

    h1.title {
        font-size: 2.5rem; // Tamanho da fonte do título
        color: #FFFFFF; // Cor do texto
        text-align: center; // Alinha o texto ao centro
        margin: 1rem 0; // Espaçamento acima e abaixo do título
    }

    .limit-center {
        width: 100%; // Ocupa toda a largura disponível
    }

    a.logo {
        position: absolute;
        top: 1rem;
        left: 1rem;
        img {
        height: 150px; // Tamanho da logo ajustado
        width: auto; // Mantém proporção da imagem
        }
    }

    // Seção Comprar e Categorias
    .category-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1; // Permite que os itens cresçam igualmente se necessário
    }
    
    // Ajustes para links e botões para garantir a cor do texto e outros estilos
    a, button {
        color: #FFF; // Cor da fonte
        text-decoration: none;
    }

    @media (max-width: 768px) {
        .mobile-menu {
            display: block;
        }

        .category-and-searchbar, .logo, .title {
            display: none;
        }

        // Estilos para a barra de pesquisa na versão móvel
        SearchBarForm {
            width: 80%;
            margin: auto;
        }
    }

    // Estilos para telas maiores que 768px
    @media (min-width: 769px) {
        .mobile-menu {
            display: none;
        }

        .category-and-searchbar, .logo, .title {
            display: flex;
        }
    }
`;


export const SearchBarForm = styled.form<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center; // Centraliza a barra de pesquisa horizontalmente
    background-color: ${({ isActive }) => (isActive ? 'lightgrey' : 'white')};
    width: 50%; // Ajuste para 50% da largura do header ou conforme necessário
    margin: auto; // Centraliza a barra de pesquisa verticalmente e horizontalmente

    input {
        flex: 1; // O input ocupa todo o espaço disponível exceto o botão
        height: 40px; // Ajusta conforme necessário
        padding: 0 10px;
        border: 2px solid #03243F;
        border-right: none; // Remove a borda direita para se conectar visualmente com o botão
        border-radius: 5px 0 0 5px; // Arredonda os cantos esquerdos
        color: #03243F; // Cor do texto
    }

    button {
        height: 44px; // Ajusta a altura para corresponder à caixa de texto, considerando a borda
        width: 50px; // Ajusta a largura conforme necessário
        background-color: #9A6C55; // Cor de fundo do botão
        border: 2px solid #03243F; // Cor da borda
        border-radius: 0 5px 5px 0; // Arredonda os cantos direitos
        color: #FFF; // Cor do ícone/texto dentro do botão
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        SearchBarForm {
            width: 80%; // Ocupa mais espaço em telas menores
        }
    }
`;

export const CategoryDropdownMenu = styled.div`
    justify-content: space-around; /* Espalha os itens uniformemente */
    padding: 0.5rem 0; /* Ajuste conforme necessário */
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente para as categorias */

    .category-dropdown li {
        display: inline-block; /* Muda para inline-block para que fiquem em linha */
        margin: 0 1rem; /* Ajuste conforme necessário */
        padding: 0.5rem 1rem; /* Ajuste conforme necessário */
        border-radius: 0.25rem; /* Bordas arredondadas */
        background-color: transparent; /* Remove o fundo sólido */
        color: #FFF; /* Texto branco */
        text-transform: uppercase; /* Opcional: texto em maiúsculas */
        font-weight: bold; /* Opcional: texto em negrito */
    }

    .category-dropdown li:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Fundo mais claro ao passar o mouse */
    }

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


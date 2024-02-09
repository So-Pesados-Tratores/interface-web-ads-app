import styled from 'styled-components';

export const Container = styled.nav`

    width: 100%;
    height: auto; /* Ajusta a altura automaticamente */
    padding: 2rem 0; /* Espaço vertical dentro do container */
    background: url('/images/backgroundHeader.png') no-repeat center center;
    background-size: cover; /* A imagem de fundo cobre todo o espaço do cabeçalho */

    div.limit-center {
        max-width: 68.75rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column; /* Empilha os elementos verticalmente */
        justify-content: center;
        align-items: center;
    }

    div.limit-center .category-and-searchbar {
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // div.limit-center > div.switch-container {
    //     height: 1.75rem;
    // }

    div.mobile-menu {
        display: none !important;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    div.mobile-menu button {
        width: 3.125rem;
        height: 2.5rem;
        margin-right: 0.3125rem;
        border: 0;
        border-radius: 0.25rem;
        background: ${props => props.theme.primary};
        color: ${props => props.theme.color};
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    // div.react-switch-bg svg {
    //     margin: 0.25rem 0.1875rem;
    // }

    @media (max-width: 650px) {
        div.limit-center .category-and-searchbar {
            display: none !important;
        }

        div.limit-center div.mobile-menu {
            display: flex !important;
        }

        div.limit-center {
            padding-left: 0.625rem;
        }
    }
`;

export const SearchBarForm = styled.form`
    
    position: relative;
    width: 100%;
    max-width: 50rem;
    margin-top: 1rem; // Adicione um espaço entre o menu de categorias e a barra de pesquisa
    margin-bottom: 1rem; // Adicione um espaço abaixo da barra de pesquisa

    .search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url('/public/images/backgroundHeader.jpg') no-repeat center center; 
        background-size: cover; // Isso fará com que a imagem de fundo cubra todo o espaço disponível
        padding: 1rem; // Ajuste o padding conforme necessário
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        display: flex;
        width: 100%;
        align-items: center; // Garante que o texto e os botões estejam alinhados verticalmente.
    }

    .input-button-container {
        display: flex;
        width: 100%;
        align-items: center;
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #02395c;
    }

    input {
        flex 1;
        
        height: 3rem;
        padding: 0.5rem;
        border: none;
        font-size: 1.25rem;
        border-top-left-radius: 0.3125rem;
        border-bottom-left-radius: 0.3125rem;
        text-align: center;
    }


    button {
        width: 8rem;
        height: 3rem;

        background-color: #FA9F00;
        color:#02395C;

        border: none;
        cursor: pointer;
        border-top-right-radius: 0.3125rem;
        border-bottom-right-radius: 0.3125rem;

        font-size: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    FaSearch {
        margin-right: 100px;
    }

    ul.dropdown-search {
        position: absolute;
        top: 2.8125rem;
        z-index: 10;

        width: 100%;
        background: #eee;
        list-style: none;
    }

    ul.dropdown-search li {
        color: #111;
    }
    
    ul.dropdown-search li + li {
        margin-top: 0.125rem;
    }

    ul.dropdown-search li a {
        cursor: pointer;

        display: flex;
        justify-content: space-between;
    }

    ul.dropdown-search li div.img-container {
        width: 6.25rem;
        height: 2.8125rem;
    }

    ul.dropdown-search li img {
        width: auto;
        max-width: 2.8125rem;
        height: 2.8125rem;

        object-fit: cover;
    }

    ul.dropdown-search li span.title {
        width: 100%;
        height: 2.8125rem;
        padding: 0.625rem 0.3125rem;
        font-size: 1.25rem;
        line-height: 1.875rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    ul.dropdown-search li span.price {
        width: 12.5rem;
        font-size: 1.25rem;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    li span.price > span {
        font-size: 0.9375rem;
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
        background: ${props => props.theme.primary};
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

    li.has-children > ul {
        position: absolute; 
        left: 12.5rem; 
        top: 0; 
    }

    li.active > ul {
        display: block;
    }

    li.has-children:hover > ul { 
        display: block;
    }
`;

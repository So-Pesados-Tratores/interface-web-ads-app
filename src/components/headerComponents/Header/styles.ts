import styled from 'styled-components';

export const Container = styled.div`
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 30rem;
        background-image: url('/images/backgroundHeader.png');
        background-size: cover;
        background-position: center;
        padding: 0;
        position: relative;
        width: 100%;
        margin: 0 auto;
    }

    .mobile-menu {
        display: none; /* Esconde por padrão */
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
        z-index: 200; /* Certifique-se de que esteja acima de outros elementos */
        
        button {
            background: none;
            border: none;
            cursor: pointer;
        }
    }

    .limit-center {
        display: flex;
        flex-direction: column; // Organiza o conteúdo em coluna para o alinhamento correto
        align-items: center; // Centraliza os elementos filhos horizontalmente
        justify-content: space-between; // Distribui o espaço verticalmente
        width: 100%;
        max-width: 1200px; // Define uma largura máxima para o conteúdo central
        margin: 0 auto; // Centraliza o .limit-center dentro do header
    }

    h1.title {
        font-size: 2.0rem;
        color: #FFFFFF;
        text-align: center;
        margin: 1rem 0;
        font-family: 'Heebo', sans-serif;
    }

    a.logo {
        position: absolute;
        top: 0;
        left: 1rem;
        img {
            height: 150px;
            width: auto;
        }
    }

    .category-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%; // Ocupa toda a largura disponível
        margin-top: 1rem; // Espaço acima do menu de categorias
    }
    
    // Ajustes para links e botões para garantir a cor do texto e outros estilos
    a, button {
        color: #FFF; // Cor da fonte
        text-decoration: none;
    }

    @media (max-width: 768px) {
        /* Ajustes para o botão do menu móvel para garantir sua visibilidade */
        .mobile-menu {
            display: flex; /* Garante que o botão do menu seja visível em telas pequenas */
        }

        /* Oculta elementos que não devem ser exibidos quando o menu móvel está ativo */
        .category-dropdown, .search-bar, .logo, .title, .limit-center {
            display: none;
        }
    }

    /* Quando o menu móvel está ativo, estes estilos sobrescrevem os padrões para adaptar o layout */
    .mobile-menu-active {
        display: block; /* Exibe o container do menu móvel */

        .menu-header, .menu-body {
            display: flex; /* Garante que o cabeçalho e o corpo do menu sejam exibidos */
        }

        .logo, .search-bar, .category-dropdown {
            display: block; /* Garante a visibilidade dos elementos dentro do menu móvel */
        }

        /* Adaptação específica para o searchBar e dropdown dentro do menu móvel */
        .search-bar, .category-dropdown {
            width: 100%; /* Ajusta a largura para preencher o menu móvel */
            padding: 0 20px; /* Adiciona um pouco de padding para não colar nas bordas */
        }
    }
`;


export const SearchBarForm = styled.form<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%; // Aumentando a largura do searchBar
    max-width: 1200px; // Aumentando o limite máximo da largura para telas maiores
    margin: auto; // Centraliza a barra de pesquisa verticalmente e horizontalmente

    input {
        flex: 1; // O input ocupa todo o espaço disponível exceto o botão
        height: 40px; // Ajusta conforme necessário
        width: 400px;
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
        /* Exibe o searchBar dentro do menu móvel */
        display: flex; /* Sobrescreve a regra de ocultação anterior */
        width: 80%; /* Ajusta a largura para caber dentro do menu móvel */
        margin: 10px auto; /* Centraliza e adiciona uma pequena margem */
    }
`;

export const CategoryDropdownMenu = styled.div`
    justify-content: space-around; /* Espalha os itens uniformemente */

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

    @media (max-width: 768px) {
        /* Estilos para exibir o dropdown de categorias dentro do menu móvel */
        display: flex; /* Torna o dropdown visível dentro do menu móvel */
        flex-direction: column; /* Opcional: Ajusta o layout para uma visualização melhor */
        width: 100%; /* Ajusta a largura para usar todo o espaço disponível */
        padding: 10px; /* Adiciona padding para separar os itens das bordas */
    }
`;

export const MobileMenuContainer = styled.div`
    /* Adicione aqui os estilos para o container do MobileMenu, se necessário */
    /* Certifique-se de que este container esteja configurado para cobrir a tela inteira em dispositivos móveis */
`;


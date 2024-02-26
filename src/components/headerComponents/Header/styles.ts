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
        justify-content: center; // Distribui o espaço verticalmente
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
    margin: 20px auto; // Centraliza a barra de pesquisa verticalmente e horizontalmente

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
    display: flex;
    flex-wrap: wrap; // Permite que os itens se alinhem em várias linhas conforme necessário
    gap: 10px; // Espaço entre os botões
    justify-content: center; // Centraliza os botões horizontalmente
    align-items: center; // Centraliza os botões verticalmente
    margin-top: 1rem; // Adiciona espaço acima dos botões

    button {
        padding: 5px 10px;
        font-size: 14px;
        background-color: #03243F; // Cor de fundo dos botões
        color: #FFF; // Cor do texto
        border: none;
        border-radius: 20px; // Bordas arredondadas
        cursor: pointer;
        transition: background-color 0.3s; // Animação de hover
    }

    button:hover {
        background-color: #9A6C55; // Cor de fundo ao passar o mouse
    }

    @media (max-width: 768px) {
        justify-content: start; // Alinha os botões à esquerda em telas pequenas
        overflow-x: auto; // Permite rolagem horizontal se houver muitos botões
        gap: 5px; // Reduz o espaço entre os botões em telas menores
    }
`;

export const MobileMenuContainer = styled.div`
    /* Adicione aqui os estilos para o container do MobileMenu, se necessário */
    /* Certifique-se de que este container esteja configurado para cobrir a tela inteira em dispositivos móveis */
`;


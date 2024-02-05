import styled from 'styled-components';

export const Container = styled.div`

    header {
        height: 6.25rem; // Ajuste a altura conforme necessário
        background: ${props => props.theme.primary};
        display: flex;
        align-items: center; // Isso irá alinhar verticalmente os itens
        justify-content: space-between; // Isso mantém espaço igual entre os itens
        padding: 0 1rem; // Adicione um padding horizontal se necessário
    }

    div.limit-center {
        display: flex;
        align-items: center; // Novamente, isso garante o alinhamento vertical
        justify-content: space-between;
        max-width: 68.75rem;
        margin: 0 auto;
        width: 100%;
    }

    div.limit-center > div.switch-container {
        height: 1.75rem;
    }

    div.react-switch-bg svg {
        margin: 0.25rem 0.1875rem;
    }

    // Estilos comuns para todos os textos
    header a, header button {
        font-size: 1rem; // Exemplo de tamanho de fonte, ajuste conforme necessário
        color: #FFF; // Cor da fonte, ajuste baseado no seu tema
        text-decoration: none; // Remove o sublinhado de links
        padding: 0.5rem 1rem; // Adicione padding para aumentar a área clicável
        display: flex;
        align-items: center;
        height: 100%; // Isso pode ajudar a alinhar verticalmente se os itens tiverem alturas diferentes
    }

    // Estilos específicos para botões
    button.login-button {
        width: auto; // Isso permite que o botão cresça com o conteúdo interno
        height: auto; // Remover altura fixa para permitir o alinhamento com flexbox
        padding: 0.5rem 1rem; // Isso dá ao botão um tamanho clicável adequado
        margin: 0; // Remove a margem que estava deslocando o botão para baixo
        border: none;
        background: transparent;
        font-size: 1rem; // Mantém a consistência com os outros elementos do cabeçalho
        font-weight: bold;
        cursor: pointer;
        color: ${props => props.theme.color};
        display: flex;
        align-items: center;
        justify-content: center; // Centraliza o ícone/texto no botão

        &:disabled {
            background: #ccc; // Indicar visualmente que o botão está desativado (ajuste a cor conforme necessário)
        }
    }

    // header a {
    //     width: fit-content;
    //     height: 5.625rem;
        
    //     align-self: center;
    //     cursor: pointer;
    // }

    header img {
        max-width: 100%;
        height: 5.625rem;
    }

    div.login-cart {
        display: flex;
        align-items: center; // Isso vai alinhar todos os itens filhos verticalmente
        justify-content: space-between;
        width: 100%;
        max-width: 15.625rem;
    }

    div.login {
        width: 100%;
    }

    .dropdown {
        position: relative;
        width: fit-content !important;
    }

    .dropdown span.name {
        width: 9.375rem;
        
        white-space: nowrap;
        overflow: hidden;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #eee;
        color: #111;
        min-width: 10rem;   
        z-index: 10;
        top: 1.375rem;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content p {
        padding: 0.3125rem;
        display: flex;
        align-items: center;
        font-weight: normal;
    }

    .dropdown-content p:hover {
        background: #ddd;
    }

    button.dropdown {
        width: 6.25rem;
        height: 1.25rem;
        margin: 4.375rem 0 0 0;
        border: 0;
        background: transparent;
        font-size: 1.25rem;
        font-weight: bold;
        cursor: pointer;
        color: ${props => props.theme.color};

        display: flex;
        align-items: center;

        &:disabled {
            justify-content: center;
        }
    }
    
    li.user-name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    div.icon {
        margin: 2.1875rem 0.625rem 0 0;
        text-align: center;
    }

    div.cart-number {
        position: absolute;
        margin: 0 0 0 2.5rem;
        background: ${props => props.theme.danger};
        padding: 1px 0.3125rem;
        border-radius: 1.25rem;
        z-index: 20;
    }

    div.cart-number p {
        padding: 0;
        margin: 0;
    }

    @media (max-width: 650px) {
        div.login-cart {
            justify-content: flex-end;
        }

        div.login-cart div.login {
            display: none;
        }
    }

    @media (max-width: 425px) {

        div.login-cart {
            max-width: 10.9375rem;
        }
        /*div.limit-center {
            justify-content: flex-start;
        }

        div.limit-center div.login-cart{
            margin-left: 50px;
        }

        div.login-cart {

        }*/
    }
`;

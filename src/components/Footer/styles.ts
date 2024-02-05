import styled from 'styled-components';

export const NewsletterSection = styled.section`
  background-color: #02243F;
  color: #FBFDFD;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin-left: 20px; // Ajuste conforme necessário
  max-height: 50px; // Ajuste o tamanho conforme necessário
`;

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
`;

export const NewsletterText = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #A47F69; // Cor de destaque para o campo de input
  background-color: #FBFDFD; // Cor de fundo para o campo de input
  color: #02243F; // Cor do texto do input
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #A47F69; // Cor de destaque para o botão
  color: #FBFDFD;
  cursor: pointer;

  &:hover {
    background-color: darken(#A47F69, 10%);
  }
`;

export const NewsletterContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px; // Ajuste conforme necessário
`;


export const MiddleSection = styled.section`
  background-color: #f0f0f0;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  min-width: 150px;
`;

export const ColumnLink = styled.a`
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ColumnTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
`;

export const FooterContainer = styled.footer`
  background-color: #02243F; // Cor principal do fundo
  color: #FBFDFD; // Cor do texto
  text-align: center;
  padding: 20px 0;
`;

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

export const Link = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const SocialIconLink = styled.a`
  color: #FBFDFD; // Cor dos ícones
  margin: 0 10px;
  font-size: 24px;

  &:hover {
    color: #A47F69; // Cor de destaque ao passar o mouse
  }
`;

export const LegalLinks = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const LegalLink = styled.a`
  color: #FBFDFD;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #A47F69;
  }
`;
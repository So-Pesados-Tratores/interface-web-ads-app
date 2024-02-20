import React from "react";
import {
  FooterContainer,
  FooterText,
  Link,
  NewsletterSection,
  NewsletterForm,
  Input,
  SubmitButton,
  NewsletterText,
  MiddleSection,
  Column,
  ColumnLink,
  ColumnTitle,
  Logo,
  NewsletterContent,
  SocialMediaIcons,
  SocialIconLink,
  LegalLinks,
  LegalLink,
} from "./styles";

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("E-mail cadastrado para novidades!");
  };

  return (
    <>
      {/* <NewsletterSection> */}
      {/* <Logo src="/images/logo.png" alt="Logo" /> */}
      {/* <NewsletterContent>
          <NewsletterText>Receba novidades</NewsletterText>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <Input type="email" placeholder="Digite seu e-mail" required />
            <SubmitButton type="submit">Enviar</SubmitButton>
          </NewsletterForm>
        </NewsletterContent> */}
      {/* </NewsletterSection> */}

      {/* <MiddleSection> */}
      {/* <Column>
          <ColumnTitle>Sobre nós</ColumnTitle>
          <ColumnLink href="#">Quem somos</ColumnLink>
          <ColumnLink href="#">Nossa história</ColumnLink>
        </Column> */}

      {/* <Column>
          <ColumnTitle>Contate-nos</ColumnTitle>
          <ColumnLink href="#">Suporte</ColumnLink>
          <ColumnLink href="#">Atendimento</ColumnLink>
        </Column> */}

      {/* <Column>
          <ColumnTitle>Comprar</ColumnTitle>
          <ColumnLink href="#">Produtos</ColumnLink>
          <ColumnLink href="#">Promoções</ColumnLink>
        </Column> */}

      {/* <Column>
          <ColumnTitle>Anuncie aqui</ColumnTitle>
          <ColumnLink href="#">Publicidade</ColumnLink>
          <ColumnLink href="#">Parcerias</ColumnLink>
        </Column> */}

      {/* Aqui você pode adicionar a logo e outros elementos conforme necessário */}
      {/* </MiddleSection> */}
      <FooterContainer>
        {/* <SocialMediaIcons>
          <SocialIconLink href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialIconLink>
          <SocialIconLink href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </SocialIconLink>
        </SocialMediaIcons> */}

        <Logo src="/images/logo.png" alt="Logo" />

        <LegalLinks>
          <LegalLink href="/termos-de-uso">Termos de Uso</LegalLink>
          <LegalLink href="/politica-de-privacidade">
            Política de Privacidade
          </LegalLink>
        </LegalLinks>

        <FooterText>
          © {new Date().getFullYear()} - Desenvolvido por{" "}
          <Link href="https://www.linkedin.com/in/matheuspierro">
            Matheus Ramos de Pierro
          </Link>
        </FooterText>
      </FooterContainer>
    </>
  );
};

export default Footer;

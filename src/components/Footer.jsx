import React from "react";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  margin-top: 100px;
  background-color: #014b7b;
  color: #fff;
  padding: 40px;
  display: flex;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex: 1;
  margin-bottom: 10px;
  background-color: #014b7b;
  padding: 20px 60px;
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const SectionContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    font-size: 0.9rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
  svg {
    font-size: 1.5rem;
    margin-right: 15px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Section>
          <SectionTitle>Categorias</SectionTitle>
          <SectionContent>
            <li>Medicamentos</li>
            <li>Cuidados Pessoais</li>
            <li>Suplementos</li>
            <li>Beleza</li>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Atendimento ao Cliente</SectionTitle>
          <SectionContent>
            <li>Central de Ajuda</li>
            <li>Política de Devolução</li>
            <li>FAQ</li>
            <li>Envio e Entrega</li>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Contato</SectionTitle>
          <ContactInfo>
            <FaMapMarkerAlt />
            <p>Rua ABC, 123 - Cidade</p>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <p>(48) 1234-5678</p>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <p>contato@santefarma.com</p>
          </ContactInfo>
        </Section>

        <Section>
          <SectionTitle>Redes Sociais</SectionTitle>
          <SocialIcons>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </SocialIcons>
        </Section>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

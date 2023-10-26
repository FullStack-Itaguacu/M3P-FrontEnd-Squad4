import React from 'react';
import styled from 'styled-components';
import logo from "../img/logo-pha.png";



const HeaderContainer = styled.div`
  background-color: #014b7b; /* Cor de fundo azul escuro */
  color: #fff; /* Cor do texto no cabeçalho */
  padding: 10px; /* Espaçamento interno para o conteúdo do cabeçalho */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompanyName = styled.h1`
  font-size: 24px;
  margin: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
     <img src={logo} alt="logo" width="50px" height="45px" />
      <CompanyName>LABPharmacy Inc</CompanyName>
    </HeaderContainer>
  );
}

export default Header;
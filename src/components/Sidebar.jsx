import React from 'react';
import styled from 'styled-components';
import { BsClipboard2Pulse, BsPeople } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { CgShoppingBag } from "react-icons/cg";

const SidebarContainer = styled.div`
  position: fixed;
  width: 190px;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
  color: #014b7b;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  text-decoration: none;
  color: inherit;

  &:hover:not(.active) {
    background-color: #014b7b;
    color: white;
  }
`;

const SidebarTitle = styled.h4`
  margin-top: 100px;
  padding: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Menu</SidebarTitle>
      <SidebarLink href="#Resultado Vendas"><BsClipboard2Pulse /> Resultado Vendas</SidebarLink>
      <SidebarLink href="#produtos"><CgShoppingBag /> Produtos</SidebarLink>
      <SidebarLink href="#vendas"><IoPricetagOutline /> Vendas</SidebarLink>
      <SidebarLink href="#usuarios"><BsPeople /> Usuários</SidebarLink>
      <SidebarLink href="#sair"><GoSignOut /> Sair</SidebarLink>
    </SidebarContainer>
  );
}

export default Sidebar;
import React from 'react';
import styled from 'styled-components';
import { BsClipboard2Pulse, BsPeople } from "react-icons/bs";
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
  margin-top: 30px;
  text-decoration: none;
  color: inherit;

  &:hover:not(.active) {
    background-color: #014b7b;
    color: white;
  }
`;

const SidebarTitle = styled.h4`
  margin-top: 130px;
  padding: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Menu</SidebarTitle>
      <SidebarLink href="/initial-page-user"><BsClipboard2Pulse /> Vendas</SidebarLink>
      <SidebarLink href="/register-product"><CgShoppingBag /> Produtos</SidebarLink>
      <SidebarLink href="/user/admin/signup"><BsPeople /> Usuários</SidebarLink>
      <SidebarLink href="/admin/login"><GoSignOut /> Sair</SidebarLink>
    </SidebarContainer>
  );
}

export default Sidebar;
import React from 'react'
import './sidebar.css'
import { BsClipboard2Pulse, BsPeople } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/Io5";
import { GoSignOut } from "react-icons/Go";
import { CgShoppingBag } from "react-icons/Cg";

function Sidebar() {
    return (

        <div className='sidebar'>
            <h4>Menu</h4>
            <a href="#Resultado Vendas"><BsClipboard2Pulse /> Resultado Vendas</a>
            <a href="#produtos"><CgShoppingBag /> Produtos</a>
            <a href="#vendas"><IoPricetagOutline /> Vendas</a>
            <a href="#usuarios"><BsPeople /> Usuários</a>
            <a href="#sair"><GoSignOut /> Sair</a>
        </div>


    )
}

export default Sidebar

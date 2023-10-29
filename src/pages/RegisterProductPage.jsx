import React, { useState } from "react";
import styled from "styled-components";
import RegisterProduct from "../components/RegisterProduct";
import ProductsRegistered from "../components/ProductsRegistered";
import Sidebar from "../components/Sidebar";

const Container =styled.div`
    border: none;
`


function RegisterProductPage(){
    
    return(
        <Container>
            <Sidebar/>
            <RegisterProduct/>
            <ProductsRegistered/>
        </Container>

    )
}

export default RegisterProductPage;
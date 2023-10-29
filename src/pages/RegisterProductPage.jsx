import React, { useState } from "react";
import styled from "styled-components";
import RegisterProduct from "../components/RegisterProduct";
import ProductsRegistered from "../components/ProductsRegistered";

const Container =styled.div`
    border: none;
`


function RegisterProductPage(){
    
    return(
        <Container>
            <RegisterProduct/>
            <ProductsRegistered/>
        </Container>

    )
}

export default RegisterProductPage;
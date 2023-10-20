import React from 'react'
import styled from 'styled-components'
import { exemploProDB } from '../prairDB'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () =>{
  return (
    <Container>
{exemploProDB.map((item) => (
    <Product item = {item} key = {item.id}/>
))}
    </Container>
  )
}

export default Products
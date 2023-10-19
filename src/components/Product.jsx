import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6eeff;
  position: relative;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccdcff;
  border-radius: 5px;
`;

const Image = styled.img`
  height: 55%;
  margin-bottom: 130px;
`;

const Details = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0px;
  width: 100%;
  height: 100px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #014b7b;
  text-align: center;
  z-index: 2;
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  span {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 5px;
  color: red;
  span {
    font-size: 1rem;
    font-weight: 500;
    padding: 0 15px;
    border: 1px solid #014b7b;
  }
`;

const QuantityButton = styled.button`
  background-color: #014b7b;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin: 0 30px;
  color: white;
  border-radius: 1px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;
`;

const AddToCartButton = styled.button`
  background-color: #014b7b;
  color: white;
  padding: 9px;
  border: none;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 1rem;
    font-weight: 500;
    transition: 0.3s;
    &:hover{
        background-color: #01395b;
        }
`;

const Product = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : 20));
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    console.log(
      `Produto ${item.name} adicionado ao carrinho com quantidade ${quantity}`
    );
  };

  return (
    <Container>
      <Image src={item.img} />
      <Details>
        <h3>Genérico</h3>
        <span>R$: 20,00</span>
        <QuantitySelector>
          <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
          <span>{quantity}</span>
          <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
        </QuantitySelector>
        <AddToCartButton onClick={addToCart}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </Details>
    </Container>
  );
};

export default Product;

import React from "react";
import styled from "styled-components";
import { FaSistrix, FaCartShopping, FaCircle } from "react-icons/fa6";
import logo from "../img/logo-pha.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: #014b7b;
  height: 70px;
  width: 100%;
 position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
`;

const NameSANTE = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  margin-left: 5px;
  letter-spacing: 1px;
  color: white;
`;

const NameLabInc = styled.div`
  font-weight: 200;
  font-size: 0.9rem;
  margin-left: 5px;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.9rem;
  color: black;
  font-weight: 500;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  padding: 5px 10px;
  cursor: pointer;
`;

const FaSistrixIcon = styled(FaSistrix)`
  color: gray;
  font-size: 1.5rem;
  font-weight: 600;
`;

const MinhasCompras = styled.div`
  margin-right: 40px;
  color: #014b7b;
  background-color: #fff;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Login = styled(Link)`
  margin-right: 40px;
  color: #014b7b;
  background-color: #fff;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: #014b7b;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cart = styled.div`
  margin-right: 35px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  padding: 11px 11px;
  position: relative;
  span {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 600;
    color: white;
    background-color: red;
    border-radius: 50%;
    padding: 3px 8px;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -7px;
    margin-right: -7px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Sair = styled(Link)`
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const quantity = useSelector ((state) => state.cart.quantity );

  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={logo} alt="logo" width="50px" height="45px" />
          <NameSANTE>SANTÉ FARMA</NameSANTE>
          <NameLabInc>by LabPharmacy Inc.</NameLabInc>
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="O que está procurando?" />

            <FaSistrixIcon>
              <FaSistrix />
            </FaSistrixIcon>
          </SearchContainer>
        </Center>

        <Right>
          <MinhasCompras>Minhas Compras</MinhasCompras>
          <Cart>
            <CartLink to="/cart">
              <FaCartShopping />
            </CartLink>
            {quantity > 0 && <span>{quantity}</span>}
          </Cart>
          <Login to="/admin/login">Login</Login>
          <Sair to="/">Sair</Sair>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

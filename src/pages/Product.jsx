import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 90%;
  height: 80vh;
  margin-top: 30px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid #014b7b;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 60px;
`;

const Title = styled.h1`
  font-weight: 500;
  color: #014b7b;
  font-size: 2rem;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #9494b8;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 2.6rem;
  color: #014b7b;
`;

const Quantity = styled.div`
  font-weight: 300;
  color: #014b7b;
  font-size: 1.2rem;
  color: #9494b8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #014b7b;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #014b7b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  background-color: white;
`;

const IconMinus = styled(FaMinus)`
  width: 20px;
  height: 40px;
  margin-right: 10px;
`;

const IconPlus = styled(FaPlus)`
  width: 20px;
  height: 40px;
  margin-left: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 15px;
  border: none;
  background-color: #014b7b;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.1rem;
  transition: all 0.6s ease;
  &:hover {
    background-color: white;
    color: #014b7b;
    border: 1px solid #014b7b;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://gifs.eco.br/wp-content/uploads/2023/07/imagens-de-caixa-de-remedio-png-4.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Genérico</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>R$ 20,00</Price>
          <AddContainer>
            <Quantity>Quantidade:</Quantity>
            <AmountContainer>
              <IconMinus>
                <FaMinus />
              </IconMinus>
              <Amount>1</Amount>
              <IconPlus>
                <FaPlus />
              </IconPlus>
            </AmountContainer>
            <Button>Colocar no carrinho</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;

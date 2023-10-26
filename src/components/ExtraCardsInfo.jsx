import styled from "styled-components";
import { FaStethoscope, FaPills, FaCommentMedical, FaTruckMedical } from "react-icons/fa6";

const Container = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #014b7b;
  font-size: 2rem;
  margin-bottom: 20px;
    text-align: center;
`;

const Cards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardInfo = styled.div`
position: relative;
height: 275px;
width: 305px;
cursor: pointer;
background-color: #e6eeff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 5px;
transition: all ease 0.3s;
&:hover {
  transform: scale(1.05);
}
}
`;

const Icon = styled.div`
  color: #014b7b;
  font-size: 6rem;
`;

const Details = styled.div`
  color: #014b7b;
  position: absolute;
  top: 90px;
  left: 0px;
  width: 100%;
  height: 100px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
    h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    font-weight: 600;
    color: #014b7b;
    }
  p {
    font-size: 1.1rem;
    letter-spacing: -.9px;
    font-weight: 400;
    color: #014b7b;
  }
`;

const ExtraCardsInfo = () => {
  return (
    <Container>
          <Title>Confira mais de nossos serviços</Title>
      <Cards>
        <CardInfo>
          <Details>
            <Icon>
              <FaStethoscope/>
            </Icon>
            <h3>Verificação de Pressão</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </Details>
        </CardInfo>
        <CardInfo>
          <Details>
            <Icon>
              <FaPills />
            </Icon>
            <h3>Manipulados</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </Details>
        </CardInfo>
        <CardInfo>
          <Details>
            <Icon>
            <FaCommentMedical/>
            </Icon>
            <h3>Atendimento Online</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </Details>
        </CardInfo>
        <CardInfo>
          <Details>
            <Icon>
              <FaTruckMedical />
            </Icon>
            <h3>Farmácia Móvel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </Details>
        </CardInfo>
      </Cards>
    </Container>
  );
};

export default ExtraCardsInfo;

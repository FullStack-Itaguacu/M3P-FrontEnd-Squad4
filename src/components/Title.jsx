import styled from "styled-components";
import img1 from "../img/Ems-sem-fundo-logo.png";
import img2 from "../img/Logo_prati.png";
import img3 from "../img/logo-germed.png";
import img4 from "../img/biosintetica.png";
import img5 from "../img/generico-logo.png";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  background-color: #e6eeff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid #ccdcff;
`;

const Marketplace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 3rem;
    font-weight: 600;
    color: #014b7b;
  }
  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: #014b7b;
  }
`;

const GalleryMed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Image = styled.img`
    height: 125px;
    object-fit: contain;
    width: 135px;
    margin: 0 20px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #ccdcff;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all ease 0.3s;
    &:hover {
      transform: scale(1.05);
    }
    }
`;

const Promo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    color: white;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ccdcff;
    border-radius: 10px;
    background-color: #014b7b;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const Title = () => {
  return (
    <Container>
      <Marketplace>
        <h3>Marketplace</h3>
        <p>Confira nossos produtos</p>
        <GalleryMed>
          <Image src={img1} alt="Marketplace" />
          <Image src={img2} alt="Marketplace" />
          <Image src={img3} alt="Marketplace" />
          <Image src={img4} alt="Marketplace" />
          <Image src={img5} alt="Marketplace" />
        </GalleryMed>
        <Promo>
          <h4>PROMO ATÉ 50% OFF</h4>
        </Promo>
      </Marketplace>
    </Container>
  );
};

export default Title;

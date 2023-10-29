import styled from 'styled-components'

const Section = styled.section`
    width: 200px;
    height: 200px;
    background-color: #f5f5f5;
    color: #222222;;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #22222270;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;

const H3 = styled.h3`
    color: #16213E;
`;

const P = styled.p`
    color: #555;
`;

const Footer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Img = styled.img`
  width:30px;
  height:30px;
  gap: 10px;
`;

function Card({ productName, amountBuy, unitPrice, total }) {
    return (
        <Section>
            <H3>{productName}</H3>
            <P>Quantidade: {amountBuy}</P>
            <P>Preço Unitario: {unitPrice}</P>

            <Footer>
                <div>
                    <P>Total: {total}</P>
                </div>
                <div>
                    <Img src={imageLink} />
                </div>
            </Footer>
        </Section>
    )
}

export default Card
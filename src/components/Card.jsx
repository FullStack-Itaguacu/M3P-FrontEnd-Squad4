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


function Card({ productName, amountBuy, unitPrice, total }) {
    return (
        <Section>
            <H3>{productName}</H3>
            <p>{amountBuy}</p>
            <p>{unitPrice}</p>
            <p>{total}</p>
        </Section>
    )
}

export default Card
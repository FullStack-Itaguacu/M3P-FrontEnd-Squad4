import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 200px;
`

const Title = styled.h2`
    margin-bottom: 20px;
    margin-left: 10px;
    text-align: left;
`;

const Card = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function InitialPageAdmin(){
    const [totalSales, setTotalSales] = useState(0);
    const [totalAmount, setTotalQuantity] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const response = await fetch("http://localhost:3333/api/sales/dashboard/admin");
                //if (!response.ok) {
                    //throw new Error("Erro na solicitação GET");
                //}

                //const data = await response.json();
                //setTotalSales(data.totalSales);
                //setTotalQuantity(data.totalAmount);
                //setError(null);
            } catch (error) {
                setError("Erro ao buscar dados do dashboard. Por favor, tente novamente mais tarde.");
                console.error("Erro ao buscar dados do dashboard: ", error);
            }
        };
        fetchData();
    }, []);

    const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    };
    
    return(
        <Container>
            <Sidebar/>
            <Content>
                <Title>Resultado de vendas</Title>
                {error ? (
                    <Card>
                        <p>{error}</p>
                    </Card>
                ) : (
                    <>
                        <Card>
                            <h3>Total de Vendas até o dia {getCurrentDate()}</h3>
                            <p>R${totalSales.toFixed(2)}</p>
                        </Card>
                        <Card>
                            <h3>Total de produtos vendidos até o dia {getCurrentDate()}</h3>
                            <p>{totalAmount} unidades</p>
                        </Card>
                    </>
                )}
            </Content>
        </Container>

    )
}

export default InitialPageAdmin;
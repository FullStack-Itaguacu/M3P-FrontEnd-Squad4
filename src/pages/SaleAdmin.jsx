import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const SectionList = styled.section`
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    margin-top: 3rem;
`;
function SaleAdmin() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const queryApi = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=2')
            const data = await response.json();
            setRepositories(data);
        }
        queryApi();
    }, [])
    console.log(repositories);
    return (
        <section>
            <Navbar />
            <h2>Sales</h2>
            {
                repositories.length > 0 ? (
                    <SectionList>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    productName={repo.category}
                                    amountBuy={repo.id}
                                    unitPrice={repo.title}
                                    total={repo.total}
                                />
                            ))
                        }
                    </SectionList>
                ) : (
                    <p>
                        Carregando Vendas...
                    </p>
                )
            }
             <Footer />
        </section>
    )
}

export default SaleAdmin
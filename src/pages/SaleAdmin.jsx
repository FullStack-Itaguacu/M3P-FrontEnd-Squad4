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

const H2 = styled.h2`
    text-align: center;
`;

function SaleAdmin() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          // Dados de login teste local
        /*   const data = {
            email: "cleyton@admin.com",
            password: "A4&98dunH"
          }; */
      
          try {
            // Requisita e salva token usando axios
           /*  const response = await axios.post('http://127.0.0.1:3333/api/admin/login', data, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            console.log("Resposta do servidor:", response.data);
      
            // Armazena o token retornado no localStorage
            const tokenJWT = response.data.token;
            console.log("Token recebido:", tokenJWT);
            localStorage.setItem('token', tokenJWT); */
      
            // Recupera o token do localStorage
            const token = localStorage.getItem('token');
      
            // Faz uma requisição à API usando fetch
            const responseApi = await fetch('https://pcs-api-56ex.onrender.com/api/sales/admin', {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": token,
              }
            });
      
            const dataApi = await responseApi.json();
            setRepositories(dataApi);
          } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na Requisição");
          }
        };
      
        fetchData();
      }, []);
    
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
                                imageLink={repo.imageLink}
                                productName={repo.productName}
                                amountBuy={repo.amountBuy}
                                unitPrice={repo.unitPrice}
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
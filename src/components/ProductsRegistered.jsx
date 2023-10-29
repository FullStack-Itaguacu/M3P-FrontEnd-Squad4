import React, { useState, useEffect } from "react"
import styled from "styled-components";

const Container = styled.div`
    max-width: 77%;
    margin-left: 200px;
    padding-left: 20px;
    padding-top: 20px;
`;
const Title = styled.h2`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const SearchInput = styled.input`
    width: 30%;
    padding: 5px;
    margin-bottom: 20px;
`;
const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    th {
        background-color: #f2f2f2;
    }
    th,
    td {
        border: 1px solid #ddd;
        padding: 5px;
        text-align: left;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
const Modal = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;
const ModalContent = styled.div`
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid #ddd;
`;

function ProductsRegistered() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchParams, setSearchParams] = useState({ name: '', typeProduct: '', totalStock: "" });

    useEffect(() => {
        const fetchData = async () => {
            // Recupera o token do localStorage
            const token = localStorage.getItem('token');
        
            // Construa os parâmetros da consulta com base no estado
            const queryParams = new URLSearchParams(searchParams);
        
            // Crie a URL com os parâmetros da consulta
            const url = `https://pcs-api-56ex.onrender.com/api/products/admin/0/20?${queryParams.toString()}`;
        
            try {
                // Fazer uma solicitação GET para obter a lista de produtos do banco de dados
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                    },        
                });
            
                if (!response.ok) {
                    throw new Error(`Erro ao buscar produtos: ${response.status}`);
                }
                const data = response.json();
                setProducts(data);
                setFilteredProducts(data);
          
            } catch (error) {
                console.error("Erro ao buscar produtos: ", error);
            }
        };
        fetchData();            
    }, [searchParams]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (products.data && Array.isArray(products.data.rows)) {
            const filtered = products.data.rows.filter((product) => {
                const name = (product.name || '').toLowerCase();
                const productType = (product.productType || '').toLowerCase();
                
                return name.includes(searchTerm) || productType.includes(searchTerm);
            });                
            setFilteredProducts(filtered);
        };
    }

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };
   
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <Container>
            <Title>Produtos Cadastrados</Title>
            <SearchInput
                type="text"
                placeholder="Pesquisar por Nome ou Tipo do Produto"
                onChange={handleSearch}
            />
            <StyledTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Medicamento</th>
                        <th>Dosagem</th>
                        <th>Tipo do Produto</th>
                        <th>Preço Unitário</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.dosage}</td>
                                <td>{product.productType}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.description || "-"}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button onClick={() => handleShowModal(product)}>Editar</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Nenhum produto encontrado</td>
                        </tr>            
                    )}
                </tbody>
            </StyledTable>
            <Modal show = {showModal}>
                <ModalContent>
                    {selectedProduct && (
                        <div>
                            <strong>ID:</strong> {selectedProduct.id}
                            <br />
                            <strong>Nome do Medicamento:</strong> {selectedProduct.name}
                            <br />
                            <strong>Dosagem:</strong> {selectedProduct.dosage}
                            <br />
                            <strong>Tipo do Produto:</strong> {selectedProduct.productType}
                            <br />
                            <strong>Preço Unitário:</strong> {selectedProduct.unitPrice}
                            <br />
                            <strong>Descrição:</strong> {selectedProduct.description || "-"}
                            <br />
                            <strong>Quantidade:</strong> {selectedProduct.quantity}
                            <br />
                            <button onClick={handleCloseModal}>Fechar</button>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </Container>
    )
}

export default ProductsRegistered;
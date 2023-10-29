import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 80%;
    margin-left: 200px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    margin-top: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
    width: 95%;
    font-size: 0.9em;
`;

const ContainerDiv = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    margin-right: 20px;
    align-items: baseline;
`;

const ContainerDosage = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    margin-right: 20px;
    align-items: baseline;
`;

const ContainerPreco = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    margin-right: 20px;
    align-items: baseline;
`;

const ContainerQuantidade = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    margin-right: 20px;
    align-items: baseline;
`;

const Label = styled.label`
    margin-bottom: 1px;
`;

const Input = styled.input`
    width: 90%;
    padding: 5px;
`;

const Select = styled.select`
    width: 100%;
    padding: 5px;
    font-size: 0.9em;
`;

const ContainerTextArea = styled.div`
    width: 400px;
    height:70px;
    display: flex;
    flex-direction: column;
    margin: 3px;
    align-items: baseline;
`;

const TextArea = styled.textarea`
    width: 98%;
    padding: 5px;
`;

const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
`;

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
`;

const SuccessMessage = styled.div`
    color: green;
    margin-top: 10px;
`;

const ErrorMessage = styled.div`
    color: red;
    margin-top: 10px;
`;

function RegisterProduct() {
    const [product, setProduct] = useState({
        name: "",
        labName: "",
        imageLink: "",
        dosage: "",
        typeProduct: "",
        unitPrice: "",
        description: "",
        totalStock: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Validação dos campos do formulário
        if (!product.name) {
            alert("O campo nome deve ser preenchido");
            return;
        }
        if (!product.labName) {
            alert("O campo nome do laboratório deve ser preenchido");
            return;
        }
        if (!product.imageLink) {
            alert("O campo imagem deve ser preenchido");
            return;
        }
        if (!product.dosage) {
            alert("O campo dosagem deve ser preenchido");
            return;
        }
        if (!product.typeProduct) {
            alert("O campo tipo do produto deve ser preenchido");
            return;
        }
        if (!product.unitPrice) {
            alert("O campo preço unitário deve ser preenchido");
            return;
        }
        if (!product.totalStock) {
            alert("O campo quantidade deve ser preenchido");
            return;
        }

        // Se todas as validações passarem, fazer uma solicitação POST para adicionar o produto ao banco de dados
        try {
            const responseMessage = await sendDataToServer(product);
            setMessage(responseMessage);

            // Limpar os campos do formulário
            setProduct({
                name: "",
                labName: "",
                imageLink: "",
                dosage: "",
                typeProduct: "",
                unitPrice: "",
                description: "",
                totalStock: "",
            });
            // Limpar as mensagens após um breve atraso
            setTimeout(() => {
                setMessage("");
                setError("");
            }, 1000);
        } catch (error) {
            setError(error.message);
        }
    }

    async function sendDataToServer(productData) {
        try {
            //Recupera o token do localStorage
            const token = localStorage.getItem('token')

            const response = await fetch("http://localhost:3333/api/products/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
                body: JSON.stringify(productData),
            });
  
            if (response.ok) {
                return "Produto cadastrado com sucesso.";
            } else {
                throw new Error("Erro na solicitação POST.");
            }
        } catch (error) {
            console.error("Erro na solicitação POST: ", error);
            throw new Error("Erro na solicitação POST.");
        }
    }
  
    return (
        <Container>
            <Title>Cadastro de Produtos</Title>
            <Form onSubmit={handleFormSubmit}>
                <ContainerDiv>
                    <Label>Nome do Medicamento</Label>
                    <Input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        required
                    />
                </ContainerDiv>
                <ContainerDiv>
                    <Label>Nome do Laboratório</Label>
                    <Input
                        type="text"
                        name="labName"
                        value={product.labName}
                        onChange={handleInputChange}
                        required
                    />
                </ContainerDiv>
                <ContainerDiv>
                    <Label>Imagem do Produto</Label>
                    <Input
                        type="url"
                        name="imageLink"
                        value={product.imageLink}
                        onChange={handleInputChange}
                        required
                    />
                </ContainerDiv>
                <ContainerDosage>
                    <Label>Dosagem</Label>
                    <Select
                        name="dosage"
                        value={product.dosage}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Selecione a unidade</option>
                        <option value="mg">mg</option>
                        <option value="mcg">mcg</option>
                        <option value="g">g</option>
                        <option value="mL">mL</option>
                        <option value="%">%</option>
                        <option value="Outro">Outro</option>
                        </Select>
                </ContainerDosage>
                <ContainerDiv>
                    <Label>Tipo do Produto</Label>
                    <Select
                        name="typeProduct"
                        value={product.typeProduct}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">
                            Selecione o Tipo
                        </option>
                        <option value="Medicamento Controlado">
                            Medicamento Controlado
                        </option>
                        <option value="Medicamento Não Controlado">
                            Medicamento Não Controlado
                        </option>
                    </Select>
                </ContainerDiv>
                <ContainerPreco>
                    <Label>Preço Unitário</Label>
                    <Input
                        type="text"
                        name="unitPrice"
                        value={product.unitPrice}
                        onChange={handleInputChange}
                        required
                    />
                </ContainerPreco>
                <ContainerQuantidade>
                    <Label>Quantidade</Label>
                    <Input
                        type="number"
                        name="totalStock"
                        value={product.totalStock}
                        onChange={handleInputChange}
                        required
                    />
                </ContainerQuantidade>
                <ContainerTextArea>
                    <Label>Descrição</Label>
                    <TextArea
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </ContainerTextArea>
                <ContainerButton>
                    <Button type="submit">Cadastrar</Button>
                </ContainerButton>
            </Form>
            {message && <SuccessMessage>{message}</SuccessMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
}

export default RegisterProduct;
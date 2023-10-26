import React from 'react';
import styled from 'styled-components';
import logo from "../img/logo-pha.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Header from '../components/Header';
//import { useHistory } from 'react-router-dom; Para redirecionar o usuário para a página inicial do Marketplace

// Definição do estilo para o contêiner principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

// Estilo para a coluna esquerda
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%; /* Largura fixa para a coluna esquerda */
  margin-right: 3px; /* Espaçamento entre as colunas */
`;

// Estilo para a coluna direita
const RightColumn = styled.div`
  text-align: center;
  background: #fff; /* Fundo branco */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* Sombra */
  padding: 3%;
  width: 22%; /* Largura fixa para a coluna direita */
  height: 30rem; /* Altura fixa para a coluna direita */
`;

// Estilo para o título de login
const LoginTitle = styled.div`
  font-size: 45px;
  letter-spacing: 2px;
  margin-bottom: 15px;
  color: #014b7b;
  border-bottom: 1px solid #014b7b; /* Linha inferior */
`;

// Estilo para o título
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  color: #014b7b;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

// Estilo para o formulário de login
const LoginForm = styled.form`
  text-align: left;
  margin-top: 35px;
`;

// Estilo para os campos de entrada (inputs)
const Input = styled.input`
  border: none;
  height: 35px;
  border-bottom: 2px solid #014b7b; /* Linhas */
  margin-bottom: 20px;
  padding-left: 0;
  width: 100%;
`;

// Estilo para grupos de elementos do formulário
const FormGroup = styled.div`
  margin-bottom: 40px;
  outline: 0;
`;

// Estilo para rótulos de campos de entrada
const FormControlLabel = styled.label`
  font-size: 10px;
  color: #6e6868;
  letter-spacing: 1px;
`;

// Estilo para o botão de login
const BtnOutlinePrimary = styled.button`
  background: #014b7b;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  width: 100%;
  height: 50px;
`;

// Estilo para o rodapé do formulário de login
const LoginBttm = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 10px;
`;


const schema = yup.object().shape({
  email: yup
    .string()
    .required('Campo Obrigatório')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email inválido'),

  password: yup
    .string()
    .required('Campo Obrigatório')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
      'Senha inválida'
    )
    .min(8, 'A senha deve ter no mínimo 8 caracteres, letra maiúscula, minúscula, número e caractere especial'),
});

const LoginUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //const history = useHistory(); Para redirecionar o usuário para a página inicial do Marketplace

  const loginUser = async (data) => {
    try {
      const response = await axios.post('http://localhost:3333/api/user/login', data);

      if (response.data.success) {
        // Dados de login válidos, redirecione para a página desejada.
        history.push('/pagina-desejada');
      } else {
        // Senha ou email incorretos, apresente a mensagem de erro.
        console.error('Usuário ou senha inválida');
      }
    } catch (error) {
      // Erro na chamada da API.
      console.error('Erro na chamada da API');
    }
  };
  
  return (
    <>
     <Header />
      <form action="post" onSubmit={handleSubmit}></form>
      <Container>
        <LeftColumn>
          <LoginTitle>Seja bem-vindo!<br />O Futuro da Saúde Começa Aqui! </LoginTitle>
          <Title>Venda com Confiança: <br />Escolha uma Empresa Líder!</Title>
          <a href="/admin/login">Acesse sua loja aqui</a>
        </LeftColumn>

        <RightColumn>
          <img src={logo} alt="logo" width="70px" height="70px" />
          <LoginForm onSubmit={handleSubmit(loginUser)}>
            <FormGroup>
              <FormControlLabel className="form-control-label">EMAIL</FormControlLabel>
              <Input type="email"
                name="email"
                placeholder="email@email.com"
                {...register("email", { required: true })}
              />
              <ErrorSpan>{errors?.email?.message}</ErrorSpan>
            </FormGroup>

            <FormGroup>
              <FormControlLabel className="form-control-label">SENHA</FormControlLabel>
              <Input type="password"
                name="password"
                placeholder="Informe sua senha"
                {...register("password", { required: true })}
              />
              <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            </FormGroup>

            <LoginBttm>
              <BtnOutlinePrimary type="submit">LOGIN</BtnOutlinePrimary>
            </LoginBttm>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <a href="/cadastrar">Ainda não tem conta? Cadastre-se aqui!</a>
            </div>
          </LoginForm>
        </RightColumn>
      </Container>
    </>
  );
}
export default LoginUser;

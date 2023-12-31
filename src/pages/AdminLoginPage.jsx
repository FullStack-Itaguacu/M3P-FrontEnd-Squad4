import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import GlobalStyle from "../components/styled/GlobalStyle";
import { useNavigate } from "react-router";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;

const H1 = styled.h1`
  margin: 5vh auto 9vh;
  padding: 5vh 2vh;
  text-align: center;
`;

const Form = styled.form`
  background-color: gray;
  justify-content: center;
  margin: 0 auto;
  padding: 3vh 2vh;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
`;

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setSenha("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://pcs-api-56ex.onrender.com/api/admin/login",
        {
          email: email,
          password: senha,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      navigate("/initial-page-user");
    } catch (error) {
      console.error("Erro ao fazer login:", error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <H1>Olá Administrador, efetue seu login abaixo:</H1>
      <Form action="post" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "1px 2px" }}
        />
        <label htmlFor="password" style={{ marginTop: "1vh" }}>
          Senha:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[a-zA-Z\d#@$!%*?&]{8,}$"
          title="A senha deve ter no mínimo 8 caracteres, sendo pelo menos 1 letra maiúscula, 1 número e 1 caractere especial."
          style={{ padding: "1px 2px" }}
        />
        <input
          type="submit"
          value="Entrar"
          style={{ marginTop: "3vh", padding: "1px 6px" }}
        />
      </Form>
      <a href="/user/login" style={{ margin: "3vh auto" }}>
        Acessar login do comprador
      </a>
    </Container>
  );
}

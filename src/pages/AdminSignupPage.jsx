import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import GlobalStyle from "../components/styled/GlobalStyle";
import ReactInputMask from "react-input-mask";
import ListUsers from "../components/ListUsers";
import Container from "../components/styled/AdminPage/Container";
import H1 from "../components/styled/AdminPage/H1";
import Form from "../components/styled/AdminPage/Form";
import Row from "../components/styled/AdminPage/Row";
import Column from "../components/styled/AdminPage/Column";
import Label from "../components/styled/AdminPage/Label";
import { Input } from "../styles/Input";

export default function AdminSignupPage() {
  const [CPF, setCPF] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefoneCelular, setTelefoneCelular] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("Comprador");
  const [senha, setSenha] = useState("");

  const [CEP, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    setCPF("");
    setDataNascimento("");
    setNomeCompleto("");
    setEmail("");
    setTelefoneCelular("");
    setTipoUsuario("Comprador");
    setSenha("");
    setCEP("");
    setEstado("");
    setCidade("");
    setBairro("");
    setLogradouro("");
    setNumero("");
    setComplemento("");
    setLatitude("");
    setLongitude("");
  }, []);

  const buscarCEP = async () => {
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
      const objetoResposta = await resposta.json();
      inputsEndereco(objetoResposta);
    } catch (error) {
      console.log(error);
    }
  };

  const inputsEndereco = (objeto) => {
    if (logradouro === "") setLogradouro(objeto.logradouro);
    if (bairro === "") setBairro(objeto.bairro);
    if (cidade === "") setCidade(objeto.localidade);
    if (estado === "") setEstado(objeto.uf);
  };

  const buscarCoordenadas = async () => {
    if (
      CEP !== "" &&
      logradouro !== "" &&
      numero !== "" &&
      bairro !== "" &&
      cidade !== "" &&
      estado !== ""
    ) {
      try {
        const endereco = `${logradouro}, ${numero}, ${cidade}, ${estado}`;
        const enderecoFormatado = encodeURIComponent(endereco);
        const resposta = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${enderecoFormatado}&format=json`
        );
        const objetoResposta = await resposta.json();
        inputsCoorenadas(objetoResposta);
      } catch (error) {
        alert("Erro ao buscar coordenadas.");
        console.log("Erro ao buscar coordenadas:", error);
      }
    } else {
      alert("Preencha os campos de endereço.");
    }
  };

  const inputsCoorenadas = (objeto) => {
    try {
      setLatitude(objeto[0].lat);
      setLongitude(objeto[0].lon);
    } catch (error) {
      setLatitude("");
      setLongitude("");
      alert("Não foi possível preecher as coordenadas.");
      console.log("Erro ao preencher coordenadas", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://pcs-api-56ex.onrender.com/api/user/admin/signup",
        {
          user: {
            cpf: CPF,
            birthDate: dataNascimento,
            fullName: nomeCompleto,
            email: email,
            phone: telefoneCelular,
            typeUser: tipoUsuario,
            password: senha,
          },
          address: [
            {
              zip: CEP,
              state: estado,
              city: cidade,
              neighborhood: bairro,
              street: logradouro,
              numberStreet: numero,
              complement: complemento,
              lat: latitude,
              long: longitude,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log("Resposta do servidor:", JSON.stringify(response.data));
      alert(`Usuário cadastrado com sucesso.`);
    } catch (error) {
      console.error(
        "Erro ao cadastrar usuário:",
        JSON.stringify(error.response.data)
      );
      alert(`Erro ao cadastrar usuário: ${error.response.data.cause}`);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <H1>Registro de usuários</H1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Column style={{ flex: "1" }}>
            <Label htmlFor="cpf">CPF:</Label>
            <ReactInputMask
              type="text"
              name="cpf"
              mask="999.999.999-99"
              maskChar={null}
              placeholder="000.000.000-00"
              pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
              required
              value={CPF}
              onChange={(e) => setCPF(e.target.value.replace(/\D/g, ""))}
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1" }}>
            <Label htmlFor="dataNascimento">Data de nascimento:</Label>
            <input
              type="date"
              name="dataNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "3" }}>
            <Label htmlFor="nomeCompleto">Nome completo:</Label>
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Nome completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              required
              style={Input}
            />
          </Column>
        </Row>

        <Row>
          <Column style={{ flex: "1" }}>
            <Label htmlFor="email">Email:</Label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
              title="Informe um email válido."
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1" }}>
            <Label htmlFor="telefoneCelular">Telefone/Celular:</Label>
            <ReactInputMask
              type="tel"
              name="telefoneCelular"
              mask="(099) 99999-9999"
              maskChar={null}
              placeholder="(048) 99999-9999"
              value={telefoneCelular}
              onChange={(e) =>
                setTelefoneCelular(e.target.value.replace(/\D/g, ""))
              }
              pattern="^\(\d{3}\) \d{5}-\d{4}$"
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1.5" }}>
            <Label htmlFor="tipoUsuario">Tipo:</Label>
            <select
              name="tipoUsuario"
              required
              value={tipoUsuario}
              onChange={(e) => setTipoUsuario(e.target.value)}
              style={Input}
            >
              <option value="Comprador">Comprador</option>
              <option value="Administrador">Administrador</option>
            </select>
          </Column>
          <Column style={{ flex: "1.4" }}>
            <Label htmlFor="senha">Senha:</Label>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[a-zA-Z\d#@$!%*?&]{8,}$"
              title="A senha deve ter no mínimo 8 caracteres, sendo pelo menos 1 letra maiúscula, 1 número e 1 caractere especial."
              required
              style={Input}
            />
          </Column>
        </Row>

        <hr style={{ margin: "15px 0" }} />

        <Row>
          <Column style={{ flex: "0.7" }}>
            <Label htmlFor="cep">CEP:</Label>
            <ReactInputMask
              type="text"
              name="cep"
              mask="99999-999"
              maskChar={null}
              placeholder="88888-888"
              value={CEP}
              onChange={(e) => setCEP(e.target.value.replace(/\D/g, ""))}
              onKeyUp={() => {
                if (CEP.length === 8) buscarCEP();
              }}
              pattern="^\d{5}-\d{3}$"
              title="O CEP precisa ter 8 dígitos."
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "0.5" }}>
            <Label htmlFor="estado">Estado:</Label>
            <ReactInputMask
              type="text"
              name="estado"
              mask="aa"
              maskChar={null}
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value.toUpperCase())}
              pattern="^[A-Z]{2}$"
              title="Informe a sigla do estado."
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1.25" }}>
            <Label htmlFor="cidade">Cidade:</Label>
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1.25" }}>
            <Label htmlFor="bairro">Bairro:</Label>
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "2" }}>
            <Label htmlFor="logradouro">Logradouro:</Label>
            <input
              type="text"
              name="logradouro"
              placeholder="Logradouro"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              required
              style={Input}
            />
          </Column>
        </Row>

        <Row>
          <Column style={{ flex: "0.7" }}>
            <Label htmlFor="numero">Número:</Label>
            <input
              type="number"
              name="numero"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
              style={Input}
            />
          </Column>
          <Column style={{ flex: "2" }}>
            <Label htmlFor="complemento">Complemento:</Label>
            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1.5" }}>
            <Label htmlFor="latitude">Latitude:</Label>
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              style={Input}
            />
          </Column>
          <Column style={{ flex: "1.5" }}>
            <Label htmlFor="longitude">Longitude:</Label>
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              style={Input}
            />
          </Column>
        </Row>

        <Row style={{ justifyContent: "flex-end", marginTop: "20px" }}>
          <Column>
            <input
              type="button"
              value="Buscar coordenadas"
              onClick={buscarCoordenadas}
              style={Input}
            />
          </Column>
          <Column>
            <input type="submit" value="Cadastrar" style={Input} />
          </Column>
        </Row>
      </Form>
      <ListUsers />
    </Container>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import H1 from "./styled/AdminPage/H1";
import { Input } from "../styles/Input";
import Row from "./styled/AdminPage/Row";
import Column from "./styled/AdminPage/Column";
import { List } from "../styles/List";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://pcs-api-56ex.onrender.com/api/buyers/admin/${
          (currentPage - 1) * pageSize
        }/${pageSize}`
      )
      .then((resposta) => {
        setUsers(resposta.data.users);
        setTotalUsers(resposta.data.count);
        setTotalPages(Math.ceil(resposta.data.count / pageSize));
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      });
  }, [currentPage, pageSize]);

  const handleSearch = () => {};

  const handlePagination = (page) => {
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
  };

  return (
    <div>
      <H1>Usuários cadastrados</H1>
      <div style={List}>
        <Row style={{ justifyContent: "center" }}>
          <Column>
            <input
              type="text"
              placeholder="Pesquisar por Nome Completo"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={Input}
            />
          </Column>
          <Column>
            <input
              type="button"
              value="Pesquisar"
              onClick={handleSearch}
              style={Input}
            />
          </Column>
        </Row>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CPF</th>
              <th>Data de Nascimento</th>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Tipo de Usuário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.cpf}</td>
                <td>{user.birthDate}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.typeUser}</td>
                <td>
                  <input
                    value="Editar"
                    onClick={() => openEditModal(user.id)}
                    style={Input}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Column>
            <input
              type="button"
              value="Anterior"
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage === 1}
              style={Input}
            />
          </Column>
          <Column>
            <input
              type="button"
              value="Próximo"
              onClick={() => handlePagination(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={Input}
            />
          </Column>
        </Row>
      </div>
    </div>
  );
}

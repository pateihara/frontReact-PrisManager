import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import "../../css/login.css";
import AppLoading from "../organisms/AppLoading";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ClientList() {
  const [basicModal, setBasicModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Alterado para "useState"
  const [newClientData, setNewClientData] = useState({
    clientName: "",
    cpf: "",
  });

  const handleInputChange = (e) => {
    setNewClientData({
      ...newClientData,
      [e.target.name]: e.target.value,
    });
    console.log("Novos dados do cliente:", newClientData);
  };

  const addNewClient = () => {
    console.log("Dados do Cliente a ser Enviados:", newClientData);

    // Enviar os dados do novo cliente para o servidor
    fetch(
      "https://prismanager-back-end-1ple8v0as-pateiharas-projects.vercel.app/listclients/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClientData),
      }
    )
      .then((response) => {
        console.log("Response:", response); // Adicione esta linha para depuração

        if (!response.ok) {
          throw new Error("Falha na solicitação à API");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        // Atualizar a lista de clientes após adicionar um novo cliente
        fetch(
          "https://prismanager-back-end-1ple8v0as-pateiharas-projects.vercel.app/listclients/clients"
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Falha na solicitação à API");
            }
            return response.json();
          })
          .then((data) => {
            setClients(data);
          })
          .catch((error) => {
            console.error("Erro ao obter lista de clientes:", error);
          });
      })
      .catch((error) => {
        console.error("Erro ao adicionar cliente:", error);
      });

    // Fechar a modal após adicionar o cliente
    setBasicModal(false);
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("chamada x:", newClientData);
    // Fetch data from your API when the component mounts
    fetch(
      "https://prismanager-back-end-1ple8v0as-pateiharas-projects.vercel.app/listclients/clients"
    )
      .then((response) => {
        console.log("Response:", response); // Adicione esta linha para depuração

        if (!response.ok) {
          throw new Error("Falha na solicitação à API");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setClients(data);
      })

      .catch((error) => {
        console.error("Erro na solicitação à API:", error); // Adicione esta linha para depuração
      });
  }, []); // O array vazio [] garante que este efeito seja executado apenas uma vez na montagem

  const toggleShow = () => setBasicModal(!basicModal);

  return isLoading ? (
    <AppLoading />
  ) : (
    <main className="main-container">
      <div className="card">
        <div className="card-inner">
          <MDBBtn onClick={toggleShow}>Adicionar pedido</MDBBtn>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Adicionar cliente</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleShow}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <form className="form-group">
                    <label htmlFor="cadInputName" className="form-label">
                      nome
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="cadInputName"
                      aria-describedby="nameHelp"
                      placeholder="Digite o nome do contato"
                      name="clientName"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="cadInputCPF" className="form-label">
                      CPF
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="cadInputCPF"
                      aria-describedby="nameHelp"
                      placeholder="Digite o CPF"
                      name="cpf"
                      onChange={handleInputChange}
                    />
                  </form>
                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={toggleShow}>
                    fechar
                  </MDBBtn>
                  <MDBBtn onClick={addNewClient}>Adicionar cliente</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>{" "}
        </div>
        <table className="clientTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="listaContatos">
            {clients.map((client) => (
              <tr key={client._id}>
                <td>{client._id}</td>
                <td>{client.name}</td>
                <td>{client.cpf}</td>
                <td>LINK DO CLIENTID</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

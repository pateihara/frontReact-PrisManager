import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppLoading from "../organisms/AppLoading";

function OrderList() {
  const [basicModal, setBasicModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newOrderData, setNewOrderData] = useState({
    adults: "",
    children: "",
    checkin: "",
    checkout: "",
    plane: "",
    planeCost: "",
    state: "",
    tours: "",
  });
  const { orderId, clientId } = useParams();
  const handleInputChange = (e) => {
    setNewOrderData({
      ...newOrderData,
      [e.target.name]: e.target.value,
    });
    console.log("Novos dados do cliente:", newOrderData);
  };

  const addNewOrder = () => {
    console.log("Dados do Cliente a ser Enviados:", newOrderData);
    // Enviar os dados do novo cliente para o servidor
    fetch(`https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/clients/${clientId}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newOrderData,
        client: clientId, // Inclua o ID do cliente no corpo da solicitação
      }),
    })
      .then((response) => {
        console.log("Response:", response);

        if (!response.ok) {
          throw new Error("Falha na solicitação à API");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);

        // Atualizar a lista de clientes após adicionar um novo cliente
        fetch(`https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/clients/${clientId}/orders`)
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
    console.log("chamada x:", newOrderData);
    // Fetch data from your API when the component mounts
    fetch(`https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/clients/${clientId}/orders`)
      .then((response) => {
        console.log("Response:", response); //linha para depuração

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
        console.error("Erro na solicitação à API:", error); //linha para depuração
      });
  }, []); // O array vazio [] garante que este efeito seja executado apenas uma vez na montagem

  const toggleShow = () => setBasicModal(!basicModal);

  return isLoading ? (
    <AppLoading />
  ) : (
    <main className="main-container">
      <MDBRow>
        <MDBCol size="4">
          <MDBCard className="card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>dados do cliente</MDBCardTitle>
              <MDBCardText>
                {" "}
                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput id="form3Example1" label="First name" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput id="form3Example2" label="Last name" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="form3Example3"
                    label="Email address"
                  />

                  <MDBBtn type="submit" className="mb-4" block>
                    salvar informações
                  </MDBBtn>
                </form>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="8">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>histórico de pedidos</MDBCardTitle>
              <MDBCardText>
                <MDBBtn onClick={addNewOrder}>Adicionar pedido</MDBBtn>
                <MDBModal
                  show={basicModal}
                  setShow={setBasicModal}
                  tabIndex="-1"
                >
                  <MDBModalDialog>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>Adicionar pedido</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShow}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <form class="form-group ">
                          <label for="cadInputName" class="form-label">
                            nome
                          </label>
                          <input
                            type="text"
                            class="form-control mb-3"
                            id="cadInputName"
                            aria-describedby="nameHelp"
                            placeholder="Digite o nome do contato"
                          />
                          <label for="cadInputCPF" class="form-label">
                            CPF
                          </label>
                          <input
                            type="text"
                            class="form-control mb-3"
                            id="cadInputName"
                            aria-describedby="nameHelp"
                            placeholder="Digite o CPF"
                          />
                          <label for="Quantity" class="form-label mb-3">
                            status da negociação
                          </label>
                          <select
                            id="select-status"
                            class="form-control prod-options"
                          >
                            <option value="novo">Novo</option>
                            <option value="negociacao">Negociação</option>
                            <option value="conquistado">Conquistado</option>
                            <option value="perdido">Perdido</option>
                          </select>
                        </form>
                      </MDBModalBody>

                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleShow}>
                          fechar
                        </MDBBtn>
                        <MDBBtn>adicionar cliente</MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>{" "}
                <table class="table">
                  <thead>
                    <tr>
                      <th>pacote</th>
                      <th>status</th>
                      <th>adultos</th>
                      <th>crianças</th>
                      <th>data da Ida</th>
                      <th>data da Volta</th>
                      <th>ações</th>
                    </tr>
                  </thead>
                  <tbody id="listaHistoricoViagem">
                    {clients.map((client) => (
                      <tr key={client._id}>
                        <td>{client.tours}</td>
                        <td>{client.state ? client.state.state : "N/A"}</td>
                        <td>{client.adults}</td>
                        <td>{client.children}</td>
                        <td>{client.checkin}</td>
                        <td>{client.checkout}</td>
                        <td>{client.plane}</td>
                        <td>{client.planeCost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </main>
  );
}
export default OrderList;

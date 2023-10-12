import React, { useState } from "react";
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

function OrderList() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
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
                <MDBBtn onClick={toggleShow}>Adicionar pedido</MDBBtn>
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
                      <th>id</th>
                      <th>pacote</th>
                      <th>status</th>
                      <th>adultos</th>
                      <th>crianças</th>
                      <th>data da Ida</th>
                      <th>data da Volta</th>
                      <th>ações</th>
                    </tr>
                  </thead>
                  <tbody id="listaHistoricoViagem"></tbody>
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

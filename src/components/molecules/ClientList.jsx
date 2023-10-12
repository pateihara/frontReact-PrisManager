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
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ClientList() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <main className="main-container">
      <div className="row g-3 mt-2">
        <div className="col-12 col-md-12 col-xl-12 ">
          <div>
            <MDBBtn onClick={toggleShow}>adicionar cliente</MDBBtn>
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
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="listaContatos"></tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default ClientList;

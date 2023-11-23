import React, { useState, useEffect } from "react";
import "../../css/data-table.css";
import "../../css/AddEditForm.css";
import "../../css/Dashboard.css";
import Header from "../molecules/Header";
import Sidebar from "../molecules/Sidebar";
import AddEditForm from "../pages/AddEditForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faEdit,
  faTrash,
  faUsers,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

function DataTable() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      const endpoint =
        "https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/users";
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        setDataTable(users);
      } catch (error) {
        console.error("There was a problem fetching the users:", error);
      }
    };

    // Function to handle updating a user
    const handleUpdate = async (updatedData) => {
      const userToUpdate = dataTable[editIndex];
      try {
        const response = await fetch(
          `https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/users/${userToUpdate.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (response.ok) {
          // Optionally, you can fetch all users again to refresh the list
          // or you can update the local state to reflect the changes.
          console.log("User updated successfully");
        } else {
          throw new Error("User update failed");
        }
      } catch (error) {
        console.error("Failed to update user", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (newData) => {
    setDataTable([...dataTable, newData]);
    setIsFormOpen(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(dataTable[index]);
  };

  const handleUpdate = (updatedData) => {
    const updatedTable = [...dataTable];
    updatedTable[editIndex] = updatedData;
    setDataTable(updatedTable);
    setEditIndex(null);
    //update.data(/:id,body)
    setIsFormOpen(false);
  };

  const handleDelete = (index) => {
    const updatedTable = [...dataTable];
    updatedTable.splice(index, 1);
    //delete.register(endpoint,id)
    setDataTable(updatedTable);
  };

  // JSX da tabela
  return (
    <div className="grid-container" style={{ backgroundColor: '#FFECD1'}}>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AddEditForm />

      <div>
        <div className="header-table"></div>
        <div className="data-table">
          <div className="add-button">
            <button onClick={() => setIsFormOpen(true)}>
              <FontAwesomeIcon icon={faPlusCircle} size="lg" />
              Adicionar Usuários
            </button>
          </div>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Senha</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      ) : (
                        item.email
                      )}
                    </td>
                    <td className="column-actions">
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        onClick={() => setIsFormOpen(true)}
                        className="icon-add"
                      />
                      {editIndex === index ? (
                        <FontAwesomeIcon
                          icon={faSave}
                          onClick={() => handleUpdate(formData)}
                          className="icon-edit"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => handleEdit(index)}
                          className="icon-edit"
                        />
                      )}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDelete(index)}
                        className="icon-delete"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isFormOpen && (
              <AddEditForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={editIndex === null ? handleAdd : handleUpdate}
                data={formData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;

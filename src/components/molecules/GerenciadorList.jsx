import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Modal,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";


// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Gerenciador = () => {
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const apiUrl =
    "https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/users";

  // Fetch users from the API
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleOpenAddModal = () => {
    setUserForm({ name: "", email: "", password: "" });
    setIsEditing(false);
    setOpenModal(true);
  };

  const handleOpenEditModal = (user) => {
    setUserForm({ ...user, password: "" });
    setIsEditing(true);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setUserForm({ name: "", email: "", password: "" });
  };

  // Save user (add or edit)
  const handleSaveUser = () => {
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${apiUrl}/${userForm.id}` : apiUrl;

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        if (isEditing) {
          setUsers(users.map((u) => (u.id === userForm.id ? data : u)));
        } else {
          setUsers([...users, data]);
        }
        handleCloseModal();
      })
      .catch((error) => console.error("Error:", error));
  };

  // Delete user
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`${apiUrl}/${userId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          setUsers(users.filter((user) => user.id !== userId));
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    
    <Container maxWidth="md">
      <h1>Gerenciador de usuários</h1>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenAddModal}
        style={{ marginBottom: "20px" }}
      >
        Adicionar novo usuário
      </Button>

      {/* Users Table */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Acoes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpenEditModal(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* User Form Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isEditing ? "Edit User" : "Add User"}
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={userForm.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={userForm.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={userForm.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleSaveUser}
            color="primary"
            variant="contained"
            style={{ marginTop: "16px" }}
          >
            {isEditing ? "Update User" : "Save User"}
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Gerenciador;

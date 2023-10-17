import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../../css/login.css";

import AppLoading from "../organisms/AppLoading";
import { Alert } from "@mui/material";
import { saveToken } from "../../helpers/Auth";

import { MDBBtn, MDBCardBody } from "mdb-react-ui-kit";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);

    fetch(
      `https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then(({ token }) => {
        saveToken(token);
        navigate("/dashboard");
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        setShowError(true);
        setIsLoading(false);
      });
  };

  const handleInputFocus = () => {
    setShowError(false);
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <MDBCardBody>
      <div className="login_center">
        <div className="login__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <form onSubmit={handleLogin} className="inputs">
          <div className="input">
            <input
              type="email"
              placeholder="Usuário"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onFocus={handleInputFocus}
            />
          </div>
          {showError && <Alert severity="error">Credenciais com erro!</Alert>}
          <MDBBtn className="submit">Entrar</MDBBtn>
        </form>
      </div>
    </MDBCardBody>
  );
}

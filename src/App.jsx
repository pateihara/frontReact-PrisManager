// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Clients from "./components/pages/Clients";
import Orders from "./components/pages/Orders";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Dashboard from "./components/pages/Dashboard";
import Landing from "./components/pages/Landing";

import { isLogged } from "../src/helpers/Auth";

const ProtectedRoute = () => {
  if (!isLogged()) {
    return <Navigate to="/landing" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:clientId/orders" element={<Orders />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

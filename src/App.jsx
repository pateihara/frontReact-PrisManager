import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/pages/Clients";
import Requests from "./components/pages/Requests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/requests" element={<Requests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

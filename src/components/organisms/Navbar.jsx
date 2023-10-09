import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/dashboard">Logo</Link>
      </div>
      <div className="links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/clients">Clientes</Link>
        <Link to="/clients/requests">Pedidos</Link>
      </div>
    </div>
  )
}
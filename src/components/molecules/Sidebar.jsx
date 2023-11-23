import React from "react";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsArrowRightCircle,
} from "react-icons/bs";
import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../images/logoHorizontal.svg";
import "../../css/Dashboard.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} className="logo" alt="" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <BsArrowRightCircle />
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item ">
          <a href="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item ">
          <a href="/clients">
            <BsPeopleFill className="icon" /> Clientes
          </a>
        </li>
        <li className="sidebar-list-item ">
          <a href="/gerenciador">
            <BsPeopleFill className="icon" /> Gerenciador
          </a>
        </li>
        <li className="sidebar-list-item ">
          <a href="/clients/orders">
            <BsListCheck className="icon" /> Solicitações
          </a>
        </li>
      </ul>
      <ListItem className="sidebar-list-item">
          <Link to="/logout">Sair</Link>
        </ListItem>
    </aside>
  );
}

export default Sidebar;
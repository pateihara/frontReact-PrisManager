import { useState } from "react";
import "../../css/Dashboard.css";
import Header from "../molecules/Header";
import Sidebar from "../molecules/Sidebar";
import GerenciadorList from "../molecules/GerenciadorList";

function Gerenciador() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <GerenciadorList />
    </div>
  );
}

export default Gerenciador;

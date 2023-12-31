import { useState } from "react";
import "../../css/Dashboard.css";
import Header from "../molecules/Header";
import Sidebar from "../molecules/Sidebar";
import ClientList from "../molecules/ClientList";

function Clients() {
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
      <ClientList />
    </div>
  );
}

export default Clients;

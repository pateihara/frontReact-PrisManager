import { useState } from "react";
import Header from "../molecules/Header";
import Sidebar from "../molecules/Sidebar";
import OrderList from "../molecules/OrderList";

function Orders() {
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
      <OrderList />
    </div>
  );
}

export default Orders;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logoHorizontal.svg";
import "../../css/Sidebar.css";

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
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item ">
          <Link to="/dashboard">dashboard</Link>
        </li>
        <li className="sidebar-list-item ">
          <Link to="/clients">clientes</Link>
        </li>
        <li className="sidebar-list-item ">
          <Link to="/clients/orders">solicitações</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

// import React from "react";
// import {
//   BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
// } from "react-icons/bs";

// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <BsCart3 className="icon_header" /> PrisManager
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillArchiveFill className="icon" /> Products
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillGrid3X3GapFill className="icon" /> Categories
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsPeopleFill className="icon" /> Customers
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsListCheck className="icon" /> Inventory
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsMenuButtonWideFill className="icon" /> Reports
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;


import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar"
import Home from "./Home/Home";

const ManagementPage = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const handleNavigate = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar onNavigate={handleNavigate} />

      {/* Contenido principal */}
      <div className="managementContent p-4 flex-grow-1">
        {selectedPage === "dashboard" && <Home/>}
        {selectedPage === "products" && <h1>Gestión de Productos</h1>}
        {selectedPage === "clients" && <h1>Gestión de Clientes</h1>}
        {selectedPage === "orders" && <h1>Gestión de Pedidos</h1>}
        {selectedPage === "analytics" && <h1>Estadísticas del Negocio</h1>}
      </div>
    </div>
  );
};
export default ManagementPage

import { Nav } from "react-bootstrap";
import "./Sidebar.css"

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="sidebarContent bg-dark text-white vh-100 d-flex flex-column p-2 pt-4" >
      <h5 className="text-center mb-4">Gestión</h5>
      <Nav className="flex-column">
        <Nav.Link
          onClick={() => onNavigate("dashboard")}
          className="text-white"
        >
          Dashboard
        </Nav.Link>
        <Nav.Link
          onClick={() => onNavigate("products")}
          className="text-white"
        >
          Productos
        </Nav.Link>
        <Nav.Link
          onClick={() => onNavigate("clients")}
          className="text-white"
        >
          Clientes
        </Nav.Link>
        <Nav.Link
          onClick={() => onNavigate("orders")}
          className="text-white"
        >
          Pedidos
        </Nav.Link>
        <Nav.Link
          onClick={() => onNavigate("analytics")}
          className="text-white"
        >
          Estadísticas
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;


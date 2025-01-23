
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/EasyBiz/login");
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Nav className="flex-column">
          <Nav.Link onClick={() => navigate("/EasyBiz/home")} >Inicio</Nav.Link>
          <Nav.Link onClick={() => navigate("/contact")}>Contacto</Nav.Link>
          {user && (
            <>
              <Nav.Link onClick={() => navigate("/products")}>Productos</Nav.Link>
              <Nav.Link onClick={() => navigate("/courses")}>Cursos</Nav.Link>
              <Nav.Link onClick={() => navigate("/EasyBiz/client")}>Cliente</Nav.Link>
              <Nav.Link onClick={() => navigate("/EasyBiz/Management")}>Negocio</Nav.Link>
            </>
          )}
        </Nav>
      </Popover.Body>
    </Popover>
  );

  return (
    <nav className="navbar Azul-Oscuro d-flex align-items-center justify-content-between px-3">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="EmprendeFácil"
          style={{ width: "80px", height: "auto", cursor: "pointer" }}
          onClick={() => navigate("/EasyBiz/home")}
        />
      </div>

      {/* Menú y botones */}
      <div className="d-flex align-items-center">
        {/* Menú para pantallas grandes */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <Nav className="d-flex">
            <Nav.Link onClick={() => navigate("/EasyBiz/home")} className="text-white">Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")} className="text-white">Contacto</Nav.Link>
            {user && (
              <>
                <Nav.Link onClick={() => navigate("/products")} className="text-white">Productos</Nav.Link>
                <Nav.Link onClick={() => navigate("/courses")} className="text-white">Cursos</Nav.Link>
                <Nav.Link onClick={() => navigate("/EasyBiz/client")} className="text-white">Cliente</Nav.Link>
                <Nav.Link onClick={() => navigate("/EasyBiz/Management")} className="text-white">Negocio</Nav.Link>
              </>
            )}
          </Nav>
        </div>

        {/* Botón hamburguesa con Popover para pantallas pequeñas */}
        <div className="d-lg-none d-flex align-items-center">
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button
              variant="light"
              className="border-0 me-2"
            >
              ☰
            </Button>
          </OverlayTrigger>
        </div>

        {/* Botón de carrito */}
        <Button
          variant=""
          onClick={() => navigate("/cart")}
          className="d-flex align-items-center mx-2 "
        >
          🛒
        </Button>

        {/* Botón de inicio/cierre de sesión */}
        {!user ? (
          <Button
            className="Azul-Oscuro"
            variant="primary"
            onClick={() => navigate("/EasyBiz/login")}
            style={{ whiteSpace: "nowrap" }}
          >
            Iniciar Sesión
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={handleLogout}
            style={{ whiteSpace: "nowrap" }}
          >
            Cerrar Sesión
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;









import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/EasyBiz/login");
  };

  return (
    <Navbar className="Azul-Oscuro" expand="lg" variant="dark">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand onClick={() => navigate("/EasyBiz/home")} style={{ cursor: "pointer" }}>
          <img
            src={logo}
            alt="EmprendeFácil"
            style={{ width: "80px", height: "auto" }}
          />
        </Navbar.Brand>

        {/* Botón para abrir/cerrar el menú en móviles */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Contenido del menú */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto"> {/* Elementos centrados */}
            <Nav.Link onClick={() => navigate("/EasyBiz/home")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")}>Contacto</Nav.Link>
            {user && (
              <>
                <Nav.Link onClick={() => navigate("/products")}>Productos</Nav.Link>
                <Nav.Link onClick={() => navigate("/courses")}>Cursos</Nav.Link>
              </>
            )}
          </Nav>

          {/* Botón de inicio/cierre de sesión alineado a la derecha */}
          <div className="d-flex">
            {!user ? (
              <Button className="Azul-Oscuro" variant="primary" onClick={() => navigate("/EasyBiz/login")}>
                Iniciar Sesión
              </Button>
            ) : (
              <Button variant="danger" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;





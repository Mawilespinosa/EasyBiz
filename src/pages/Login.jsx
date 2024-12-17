import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleChoice, setRoleChoice] = useState("client");
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.davidespinosaoficial.com/EmprendeFacilBackend/login.php",
        { email, password }
      );

      if (response.data.success) {
        const user = response.data.user;

        // Llamar a la función de login desde el AuthContext
        login({
          role: user.role_id,
          email: user.email,
          roleChoice,
        });

        // Redirigir según el rol del usuario
        if (user.role_id === 1) {
          navigate("/EasyBiz/admin-dashboard");
        } else if (user.role_id === 2) {
          navigate(
            roleChoice === "client"
              ? "/EasyBiz/client-dashboard"
              : "/EasyBiz/business-dashboard"
          );
        }
      } else {
        setActive(response.data.message);
        setPassword("");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      setActive("Error al iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Form
        onSubmit={handleLogin}
        className="p-4 border rounded shadow-sm bg-white w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {active && <Alert variant="danger">{active}</Alert>}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span> <Link to="/EasyBiz/reset-password">Olvidaste tu contraseña?</Link></span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Selecciona tu rol:</Form.Label>
          <div className="d-flex gap-3 mb-3">
            <Form.Check
              type="radio"
              label="Cliente"
              name="roleChoice"
              value="client"
              checked={roleChoice === "client"}
              onChange={() => setRoleChoice("client")}
            />
            <Form.Check
              type="radio"
              label="Gestionar Negocio"
              name="roleChoice"
              value="business"
              checked={roleChoice === "business"}
              onChange={() => setRoleChoice("business")}
            />
          </div>
          <span className="m-2">No eres usuario: <Link to="/EasyBiz/register">Registrase</Link></span>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;






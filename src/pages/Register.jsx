import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.davidespinosaoficial.com/EmprendeFacilBackend/register.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setFormData({ name: "", email: "", password: "" }); // Limpiar el formulario
      }
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        "Error al registrar: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm bg-white w-100"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Registro de Usuario</h2>

        {message && (
          <Alert variant={message.includes("Error") ? "danger" : "success"}>
            {message}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Crea una contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Form.Check  
            className="mt-4"
            type="checkbox" label="Acepto los términos y condiciones"  
            name="terms"  
            checked={formData.terms}  
            onChange={handleChange}  
            required  
          />           

        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Register;



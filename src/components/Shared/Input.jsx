import PropTypes from "prop-types"; // Para validar las props
import Form from "react-bootstrap/Form";

const CustomInput = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder = "", 
  name, 
  error, 
  required = false 
}) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        placeholder={placeholder}
        name={name}
        isInvalid={!!error}
        required={required}
      />
      {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string, // Etiqueta que aparece encima del campo
  type: PropTypes.string, // Tipo de input (text, password, email, etc.)
  value: PropTypes.string.isRequired, // Valor actual del input
  onChange: PropTypes.func.isRequired, // Función que maneja el cambio en el input
  placeholder: PropTypes.string, // Placeholder dentro del campo
  name: PropTypes.string.isRequired, // Nombre del campo para identificarlo
  error: PropTypes.string, // Mensaje de error para validación
  required: PropTypes.bool, // Si el campo es obligatorio
};

export default CustomInput;


{/* Ejemplo Como usarlo  */}

{/*

import React, { useState } from "react";
import CustomInput from "../components/common/Input";
import CustomButton from "../components/common/Button";

const ExampleForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    const newErrors = {};
    if (!formData.email) newErrors.email = "El correo es obligatorio.";
    if (!formData.password) newErrors.password = "La contraseña es obligatoria.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulario enviado", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        label="Correo Electrónico"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Ingresa tu correo"
        error={errors.email}
        required
      />
      <CustomInput
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Crea una contraseña"
        error={errors.password}
        required
      />
      <CustomButton text="Enviar" type="submit" variant="primary" />
    </form>
  );
};

export default ExampleForm;

*/}
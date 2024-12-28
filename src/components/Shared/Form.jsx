import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomForm = ({ fields, onSubmit, submitText = "Enviar", isLoading = false }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Form.Group className="mb-3" key={index} controlId={field.name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={field.defaultValue || ""}
            required={field.required}
            as={field.type === "textarea" ? "textarea" : "input"}
            rows={field.rows || 3}
          />
        </Form.Group>
      ))}
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Cargando..." : submitText}
      </Button>
    </Form>
  );
};

CustomForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Nombre del campo
      label: PropTypes.string.isRequired, // Etiqueta del campo
      type: PropTypes.string.isRequired, // Tipo de input (text, email, password, textarea, etc.)
      placeholder: PropTypes.string, // Placeholder del campo (opcional)
      defaultValue: PropTypes.string, // Valor por defecto del campo (opcional)
      required: PropTypes.bool, // Si es requerido (opcional)
      rows: PropTypes.number, // Cantidad de filas para textareas (opcional)
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired, // Función al enviar el formulario
  submitText: PropTypes.string, // Texto del botón de envío
  isLoading: PropTypes.bool, // Estado de carga del botón
};

export default CustomForm;

{/* Ejemplo Como usarlo */}
{/* 
import React from "react";
import CustomForm from "../components/common/Form";

const ExampleForm = () => {
  const fields = [
    { name: "name", label: "Nombre", type: "text", placeholder: "Ingresa tu nombre", required: true },
    { name: "email", label: "Correo", type: "email", placeholder: "Ingresa tu correo", required: true },
    { name: "password", label: "Contraseña", type: "password", placeholder: "Crea una contraseña", required: true },
    { name: "bio", label: "Biografía", type: "textarea", placeholder: "Escribe algo sobre ti", rows: 4 },
  ];

  const handleFormSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div>
      <h2>Ejemplo de Formulario</h2>
      <CustomForm
        fields={fields}
        onSubmit={handleFormSubmit}
        submitText="Registrar"
        isLoading={false}
      />
    </div>
  );
};

export default ExampleForm;
*/}
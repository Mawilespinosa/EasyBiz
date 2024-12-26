
import PropTypes from "prop-types"; // Para validación de props
import Button from "react-bootstrap/Button"; // Usamos Bootstrap para estilos

const CustomButton = ({ text, onClick, variant = "primary", size = "md", disabled = false }) => {
  return (
    <Button variant={variant} size={size} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

// Definición de los tipos de props para evitar errores
CustomButton.propTypes = {
  text: PropTypes.string.isRequired, // Texto del botón
  onClick: PropTypes.func.isRequired, // Función que ejecuta al dar clic
  variant: PropTypes.string, // Estilo del botón (primary, secondary, etc.)
  size: PropTypes.string, // Tamaño (sm, md, lg)
  disabled: PropTypes.bool, // Si el botón está deshabilitado
};

export default CustomButton;

{/* Ejemplo Como usarlo */}

{/*
import React from "react";
import CustomButton from "../components/common/Button";

const Example = () => {
  const handleClick = () => {
    console.log("Botón presionado");
  };

  return (
    <div>
      <h1>Ejemplo de Botón</h1>
      <CustomButton text="Clic aquí" onClick={handleClick} variant="success" />
    </div>
  );
};

export default Example;
*/}
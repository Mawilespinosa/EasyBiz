
import PropTypes from "prop-types"; // Para validar las props
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CustomCard = ({ 
  title, 
  text, 
  image, 
  buttonText, 
  onButtonClick, 
  children 
}) => {
  return (
    <Card className="mb-4 shadow-sm">
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}
        {children} {/* Para contenido adicional dinámico */}
        {buttonText && onButtonClick && (
          <Button variant="primary" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string, // Título de la tarjeta
  text: PropTypes.string, // Texto principal de la tarjeta
  image: PropTypes.string, // URL de la imagen a mostrar
  buttonText: PropTypes.string, // Texto del botón (opcional)
  onButtonClick: PropTypes.func, // Función que se ejecuta al hacer clic en el botón
  children: PropTypes.node, // Contenido adicional que puede ser renderizado en la tarjeta
};

CustomCard.defaultProps = {
  title: "",
  text: "",
  image: null,
  buttonText: "",
  onButtonClick: null,
};

export default CustomCard;

{/* Ejemplo Como usarlo */}

{/*
import React from "react";
import CustomCard from "../components/common/Card";

const ExampleCards = () => {
  const handleCardButtonClick = (id) => {
    console.log("Botón de la tarjeta clickeado, ID:", id);
  };

  return (
    <div className="d-flex flex-wrap gap-3">
      <CustomCard
        title="Título 1"
        text="Este es el texto de la primera tarjeta."
        image="https://via.placeholder.com/150"
        buttonText="Más información"
        onButtonClick={() => handleCardButtonClick(1)}
      />
      <CustomCard
        title="Título 2"
        text="Este es el texto de la segunda tarjeta."
        buttonText="Ver más"
        onButtonClick={() => handleCardButtonClick(2)}
      />
      <CustomCard
        title="Título 3"
        text="Tarjeta sin botón ni imagen."
      />
    </div>
  );
};

export default ExampleCards;

*/}

import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CustomModal = ({
  show,
  onClose,
  title,
  body,
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      {title && <Modal.Header closeButton><Modal.Title>{title}</Modal.Title></Modal.Header>}
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {cancelText}
        </Button>
        {onConfirm && (
          <Button variant="primary" onClick={onConfirm}>
            {confirmText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired, // Controla si el modal está visible
  onClose: PropTypes.func.isRequired, // Función para cerrar el modal
  title: PropTypes.string, // Título del modal (opcional)
  body: PropTypes.node.isRequired, // Contenido del cuerpo del modal
  onConfirm: PropTypes.func, // Función a ejecutar al confirmar (opcional)
  confirmText: PropTypes.string, // Texto del botón de confirmación (opcional)
  cancelText: PropTypes.string, // Texto del botón de cancelación (opcional)
};

export default CustomModal;

{/* Ejemplo Como usarlo  */}
{/*
import React, { useState } from "react";
import CustomModal from "../components/common/Modal";

const ExampleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleConfirmAction = () => {
    console.log("Acción confirmada");
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleOpenModal}>
        Abrir Modal
      </button>

      <CustomModal
        show={isModalOpen}
        onClose={handleCloseModal}
        title="Confirmar acción"
        body={<p>¿Estás seguro de realizar esta acción?</p>}
        onConfirm={handleConfirmAction}
        confirmText="Sí, continuar"
        cancelText="Cancelar"
      />
    </div>
  );
};

export default ExampleModal;
*/}
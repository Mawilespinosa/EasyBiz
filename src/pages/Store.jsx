import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

// Datos de ejemplo (luego se conectará con el backend)
const productosEjemplo = [
  { id: 1, nombre: "Producto A", categoria: "Electrónica", precio: 50 },
  { id: 2, nombre: "Producto B", categoria: "Ropa", precio: 30 },
  { id: 3, nombre: "Producto C", categoria: "Hogar", precio: 20 },
];

const Tienda = () => {
  const [productos, setProductos] = useState(productosEjemplo);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  // Filtrar productos según búsqueda y categoría
  const productosFiltrados = productos.filter((producto) => {
    return (
      (categoria === "Todas" || producto.categoria.toLowerCase() === categoria.toLowerCase()) &&
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <Container className="mt-4 tienda-container">
      <h1 className="text-center">Tienda</h1>

      {/* Barra de búsqueda y filtro */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="Todas">Todas las categorías</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Ropa">Ropa</option>
            <option value="Hogar">Hogar</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Lista de productos */}
      <Row>
        {productosFiltrados.map((producto) => (
          <Col md={4} key={producto.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Tienda;



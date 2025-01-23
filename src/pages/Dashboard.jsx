import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import DashboardChart from "../components/DashboardChart/DashboardChart";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(null);
  const {user} = useAuth();

  useEffect(() => {
    // Simulación de datos
    setTimeout(() => {
      const data = {
        admin: {
          usersRegistered: 1250,
          totalSales: 12000,
          transactions: 300,
          monthlySales: [500, 800, 900, 1000, 1200, 1500, 1700, 1800, 2000, 2100, 2200, 2300],
        },
        users: {
          activeProducts: 15,
          totalIncome: 3200,
          activeClients: 8,
          monthlySales: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
        },
      };
      setMetrics(user.role == 1 ? data.admin : data.users);
      setLoading(false);
    }, 1500);
  }, [user.role]);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" variant="primary" />
        <p>Cargando datos...</p>
      </Container>
    );
  }

  const salesData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [
      {
        label: "Ventas Mensuales",
        data: metrics.monthlySales,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ventas Mensuales en el Año",
      },
    },
  };

  const renderAdminMetrics = () => (
    <>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Usuarios Registrados</Card.Title>
              <Card.Text>{metrics.usersRegistered}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total de Ventas</Card.Title>
              <Card.Text>${metrics.totalSales}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Transacciones del Mes</Card.Title>
              <Card.Text>{metrics.transactions}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <DashboardChart type="bar" data={salesData} options={options} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );

  const renderUserMetrics = () => (
    <>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Productos Activos</Card.Title>
              <Card.Text>{metrics.activeProducts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total de Ingresos</Card.Title>
              <Card.Text>${metrics.totalIncome}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Clientes Activos</Card.Title>
              <Card.Text>{metrics.activeClients}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <DashboardChart type="bar" data={salesData} options={options} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );

  return (
    <Container className="mt-4">
      <h1 className="text-center">Dashboard</h1>
      {user.role == 1 ? renderAdminMetrics() : renderUserMetrics()}
    </Container>
  );
};

export default Dashboard;




import {
    HomeIcon,
    ShoppingCartIcon,
    AcademicCapIcon,
  } from "@heroicons/react/outline";

function Services() {
  return (
    <div className="services">
    <div className="service-card">
      <div className="icon-container">
        <HomeIcon className="icon" />
      </div>
      <h2>Página de Presentación</h2>
      <p>Diseña una página profesional para mostrar tu negocio.</p>
    </div>
    <div className="service-card">
      <div className="icon-container">
        <ShoppingCartIcon className="icon" />
      </div>
      <h2>Tienda de Productos</h2>
      <p>Vende tus productos de forma fácil y segura.</p>
    </div>
    <div className="service-card">
      <div className="icon-container">
        <AcademicCapIcon className="icon" />
      </div>
      <h2>Cursos Online</h2>
      <p>Crea y aloja cursos para que tus clientes aprendan.</p>
    </div>
  </div>
  )
}

export default Services

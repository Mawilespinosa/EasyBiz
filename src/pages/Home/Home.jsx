import { useNavigate } from "react-router-dom";
import "./Home.css"
import {
  HomeIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
{/* import components */}
import Hero from "./H_Components/Hero"
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* Hero Section */}
      <Hero navigate={navigate} />

      {/* Servicios */}
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

      {/* Testimonios */}
      <div className="testimonials">
        <h2>Testimonios de Usuarios</h2>
        <p>Descubre cómo EmprendeFácil ha ayudado a otros emprendedores.</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="https://via.placeholder.com/100" alt="Usuario 1" />
            <h3>Juan Pérez</h3>
            <p>
              &quot;EmprendeFácil me permitió profesionalizar mi negocio y aumentar
              mis ventas en un 30%.&quot;
            </p>
          </div>
          <div className="testimonial-card">
            <img src="https://via.placeholder.com/100" alt="Usuario 2" />
            <h3>María López</h3>
            <p>
              &quot;Gracias a esta plataforma, mis clientes pueden acceder a mis
              cursos de manera sencilla.&quot;
            </p>
          </div>
          <div className="testimonial-card">
            <img src="https://via.placeholder.com/100" alt="Usuario 3" />
            <h3>Carlos Fernández</h3>
            <p>
              &quot;La facilidad de uso de EmprendeFácil me permitió enfocarme en
              hacer crecer mi negocio.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <h2>¿Listo para transformar tu negocio?</h2>
        <p>Regístrate ahora y lleva tu emprendimiento al siguiente nivel.</p>
        <button onClick={() => navigate("/EasyBiz/register")}>
          Regístrate Gratis
        </button>
      </div>
    </div>
  );
};

export default Home;
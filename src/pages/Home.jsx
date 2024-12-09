import React from "react";
import {
  HomeIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Impulsa tu negocio con nosotros
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Crea tu página, vende productos y aloja tus cursos en un solo lugar.
        </p>
        <button onClick={() => navigate("/EasyBiz/register")} className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          Comienza Ahora
        </button>
      </div>

      {/* Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <HomeIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold">Página de Presentación</h2>
          <p className="mt-2 text-gray-600">
            Diseña una página profesional para mostrar tu negocio.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <ShoppingCartIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold">Tienda de Productos</h2>
          <p className="mt-2 text-gray-600">
            Vende tus productos de forma fácil y segura.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <AcademicCapIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold">Cursos Online</h2>
          <p className="mt-2 text-gray-600">
            Crea y aloja cursos para que tus clientes aprendan.
          </p>
        </div>
      </div>

      {/* Testimonios */}
      <div className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Testimonios de Usuarios
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Descubre cómo EmprendeFácil ha ayudado a otros emprendedores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
          {/* Testimonio 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Usuario 1"
              className="h-24 w-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-center">Juan Pérez</h3>
            <p className="mt-2 text-gray-600 text-center">
              "EmprendeFácil me permitió profesionalizar mi negocio y aumentar
              mis ventas en un 30%."
            </p>
          </div>
          {/* Testimonio 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Usuario 2"
              className="h-24 w-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-center">
              María López
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              "Gracias a esta plataforma, mis clientes pueden acceder a mis
              cursos de manera sencilla."
            </p>
          </div>
          {/* Testimonio 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Usuario 3"
              className="h-24 w-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-center">
              Carlos Fernández
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              "La facilidad de uso de EmprendeFácil me permitió enfocarme en
              hacer crecer mi negocio."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          ¿Listo para transformar tu negocio?
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Regístrate ahora y lleva tu emprendimiento al siguiente nivel.
        </p>
        <button
          onClick={() => navigate("/EasyBiz/register")}
          className="mt-6 px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Regístrate Gratis
        </button>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">EmprendeFácil</h2>
            <p className="text-sm mt-2">
              La plataforma para emprendedores que quieren crear, vender y aprender.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row text-center">
            <button
              onClick={() => navigate("/home")}
              className="hover:text-gray-400"
            >
              Inicio
            </button>
            <button
              onClick={() => navigate("/products")}
              className="hover:text-gray-400"
            >
              Productos
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="hover:text-gray-400"
            >
              Cursos
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-gray-400"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button onClick={() => navigate("/facebook")} className="hover:text-gray-400">
              Facebook
            </button>
            <button onClick={() => navigate("/twitter")} className="hover:text-gray-400">
              Twitter
            </button>
            <button onClick={() => navigate("/instagram")} className="hover:text-gray-400">
              Instagram
            </button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} EmprendeFácil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



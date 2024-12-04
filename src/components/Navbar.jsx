import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("/home")}
              className="text-2xl font-bold hover:text-blue-300"
            >
              EmprendeFácil
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => navigate("/home")}
              className="hover:text-blue-300"
            >
              Inicio
            </button>
            <button
              onClick={() => navigate("/products")}
              className="hover:text-blue-300"
            >
              Productos
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="hover:text-blue-300"
            >
              Cursos
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-blue-300"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <button
            onClick={() => {
              navigate("/home");
              setIsOpen(false);
            }}
            className="block px-4 py-2 hover:bg-blue-500"
          >
            Inicio
          </button>
          <button
            onClick={() => {
              navigate("/products");
              setIsOpen(false);
            }}
            className="block px-4 py-2 hover:bg-blue-500"
          >
            Productos
          </button>
          <button
            onClick={() => {
              navigate("/courses");
              setIsOpen(false);
            }}
            className="block px-4 py-2 hover:bg-blue-500"
          >
            Cursos
          </button>
          <button
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
            className="block px-4 py-2 hover:bg-blue-500"
          >
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

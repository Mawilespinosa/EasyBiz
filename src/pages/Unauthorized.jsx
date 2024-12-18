import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <h1 className="text-danger">No Autorizado</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <Link to="/EasyBiz/home" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Unauthorized;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Contexto de autenticación

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleChoice, setRoleChoice] = useState("client"); // client o business
  const [active, setActive] = useState(""); // Mensaje de error o estado
  const navigate = useNavigate();
  const { login } = useAuth(); // Método del contexto para iniciar sesión

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.davidespinosaoficial.com/EmprendeFacilBackend/login.php",
        { email, password }
      );

      if (response.data.success) {
        const user = response.data.user;

        // Llamar a la función de login desde el AuthContext
        login({
          role: user.role_id, // 1 = superusuario, 2 = usuario normal
          email: user.email,
          roleChoice, // Cliente o negocio
        });

        // Redirigir según el rol del usuario
        if (user.role_id === 1) {
          navigate("/EasyBiz/admin-dashboard");
        } else if (user.role_id === 2) {
          navigate(
            roleChoice === "client"
              ? "/EasyBiz/client-dashboard"
              : "/EasyBiz/business-dashboard"
          );
        }
      } else {
        setActive(response.data.message); // Mostrar mensaje de error
        setPassword(""); // Limpiar la contraseña
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      setActive("Error al iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Correo:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Selecciona tu rol:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="roleChoice"
                value="client"
                checked={roleChoice === "client"}
                onChange={() => setRoleChoice("client")}
              />
              Cliente
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="roleChoice"
                value="business"
                checked={roleChoice === "business"}
                onChange={() => setRoleChoice("business")}
              />
              Gestionar Negocio
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Ingresar
        </button>
        {active && <p className="text-red-500 mt-3">{active}</p>}
      </form>
    </div>
  );
};

export default Login;





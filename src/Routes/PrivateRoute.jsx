import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  // Verifica si el usuario está autenticado y tiene el rol adecuado
  if (!user) {
    return <Navigate to="/EasyBiz/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/EasyBiz/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;


import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  return user && allowedRoles.includes(user.role) ? (
    <Outlet />
    
  ) : (
    <Navigate to="/EasyBiz/login" replace />
  );
};

export default PrivateRoute;



import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = () => {
  const { user } = useAuth();
if(!user){
    console.log("no esta autenticado")
}
  return !user ? <Outlet /> : <Navigate to="/EasyBiz/home" replace />;
};

export default PublicRoute;

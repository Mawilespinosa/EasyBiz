import {Routes,Route,Navigate} from 'react-router-dom'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'

{/* Paginas */}
import Home from '../pages/Home/Home'
import Register from '../components/Forms/Register'
import Login from '../components/Forms/Login'
import Dashboard from '../pages/dashboard'
import Store from '../pages/Store'
import Admin from '../pages/Admin'
import Unauthorized from '../pages/Unauthorized'
import ManagementPage from '../pages/ManagementPage'

function AppRoutes() { 

  return (
    <Routes>     
      {/* Rutas Generales */}
        <Route path="/EasyBiz/" element={<Home />} />
        <Route path="/EasyBiz/home" element={<Home />} />
        <Route path="/EasyBiz/unauthorized" element={<Unauthorized />} />
        {/* Rutas publicas */}
        <Route element={<PublicRoute />}>
          <Route path="/EasyBiz/register" element={<Register />} />
          <Route path="/EasyBiz/login" element={<Login />} />                    
        </Route>
      {/* Rutas Privadas */}
        <Route element={<PrivateRoute allowedRoles={[1]} />}>
            <Route path="/EasyBiz/admin-dashboard" element={<Admin/>} />
        </Route>    

        <Route element={<PrivateRoute allowedRoles={[1,2]} />}>
            <Route path="/EasyBiz/business" element={<Dashboard />} />
            <Route path="/EasyBiz/client" element={<Store />} />
            <Route path="/EasyBiz/Management" element={<ManagementPage />} />
        </Route>     
        <Route path="*" element={<Navigate to="/EasyBiz/home" replace />} />  
    </Routes>
  )
}

export default AppRoutes

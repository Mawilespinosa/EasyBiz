import {Routes,Route,Navigate} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

 {/* Paginas */}
import Home from '../pages/Home/Home'
import Register from '../components/Forms/Register'
import Login from '../components/Forms/Login'
import Dashboard from '../pages/dashboard'
import Store from '../pages/Store'
import Admin from '../pages/Admin'
import Unauthorized from '../pages/Unauthorized'

function AppRoutes() { 

  return (
    <Routes>     
        {/* Rutas publicas */}

        <Route path="/EasyBiz/" element={<Home />} />
        <Route path="/EasyBiz/home" element={<Home />} />
        <Route path="/EasyBiz/register" element={<Register />} />
        <Route path="/EasyBiz/login" element={<Login />} />
        <Route path="/EasyBiz/unauthorized" element={<Unauthorized />} />
        {/* Rutas Privadas */}

        <Route element={<PrivateRoute allowedRoles={[1]} />}>
            <Route path="/EasyBiz/admin-dashboard" element={<Admin/>} />
        </Route>    

        <Route element={<PrivateRoute allowedRoles={[1,2]} />}>
            <Route path="/EasyBiz/business-dashboard" element={<Dashboard />} />
            <Route path="/EasyBiz/client-dashboard" element={<Store />} />
        </Route>     
        <Route path="*" element={<Navigate to="/EasyBiz/home" replace />} />  
    </Routes>
  )
}

export default AppRoutes
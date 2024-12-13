import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
/* import Products from './pages/Products'
import Courses from './pages/Courses'
import Contact from './pages/Contact' */
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/dashboard'
import Store from './pages/Store'
import Admin from './pages/Admin'
import './styles/styles.css';


function App() {

  return (
    <>
      <Navbar/>
      <main>
          <Routes>
            <Route path="/EasyBiz/" element={<Home />} />
            <Route path="/EasyBiz/home" element={<Home />} />
            <Route path="/EasyBiz/admin-dashboard" element={<Admin />} />
            <Route path="/EasyBiz/business-dashboard" element={<Dashboard />} />
            <Route path="/EasyBiz/client-dashboard" element={<Store />} /> 
            <Route path="/EasyBiz/register" element={<Register />} />
            <Route path="/EasyBiz/login" element={<Login />} />
          </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App


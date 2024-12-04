import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
/* import Products from './pages/Products'
import Courses from './pages/Courses'
import Contact from './pages/Contact' */
import Register from './pages/Register'


function App() {

  return (
    <>
      <Navbar/>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
{/*             <Route path="/products" element={<Products />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="/register" element={<Register />} />
          </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App


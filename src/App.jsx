import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/styles.css';


function App() {

  return (
    <>
      <Navbar/>
      <main>
        <AppRoutes/>
      </main>
      <Footer/>
    </>
  )
}

export default App


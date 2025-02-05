
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './styles/styles.css';


function App() {

  return (
    <>
     <div id="rootspace">
      <Navbar/>
      <main>
        <AppRoutes/>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App


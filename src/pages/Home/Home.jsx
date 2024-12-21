import { useNavigate } from "react-router-dom";
import "./Home.css"

{/* import components */}
import Hero from "./H_Components/Hero"
import Services from "./H_Components/Services"
import Testimonials from "./H_Components/Testimonials"
import CallToAction from "./H_Components/CallToAction";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">

      {/* Hero Section */}
      <Hero navigate={navigate} />

      {/* Servicios */}
      <Services/>

      {/* Testimonios */}
      <Testimonials/>

      {/* Call to Action */}
      <CallToAction navigate={navigate}/>
      
    </div>
  );
};

export default Home;

import CustomButton from "../../../components/Shared/Button";


function Hero({ navigate }) {    
  
  return (

    <div className="hero">
      <h1>Impulsa tu negocio con nosotros</h1>
      <p>
        Crea tu página, vende productos y aloja tus cursos en un solo lugar.
      </p>
      <CustomButton text="Comienza Ahora" variant="success" onClick={() => navigate("/EasyBiz/register")}/>
    </div>
  );
}

export default Hero

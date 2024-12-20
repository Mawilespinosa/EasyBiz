
function Hero({ navigate }) {    
  
  return (

    <div className="hero">
      <h1>Impulsa tu negocio con nosotros</h1>
      <p>
        Crea tu página, vende productos y aloja tus cursos en un solo lugar.
      </p>
      <button onClick={() => navigate("/EasyBiz/register")}>
        Comienza Ahora
      </button>
    </div>
  );
}

export default Hero

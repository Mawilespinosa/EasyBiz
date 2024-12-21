
function CallToAction({navigate}) {
  return (
    <div className="call-to-action">
      <h2>¿Listo para transformar tu negocio?</h2>
      <p>Regístrate ahora y lleva tu emprendimiento al siguiente nivel.</p>
      <button onClick={() => navigate("/EasyBiz/register")}>
        Regístrate Gratis
      </button>
    </div>
  );
}

export default CallToAction;

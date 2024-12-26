import CustomButton from "../../../components/Shared/Button";

function CallToAction({navigate}) {
  return (
    <div className="call-to-action">
      <h2>¿Listo para transformar tu negocio?</h2>
      <p>Regístrate ahora y lleva tu emprendimiento al siguiente nivel.</p>
      <CustomButton text="Regístrate Gratis" onClick={() => navigate("/EasyBiz/register")}/>
    </div>
  );
}

export default CallToAction;

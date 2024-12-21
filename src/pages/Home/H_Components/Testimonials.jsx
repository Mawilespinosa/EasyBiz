
function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Testimonios de Usuarios</h2>
      <p>Descubre cómo EmprendeFácil ha ayudado a otros emprendedores.</p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/100" alt="Usuario 1" />
          <h3>Juan Pérez</h3>
          <p>
            &quot;EmprendeFácil me permitió profesionalizar mi negocio y
            aumentar mis ventas en un 30%.&quot;
          </p>
        </div>
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/100" alt="Usuario 2" />
          <h3>María López</h3>
          <p>
            &quot;Gracias a esta plataforma, mis clientes pueden acceder a mis
            cursos de manera sencilla.&quot;
          </p>
        </div>
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/100" alt="Usuario 3" />
          <h3>Carlos Fernández</h3>
          <p>
            &quot;La facilidad de uso de EmprendeFácil me permitió enfocarme en
            hacer crecer mi negocio.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

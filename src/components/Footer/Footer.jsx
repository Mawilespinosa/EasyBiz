

import "./Footer.css"
import logo from "..//..//assets/images/logo.png";

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}

        <div className="footer-container-logo">
          <img className="footer-logo" src={logo} alt="" />
          <div className="span-footer-logo">
            <span > La plataforma para emprendedores que quieren crear,<br /> vender y aprender.</span>              
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} EmprendeFácil. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

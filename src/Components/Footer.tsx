import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <img src="/public/images/logo.png" alt="Logo de la tienda" className="footer__logo" />
          <h3>Al Palo</h3>
          <p>Somos una tienda digital de instrumentos musicales de calidad disponible para todos los amantes de la música.</p>
          <p>Que se escuche tu música Al Palo.</p>
        </div>

        <div className="footer__section">
          <h3>Enlaces</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/products">Productos</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 Al Palo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
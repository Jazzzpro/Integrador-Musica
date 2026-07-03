import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__section">
          <h3>AL palololo</h3>
          <p>Somos una tienda digital </p>
        </div>

        <div className="footer__section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 Mi Sitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
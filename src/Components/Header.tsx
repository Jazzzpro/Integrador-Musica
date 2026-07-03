import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CartContext.tsx';
import './Header.css';

export default function Header() {
  const { getItemQuantity } = useCarritoContext();

  return (
    <header>
      <div className="barra-superior">

        <div className="logo-marca">
          <div className="icono-logo">
            <img src="/public/images/logo.png" alt="Logo de la tienda" />
          </div>
          <div className="texto-marca">
            <h1>Al Palo</h1>
            <span>Tienda de Instrumentos musicales</span>
          </div>
        </div>

        <div className="acciones">
          <nav className="navegacion">
            <Link to="/" className="active">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/contact">Contacto</Link>
          </nav>

          <Link to="/cart" className="boton-carrito">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {getItemQuantity() > 0 && (
              <span className="contador">{getItemQuantity()}</span>
            )}
          </Link>
        </div>

      </div>
    </header>
  );
}
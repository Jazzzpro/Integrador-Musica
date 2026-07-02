import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CartContext.tsx';
import './Header.css';

export default function Header() {
  const { getItemQuantity } = useCarritoContext();

  return (
    <header>
      <div className="barra-superior">

        <div className="logo-marca">
          <div className="icono-logo">♫</div>
          <div className="texto-marca">
            <h1>Al Palo</h1>
            <span>en donde la musica se escucha al palo</span>
          </div>
        </div>

        <div className="acciones">
          <nav className="navegacion">
            <Link to="/" className="active">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/contact">Contacto</Link>
          </nav>

          <div className="buscador">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar instrumentos..." />
          </div>

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
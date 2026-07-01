import './Header.css';

export default function Header() {
  return (
    <header>
      {/* Barra superior principal */}
      <div className="top-bar">
        
        {/* Logo / Identidad */}
        <div className="brand">
          <div className="logo-icon">♫</div>
          <div className="brand-text">
            <h1>Al Palo</h1>
            <span>INSTRUMENTOS - AR</span>
          </div>
        </div>

        {/* Enlaces de Navegación Centrales */}
        <nav className="main-links">
          <a href="#" className="active">Inicio</a>
          <a href="#">Ofertas</a>
          <a href="#">Novedades</a>
          <a href="#">Marcas</a>
          <a href="#">Blog</a>
        </nav>

        {/* Acciones de la Derecha (Buscador, Carrito y Perfil) */}
        <div className="right-actions">
          
          {/* Caja de Búsqueda que se expande según el boceto */}
          <div className="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar instrumentos..." />
          </div>

          {/* Botón del Carrito con el Badge de notificación */}
          <div className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="badge">3</span>
          </div>

          {/* Avatar de Usuario (JZ) con el mismo color violeta plano */}
          <div className="avatar">JZ</div>
        </div>
      </div>

      {/* Barra secundaria de Categorías con formato de botones/pastillas */}
      <div className="categories">
        <a href="#" className="active">▦ Todos</a>
        <a href="#">🛡 Guitarras</a>
        <a href="#">🎚 Bajos</a>
        <a href="#">🎹 Teclados</a>
        <a href="#">🥁 Batería</a>
        <a href="#">🎧 Audio</a>
        <a href="#">🎙 Grabación</a>
        <a href="#">Cuerdas</a>
      </div>
    </header>
  );
}
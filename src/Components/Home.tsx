import ProductList from "./ProductList.tsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-layout">

      {/* Carrusel */}
      <div id="carrusel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carrusel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carrusel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carrusel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200" className="d-block w-100 carrusel-img" alt="Guitarras" />
            <div className="carousel-caption">
              <h2>Guitarras</h2>
              <p>Las mejores marcas al mejor precio</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200" className="d-block w-100 carrusel-img" alt="Pianos" />
            <div className="carousel-caption">
              <h2>Pianos y Teclados</h2>
              <p>Para principiantes y profesionales</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/public/baterias.jpg" className="d-block w-100 carrusel-img" alt="Baterías" />
            <div className="carousel-caption">
              <h2>Baterías</h2>
              <p>Sentí el ritmo</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="container py-4">
        <ProductList limit={10} />
      </div>
      <div className="text-center mt-4">
          <Link to="/products" className="btn btn-primary btn-lg">Ver todos los productos</Link>
        </div>
      
    </div>
  );
};

export default Home;
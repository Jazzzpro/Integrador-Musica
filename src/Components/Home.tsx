import ProductList from "./ProductList.tsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-layout">
      <header className="store-header text-center py-4 bg-light">
        <h1 className="store-brand__name">Al palo</h1>
      </header>

      <div className="home-content container py-4">
        <p className="store-brand__tagline">En donde la música se escuche al palo</p>
        <main className="home-main">
          <ProductList limit={10} />
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary btn-lg">
              Ver todos los productos →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};



export default Home;
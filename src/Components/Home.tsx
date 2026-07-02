import ProductList from "./ProductList.tsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-layout">
      <div className="home-content container py-4">
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
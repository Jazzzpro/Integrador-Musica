import { productos } from "../data/products.ts";
import ProductCard from "./ProductCard.tsx";

interface ProductListProps {
  limit?: number  // opcional: si no se pasa, muestra todos
}

const ProductList = ({ limit }: ProductListProps) => {
  const visibleProducts = limit ? productos.slice(0, limit) : productos;

  return (
    <section className="product-list-section">
      <h2 className="section-title text-center mb-4">
      Instrumentos disponibles
      </h2>
      <div className="product-grid row g-4">
        {visibleProducts.map((productos) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={productos.id}>
            <ProductCard product={productos} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
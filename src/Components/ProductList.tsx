import { productos } from "../data/products.ts";
import ProductCard from "./ProductCard.tsx";

const ProductList = () => {
  return (
    <section className="product-list-section">
      <h2 className="section-title text-center mb-4">
        Catálogo de Productos
      </h2>
      <div className="product-grid row g-4">
        {productos.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
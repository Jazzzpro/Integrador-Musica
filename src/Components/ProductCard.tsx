import { useState } from "react";
import { useCarritoContext } from "../context/CartContext.tsx";
import type { Product } from "../data/products.ts";
import './ProductCard.css';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCarritoContext();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const formatPrice = (precio: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(precio);

  return (
    <div className="carta">

      <div className="carta__imagen">
        <img src={product.img} alt={product.nombre} loading="lazy" />
      </div>

      <div className="carta__info">
        <span className="carta__marca">{product.marca}</span>
        <h5 className="carta__nombre">{product.nombre}</h5>

        <p className={`carta__stock ${product.stock <= 2 ? "carta__stock--bajo" : "carta__stock--ok"}`}>
          {product.stock <= 2 ? `⚠ Solo ${product.stock} en stock` : `✓ Stock: ${product.stock}`}
        </p>

        <div className="carta__pie">
          <div className="carta__precio-wrap">
            <span className="carta__precio">{formatPrice(product.precio)}</span>
            <div className="carta__cantidad-wrap">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => Math.min(product.stock, q + 1))}>+</button>
            </div>
          </div>

          <button
            className={`carta__boton ${added ? "carta__boton--agregado" : ""}`}
            onClick={handleAdd}
            disabled={product.stock === 0}
          >
            {added ? "✓" : "🛒"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
import { useState } from "react";
import { useCarritoContext } from "../context/CartContext.tsx";
import type { Product } from "../data/products.ts";

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
    <div className="poke-card card h-100 shadow-sm">
      <div className="poke-card__img-wrap">
        <img src={product.img} className="poke-card__img card-img-top" alt={product.nombre} loading="lazy" />
      </div>
      <div className="poke-card__body card-body d-flex flex-column">
        <h5 className="poke-card__name card-title">{product.nombre}</h5>
        <span className="poke-card__brand text-muted">{product.marca}</span>
        <p className="poke-card__price fw-bold mt-2">{formatPrice(product.precio)}</p>
        <p className={`poke-card__stock ${product.stock <= 2 ? "low text-danger" : "text-success"}`}>
          {product.stock <= 2 ? `⚠ Solo ${product.stock} en stock` : `✓ Stock: ${product.stock}`}
        </p>
        <div className="poke-card__actions mt-auto d-flex gap-2">
          <input
            type="number"
            className="poke-card__qty form-control"
            min={1}
            max={product.stock}
            value={qty}
            onChange={(e) => setQty(Math.min(Number(e.target.value), product.stock))}
          />
          <button
            className={`poke-card__btn btn btn-primary ${added ? "added" : ""}`}
            onClick={handleAdd}
            disabled={product.stock === 0}
          >
            {added ? "✓" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import { useCarritoContext } from "../context/CartContext.tsx";
import "./Cart.css";

const Cart = () => {
  const { carrito, removeItem, emptyCart, getTotalPrice } = useCarritoContext();

  const formatPrice = (precio: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(precio);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="carrito">

      {/* Columna izquierda — productos */}
      <div className="carrito__lista">
        <div className="carrito__encabezado">
          <span>Producto</span>
          <span>Precio</span>
          <span>Cantidad</span>
          <span>Subtotal</span>
          <span></span>
        </div>

        {carrito.map((item) => (
          <div className="carrito__fila" key={item.id}>
            <div className="carrito__producto">
              <img src={item.img} alt={item.nombre} />
              <div>
                <p className="carrito__nombre">{item.nombre}</p>
                <span className="carrito__marca">{item.marca}</span>
              </div>
            </div>
            <span className="carrito__precio">{formatPrice(item.precio)}</span>
            <span className="carrito__cantidad">{item.quantity}</span>
            <span className="carrito__subtotal">{formatPrice(item.precio * item.quantity)}</span>
            <button className="carrito__eliminar" onClick={() => removeItem(item.id)}>✕</button>
          </div>
        ))}

        <button className="carrito__vaciar" onClick={emptyCart}>
          Vaciar carrito
        </button>
      </div>

      {/* Columna derecha — resumen */}
      <div className="carrito__resumen">
        <h3 className="carrito__resumen-titulo">Resumen del pedido</h3>

        <div className="carrito__resumen-lineas">
          <div className="carrito__resumen-fila">
            <span>Productos</span>
            <span>{carrito.reduce((acc, i) => acc + i.quantity, 0)}</span>
          </div>
          <div className="carrito__resumen-fila">
            <span>Subtotal</span>
            <span>{formatPrice(getTotalPrice())}</span>
          </div>
          <div className="carrito__resumen-fila">
            <span>Envío</span>
            <span>A coordinar</span>
          </div>
        </div>

        <div className="carrito__resumen-total">
          <span>Total</span>
          <span>{formatPrice(getTotalPrice())}</span>
        </div>

        <button className="carrito__checkout">
          Finalizar compra
        </button>
      </div>

    </div>
  );
};

export default Cart;
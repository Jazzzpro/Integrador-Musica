import { useState } from "react"; // 1. Importamos useState
import { useCarritoContext } from "../context/CartContext.tsx";
import "./Cart.css";

const Cart = () => {
  const { carrito, removeItem, emptyCart, getTotalPrice } = useCarritoContext();
  
  // 2. Estados para controlar el modal y el spinner de carga
  const [procesando, setProcesando] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);

  const formatPrice = (precio: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(precio);

  // 3. Función para manejar la acción de finalizar compra
  const handleCheckout = () => {
    setProcesando(true);

    // Simulamos una petición al servidor/API de 3 segundos
    setTimeout(() => {
      setProcesando(false);
      setCompraExitosa(true);
      
      // Opcional: Aquí podrías vaciar el carrito después de unos segundos
      setTimeout(() => {
        emptyCart();
        setCompraExitosa(false);
      }, 3000);
      
    }, 3000);
  };

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Eh no tenés nada</h2>
      </div>
    );
  }
  
  return (
    <div className="carrito">

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

        <button className="carrito__checkout" onClick={handleCheckout}>
          Finalizar compra
        </button>
      </div>
      {(procesando || compraExitosa) && (
        <div className="cart-modal-overlay">
          <div className="cart-modal-content text-center p-4 rounded">
            {procesando ? (
              <>
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <h3>Procesando tu compra...</h3>
              </>
            ) : (
              <>
                <div className="success-icon mb-3" style={{ fontSize: "3rem", color: "#198754" }}>
                  ✓
                </div>
                <h3>¡Muchas gracias por tu compra!</h3>
                <p className="text-muted">El pedido ha sido procesado con éxito.</p>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
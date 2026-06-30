import { useCarritoContext } from "../context/CartContext.tsx";

const Cart = () => {
  const { carrito, removeItem, emptyCart, getTotalPrice } = useCarritoContext();

  const formatPrice = (precio: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(precio);

  if (carrito.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Eh no tenés nada</h2>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Tu Carrito</h2>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td className="d-flex align-items-center gap-2">
                <img src={item.img} alt={item.nombre} width={50} />
                {item.nombre}
              </td>
              <td>{formatPrice(item.precio)}</td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.precio * item.quantity)}</td>
              <td>
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-outline-secondary" onClick={emptyCart}>
          Vaciar carrito
        </button>
        <h4>Total: {formatPrice(getTotalPrice())}</h4>
      </div>
    </div>
  );
};

export default Cart;
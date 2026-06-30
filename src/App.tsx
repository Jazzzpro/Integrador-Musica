import { Routes, Route, Link } from "react-router-dom";
import { CarritoProvider, useCarritoContext } from "./context/CartContext.tsx";
import Home from "./Components/Home.tsx";
import Cart from "./Components/Cart";
import  Contact from "./Components/Contact";

const NavBar = () => {
  const { getItemQuantity } = useCarritoContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Al Palo Store</Link>
      <div className="d-flex gap-3">
        <Link className="nav-link text-white" to="/">Inicio</Link>
        <Link className="nav-link text-white" to="/contact">Contactos</Link>
        <Link className="nav-link text-white" to="/about">Productos</Link>
        <Link className="nav-link text-white position-relative" to="/cart">
          🛒 Carrito
          {getItemQuantity() > 0 && (
            <span className="badge bg-danger rounded-pill ms-1">
              {getItemQuantity()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <CarritoProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CarritoProvider>
  );
};

export default App;
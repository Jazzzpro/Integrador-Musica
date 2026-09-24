import { Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext.tsx";
import Home from "./Components/Home.tsx";
import Cart from "./Components/Cart.tsx";
import Contact from "./Components/Contact.tsx";
import Products from "./Components/Products.tsx";
import PublicLayout from "./Components/PublicLayout.tsx";
import ModuloAdmin from "./Components/ModuloAdmin.tsx";
import './App.css';

const App = () => {
  return (
    <CarritoProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<ModuloAdmin />} />
      </Routes>
    </CarritoProvider>
  );
};

export default App;

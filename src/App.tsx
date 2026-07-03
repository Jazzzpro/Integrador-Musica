import { Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext.tsx";
import Home from "./Components/Home.tsx";
import Cart from "./Components/Cart.tsx";
import Contact from "./Components/Contact.tsx";
import Products from "./Components/Products.tsx";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import './App.css';

const App = () => {
  return (
    <CarritoProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CarritoProvider>
  );
};

export default App;
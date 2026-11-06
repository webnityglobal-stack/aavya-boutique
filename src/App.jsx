import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => { setCart(items => [...items, product]); window.alert(`${product.name} added to your demo bag.`); };
  return <><AnnouncementBar/><Navbar cartCount={cart.length}/><ScrollToTop/><Routes>
    <Route path="/" element={<Home onAdd={addToCart}/>}/>
    <Route path="/shop" element={<Shop onAdd={addToCart}/>}/>
    <Route path="/product/:id" element={<ProductDetails onAdd={addToCart}/>}/>
    <Route path="/collections" element={<Collections/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<main className="site-wrap section-pad"><h1 className="display-title">Page not found</h1><a className="text-link mt-4 inline-flex" href="/">Back home</a></main>}/>
  </Routes><Footer/><WhatsAppButton/></>;
}
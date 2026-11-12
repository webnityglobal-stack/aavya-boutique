
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
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aavya-cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("aavya-cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to bag
  const addToCart = (product) => {
    const size = product.selectedSize || "M";
    const cartKey = `${product.id}-${size}`;
    const handleOrderPlaced = () => {
  setCart([]);
};

    setCart((items) => {
      const existing = items.find(
        (item) => item.cartKey === cartKey
      );

      if (existing) {
        return items.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...items,
        {
          ...product,
          selectedSize: size,
          cartKey,
          quantity: 1,
        },
      ];
    });
  };

  // Update quantity
  const updateQuantity = (cartKey, change) => {
    setCart((items) =>
      items
        .map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                quantity: Math.max(1, item.quantity + change),
              }
            : item
        )
    );
  };

  // Remove product
  const removeFromCart = (cartKey) => {
    setCart((items) =>
      items.filter((item) => item.cartKey !== cartKey)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <AnnouncementBar />

      <Navbar cartCount={cartCount} />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home onAdd={addToCart} />}
        />

        <Route
          path="/shop"
          element={<Shop onAdd={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails onAdd={addToCart} />}
        />

        <Route
          path="/bag"
          element={
            <Bag
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          }
        />

        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/checkout"
  element={
    <Checkout
      cart={cart}
      onOrderPlaced={handleOrderPlaced}
    />
  }
/>

<Route
  path="/order-success"
  element={<OrderSuccess />}
/>

        <Route
          path="*"
          element={
            <main className="site-wrap section-pad">
              <h1 className="display-title">Page not found</h1>
              <a className="text-link mt-4 inline-flex" href="/">
                Back home
              </a>
            </main>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

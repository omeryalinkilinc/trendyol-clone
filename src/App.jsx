import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import MainLayout from "../src/layout/MainLayout.jsx";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import FavoritesPage from "./pages/FavoritesPage";
import ProductDetail from "./pages/ProductDetail.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CartPage from "./pages/CartPage.jsx";
import RecommendedProducts from "./pages/RecommendedProducts";
import CategoryProductPage from "./pages/CategoryProductPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ShoppingCentre from "./pages/ShoppingCentre.jsx";
import CartSidebar from "./components/CartSidebar.jsx";
import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Yeni ürünü sepete ekle
  };
  return (
    <FavoritesProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/favorilerim" element={<FavoritesPage />} />
              <Route
                path="/product/:id"
                element={<ProductDetail addToCart={addToCart} />}
              />
              <Route path="/sepet" element={<CartPage />} />
              <Route path="/sana-ozel" element={<RecommendedProducts />} />
              <Route path="/kategori/:slug" element={<CategoryProductPage />} />
              <Route path="/magaza/:id" element={<ShoppingCentre />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CartSidebar cartItems={cartItems} />
        </BrowserRouter>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;

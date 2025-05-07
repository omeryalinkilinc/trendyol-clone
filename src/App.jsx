import React from "react";
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
function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/favorilerim" element={<FavoritesPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/sepet" element={<CartPage />} />
              <Route path="/sana-ozel" element={<RecommendedProducts />} />
              <Route path="/kategori/:slug" element={<CategoryProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;

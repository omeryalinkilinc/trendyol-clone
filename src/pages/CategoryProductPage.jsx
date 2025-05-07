import React from "react";
import allProducts from "../components/CategoryProductData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/CategoryProductData";
import CategoryProductDetail from "../pages/CategoryProductDetail";
import "../assets/styles/CategoryProductPage.css";

const CategoryProductPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.categorySlug === slug
    );
    setProducts(filtered);
    setLoading(false);
  }, [slug]);
  if (loading) return <p>Yükleniyor...</p>;

  console.log("Slug:", slug);
  return (
    <div className="category_product_detail">
      <aside className="filters"></aside>
      <aside className="search_result_container">
        <div className="search_result_title">
          <h2 className="count_info"> sonuç listeleniyor</h2>
          <div className="search_input">
            <div>
              <div className="select">
                <span>En çok satan</span>
                <i className="i-new-sort-icon search-sort-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="quick_filters">
          <div className="carousel">
            <div className="slider_list">
              <button className="quick_filters_item flash_sale">
                <img src="https://cdn.dsmcdn.com/web/production/flash-sale.svg" />
                <span>Flaş Ürünler</span>
              </button>
              <button className="quick_filters_item product_rating">
                <img src="https://cdn.dsmcdn.com/web/production/high-rated-products.svg" />
                <span>Yüksek Puanlı Ürünler</span>
              </button>
              <button className="quick_filters_item highly_scored_merchant">
                <img src="https://cdn.dsmcdn.com/web/production/best-sellers.svg" />
                <span>Yüksek Puanlı Satıcılar</span>
              </button>
              <button className="quick_filters_item free_cargo">
                <img src="https://cdn.dsmcdn.com/web/production/cargo-free.svg" />
                <span>Kargo Bedava</span>
              </button>
              <button className="quick_filters_item rush_delivery_times">
                <img src="https://cdn.dsmcdn.com/web/production/fast-delivery.svg" />
                <span>Hızlı Teslimat</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <div className="category_product_detail_container">
          {products.map((product) => (
            <ProductCard key={product.id || product.title} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryProductPage;

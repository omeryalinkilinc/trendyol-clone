import React from "react";
import products from "../components/CategoryProductData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/styles/CategoryProductPage.scss";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
const CategoryProductPage = () => {
  const { slug } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products.filter(
        (product) => product.categorySlug === slug
      );

      if (fastDelivery) {
        filtered = filtered.filter((product) => product.fast_delivery);
      }

      if (freeShipping) {
        filtered = filtered.filter((product) => product.shipping_free);
      }

      setFilteredProducts(filtered);
      setLoading(false);
    };

    applyFilters();
  }, [slug, fastDelivery, freeShipping]);

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
              <button
                className={`quick_filters_item free_cargo ${
                  freeShipping ? "active" : ""
                }`}
                onClick={() => setFreeShipping(!freeShipping)}
              >
                <img src="https://cdn.dsmcdn.com/web/production/cargo-free.svg" />
                <span>Kargo Bedava</span>
              </button>
              <button
                className={`quick_filters_item rush_delivery_times ${
                  fastDelivery ? "active" : ""
                }`}
                onClick={() => setFastDelivery(!fastDelivery)}
              >
                <img src="https://cdn.dsmcdn.com/web/production/fast-delivery.svg" />
                <span>Hızlı Teslimat</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <div className="category_product_detail_container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="category_product_card">
                <Link to={`/product/${product.id}`}>
                  <div className="favorite_btn">
                    <i className="wd-fvrt-btn i-heart"></i>
                  </div>
                  <div>
                    <div className="card_img">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product_badges">
                      {product.fast_delivery && (
                        <div className="badge fast_delivery">
                          <i className="i-badge-cargo"></i>
                          <span>HIZLI TESLİMAT</span>
                        </div>
                      )}
                      {product.shipping_free && (
                        <div className="badge shipping_free">
                          <i className="i-my-orders"></i>
                          <span>KARGO BEDAVA</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="category_product_card_body">
                    <div>
                      <div className="product_title">
                        <span>{product.title}</span>
                      </div>
                      <div className="product_starrating">
                        <p>
                          <StarRating />
                        </p>
                      </div>
                    </div>
                    <div className="product_price">
                      <p>{product.price} TL</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Bu kategoriye ait ürün bulunamadı.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryProductPage;

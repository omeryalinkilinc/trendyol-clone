import "../assets/styles/ProductList.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import StarRating from "../components/StarRating.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";
import { data, Link } from "react-router-dom";
import { getProducts } from "../api/api.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  console.log("🎯 favorites context", {
    favorites,
    toggleFavorite,
    isFavorite,
  });

  useEffect(() => {
    getProducts()
      .then((data) => {
        const withSeeAll = [...data, { id: "see-all", isButton: true }];
        setProducts(withSeeAll);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <Swiper
        spaceBetween={5} // Kartlar arasındaki boşluk
        slidesPerView={5} // Aynı anda gösterilen ürünler
        grabCursor={true} // Fareyle kaydırma efekti
        initialSlide={0}
      >
        {products.map((item) =>
          item.isButton ? (
            <SwiperSlide key="see-all">
              <div className="see-all-card">
                <a href="/sana-ozel">Tümünü Gör</a>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={item.id}>
              <Link to={`/product/${item.id}`}>
                <div className="product-card" key={item.id}>
                  <div
                    className="favorite_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(item);
                    }}
                  >
                    <i
                      className={
                        isFavorite(item.id)
                          ? "wd-fvrt-btn i-heart-orange"
                          : "wd-fvrt-btn i-heart"
                      }
                    ></i>
                  </div>

                  <img src={item.images[0]} width={200} alt={item.title} />
                  <div className="product_card_description">
                    <div className="title_container">
                      {item.title}
                      <StarRating rating={item.rating} count={item.stock} />
                    </div>
                    <div className="price_container">{item.price} TL</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default ProductList;

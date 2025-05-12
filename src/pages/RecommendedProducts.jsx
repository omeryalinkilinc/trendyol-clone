import React, { useEffect, useState } from "react";
import "../assets/styles/RecommendedProducts.scss";
import { getProducts } from "../api/api.jsx";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating.jsx";
const RecommendedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Yükleniyor!</div>;
  }

  return (
    <div className="recommended_products">
      <div className="recommended_products_title">
        <h1>Sana Özel Ürünler</h1>
      </div>

      <div>
        <div className="recommended_products_container">
          {products.map((item) => (
            <div className="recommended_products_card">
              <div className="recommended_products_card_body">
                <Link to={`/product/${item.id}`}>
                  <div className="favorite_btn">
                    <i className="wd-fvrt-btn i-heart"></i>
                  </div>
                  <div className="recommended_products_img">
                    <img src={item.images[0]} />
                  </div>

                  <div className="recommended_products_text">
                    <div className="recommended_products_name">
                      <span>{item.title}</span>
                    </div>

                    <div className="star_rating">
                      <StarRating />
                    </div>

                    <div className="recommended_products_price">
                      <span>{item.price} TL</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;

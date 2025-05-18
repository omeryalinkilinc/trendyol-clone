import React from "react";
import "../assets/styles/ShoppingCentre.scss";
import { useEffect, useState } from "react";

import { sellers } from "../components/sellerData";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import StarRating from "../components/StarRating.jsx";

const ShoppingCentre = () => {
  const { id } = useParams();
  const [sellerProducts, setSellerProducts] = useState([]);
  const [sellerInfo, setSellerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((products) => {
        // Belirli bir satıcının ürünlerini filtrele
        const filteredProducts = products.filter(
          (product) => product.seller.name === id
        );

        setSellerProducts(filteredProducts);

        // Eğer satıcıya ait ürün varsa, ilk ürünün seller bilgilerini kullan
        if (filteredProducts.length > 0) {
          setSellerInfo(filteredProducts[0].seller);
        } else {
          setSellerInfo(null);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log("Ürünler getirilemedi:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!sellerInfo) {
    return <div>Bu satıcıya ait ürün bulunamadı.</div>;
  }

  return (
    <div className="shopping_centre">
      <div className="seller_store_header">
        <div className="seller_header_container">
          <div className="header_seller_info">
            <div className="header_seller_info_body">
              <h2>{sellerInfo.name}</h2>
              <span className="store_rating">
                {sellerInfo.rating || "Belirtilmemiş"}
              </span>
            </div>
            <div className="followV2-wrapper">
              <div className="follow_up_btn_with_coupen_container">
                <img src="https://cdn.dsmcdn.com/seller-store/webgw/resources/follow-to-win-ico2.svg" />
                <div className="follow_up_btn_with_coupen">
                  <span>Takip Et Kazan</span>
                </div>
              </div>
              <span className="followers">
                {sellerInfo.followers || 0} Takipçi
              </span>
            </div>
          </div>
        </div>
        <div className="tab_container">
          <div className="tabs">
            <ul className="tabs_list">
              <li className="tab">
                <div className="discover">
                  <img src="https://cdn.dsmcdn.com/seller-store/webgw/resources/menu-hamburger-ico.svg" />
                  <a href="#" className="tab_link">
                    Keşfet
                  </a>
                </div>
              </li>
              <li className="tab">
                <a href="#" className="tab_link">
                  Ana Sayfa
                </a>
              </li>
              <li className="tab">
                <a href="#" className="tab_link">
                  Tüm Ürünler
                </a>
              </li>
            </ul>
            <div className="tab_search">
              <div className="tab_search_container">
                <input type="search" placeholder="Mağazada Ara" />
                <img src="https://cdn.dsmcdn.com/seller-store/webgw/resources/search-orange-ico.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="seller_products_container">
          <h3>{sellerInfo.name} Mağazasındaki Ürünler</h3>
          <div className="seller_products">
            {sellerProducts.length === 0 ? (
              <p>Bu satıcıya ait ürün bulunamadı.</p>
            ) : (
              sellerProducts.map((product) => (
                <Link to={`/product/${product.id}`}>
                  <div key={product.id} className="seller_product_card">
                    <div className="favorite_btn">
                      <i className="wd-fvrt-btn i-heart"></i>
                    </div>
                    <div className="seller_product_img">
                      <img
                        src={
                          product.image || (product.images && product.images[0])
                        }
                        alt={product.title}
                      />
                    </div>
                    <div className="text_body">
                      <div className="seller_product_title">
                        <h4>{product.title}</h4>
                      </div>
                      <StarRating />
                      <div className="seller_product_price">
                        <div className="price_box">
                          <p>{product.price} TL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCentre;

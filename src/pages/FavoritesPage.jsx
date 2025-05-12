import React from "react";
import "../assets/styles/FavoritesPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import input_seacrh_sticky_icon from "../assets/images/search_icon.png";
import special_filte_fav_icon from "../assets/images/special_fav.png";
import special_filter_coupon from "../assets/images/special_filter_coupon.png";
import special_filter_price_down from "../assets/images/special_filter_price_down.png";
import special_filter_advantage from "../assets/images/special_filter_advantage.png";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
const FavoritesPage = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const context = useFavorites();
  console.log("Context verileri:", context);

  if (favorites.length === 0) {
    return <div>Henüz favorilere ürün eklemediniz</div>;
  }

  return (
    <div className="FavoristPage">
      <div className="favorites">
        <div className="favorites_header">
          <div className="favorites_header_item">
            <a className="favorites_item_btn" href="/favorilerim">
              <i className="wd-fvrt-btn i-heart-orange"></i>
              Favorilerim
            </a>
            <a className="collection_item_btn" href="#">
              <FontAwesomeIcon className="collection_icon" icon={faBookmark} />
              Koleksiyonlarım
            </a>
          </div>
          <div className="search_box_container">
            <div className="search_box">
              <img className="search_icon" src={input_seacrh_sticky_icon} />
              <input placeholder="Favorilerimde Ara" />
            </div>
          </div>
        </div>
      </div>
      <div className="line" />

      <div className="layout">
        <section id="user_special_secion">
          <div className="special_filter_container">
            <div className="filter_all_fav special-filters-wrapper">
              <div>
                <img src={special_filte_fav_icon} />
              </div>
              <div className="text">Tümü</div>
            </div>
            <div className="filter_cupon special-filters-wrapper">
              <div>
                <img src={special_filter_coupon} />
              </div>
              <div>Kuponlu Ürünler</div>
            </div>
            <div className="filter_discount special-filters-wrapper">
              <div>
                <img src={special_filter_price_down} />
              </div>
              <div>Fiyatı Düşenler</div>
            </div>
            <div className="filter_price_advantage special-filters-wrapper">
              <div>
                <img src={special_filter_advantage} />
              </div>
              <div>Avantajlı Ürünler</div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="favorites_list">
            {favorites.map((item) => (
              <Link to={`/product/${item.id}`}>
                <div className="product_card" key={item.id}>
                  <div
                    className="favorite_btn"
                    onClick={() => toggleFavorite(item)}
                  >
                    <i
                      className={
                        isFavorite(item.id)
                          ? "wd-fvrt-btn i-heart-orange"
                          : "wd-fvrt-btn i-heart"
                      }
                    ></i>
                  </div>
                  <img
                    className="item_image"
                    src={item.images[0]}
                    width={200}
                    alt={item.title}
                  />
                  <div className="product_card_description">
                    <div className="title_container">{item.title}</div>
                    <div className="price_container">{item.price} TL</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FavoritesPage;

import React from "react";
import "../assets/styles/Navbar.scss";
import header_icon from "../assets/images/ty-icon.png";
import search from "../assets/images/search_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faUser as faUserRegular,
  faHeart as faHeartRegular,
} from "@fortawesome/free-regular-svg-icons";
import CategoryDropdown from "../components/CategoryDropdown.jsx";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="Navbar">
      <div className="header_top">
        <ul className="header_right">
          <li>
            <a>İndirim Kuponlarım</a>
          </li>
          <li>
            <a>Trendyol'da Satış Yap</a>
          </li>
          <li>
            <a>Hakkımızda</a>
          </li>
          <li>
            <a>Yardım&Destek</a>
          </li>
        </ul>
      </div>

      <div className="sticky_header">
        <div>
          <a href="/">
            <img className="logo" src={header_icon}></img>
          </a>
        </div>

        <div className="input_column">
          <input
            id="search_input"
            type="text"
            placeholder="Aradığınız ürün,kategori veya markayı yazınız"
          ></input>
          <img className="input_seacrh_sticky_icon" src={search}></img>
        </div>

        <div className="account_navigation">
          <ul className="account_navigation_list">
            <li className="account_dropdown_wrapper">
              <a className="account_btn">
                <i className="i-user initial-icon"></i>
                <i className="i-user-orange hover-icon"></i>
                <span className="account_btn_text">Hesabım</span>
              </a>
              <div className="account_dropdown_menu">
                <strong>Ömer Yalınkılınç</strong>
                <ul>
                  <li>
                    <a>
                      <i id="account_icons" className="i-cargo-flat"></i>Tüm
                      Siparişlerim
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-review-flat"></i>{" "}
                      Değerlendirmelerim
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-message-flat"></i>{" "}
                      Satıcı Mesajlarım
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-coin-with-hands"></i>{" "}
                      Krediler
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-gift"></i> Şanslı
                      Çekiliş
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-tag-flat"></i> İndirim
                      Kuponlarım
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-user-flat"></i>{" "}
                      Kullanıcı Bilgilerim
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-diamond-flat"></i>{" "}
                      Trendoyl Elite
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-assistant-flat"></i>{" "}
                      Trendoyl Asistan
                    </a>
                  </li>
                  <li>
                    <a>
                      <i id="account_icons" className="i-exit-flat"></i> Çıkış
                      Yap
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="/favorilerim" className="heart_icon">
                <i className="i-heart initial-icon"></i>
                <i className="i-heart-orange hover-icon"></i>
                <p>Favorilerim</p>
              </a>
            </li>
            <li>
              <a href="/sepet">
                <div className="shopping_icon">
                  <i className="i-bagg initial-icon"></i>
                  <i className="i-bagg-orange hover-icon"></i>
                  <p>Sepetim</p>
                  {totalQuantity > 0 && (
                    <div className="cart-count-badge">{totalQuantity}</div>
                  )}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navigation">
        <div className="category_btn">
          <FontAwesomeIcon icon={faBars} />
          <p>Tüm Kategoriler </p>
          <div>
            <span className="new_badge">Yeni</span>
          </div>
          <div className="category_dropdown">
            <CategoryDropdown />
          </div>
        </div>

        <ul className="navigation_list">
          <li>
            <a>Kadın</a>
          </li>
          <li>
            <a>Erkek</a>
          </li>
          <li>
            <a>Anne & Çocuk</a>
          </li>
          <li>
            <a>Ev & Yaşam</a>
          </li>
          <li>
            <a>Süpermarket</a>
          </li>
          <li>
            <a>Kozmetik</a>
          </li>
          <li>
            <a>Ayakkabı & Çanta</a>
          </li>
          <li>
            <a>Elektronik</a>
          </li>
          <li>
            <a>
              Çok Satanlar <span className="new_badge">Yeni</span>
            </a>
          </li>
          <li>
            <a>
              Flaş Ürünler <span className="new_badge">Yeni</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Navbar;

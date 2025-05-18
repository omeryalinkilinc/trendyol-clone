import React from "react";
import "../assets/styles/CartSidebar.scss";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const CartSidebar = () => {
  const { cartItems, totalPrice } = useCart();
  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="cart_sidebar">
      <div className="sidebar_container">
        <a className="go_to_cart_btn" href="/sepet">
          <span className="cart_text">Sepete Git</span>
          <span className="product_quantity">({cartItems.length} ürün)</span>
        </a>
        <div className="sub_total_container">
          <span className="sub_total">Ara Toplam</span>
          <div className="sub_total_price_container">
            <span className="sub_total_price">{totalPrice.toFixed(2)}TL</span>
          </div>
        </div>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className="sidebar_list">
              <a className="" href="#">
                <Link to={`/product/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title} />
                </Link>
                <div className="sidebar_product_footer">
                  <p>{item.price} TL</p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default CartSidebar;

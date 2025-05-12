import React from "react";
import { useCart } from "../context/CartContext";
import "../assets/styles/CartPage.scss";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuanity, decreaseQuantity } =
    useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className="CartPage">
      <div className="cartpage_container">
        <div className="cartpage_container_content">
          <div className="cartpage_header">
            <div className="title">Sepetim</div>
          </div>

          <div className="">
            {cartItems.length === 0 ? (
              <p>Sepet boş</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <li key={item.id}>
                      <div className="merchant_group_container">
                        <div className="merchant_group_header">
                          <span>
                            {" "}
                            <svg width={10} height={8}>
                              <path d="M9.5899229,0.750904919 L9.05581016,0.197010226 C8.92929033,0.0656835157 8.77535917,1.47881707e-13 8.59444438,1.47881707e-13 C8.41337405,1.47881707e-13 8.25948178,0.0656835157 8.13292307,0.197010226 L3.64220797,4.8610237 L1.64705174,2.78491655 C1.52033751,2.65354952 1.36656187,2.58794665 1.18564708,2.58794665 C1.00461564,2.58794665 0.85080112,2.65354952 0.724125768,2.78491655 L0.190013028,3.33885157 C0.0633376759,3.47017828 -5.00932629e-13,3.62977027 -5.00932629e-13,3.81746626 C-5.00932629e-13,4.00500096 0.0633376759,4.16471392 0.190013028,4.29604063 L2.25776069,6.44037154 L3.18076443,7.39743963 C3.30736202,7.52888731 3.46121541,7.59449018 3.64220797,7.59449018 C3.82312277,7.59449018 3.97697617,7.5286857 4.10365152,7.39743963 L5.02661638,6.44037154 L9.5899229,1.70805366 C9.71648161,1.57668663 9.77993593,1.41717528 9.77993593,1.22943897 C9.78001369,1.04186394 9.71648161,0.882271951 9.5899229,0.750904919"></path>{" "}
                            </svg>{" "}
                            Satıcı:{" "}
                          </span>
                        </div>
                        <div className="shipping_information">
                          <i className="i-empty-box"></i>
                          <span>Kargo Bedava!</span>
                        </div>

                        <div className="basket_product_information_container">
                          <div className="basket_product_information_contents">
                            <div className="basket_product_img">
                              <img
                                src={item.thumbnail || item.image}
                                width="50"
                                alt={item.title}
                              />
                            </div>

                            <div className="basket_product_name">
                              <span>{item.title}</span>
                            </div>

                            <div className="basket_product_quantity_container">
                              <button
                                className="clear_btn"
                                onClick={() => removeFromCart(item.id)}
                              >
                                {" "}
                                <i className="i-trash"></i> Sil
                              </button>
                              <div className="basket_product_quantity">
                                <button
                                  className="numeric_counter_plus"
                                  onClick={() => decreaseQuantity(item.id)}
                                  disabled={item.quantity === 1}
                                >
                                  -
                                </button>
                                <span className="digital_counter_info">
                                  {item.quantity}
                                </span>
                                <button
                                  className="numeric_counter_minus"
                                  onClick={() => increaseQuanity(item.id)}
                                  disabled={item.quantity === 20}
                                >
                                  +
                                </button>
                              </div>

                              <div className="basket_price_container">
                                <div className="basket_product_price">
                                  <span>
                                    {(item.quantity * item.price).toFixed(2)}TL
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>

        <section className="sticky">
          <div className="sticky_container">
            <div className="summary_information_container">
              <div className="cargo_bundle">
                <div>
                  <div className="cargo_bundle_description">
                    <img
                      className="cargo_bundle_img"
                      src="https://cdn.dsmcdn.com/web/production/ty-pass-mweb-basket.png"
                    />
                    <span className="cargo_bundle_price">55 TL!</span>
                    <i className="i-info1 cargo-bundle-info-icon"></i>
                  </div>
                  <p className="cargo_bundle_text">
                    Sonraki alışverişlerin için 10 haklı paketi satın al, ayrıca
                    kargo ücreti ödeme!
                  </p>
                </div>
                <button className="cargo_bundle_action_btn">Sepete Ekle</button>
              </div>

              <div className="summary_box">
                <h1 className="summary_box_title">Sipariş Özeti</h1>
                {cartItems.map((item) => (
                  <div>
                    <ul className="summary_box_info">
                      <li>
                        <span>Ürünün Toplamı</span>
                        <strong>
                          {(item.quantity * item.price).toFixed(2)}TL
                        </strong>
                      </li>
                    </ul>
                    <div className="summary_box_total_price">
                      <span className="total_text">Toplam</span>
                      <strong className="total_numeric">
                        {totalPrice.toFixed(2)}TL
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
